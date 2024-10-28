import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const PhysicalDetails = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [currentStep, setCurrentStep] = useState(2);

  // Step Titles
  const stepTitles = [
    "Personal information",
    "Physical details",
    "Activity level",
    "Lifestyle & diet",
    "Location & income",
  ];

  // Array of routes corresponding to each step
  const stepRoutes = [
    "/personalinfo",
    "/physicaldetails",
    "/activitylevel",
    "/lifestyle",
    "/locationincome",
  ];

  // State for form inputs
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    console.log("Form Data:", formData); // Log all form data when the next button is clicked
    const nextStep = Math.min(currentStep, stepRoutes.length);
    navigate(stepRoutes[nextStep]);
    setCurrentStep(nextStep + 1);
  };

  const handlePrevStep = () => {
    const prevStep = Math.max(currentStep - 2, 0);
    navigate(stepRoutes[prevStep]);
    setCurrentStep(prevStep + 1);
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

  return (
    <div className="flex justify-center items-center bg-chatbot-bg bg-no-repeat bg-center bg-cover min-h-screen text-white">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex border-b-2 border-dotted border-[#34303E]">

          {/* Sidebar for steps */}
          <div className="w-full p-6">
            <div className="pb-4 border-b-2 border-dotted border-[#34303E] max-w-md mb-6">
              <h1 className="text-3xl font-extrabold text-[#E8E8EA] ">
                Let’s make your chatbot truly yours!
              </h1>
              <p className="text-[16px] pt-4 font-semibold text-[#77757F]">
                Complete these simple steps to help us create a personalized experience.
              </p>
            </div>
            
            <ul className="space-y-4">
              {stepTitles.map((title, index) => {
                const isCompleted = index < currentStep - 1;
                const isActive = index === currentStep - 1;

                return (
                  <li key={index}>
                    <div
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => index < currentStep && setCurrentStep(index + 1)}
                    >
                      <div
                        className={`text-[16px] rounded-[12px] text-center w-10 h-10 flex items-center justify-center  
                          ${isCompleted ? "bg-[#34303E] text-white" : "bg-[#1D1929] text-[#D2D1D4]"} 
                          ${isActive ? "border border-purple-500" : ""}`}
                      >
                        {isCompleted ? (
                          <svg
                            width="16"
                            height="11"
                            viewBox="0 0 16 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block"
                          >
                            <path
                              d="M1.06665 5.46668L5.86665 10.2667L14.9333 1.20001"
                              stroke="white"
                              strokeLinecap="square"
                            />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span
                        className={`${
                          isCompleted
                          ? "bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent font-semibold"
                          : "text-[#34303E] font-semibold"
                        }
                        ${
                          isActive
                          ? "text-[#D2D1D4] "
                          : ""
                        }
                        
                        `}
                        
                      >
                        {title}
                      </span>
                    </div>
                    {index !== 4 && (
                      <div className="h-6 w-[2px] bg-[#34303E] ml-4 mt-2"></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form Container */}
          <div className="max-w-sm text-white w-full h-fit p-[24px] bg-gradient-to-l from-[#0F0D15] to-[#1D1929] rounded-3xl border-2 border-[#262136] shadow-lg">
            <h3 className="text-[12px] font-bold text-[#77757F] uppercase tracking-normal mb-4">
              {stepTitles[currentStep - 1]}
            </h3>
            <div className="space-y-[16px] ">
              {/* Name Input */}
              <div className="relative border-2 border-[#1D1929] rounded-lg">
                <label className="absolute -top-1 left-3 text-sm text-[#77757F] font-normal py-1 px-1">
                What’s your height?
                </label>
                <input
                  style={{ height: "56px" }}
                  type="number"
                  name="height"
                  placeholder="height"
                  className="w-full px-4 py-3 bg-[#17141F] text-[#E8E8EA] rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9F5CF1] placeholder-[#E8E8EA] font-medium"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
                <p className="text-sm font-bold text-[#34303E]">Your height will be count feet as measurement unit.</p>

              {/* Age Input */}
              <div className="relative border-2 border-[#1D1929] rounded-lg">
                <label className="absolute -top-1 left-3 text-sm text-[#77757F] font-normal py-1 px-1">
                What’s your weight?
                </label>
                <input
                  style={{ height: "56px" }}
                  type="number"
                  name="weight"
                  placeholder="weight"
                  className="w-full px-4 py-3 bg-[#17141F] text-[#E8E8EA] rounded-lg border border-transparent  focus:outline-none  focus:ring-2 focus:ring-[#9F5CF1] placeholder-[#E8E8EA] font-medium"
     
                  onChange={handleInputChange}
                />
              </div>

         
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center mt-6">
          <Button
            style={{
              marginRight: "10px",
              marginTop: "27px",
              height: "44px",
              border: "1px solid #4A4754 ",
              borderRadius: "10px",
              backgroundColor: "transparent",
            }}
            className="border-none text-gray-400 hover:text-white bg-transparent hover:bg-gray-700"
            onClick={handlePrevStep}
          >
            <span className="bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent text-[16px] font-bold">Cancel</span>
          </Button>
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
            disabled={!isFormValid} // Disable the button if the form is invalid
          >
            Next Step
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.3334 6.39046L14.9429 9.99994L11.3334 13.6094L10.3906 12.6666L12.3906 10.6667H5.33333V9.33333H12.3907L10.3906 7.33327L11.3334 6.39046Z" fill="white"/>
</svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhysicalDetails;
