export const StyledBtn = ({ children,primary,secondary, styles }) => {
  return (
    <button className={`${primary&&"bg-[#E94057] hover:bg-[#ee7081] text-white font-bold"} ${secondary&&"bg-white text-[#E94057] hover:bg-[#ee7081] hover:text-white font-bold border border-[#E8E6EA]"} p-2   rounded-2xl transition duration-300 ${styles}`}>
      {children}
    </button>
  );
};
