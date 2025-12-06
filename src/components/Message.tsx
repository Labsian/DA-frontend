import React from "react";
import { ReadIcon } from "./UseIcons";

export const Message = ({ user }: { user: "user" | "contact" }) => {
  return (
    <div className={`flex flex-col gap-2 `}>
      <div
        className={`${
          user === "contact"
            ? "bg-[rgba(233,64,87,0.07)] rounded-br-2xl self-start"
            : "bg-[#F3F3F3] rounded-bl-2xl self-end"
        } text-[14px] p-3.5 rounded-br-2xl rounded-t-2xl max-w-[70%] font-normal`}
      >
        Hi Jake, how are you?    Hi Jake, how are you?    Hi Jake, how are you?    Hi Jake, how are you?    Hi Jake, how are you?    Hi Jake, how are you?    Hi Jake, how are you? 
      </div>
      <p
        className={`text-[12px] opacity-40 flex gap-1.5 items-center ${
          user === "contact" ? " self-start" : " self-end"
        }`}
      >
        2:55 PM {user === "user" && <ReadIcon />}
      </p>
    </div>
  );
};
