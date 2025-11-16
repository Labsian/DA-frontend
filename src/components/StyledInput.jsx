import React from "react";

export const StyledInput = ({ label, placeholder, id, type, ...props }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        className="peer h-10 p-2 w-full border border-[#E8E6EA] rounded-2xl text-gray-900 placeholder-transparent focus:outline-none focus:border-[#E94057]"
        placeholder={placeholder}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-2 -top-4 text-gray-600 text-sm transition-all 
                   peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                   peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#E94057] peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};
