export const StyledBtn = ({
  children,
  primary,
  secondary,
  styles,
  onClick,
  mixed,
  iconRed,
}) => {
  return (
    <button
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
      ${iconRed && "[&>svg]:text-[#E94057] hover:[&>svg]:text-white"}

      p-2   rounded-2xl transition duration-300 ${styles}`}
    >
      {children}
    </button>
  );
};
