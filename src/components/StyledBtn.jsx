export const StyledBtn = ({ children, primary, secondary, styles, onClick, disabled,link}) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
      className={`cursor-pointer ${
        primary && "bg-[#E94057] hover:bg-[#ee7081]  text-white font-bold"
      } ${
        secondary &&
        "bg-white text-[#E94057] hover:bg-[#ee7081] hover:text-white font-bold border border-[#E8E6EA]"
      } 
      ${link &&"bg-white text-[#E94057] hover:bg-[#ee7081] hover:text-white font-bold "}
      p-2   rounded-2xl transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
};
