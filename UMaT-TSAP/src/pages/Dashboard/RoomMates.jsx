import React from "react"
import { Text } from "components";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import Footer from "components/Footer";



function RoomMates (){



    return <div className="flex flex-col md:flex-row bg-white-A700 font-inika mx-auto w-full ">
    <div className="md:relative col-span-1">
      <Sidebar1 className="h-full bg-teal-900 flex justify-start left-0 top-0" />
    </div>

    <div className="relative bg-gray-100 col-span-2 items-center justify-start md:ml-0 w-full">
      <div>
        <StudentProfile />
      </div>

      <div className="mt-[8%] ml-5 "
      style={{ minHeight: "65vh" }}>
      <Text className="text-[25px] text-center ">
         Room Mates
     </Text>
      </div>
      <Footer />
    </div>
  </div>
}

export default RoomMates;