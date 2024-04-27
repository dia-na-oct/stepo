import React, { useState } from 'react';
import { IoIosQuote } from 'react-icons/io'; // Import alternative quote icon from react-icons/io
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import arrow icons from react-icons/fa
import stepo from '../assets/stepo.jpg';

const Temoignages = () => {
  // Sample feedback data
  const feedbackData = [
    "This is the first user's feedback.",
    "This is the second user's feedback.",
    "This is the third user's feedback."
  ];

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Function to handle navigation to the previous feedback
  const goToPreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  // Function to handle navigation to the next feedback
  const goToNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) => (prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-10">
      <img src={stepo} alt="Stepo" className="absolute inset-0 z-0 object-cover w-full h-full" />

      <div className="absolute inset-0 z-10 bg-[#96527A] opacity-50"></div>

      <div className="relative z-10  bg-black opacity-60 py-8 px-20">
        <div className="mb-4 flex items-center">
          <IoIosQuote className="text-3xl text-orange-500 mr-10 rotate-180" /> 
          <div className="mx-4 my-[10vh] text-white ">{feedbackData[currentFeedbackIndex]}</div>
          <IoIosQuote className="text-3xl text-orange-500 ml-10" /> 
        </div>
        <div className="flex justify-center">
          <div className="m-2 p-3 bg-gray-100 rounded-full cursor-pointer" onClick={goToPreviousFeedback}>
            <FaArrowUp className="text-xl text-orange-500" />
          </div>
          <div className="m-2 p-3 bg-gray-100 rounded-full cursor-pointer" onClick={goToNextFeedback}>
            <FaArrowDown className="text-xl text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;
