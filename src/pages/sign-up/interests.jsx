import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../components/StyledBtn";
import { StyledLink } from "../../components/StyledLink";
import {
  ArrowLeftIcon,
  ArtIcon,
  CameraIcon,
  CookingIcon,
  DrinkIcon,
  ExtremeIcon,
  GameIcon,
  MusicIcon,
  OutdoorIcon,
  ShoppingIcon,
  SportIcon,
  SwimmingIcon,
  TennisIcon,
  VoiceIcon,
  YogaIcon,
} from "../../components/UseIcons";

export const Interests = () => {
  const navigate = useNavigate();
  const [chosenInterests, setChosenInterests] = useState([]);
  const interests = [
    { name: "Photography", icon: <CameraIcon /> },
    { name: "Shopping", icon: <ShoppingIcon /> },
    { name: "Karaoke", icon: <VoiceIcon /> },
    { name: "Yoga", icon: <YogaIcon /> },
    { name: "Cooking", icon: <CookingIcon /> },
    { name: "Tennis", icon: <TennisIcon /> },
    { name: "Run", icon: <SportIcon /> },
    { name: "Swimming", icon: <SwimmingIcon /> },
    { name: "Art", icon: <ArtIcon /> },
    { name: "Traveling", icon: <OutdoorIcon /> },
    { name: "Extreme", icon: <ExtremeIcon /> },
    { name: "Music", icon: <MusicIcon /> },
    { name: "Drink", icon: <DrinkIcon /> },
    { name: "Video games", icon: <GameIcon /> },
  ];
  useEffect(() => {
    console.log(chosenInterests);
  });
  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className="flex justify-between w-full items-center">
        <StyledBtn secondary={true}>
          <ArrowLeftIcon />
        </StyledBtn>
        <StyledLink>Skip</StyledLink>
      </div>
      <div>
        <h1 className="self-start">Your interests</h1>
        <p>
          Select a few of your interests and let everyone know what you’re
          passionate about.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        {interests.map((interest, index) => (
          <StyledBtn
            onClick={() =>
              setChosenInterests((prev) =>
                prev.includes(interest.name)
                  ? prev.filter((item) => item !== interest.name)
                  : [...prev, interest.name]
              )
            }
            primary={chosenInterests.includes(interest.name)}
            mixed={!chosenInterests.includes(interest.name)}
            iconRed={!chosenInterests.includes(interest.name)}
            key={index}
            styles={"flex gap-2 items-center w-full text-black"}
          >
            {interest.icon}
            {interest.name}
          </StyledBtn>
        ))}
      </div>

      <StyledBtn
        onClick={() => navigate("/sign-up/friends")}
        primary={true}
        styles={"w-full"}
      >
        Continue
      </StyledBtn>
    </div>
  );
};
