import { useState } from "react";
import { Scrollbar } from "./../../components/scrollbar";
import { MsgPreview } from "./MsgPreview";

export const MessagesList = ({onSelectChat}:{onSelectChat:()=>void}) => {
  const chats = [
    {
      name: "Emily",
      story: false,
      lastMessage: "bye",
      url: "/assets/girl1.svg",
    },
    { name: "Anna", story: true, lastMessage: "bye", url: "/assets/girl2.svg" },
    {
      name: "Sophie",
      story: true,
      lastMessage: "bye",
      url: "/assets/girl3.svg",
    },
    { name: "Emily", story: true, lastMessage: "bye", url: "/assets/girl1.svg" },
    { name: "Anna", story: true, lastMessage: "bye", url: "/assets/girl2.svg" },
    {
      name: "Sophie",
      story: true,
      lastMessage: "bye",
      url: "/assets/girl3.svg",
    },
    { name: "Emily", story: true, lastMessage: "bye", url: "/assets/girl1.svg" },
    { name: "Anna", story: true, lastMessage: "bye", url: "/assets/girl2.svg" },
    {
      name: "Sophie",
      story: true,
      lastMessage: "bye",
      url: "/assets/girl3.svg",
    },
  ];
  return (
    <Scrollbar sx={{ height: "calc(100vh - 360px)" }}>
      <div className="mt-4 w-full">
        {chats.map((chat, index) => (
          <MsgPreview chat={chat} onSelect={()=>onSelectChat(chat)}/>
        ))}
      </div>
    </Scrollbar>
  );
};
