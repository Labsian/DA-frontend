import { Scrollbar } from "../../components/scrollbar";
import UseChatStore, { Chat } from "../../store/chatStore";
import { MsgPreview } from "./MsgPreview";

export const MessagesList = ({
  onSelectChat,
}: {
  onSelectChat: (chat: Chat) => void;
}) => {
  const chats = UseChatStore((s) => s.chats);

console.log("chat store state", UseChatStore.getState());

  return (
    <Scrollbar sx={{ height: "calc(100vh - 360px)" }}>
      <div className="mt-4 w-full">
        {chats.map((chat) => (
          <MsgPreview
            key={chat.id}
            chat={chat}
            onSelect={() => onSelectChat(chat)}
          />
        ))}
      </div>
    </Scrollbar>
  );
};
