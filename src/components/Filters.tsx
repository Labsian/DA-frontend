import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import { StyledBtn } from "./StyledBtn";
import LocationPicker from "./LocationPicker";
import RangePicker from "./RangePicker";

export const Filters = () => {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <div className="flex justify-between items-center">
        <Box></Box>
        <h2>Filters</h2>
        <h3 className="text-(--clr-primary-1)">Clear</h3>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Interested in</h3>
        <div className="rounded-[15px] border border-(--clr-gray) overflow-hidden flex">
          <button className="bg-white flex-1 hover:bg-(--clr-primary-1) hover:text-white p-6 text-[1.5rem] font-bold transition-all duration-300">
            Girls
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button className="bg-white flex-1 hover:bg-(--clr-primary-1) hover:text-white p-6 text-[1.5rem] font-bold transition-all duration-300">
            Boys
          </button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <button className="bg-white flex-1 hover:bg-(--clr-primary-1) hover:text-white p-6 text-[1.5rem] font-bold transition-all duration-300">
            Both
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Location</h3>
        <LocationPicker />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Distance</h3>
        <RangePicker min={1} max={40} unit={"km"}>
          Distance
        </RangePicker>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Age</h3>
        <RangePicker min={18} max={60}>
          Age
        </RangePicker>
      </div>
        <StyledBtn styles={"py-5 rounded-[15px] mt-4"} primary>Continue</StyledBtn>
    </div>
  );
};
