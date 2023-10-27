import React, { useState, useEffect } from "react";
import "./Customer.css";
import { FaTruck } from "react-icons/fa";

function PaymentSuccess() {
  const [animateTruck, setAnimateTruck] = useState(false);
  const [showText, setShowText] = useState(false);
  const text = "Thank you for your order!";
  const letters = text.split("");

  useEffect(() => {
    setTimeout(() => {
      setAnimateTruck(true);
      setShowText(true);
    }, 500);
  }, []);

  return (
    <div className="truck-container pl-[10px] w-full lg:w-[23%] h-[100px] lg:h-[40px]">
      <div className={`order-text ${animateTruck ? "order-move text-[red] font-poppins " : ""}`}>
        {showText &&
          letters.map((letter, index) => (
            <span
              key={index}
              className={`order-letter ${animateTruck ? "letter-animation" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {letter}
            </span>
          ))}
      </div>
      <div className={`truck ${animateTruck ? "truck-move" : ""}`}>
        <span className="truck-icon" role="img" aria-label="truck">
          <FaTruck />
        </span>
      </div>
    </div>
  );
}

export default PaymentSuccess;
