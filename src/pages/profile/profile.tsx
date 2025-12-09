import React from "react";
import {
  DislikeIcon,
  LikeIcon,
  LocationIcon,
  SendIcon,
  SettingIcon,
  StarIcon,
} from "../../components/UseIcons";
import { StyledBtn } from "../../components/StyledBtn";
import { MyDrawer } from "../../components/Drawer";
import { Filters } from "../../components/Filters";
import { StyledLink } from "../../components/StyledLink";

export const Profile = () => {
  return (
    <main className="flex flex-col gap-10">
      <div className="relative">
        <img className="w-full" src="/assets/girl4.svg" alt="" />
        <div className="bg-white w-full rounded-t-[60px] absolute  bottom-0 h-15">
          <div className="flex justify-around items-center absolute w-full bottom-8 z-20">
            <button className="bg-white rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
              <DislikeIcon />
            </button>
            <StyledBtn
              primary={true}
              styles=" rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4"
            >
              <LikeIcon size="42" />
            </StyledBtn>

            <button className="bg-white rounded-full shadow-[0px_30px_50px_rgba(0,0,0,0.3)] p-4">
              <StarIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h2>Jessica Parker, 23</h2>
          <p>Proffesional model</p>
        </div>
        <StyledBtn secondary={true}>
          <SendIcon />
        </StyledBtn>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h3>Location</h3>
          <p>Proffesional model</p>
        </div>
        <StyledBtn
          type="button"
          bgPink={true}
          styles={"bg-[#E9405780] flex items-center gap-1"}
        >
          {" "}
          <LocationIcon />1 km
        </StyledBtn>
      </div>
      <div className="px-10 flex justify-between">
        <div>
          <h3>About</h3>
          <p>
            My name is Jessica Parker and I enjoy meeting new people and finding
            ways to help them have an uplifting experience. I enjoy reading..
          </p>
          <div className="mt-1">
            <StyledLink>Read More</StyledLink>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div className="flex flex-col gap-1.5">
          <h3>Interests</h3>

          <div className="flex gap-1.5">
            <StyledBtn
              // primary={chosenInterests.includes(interest.name)}
              // mixed={!chosenInterests.includes(interest.name)}
              // iconRed={!chosenInterests.includes(interest.name)}
              secondary={true}
              // key={index}
              styles={"border-primary"}
            >
              books
              {/* {interest.icon}
            {interest.name} */}
            </StyledBtn>
          </div>
        </div>
      </div>
      <div className="px-10 flex justify-between">
        <div className="flex justify-between w-full items-center">
          <h3>Interests</h3>
          <StyledLink>See More</StyledLink>
        </div>
        <div>
          <div className="flex space-between"></div>
        </div>
      </div>
    </main>
  );
};
