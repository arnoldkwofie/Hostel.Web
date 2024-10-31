import React, { useState } from "react";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import Footer from "components/Footer";
import RoomList from "pages/HostelPages/RoomList";

const StudentIsLoggedInRooms = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-white-A700 font-inika mx-auto w-full">
      <div className="md:relative col-span-1">
        <Sidebar1 openNav={openNav}  className="h-full bg-teal-900 flex justify-start left-0 top-0" />
      </div>

      <div className="relative bg-gray-100 col-span-2 items-center justify-start md:ml-0 w-full" style={{ minHeight: "100vh" }}>
        <div>
          <StudentProfile />
        </div>

        <div className="mt-10 ml-5">
          <RoomList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default StudentIsLoggedInRooms;













