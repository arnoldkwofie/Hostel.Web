


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import Footer from "components/Footer";
import RoomList from "pages/HostelPages/RoomList";
import BookedMessage from "pages/HostelPages/BookedMessage";
import ConfirmedMessage from "pages/HostelPages/ConfirmedMessage";
import HostelList from "pages/Home/HostelLists";



const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState(null);
  
  const navigate = useNavigate();

  
  const fetchUserData = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setStudent(userData);
    } else {
      setStudent(null); // Handle case where there's no user data
    }
  };
  
  
  useEffect(() => {
    
    fetchUserData(); // Fetch on mount
   },[]);

   

  const openNav = () => {
    setIsOpen(true);
  };

 
  const d = new Date();
  let year = d.getFullYear();

  // Conditional rendering based on student year group
  const renderContent = () => {
    if (!student) return <></>;
  
    if (student.isBooked) {
      return student.isOwned ? <ConfirmedMessage /> : <BookedMessage />;
    }
  
    return year - student.yearGroup <= 1 ? <RoomList student={student} /> : (
      <div className="md:pl-[20%] pr-[20%] mb-20">
        <HostelList />
      </div>
    );
  };
  
  return (
    <div className="flex flex-col-3 page-content bg-white-A700 font-inika mx-auto relative w-full">
      <div className="md:relative col-span-1 ">
        <Sidebar1
          openNav={openNav}
          className="h-full bg-teal-900 flex justify-start left-[0] top-[0]"
        />
      </div>

      <div className=" bg-gray-100 col-span-2 items-center justify-start md:ml-[0] w-full">
        <div>
           <StudentProfile /> 
        </div>

        <div className="mt-[1%] pb-5">
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

















