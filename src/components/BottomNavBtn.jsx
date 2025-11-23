import { useLocation, useNavigate } from "react-router-dom";

export const BottomNavBtn = ({ icon, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = pathname===path;

  return (
    <button
      onClick={() => navigate(path)}
      className={`
        w-12 h-[37px] flex items-center justify-center cursor-pointer
        border-t-2
        ${isActive ? "text-[#E94057] border-t-[#E94057]" : "text-[#ADAFBB] border-t-transparent"}
      `}
    >
      {icon}
    </button>
  );
};
