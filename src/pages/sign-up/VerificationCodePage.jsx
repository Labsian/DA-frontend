import { useEffect, useState } from "react";
import { StyledBtn } from "../../components/StyledBtn";
import { ArrowLeftIcon } from "../../components/UseIcons";
import CountdownTimer from "../../components/CountDown";
import VerificationCodeInput from "../../components/VerificationCodeInput";
import Dialer from "../../components/Dialer";
import { StyledLink } from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";

export function VerificationCodePage() {
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent]= useState(true)
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate()

  useEffect(()=>{ setCodeSent(true) },[])

  return (
    <div className="VerificationApp flex flex-col items-center my-5">
      <StyledBtn secondary={true} styles={"self-start"}><ArrowLeftIcon/></StyledBtn>

      <div className="flex-1 flex flex-col justify-center gap-3">
        <div className="flex flex-col gap-3 items-center">
          <CountdownTimer setCodeSent={setCodeSent} codeSent={codeSent}/>
          <p>Type the verification code we’ve sent you</p>
        </div>

        <VerificationCodeInput
          length={4}
          loading={loading}
          code={code}
          setCode={setCode}
          onComplete={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 10000);
            navigate("/profile-details")
          }}
        />

        <Dialer code={code} setCode={setCode} />
      </div>

      <StyledLink disabled={codeSent} onClick={() => setCodeSent(true)}>
        Send again
      </StyledLink>
    </div>
  );
}
