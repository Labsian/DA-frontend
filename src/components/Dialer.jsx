const Dialer = ({ code, setCode,onComplete }) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "delete"];

  const handleDial = (char) => {
    console.log(char)
    if (char === "delete") {
      const lastFilledIndex = code.slice().reverse().findIndex((c) => c !== "");
      if (lastFilledIndex === -1) return;

      const indexToClear = code.length - 1 - lastFilledIndex;
      const newCode = [...code];
      newCode[indexToClear] = "";
      setCode(newCode);
      return;
    }

    const firstEmptyIndex = code.findIndex((c) => c === "");
    if (firstEmptyIndex === -1) return;

    const newCode = [...code];
    newCode[firstEmptyIndex] = char;
    setCode(newCode);

        if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  return (
    <div className="buttons-container grid grid-cols-3 gap-10 mt-7">
      {buttons.map((char, idx) => (
        <button className="text-[24px] px-4" key={idx} onClick={() => handleDial(char)}>
          {char === "delete" ? "⌫" : char}
        </button>
      ))}
    </div>
  );
};

export default Dialer;
