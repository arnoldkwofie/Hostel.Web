import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import HostelLists from "./HostelLists";
import SelectionCheckBox from "./SelectionCheckBox";
import HostelSkeleton from "components/Skeleton";



function Container() {
 
  
  const [currentView, setCurrentView] = useState("Hostels");

  const handleButtonClick = (view) => {
    setCurrentView(view);
    setActiveButton(view); // Update active button when clicked
  };

  const [activeButton, setActiveButton] = useState("Hostels"); // State to track active button

  const navigate = useNavigate();

  const handleHostelPagesClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/HostelPages");
  };

  return (
   <>
    <div className="relative bg-image pt-10 pb-10 md:pt-40 md:h-auto">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 z-10"></div>
          <h2 className="pb-4 md:pb-10 md:text-5xl header text-2xl font-bold text-white z-20 relative pt-40 md:pt-0">
            Accomodation & Facility Manager
          </h2>
          <h3 className="md:pb-10 pb-4 md:text-2xl header text-1xl  text-yellow-100 z-20 relative">
            Eat, sleep, study, repeat.
          </h3>
           
      </div>
      <div className="big-screen-labels login md:w-[100%]  flex w-[100%] justify-around p-8 mb-10 mt-0 bg-gray-200">
        <button
          onClick={() => handleButtonClick("Hostels")}
          className={activeButton === "Hostels" ? "bg-teal-900 rounded-md text-color-white p-2" : "labels"}
        >
          <p>Hostels</p>
        </button>
        <button
          onClick={() => handleButtonClick("Apartments")}
          className={activeButton === "Apartments" ? "bg-teal-900 rounded-md text-color-white p-2" : "labels"}
        >
          <p>Apartments / Homestels</p>
        </button>
        <button
          onClick={() => handleButtonClick("Facilities")}
          className={activeButton === "Facilities" ? "bg-teal-900 rounded-md text-color-white p-2" : "labels"}
        >
          <p>Facilities</p>
        </button>
      </div>

      <div>
        {currentView === "Hostels" && (
          
          <div className="md:flex w-full justify-center w-full mt-10 pl-[10%] pr-[10%] mb-20">
        
         <HostelLists /> 
          </div>
        )}

        {currentView === "Apartments" && (
          <div className="text-center ">
             <h3 className="p-20">There are no available Apartments for booking</h3>
             
          </div>
        )}

        {currentView === "Facilities" && (
          <div className="text-center ">
          <h3 className="p-20">There are no available Facilities for booking</h3>
          
       </div>
        )}

        
      </div>
      </>
  );
}

export default Container;
