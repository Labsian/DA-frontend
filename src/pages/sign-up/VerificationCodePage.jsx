import { useEffect, useState } from "react";
import CountdownTimer from "../../components/CountDown";
import { NavBackIcon } from "../../components/UseIcons";
import VerificationCodeInput from "../../components/VerificationCodeInput";
import { StyledBtn } from "../../components/StyledBtn";

export function VerificationCodePage() {
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent]= useState(true)

  useEffect(()=>{setCodeSent(true)},[])
  
  return (
    <div className="VerificationApp flex flex-col items-center my-5">
      <StyledBtn secondary={true} styles={"self-start"}><NavBackIcon/></StyledBtn>
<div className="flex-1 flex flex-col  justify-center gap-3">
      <div className="flex flex-col gap-3 items-center">
    <CountdownTimer setCodeSent={setCodeSent} codeSent={codeSent}/>
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
</div>
    <StyledBtn disabled={codeSent} onClick={()=>setCodeSent(true)}>Send again</StyledBtn>
    </div>
  );
}

