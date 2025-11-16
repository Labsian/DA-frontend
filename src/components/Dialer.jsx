import { DeleteIcon } from "./UseIcons";

const Dialer = ({ code, setCode }) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "delete"];

  const handleDial = (char) => {
    if (char === "delete") {
      const lastFilledIndex = code.lastIndexOf(
        code.slice().reverse().find((c) => c !== "")
      );

      if (lastFilledIndex === -1) return;

      const newCode = [...code];
      newCode[lastFilledIndex] = "";
      setCode(newCode);
      return;
    }

    const firstEmptyIndex = code.findIndex((c) => c === "");
    if (firstEmptyIndex === -1) return;

    const newCode = [...code];
    newCode[firstEmptyIndex] = char;
    setCode(newCode);
  };

  return (
    <div className="buttons-container grid grid-cols-3 gap-10">
      {buttons.map((char, idx) => (
        <button key={idx} onClick={() => handleDial(char)}>
          {char === "delete" ? <DeleteIcon /> : char}
        </button>
      ))}
    </div>
  );
};

export default Dialer;
