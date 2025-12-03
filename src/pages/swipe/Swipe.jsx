import { motion, useAnimation } from "framer-motion";

import { useState } from "react";
import { SwipeCard } from "../../components/SwipeCard";
import {
  ArrowLeftIcon,
  DislikeIcon,
  LikeIcon,
  SettingIcon,
  StarIcon,
} from "../../components/UseIcons";
import { StyledBtn } from "./../../components/StyledBtn";
import { MyDrawer } from "../../components/Drawer";
import { Filters } from "../../components/Filters";
import Box from "@mui/material/Box";

export function SwipePage() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const [profiles, setProfiles] = useState([
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
    { name: "Emily", url: "/assets/girl1.svg" },
    { name: "Anna", url: "/assets/girl2.svg" },
    { name: "Sophie", url: "/assets/girl3.svg" },
  ]);

  const handleSwipe = (profile, direction) => {
    // animate the floating buttons
    if (direction === "right") {
      controlsRight.start({
        scale: [0.8, 1.3, 1],
        x: [0, -150, 0],
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controlsLeft.start({
        scale: [0.8, 1.3, 1],
        x: [0, 150, 0],
        transition: { duration: 1, ease: "easeInOut" },
      });
    }

    // remove card after swipe
    setProfiles((prev) => prev.filter((p) => p !== profile));
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <main className="flex flex-col justify-between h-full max-w-screen overflow-hidden pb-2.5">
      <div className="flex flex-col h-[420px] gap-6">
        <div className=" flex justify-between items-center">
          <StyledBtn secondary={true}>
            <ArrowLeftIcon />
          </StyledBtn>
          <h2>Discover</h2>
          <StyledBtn secondary={true} onClick={toggleDrawer}>
            <SettingIcon />
          </StyledBtn>
        </div>
        <div className="relative flex justify-center items-center flex-1 max-h-[70vh]">
          <img
            src="assets/4.svg"
            className="-z-30 -top-2.5 h-full w-[70%] md:w-[20%] rounded-2xl rotate-6"
            alt=""
          />
          <motion.button
            animate={controlsLeft}
            className="absolute z-50 bg-white -left-20 rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4"
          >
            <DislikeIcon />
          </motion.button>

          <motion.button
            animate={controlsRight}
            className="text-[#E94057] absolute z-50 bg-white -right-20 rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4"
          >
            <LikeIcon size="30" />
          </motion.button>

          {profiles.map((p, i) => (
            <SwipeCard
              key={p.name}
              profile={p}
              isTop={i === profiles.length - 1}
              onSwipe={handleSwipe}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button className="rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
          <DislikeIcon />
        </button>
        <StyledBtn
          primary={true}
          styles=" rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4"
        >
          <LikeIcon size="42" />
        </StyledBtn>

        <MyDrawer open={open} onClose={toggleDrawer}>
          <Filters/>
        </MyDrawer>

        <button className="rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
          <StarIcon />
        </button>
      </div>
    </main>
  );
}
