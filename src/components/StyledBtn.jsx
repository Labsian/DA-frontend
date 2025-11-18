
export const StyledBtn = ({
  children,
  primary,
  secondary,
  styles,
  onClick,
  mixed,
  iconRed,
  bgPink,
  type
}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`${
        primary && "bg-[#E94057] hover:bg-[#ee7081]  text-white font-bold"
      } ${
        secondary &&
        "bg-white text-[#E94057] hover:bg-[#ee7081] hover:text-white font-bold border border-[#E8E6EA]"
      } 
        ${
          mixed &&
          "bg-white text-black hover:bg-[#ee7081] hover:text-white font-bold border border-[#E8E6EA]"
        } 
        ${
          bgPink &&
          "bg-[#e7bac080] text-[#ee7081] hover:bg-[#ee7081] hover:text-white font-bold"
        } 
      ${iconRed && "[&>svg]:text-[#E94057] hover:[&>svg]:text-white"}

      p-2   rounded-2xl transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
};
