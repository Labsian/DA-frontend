import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledLink } from "../../components/StyledLink";

export const Notifications = () => {
    const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full items-center">
        <div></div>
        <StyledLink onClick={() => navigate("/swipe")}>Skip</StyledLink>
      </div>
      <img src="/assets/chat.svg" alt="j" />
      <div  className="flex flex-col items-center">

        <h1>Enable notification’s</h1>
        <p>Get push-notification when you get the match or receive a message.</p>
      </div>

      <div className="flex flex-col w-full gap-2"></div>

      <StyledBtn primary={true} styles={"w-full"}>
       I want to be notified
      </StyledBtn>
    </div>
  );
};
