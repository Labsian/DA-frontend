import { Avatar } from "../../components/Avatar";

export interface Chat {
  name: string;
  lastMessage: string;
  story: boolean;
  url: string;
}

export const MsgPreview = ({
  chat,
  onSelect,
}: {
  chat: Chat;
  onSelect: () => void;
}) => {
  return (
    <button
      className="flex gap-2 w-full p-2 cursor-pointer hover:bg-gray-100 transition-all duration-300"
      onClick={()=>onSelect(chat)}
    >
      <Avatar size={"48px"} path={chat.url} />
      <div className="flex  justify-between  w-full border-b border-b-[#E8E6EA]">
        <div className="flex flex-col justify-between pb-2">
          <p className="font-bold">{chat.name}</p>
          <p className="font-normal">{chat.lastMessage}</p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-[12px] text-[#ADAFBB] opacity-20 font-bold">
            fgvdf
          </p>
          <div className="w-4 h-4 bg-(--clr-primary-1) rounded-full text-white flex justify-center items-center pt-1">
            <h4 className="font-bold">1</h4>
          </div>
        </div>
      </div>
    </button>
  );
};
