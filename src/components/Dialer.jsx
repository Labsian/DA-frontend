const Dialer = ({ code, setCode }) => {
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

  const handleDial = (char) => {
    const firstEmptyIndex = code.findIndex((c) => c === "");
    if (firstEmptyIndex === -1) return; // all slots filled
    const newCode = [...code];
    newCode[firstEmptyIndex] = char;
    setCode(newCode);
  };

  return (
    <div className="buttons-container grid grid-cols-3 gap-10">
      {buttons.map((char) => (
        <button key={char} onClick={() => handleDial(char)}>
          {char}
        </button>
      ))}
    </div>
  );
};

export default Dialer;
