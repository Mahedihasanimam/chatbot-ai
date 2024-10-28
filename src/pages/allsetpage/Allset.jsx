import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./animation.css"

const Allset = () => {
  const navigate = useNavigate();
  
  const handlenextpage = () => {
    navigate('/');
  };
  
  return (
    <div className="flex items-center justify-center bg-chatbot-bg h-screen">
      <div className="text-center p-4">
        <h1 className="text-8xl">🎉</h1>
        <br />
        <span className="bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent text-[24px] font-extrabold pt-4">
          You’re all set!
        </span>
        <br />
        <p className="text-[16px] font-semibold text-[#77757F] mt-[16px] typing-effect">
          You’re approximately top 10% of the global population and 5% of the USA.
        </p>
        <br />

        <Button
          onClick={handlenextpage}
          className="my-6 shadow-2xl shadow-[#d86ff898] stroke-none border-none text-[16px] font-medium"
          style={{
            marginRight: "10px",
            height: "56px",
            marginTop: "48px",
            background: "linear-gradient(to left, #1A50FF, #D96FF8)",
          }}
          type="primary"
        >
          Restart
          <svg
            className="animate-spin"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19.3333C4.84534 19.3333 0.666667 15.1546 0.666667 9.99996C0.666667 7.02534 2.05823 4.37574 4.22587 2.66663M10 0.666626C15.1547 0.666626 19.3333 4.8453 19.3333 9.99996C19.3333 12.9746 17.9418 15.6242 15.7741 17.3333M15.3333 13.3333V18H20M0 1.99996H4.66667V6.66663"
              stroke="white"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Allset;
