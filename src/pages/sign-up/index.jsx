import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../components/StyledBtn";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../../components/UseIcons";
import { StyledLink } from './../../components/StyledLink';

export const SignUpPage = () => {
    const navigate= useNavigate()
  return (
    <main className="flex flex-col items-center gap-6 py-12 h-screen overflow-hidden">
      <img src="assets/trademark.svg" alt="" />
      <div className="w-full flex flex-col items-center gap-6 py-10 ">
        <h3>Sign up to continue</h3>
        <StyledBtn primary={true} styles={"w-[100%]"}>
          Continue with email
        </StyledBtn>
        <StyledBtn secondary={true} styles={"w-[100%]"} onClick={()=>navigate("phone-number")}>
          Use phone number{" "}
        </StyledBtn>
      </div>
      <div className="flex w-full justify-center items-center gap-2.5">
        <div className="flex-1 h-px bg-black opacity-40" />
        <span>or sign up with</span>
        <div className="flex-1 h-px bg-black opacity-40" />
      </div>
      <div className="flex w-full justify-center items-center gap-4">
        <StyledBtn
          secondary={true}
          styles="w-fit text-[#E94057] hover:text-white"
        >
          <FacebookIcon className="transition-colors" />
        </StyledBtn>
        <StyledBtn
          secondary={true}
          styles="w-fit text-[#E94057] hover:text-white"
        >
          <AppleIcon className="transition-colors" />
        </StyledBtn>
        <StyledBtn
          secondary={true}
          styles="w-fit text-[#E94057] hover:text-white"
        >
          <GoogleIcon className="transition-colors" />
        </StyledBtn>
      </div>
      <div className="flex w-full justify-center items-center gap-4">
        <StyledLink>Terms of use</StyledLink>
        <StyledLink>Privacy Policy</StyledLink>
      </div>
    </main>
  );
};
