import React, { useEffect } from "react";
import { StyledBtn } from "../../components/StyledBtn";
import { ArrowLeftIcon, CheckedIcon } from "../../components/UseIcons";
import { StyledLink } from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";

export const Gender = () => {
  const [chosenGender, setChosenGender] = React.useState(null);
    const navigate= useNavigate()
  useEffect(() => {
    console.log(chosenGender);
  }, [chosenGender]);
  return (
    <div className=" flex flex-col gap-10 items-center">
        <div className="flex justify-between w-full items-center">
                      <StyledBtn secondary={true}>
            <ArrowLeftIcon />
          </StyledBtn>
            <StyledLink>Skip</StyledLink>
        </div>
      <h1 className="self-start">I am a</h1>

      <div className="flex flex-col w-full gap-2">
        {/* WOMAN */}
        <StyledBtn
          styles="w-full flex justify-between items-center"
          primary={chosenGender === "woman"}
          secondary={chosenGender !== "woman"}
          onClick={() => setChosenGender("woman")}
        >
          Woman
          <CheckedIcon />
        </StyledBtn>

        {/* MAN */}
        <StyledBtn
          styles="w-full flex justify-between items-center"
          primary={chosenGender === "man"}
          secondary={chosenGender !== "man"}
          onClick={() => setChosenGender("man")}
        >
          Man
          <CheckedIcon />
        </StyledBtn>
        <StyledBtn
          styles="w-full flex justify-between items-center"
            secondary={true}
        //   onClick={() => setChosenGender("man")}
        >
          Choose another
          <CheckedIcon />
        </StyledBtn>
      </div>

      <StyledBtn onClick={()=>navigate("/sign-up/interests")} primary={true} styles={"w-full"}>Continue</StyledBtn>
    </div>
  );
};
