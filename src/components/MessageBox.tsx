import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import UseChatStore, { Chat } from "../store/chatStore";
import { Avatar } from "./Avatar";
import { Message } from "./Message";
import { Scrollbar } from "./scrollbar";
import { StyledBtn } from "./StyledBtn";
import { StyledInput } from "./StyledInput";
import { MoreIcon } from "./UseIcons";

type Props = {
  selectedChat?: Chat | null;
};

export const MessageBox = ({ selectedChat }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const addMessage = UseChatStore((state) => state.addMessage);
  const chats = UseChatStore((state) => state.chats);
  const currentChat = chats.find((chat) => chat.id === selectedChat?.id);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timeOut);
  }, [currentChat?.messages.length]);

  useEffect(() => {
  if (selectedChat?.id) {
    UseChatStore.getState().setActiveChat(selectedChat.id);
  }
}, [selectedChat]);


  const formik = useFormik({
    
    initialValues: { msg: "" },
    onSubmit: (values, helpers) => {
      if (!values.msg.trim()) return; 
      addMessage({
        id: Date.now(),
        message: values.msg,
        date: Date.now(),
        user: "user",
      });

      helpers.resetForm();
      formik.values.msg=""
      
    },
  });


  return (
    <main className="flex flex-col gap-5">
      <div className="flex gap-2 w-full p-2 ">
        <Avatar size={"66px"} path={currentChat?.url} />
        <div className="flex  justify-between  w-full items-center">
          <div className="flex flex-col justify-center pb-2">
            <h3 className="font-bold">{currentChat?.name}</h3>
            <p className="opacity-40">online</p>
          </div>
          <StyledBtn styles={"h-fit"} secondary={true}>
            <MoreIcon />
          </StyledBtn>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-2.5">
        <div className="flex-1 h-px bg-black opacity-20" />
        <span>Today</span>
        <div className="flex-1 h-px bg-black opacity-20" />
      </div>
      <Scrollbar sx={{ height: "calc(100vh - 300px)" }}>
        <div className="flex flex-col gap-4">
          {currentChat?.messages.map((msg) => (
              <Message key={msg.id} user={msg.user} message={msg.message} date={msg.date}/>
            ))}
        </div>
        <div ref={messagesEndRef} />
      </Scrollbar>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <StyledInput type="text" name="msg" label="Your message" formik={formik} />
      </form>
    </main>
  );
};
