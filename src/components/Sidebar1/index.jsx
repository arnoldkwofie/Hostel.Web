
import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Img, Text } from "components";
import SidebarOverlay from "components/SidebarOverlay";
import { useNavigate } from "react-router-dom";

const Sidebar1 = (props) => {
  const { openNav } = props;
  const { collapseSidebar, collapsed } = useProSidebar();
  const [isMobile, setIsMobile] = useState(false);

  const logoElements = document.querySelectorAll(".umat-logo");
  if (logoElements) {
    logoElements.forEach((element) => {
      element.classList.toggle("hidden", collapsed);
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="left-[0] h-full" style={{ minHeight: "100vh" }}>
      {isMobile ? ( // Render menu icon only if isMobile is true
        <div className="absolute hidden left-0 w-[20%] text-center ">
          <button id="menu-button-id" className="cursor-pointer "  >
            <Img 
              className="cursor-pointer w-10 h-5 mt-[10%]"
              src="images/menu-burger-new.png"
              alt="menu-icon"
            />
          </button>
        </div>
      ) : (
        <Sidebar
         
          className={`umat-logo ${props.className}`}
        >
          <div className="flex flex-col-3 justify-around mt-[5%]">
            <div className="col-span-2 ">
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "0 0",
                    gap: "12px",
                    margin: "0 0 10%",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "30px",
                    fontFamily: "Inika",
                  },
                }}
                className="umat-logo flex items-center justify-start w-full"
              >
                <MenuItem
                  icon={
                    <Img
                      className="umat-logo common-pointer h-[20px] md:h-[25px] inset-auto object-cover relative w-full"
                      src="images/img_umatlogo1.png"
                      alt="umatlogoOne"
                      onClick={props?.onClick}
                    />
                  }
                >
                  <Text className="umat-logo text-[25px] w-full text-shadow-ts">
                    H-Manager
                  </Text>
                </MenuItem>
              </Menu>
            </div>
            <div className="col-span-1 ">
              <Img
               onClick={() => collapseSidebar(!collapsed)}
                className="cursor-pointer umat-logo md:h-auto mt-[5%]  w-[29px] "
                src="images/left-arrow.png"
                alt="lessthan"
              />
            </div>
          </div>

          <div className="pb-[10%] flex justify-center ">
            <div>
              <div className="">
                {collapsed && (
                  <div className="">
                    <Img
                    onClick={() => collapseSidebar(!collapsed)}
                      className="cursor-pointer mb-[50%] h-10 w-10"
                      src="images/menu-burger-new.png"
                      alt="menu-icon"
                    />
                  </div>
                )}
              </div>

              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_home.svg"
                alt="home"
              />
              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_student.svg"
                alt="student_One"
              />
              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_thumbsup_blue_gray_200.svg"
                alt="thumbsup_One"
              />
              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_finance.svg"
                alt="finance"
              />
              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_calendar.svg"
                alt="calendar"
              />
            </div>

            <div className="umat-logo pl-[10%] ">
              <Text
                className="h-10 pt-[8%] mb-[12%] flex text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
              <button onClick={ () => navigate("")}>
                Home
                </button>
              </Text>
              <Text
                className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
               <button onClick={ () => navigate("/RoomMates")}>
                Room Mates
                </button>
              </Text>
              <Text
                className="h-10 pt-[8%] mb-[20%] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
              <button onClick={ () => navigate("/Transactions")}>
                Transactions
                </button>
              </Text>
              <Text
                className="h-10 pt-[8%] mb-[20%] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
               <button onClick={ () => navigate("/KeyLog")}>
                 Key Log
                 </button>
              </Text>
              <Text
                className="h-10 pt-[8%] mb-[20%] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
                Profile
              </Text>
              <Text
                className="h-10 pt-[8%] text-lg text-white-A700"
                size="txtPoppinsMedium18"
              >
               Logout
              </Text>
            </div>
          </div>
        </Sidebar>
      )}
      {isMobile && <SidebarOverlay />}{" "}
      {/* Render SidebarOverlay only if isMobile is true */}
    </div>
  );
};

export default Sidebar1;
