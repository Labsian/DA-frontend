import { useState } from "react";
import { Avatar } from "./Avatar";


export const MessageBox = () => {

  return (
    <main className="flex flex-col gap-5">
            <div className="flex gap-2 w-full p-2 ">
              <Avatar size={"66px"} path="/assets/girl1.svg" />
              <div className="flex  justify-between  w-full border-b-1 border-b-[#E8E6EA]">
                <div className="flex flex-col justify-center pb-2">
                  <h3 className="font-bold">mitra</h3>
                  <p className="opacity-40">online</p>
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
            </div>
    </main>
  );
};
