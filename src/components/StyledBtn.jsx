export const StyledBtn = ({ children,primary,secondary }) => {
  return (
    <button className={`${primary&&"bg-[#E94057] hover:bg-[#ee7081] text-white font-bold"} ${secondary&&"bg-white hover:bg-[#ee7081] text-black font-bold border border-[#E8E6EA]"} p-2   rounded-2xl transition duration-300`}>
      {children}
    </button>
  );
};
