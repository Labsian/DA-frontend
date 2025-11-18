import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const Swipe = () => {
  return (
    <div className="h-screen flex flex-col">

      <div className="flex-1"><Outlet /></div>
      <BottomNav/>
    </div>
  );
};
