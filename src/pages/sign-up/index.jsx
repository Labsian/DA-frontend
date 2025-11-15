import { StyledBtn } from "../../components/StyledBtn";
import { FacebookIcon } from "../../components/UseIcons";

export const SignUp = () => {
  return (
    <main className="flex flex-col items-center gap-6 py-12 ">
      <img src="assets/trademark.svg" alt="" />
      <div className="w-full flex flex-col items-center gap-6 py-10 ">
        <h3>Sign up to continue</h3>
        <StyledBtn primary={true} styles={"w-[100%]"}>
          Continue with email
        </StyledBtn>
        <StyledBtn secondary={true} styles={"w-[100%]"}>
          Use phone number{" "}
        </StyledBtn>
      </div>
      <div className="flex w-full justify-center items-center gap-2.5">
        <div className="flex-1 h-px bg-black opacity-40" />
        <span>or sign up with</span>
        <div className="flex-1 h-px bg-black opacity-40" />
      </div>
      <div className="flex">
        <StyledBtn secondary={true} styles={"w-fit group"}>
          <FacebookIcon className="group-hover:fill-white" />
        </StyledBtn>
      </div>
    </main>
  );
};
