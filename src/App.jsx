import { useState } from "react";
import "./App.css";
import PhoneInput from "react-phone-number-input/input";
import PhoneAuth from "./pages/PhoneAuth";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <PhoneAuth/>
    </>
  );
}

export default App;
