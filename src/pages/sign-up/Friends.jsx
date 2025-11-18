import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledLink } from "../../components/StyledLink";

export const Friends = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full items-center">
        <div></div>
        <StyledLink onClick={() => navigate("/sign-up/notifications")}>Skip</StyledLink>
      </div>
      <img src="/assets/people.svg" alt="j" />
      <div className="flex flex-col items-center">
        <h1>Search friend’s</h1>
        <p>You can find friends from your contact lists to connected</p>
      </div>

      <div className="flex flex-col w-full gap-2"></div>

      <StyledBtn
        
        primary={true}
        styles={"w-full"}
      >
        Access to a contact list
      </StyledBtn>
    </div>
  );
};
