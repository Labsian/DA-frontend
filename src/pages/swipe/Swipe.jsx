import { useState } from "react";
import { SwipeCard } from "../../components/SwipeCard";
import { ArrowIcon, ArrowLeftIcon, SettingIcon } from "../../components/UseIcons";
import { StyledBtn } from "./../../components/StyledBtn";

export function SwipePage() {
  const [profiles, setProfiles] = useState([
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
  ]);

  const handleSwipe = (profile) => {
    // remove card after swipe animation finishes
    setProfiles((prev) => prev.filter((p) => p !== profile));
  };

  return (
    <>
      <div className=" flex justify-between items-center">
        <StyledBtn secondary={true}>
          <ArrowLeftIcon />
        </StyledBtn>
        <h2>Discover</h2>
                <StyledBtn secondary={true}>
          <SettingIcon />
        </StyledBtn>
      </div>
      <div className="relative flex justify-center items-center h-screen">
        {profiles.map((p, i) => (
          <SwipeCard
            key={p.name}
            profile={p}
            isTop={i === profiles.length - 1}
            onSwipe={handleSwipe}
          />
        ))}
      </div>
    </>
  );
}
