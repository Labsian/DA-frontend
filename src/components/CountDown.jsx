import React, { useState, useEffect } from "react";

export default function CountdownTimer({ codeSent, setCodeSent }) {
  const [timeLeft, setTimeLeft] = useState(5);


  useEffect(() => {
    if (codeSent) {
      setTimeLeft(5);
    }
  }, [codeSent]);

 
  useEffect(() => {
    if (!codeSent) return;          
    if (timeLeft === 0) {
      setCodeSent(false);
         
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]); 

useEffect(()=>{console.log(codeSent)  },[codeSent])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return <h1>{formatTime(timeLeft)}</h1>;
}
