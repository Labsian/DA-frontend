import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { StyledBtn } from "../../components/StyledBtn";
import { useNavigate } from "react-router-dom";

export default function PhoneAuth() {
  const [phone, setPhone] = useState();
      const navigate= useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log("Phone:", phone); // => +1234567890
    navigate("/sign-up/phone-verification");
  };

  return (
<main className="flex flex-col items-center gap-15 mt-18">
  <div className="flex flex-col gap-3 items-start">
    <h1>My mobile</h1>
    <p>Please enter your valid phone number. We will send you a 4-digit code to verify your account. </p>
  </div>
      <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 w-full"
    >
      <PhoneInput
        className="border border-[#E8E6EA] p-4 rounded-2xl"
        inputClassName="myPhoneInput"
        international
        defaultCountry="US"
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
      />

      <StyledBtn type="submit" primary={true} style={{ padding: "10px", borderRadius: "8px" }}>
       Continue
      </StyledBtn>
    </form>
</main>
  );
}
