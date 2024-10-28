import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import './custommodal.css'

const Locationincome = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [currentStep, setCurrentStep] = useState(5);

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
    live: "",
    income: "",
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

  // Use effect to handle the modal display timeout
  useEffect(() => {
    if (currentStep === 6) {
      const timer = setTimeout(() => {
        navigate("/mainpage"); // Replace with your desired route
      }, 1000); // 1000 milliseconds = 1 second

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate]);

  return (
    <div className="flex justify-center items-center bg-chatbot-bg bg-no-repeat bg-center bg-cover min-h-screen text-white">
      <div className="lg:max-w-5xl w-full mx-auto">
        <div className="lg:flex flex-row mt-32 p-4 border-b-2 border-dotted border-[#34303E]">

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
          <div className="lg:max-w-sm text-white w-full h-fit p-[24px] bg-gradient-to-l from-[#0F0D15] to-[#1D1929] rounded-3xl border-2 border-[#262136] shadow-lg">
            <h3 className="text-[12px] font-bold text-[#77757F] uppercase tracking-normal mb-4">
              {stepTitles[currentStep - 1]}
            </h3>
            <div className="space-y-[16px] ">

              {/* Live Input */}
              <div className="relative border-2 border-[#1D1929] rounded-lg">
                <label className="absolute -top-1 left-3 text-sm text-[#77757F] font-normal py-1 px-1">
                  Where do you live?
                </label>
                <input
                  style={{ height: "56px" }}
                  type="text"
                  name="live"
                  placeholder="Value"
                  className="w-full px-4 py-3 bg-[#17141F] text-[#E8E8EA] rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9F5CF1] placeholder-[#E8E8EA] font-medium"
                  onChange={handleInputChange}
                />
              </div>

              {/* Income Dropdown */}
              <div className="relative border-2 border-[#1D1929] rounded-lg">
                <label className="absolute -top-1 left-3 text-sm text-[#77757F] font-normal py-1 px-1">
                  How much is your income
                </label>
                <input
                  style={{ height: "56px" }}
                  type="text"
                  name="income"
                  placeholder="$1000"
                  className="w-full px-4 py-3 bg-[#17141F] text-[#E8E8EA] rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#9F5CF1] placeholder-[#E8E8EA] font-medium"
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
            Finish steps
          </Button>
        </div>

        <Modal
          visible={currentStep === 6} // Show the modal based on current step
          footer={null} // Remove all footer buttons
          closable={false} // Disable the close icon if you don't want any way to close it
          style={{ color: '#ffffff' }}
          className="custom-modal"
        >
            <div className="text-center ">
        <h1 className="text-8xl">
          🎉
          
        </h1>
        <br />
          <span className="bg-gradient-to-l from-[#1A50FF] to-[#D96FF8] bg-clip-text text-transparent text-[24px] font-extrabold pt-4">You’re all set!</span>
        <p className="text-[16px] font-semibold text-[#77757F] mt-[16px]">
          You’re approximately 10% of the global population and 5% of the USA.
        </p>
      </div>
        </Modal>
      </div>
    </div>
  );
};

export default Locationincome;
