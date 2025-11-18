import React, { useState, useRef } from "react";
import Dialer from "./Dialer";

const VerificationCodeInput = ({ length, loading, onComplete }) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;

    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);

    if (slot !== length - 1) {
      inputs.current[slot + 1]?.focus();
    }

    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e, slot) => {
    if (e.key === "Backspace" && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2">
        {code.map((num, idx) => (
          <input
            key={idx}
            type="text"
            placeholder="0"
            inputMode="numeric"
            maxLength={1}
            value={num}
            readOnly={loading}
            autoFocus={!code[0] && idx === 0}
            onChange={(e) => processInput(e, idx)}
            onKeyUp={(e) => onKeyUp(e, idx)}
            ref={(ref) => (inputs.current[idx] = ref)}
            className={`
              w-12 h-12 text-center text-xl rounded-[15px] border transition-all duration-200 text-[34px] outline-0
              ${num ? "border-[#E94057] bg-[#E94057] text-white" : "border-gray-300 bg-white text-[#E8E6EA]"}
              focus:border-[#E94057] focus:border-2  focus:text-[#E94057] focus:opacity-40
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default VerificationCodeInput;
