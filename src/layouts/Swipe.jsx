import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const Swipe = () => {
  return (
    <div>

      <Outlet />
      <BottomNav/>
    </div>
  );
};
