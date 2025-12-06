import { ReadIcon } from "./UseIcons";

export const Message = ({
  user,
  message,
  date,
}: {
  user: "user" | "contact";
  message: string;
  date: number;
}) => {

  function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  
  hours = hours % 12;
  hours = hours ? hours : 12; 
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  
  return `${hours}:${minutesStr} ${ampm}`;
}

  return (
    <div className={`flex flex-col gap-2 `}>
      <div
        className={`${
          user === "contact"
            ? "bg-[rgba(233,64,87,0.07)] rounded-br-2xl self-start"
            : "bg-[#F3F3F3] rounded-bl-2xl self-end"
        } text-[14px] p-3.5 rounded-br-2xl rounded-t-2xl max-w-[70%] font-normal`}
      >
        {message}
      </div>
      <p
        className={`text-[12px] opacity-40 flex gap-1.5 items-center ${
          user === "contact" ? " self-start" : " self-end"
        }`}
      >
        {formatTime(date)} {user === "user" && <ReadIcon />}
      </p>
    </div>
  );
};
