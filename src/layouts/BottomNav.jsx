import { BottomNavBtn } from "../components/BottomNavBtn";
import { CardIcon, LikeIcon, MessageIcon, PersonIcon } from "../components/UseIcons";

export const BottomNav = () => {
  const btns = [
    { icon: <CardIcon />, path: "/swipe" },
    { icon: <LikeIcon />, path: "/swipe/matches" },
    { icon: <MessageIcon />, path: "/messages" },
    { icon: <PersonIcon />, path: "/swipe" },
  ];
  return (
    <div className="bg-[#F3F3F3] flex justify-around pb-2.5">
      {btns.map((btn, index) => (
        <BottomNavBtn key={index} icon={btn.icon} path={btn.path} />
      ))}
    </div>
  );
};
