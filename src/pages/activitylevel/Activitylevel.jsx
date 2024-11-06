import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { FaChevronDown } from "react-icons/fa";

const Activitylevel = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(3);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const stepTitles = [
    "Personal information",
    "Physical details",
    "Activity level",
    "Lifestyle & diet",
    "Location & income",
  ];

  const stepRoutes = [
    "/personalinfo",
    "/physicaldetails",
    "/activitylevel",
    "/lifestyle",
    "/locationincome",
  ];

  // Define input fields for the current step
  const inputsForCurrentStep = [
    { name: "name", placeholder: "What’s your name?" },
    { name: "age", placeholder: "What is your age?" },
    { name: "gender", placeholder: "What is your gender?" },  // Gender input
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextInput = () => {
    if (formData[inputsForCurrentStep[currentInputIndex].name]?.trim() === "") return;

    if (currentInputIndex < inputsForCurrentStep.length - 1) {
      setCurrentInputIndex(currentInputIndex + 1);
    } else {
      // Reset inputs after completing the current step
      setFormData({ name: "", age: "", gender: "" });
      setCurrentInputIndex(0);
      handleNextStep();
    }
  };

  const handleNextStep = () => {
    console.log("Form Data:", formData);
    const nextStep = Math.min(currentStep, stepRoutes.length);
    navigate(stepRoutes[nextStep]);
    setCurrentStep(nextStep + 1);
  };

  const handlePrevStep = () => {
    if (currentInputIndex > 0) {
      setCurrentInputIndex(currentInputIndex - 1); // Go back to the previous input field
    } else {
      const prevStep = Math.max(currentStep - 2, 0);
      navigate(stepRoutes[prevStep]);
      setCurrentStep(prevStep + 1);
    }
  };
  
  // Check if the current input is filled
  const isCurrentInputValid = formData[inputsForCurrentStep[currentInputIndex].name]?.trim() !== "";

  return (
    <div className="flex justify-center items-center bg-chatbot-bg bg-no-repeat bg-center bg-cover min-h-screen text-white">
      <div className="lg:max-w-5xl mt-32 w-full mx-auto p-4">
        {/* Sidebar for steps */}
        <div className="w-full bg-steps-bg rounded-2xl bg-no-repeat bg-center bg-cover">
          <ul className="space-y-4 flex items-center justify-center bg-black w-full h-[124px] rounded-2xl bg-opacity-35 border-2 border-[#34303E59] pl-14">
            {stepTitles.map((title, index) => {
              const isCompleted = index < currentStep - 1;
              const isActive = index === currentStep - 1;

              return (
                <li className="pl-4" key={index}>
                  <div
                    className="flex items-center space-x-2 cursor-pointer  "
                    onClick={() => index < currentStep && setCurrentStep(index + 1)}
                  >
                    <div
                      className={`text-[16px] rounded-[12px] text-center w-10 h-10 flex items-center justify-center  
                        ${index === 0 && 'mt-4'} 
                          ${isCompleted ? "bg-[#F7E2FE] text-[#C364DF]" : "bg-[#1D1929] text-[#D2D1D4]"} 
                          ${isActive ? "border border-purple-500" : ""}`}
                    >
                      {isCompleted ? (
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.799805" width="32" height="32" rx="12" fill="#C364DF" />
                          <path d="M9.86621 15.4669L14.6662 20.2669L23.7329 11.2002" stroke="white" stroke-linecap="square" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index !== 4 && (
                      <div className={`h-[2px] w-[120px] ml-4 mt-21
                         ${isCompleted ? "bg-[#D96FF8]" : "bg-[#34303E]"}
                         ${index === 0 && 'mt-4'} 
                         `}></div>
                    )}
                  </div>

                  <span
                    className={`${isCompleted
                      ? "bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent font-semibold"
                      : "text-[#34303E] font-semibold"
                      } ${isActive ? "text-[#D2D1D4]" : ""}`}
                  >
                    <div className={`-translate-x-14  pt-2
                      
                      ${index === 4 && 'ml-6'} 
                      `}>
                      <p className="text-sm font-bold text-center text-[#D2D1D4]">step {index + 1}</p>
                      <p className="text-xs text-center text-[#8E8C94]">{title}</p>
                    </div>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Content */}
        <div className="py-[128px]">
          <h1 className="text-[#D2D1D4] text-center font-bold text-[56px] mb-4">
            {inputsForCurrentStep[currentInputIndex].placeholder}
          </h1>
        </div>

        {/* Form Container */}
        <div className="w-full text-white h-fit bg-no-repeat bg-center bg-cover rounded-3xl border-2 border-[#262136] shadow-lg mt-8">
          {inputsForCurrentStep[currentInputIndex].name === "gender" ? (


            <div className="relative">


              <select
                style={{ height: "56px" }}
                name="gender"
                className="w-full px-4 py-3 bg-[#17141F] text-[#E8E8EA] rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#9F5CF1] placeholder-[#E8E8EA] font-medium custom-select"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <FaChevronDown className="w-5 h-5 text-[#E8E8EA]" />
              </div>

            </div>

          ) : (
            <input
              style={{ height: "56px" }}
              type="text"
              name={inputsForCurrentStep[currentInputIndex].name}
              placeholder={inputsForCurrentStep[currentInputIndex].placeholder}
              className="w-full px-4 py-3 bg-[#1D192999] text-[#A5A3A9] rounded-3xl border-none focus:outline-none placeholder-[#A5A3A9] font-medium"
              value={formData[inputsForCurrentStep[currentInputIndex].name]}
              onChange={handleInputChange}
            />
          )}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {inputsForCurrentStep.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index <= currentInputIndex ? "bg-purple-500" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center mt-6">
          <Button
            style={{
              marginRight: "10px",
              marginTop: "26px",
              height: "46px",
              border: "1px solid #4A4754",
              borderRadius: "10px",
              backgroundColor: "transparent",
            }}
            className="border-none text-gray-400 hover:text-white bg-transparent hover:bg-gray-700"
            onClick={handlePrevStep}
          >
            <span className="bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent text-[16px] font-bold">
              Previous
            </span>
          </Button>
          {currentInputIndex < inputsForCurrentStep.length - 1 ? (
            <Button
              className="my-6 shadow-2xl shadow-[#d86ff898] stroke-none border-none text-[16px] font-medium"
              style={{
                marginRight: "10px",
                height: "44px",
                marginTop: "48px",
                background: "linear-gradient(to left, #1A50FF, #D96FF8)",
              }}
              type="primary"
              onClick={handleNextInput}
              disabled={!isCurrentInputValid}
            >
              Next

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.3334 6.39046L14.9429 9.99994L11.3334 13.6094L10.3906 12.6666L12.3906 10.6667H5.33333V9.33333H12.3907L10.3906 7.33327L11.3334 6.39046Z" fill="white" />
              </svg>

            </Button>
          ) : (
            <Button
              className="my-6 shadow-2xl shadow-[#d86ff898] stroke-none border-none text-[16px] font-medium"
              style={{
                marginRight: "10px",
                height: "44px",
                marginTop: "48px",
                background: "linear-gradient(to left, #1A50FF, #D96FF8)",
              }}
              type="primary"
              onClick={handleNextStep}
              disabled={!isCurrentInputValid}
            >
              Next Step

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.3334 6.39046L14.9429 9.99994L11.3334 13.6094L10.3906 12.6666L12.3906 10.6667H5.33333V9.33333H12.3907L10.3906 7.33327L11.3334 6.39046Z" fill="white" />
              </svg>

            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activitylevel;
