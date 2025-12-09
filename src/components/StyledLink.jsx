import React from "react";
import { Link } from "react-router-dom";

export const StyledLink = ({ children, onClick, to }) => {
  return (
    <Link to={to} onClick={onClick} className="text-[#E94057] cursor-pointer font-bold">
      {children}
    </Link>
  );
};
