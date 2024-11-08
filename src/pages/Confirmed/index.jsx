


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import Footer from "components/Footer";

import ConfirmedMessage from "pages/HostelPages/ConfirmedMessage";



const Confirmed = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  
 
  useEffect(() => {
    
   
   },[]);

   

  const openNav = () => {
    setIsOpen(true);
  };

 

  
  
  return (
    <div className="flex flex-col-3 page-content bg-white-A700 font-inika mx-auto relative w-full">
      <div className="md:relative col-span-1 ">
        <Sidebar1
          openNav={openNav}
          className="h-full bg-teal-900 flex justify-start left-[0] top-[0]"
        />
      </div>

      <div className="relative bg-gray-100 col-span-2 items-center justify-start md:ml-[0] w-full">
        <div>
           <StudentProfile /> 
        </div>

        <div className="mt-[5%] ">
          <ConfirmedMessage />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Confirmed;

















