import { useState } from "react";
import VerificationCodeInput from "../components/VerificationCodeInput";
import CountdownTimer from "../components/CountDown";
import Dialer from "../components/Dialer";

export function VerificationCodePage() {
  const [loading, setLoading] = useState(false);

  
  return (
    <div className="VerificationApp flex flex-col gap-10 items-center">
    <div className="flex flex-col gap-3 items-center">
    <CountdownTimer/>
    <p>Type the verification code we’ve sent you </p>
  </div>
      <VerificationCodeInput
        length={4}
        loading={loading}
        onComplete={code => {
          setLoading(true);
          setTimeout(() => setLoading(false), 10000);
        }}
      />
    <button> Send again</button>
    </div>
  );
}

