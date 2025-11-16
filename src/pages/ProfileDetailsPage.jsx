import { useEffect, useState } from "react";
import VerificationCodeInput from "../components/VerificationCodeInput";
import CountdownTimer from "../components/CountDown";
import { CameraIcon, NavBackIcon } from "../components/UseIcons";

export function ProfileDetailsPage() {

  return (
    <div className="VerificationApp flex flex-col items-center">
      <button className="self-end">Next</button>
<div className="flex-1 flex flex-col  justify-center gap-5">
      <div className="flex flex-col gap-3 items-center">
        <h1>Profile details</h1>

    <div>
        <div className="relative">
            <img src="assets/photo.svg" alt="df    " />
            <div className="absolute -bottom-2 -right-2"><CameraIcon/></div>
            </div>
            <form>
                
            </form>
    </div>
  </div>
</div>
    <button className="cursor-pointer">Send again</button>
    </div>
  );
}

