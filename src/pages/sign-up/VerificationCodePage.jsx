import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../../components/CountDown";
import Dialer from "../../components/Dialer";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledLink } from "../../components/StyledLink";
import { ArrowLeftIcon } from "../../components/UseIcons";
import VerificationCodeInput from "../../components/VerificationCodeInput";

export function VerificationCodePage() {
  const [loading, setLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(true);
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  useEffect(() => {
    setCodeSent(true);
  }, []);

  const onComplete = ()  => {
              setLoading(true);
              setTimeout(() => setLoading(false), 10000);
              navigate("/sign-up/profile-details");
            }

  return (
    <main className="h-screen overflow-hidden">
      <div className="VerificationApp flex flex-col items-center ">
        <StyledBtn secondary={true} styles={"self-start"}>
          <ArrowLeftIcon />
        </StyledBtn>

        <div className="flex-1 flex flex-col justify-center gap-3">
          <div className="flex flex-col gap-3 items-center">
            <CountdownTimer setCodeSent={setCodeSent} codeSent={codeSent} />
            <p>Type the verification code we’ve sent you</p>
          </div>

          <VerificationCodeInput
            length={4}
            loading={loading}
            code={code}
            setCode={setCode}
            onComplete={onComplete}
          />

          <Dialer code={code} setCode={setCode} onComplete={onComplete} />
        </div>

        <StyledLink disabled={codeSent} onClick={() => setCodeSent(true)}>
          Send again
        </StyledLink>
      </div>
    </main>
  );
}
