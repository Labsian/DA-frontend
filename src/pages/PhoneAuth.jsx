import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneAuth() {
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter a valid phone number");
      return;
    }
    console.log("Phone:", phone); // => +1234567890
  };

  return (
<main className="flex flex-col items-center gap-15">
  <div className="flex flex-col gap-3 items-center">
    <h1>My mobile</h1>
    <p>Please enter your valid phone number. We will send you a 4-digit code to verify your account. </p>
  </div>
      <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full"
    >
      <PhoneInput
        className="border border-[#E8E6EA] p-6 rounded-2xl"
        inputClassName="myPhoneInput"
        international
        defaultCountry="US"
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
      />

      <button type="submit" style={{ padding: "10px", borderRadius: "8px" }}>
       Continue
      </button>
    </form>
</main>
  );
}
