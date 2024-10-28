import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import HostelLists from "./HostelLists";
import SelectionCheckBox from "./SelectionCheckBox";
import HostelSkeleton from "components/Skeleton";



function Container() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(null); // Track which menu is open

  const openMenu = (index) => {
    setIsMenuOpen(index); // Open the menu
  };

  const closeMenu = () => {
    setIsMenuOpen(null); // Close the menu
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputIndex) => {
    setFocusedInput(inputIndex);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [currentView, setCurrentView] = useState("Hostels");

  const handleButtonClick = (view) => {
    setCurrentView(view);
    setActiveButton(view); // Update active button when clicked
  };

  const [activeButton, setActiveButton] = useState("Overview"); // State to track active button

  const navigate = useNavigate();

  const handleHostelPagesClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/HostelPages");
  };

  return (
    <div className="top-container ">
      <Header />
      <div className="relative bg-image pt-10 md:pt-40 pb-10 md:0">
            
                <h2 className="md:pb-10 pb-4 md:text-5xl header text-2xl font-bold text-yellow-100">
                 Accomodation Platform
                </h2>
             
            {/* <div className="relative w-[100%] mt-12 h-full big-searchBox pb-10">
              <input
                type="text"
                className="w-[80%] md:h-20  h-80 px-4  md:rounded-full rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500 center"
                placeholder=""
              ></input>
              <div className="green-color absolute md:top-[0%] md:right-[10%] md:w-16 md:h-20 w-[80%] ml-[10%] md:ml-0 h-8 md:rounded-full flex justify-center items-center cursor-pointer">
                <img src="images/search-icon1.png" className=""></img>
              </div>

              <div>
                <div className="mb-10 md:mb-0">
                  <div className="absolute md:top-[5%] md:left-[11%] top-[5%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src="images/search-icon2.png"
                      className="w-5 h-5"
                      alt="Search Icon"
                    ></img>
                    <div className="right-start">
                      <p className=" black-color1">Location</p>
                      <input
                        placeholder={
                          focusedInput === 1 ? "" : "Browse Hostel locations"
                        }
                        className="login2 p-1"
                        onFocus={() => handleFocus(1)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="hidden md:block thin-line ml-10 mr-10"></div>
                  </div>

                  <div className="absolute  md:top-[5%] md:left-[31%] top-[25%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src="images/search-icon2.png"
                      className="w-5 h-5"
                      alt="Search Icon"
                    ></img>
                    <div className="right-start">
                      <p className=" black-color1">Location</p>
                      <input
                        placeholder={
                          focusedInput === 2 ? "" : "Browse Hostel locations"
                        }
                        className="login2 p-1"
                        onFocus={() => handleFocus(2)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="hidden md:block thin-line ml-10 mr-10"></div>
                  </div>

                  <div className="absolute  md:top-[5%] md:left-[51%] top-[45%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src="images/search-icon2.png"
                      className="w-5 h-5"
                      alt="Search Icon"
                    ></img>
                    <div className="right-start">
                      <p className=" black-color1">Location</p>
                      <input
                        placeholder={
                          focusedInput === 3 ? "" : "Browse Hostel locations"
                        }
                        className="login2 p-1"
                        onFocus={() => handleFocus(3)}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="hidden md:block thin-line ml-10 mr-10"></div>
                  </div>

                  <div className="absolute  md:top-[5%] md:left-[71%] top-[65%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                    <img
                      src="images/search-icon2.png"
                      className="w-5 h-5"
                      alt="Search Icon"
                    ></img>
                    <div className="right-start">
                      <p className=" black-color1">Location</p>
                      <input
                        placeholder={
                          focusedInput === 4 ? "" : "Browse Hostel locations"
                        }
                        className="login2 p-1"
                        onFocus={() => handleFocus(4)}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


<div class="relative rounded-lg border bg-white bg-opacity-20 backdrop-blur-md border-white h-20 w-128 text-white flex items-center justify-center hidden sm:flex ml-80 mr-80">
    <p class="text-lg text-white ">No sleep, all snacks: student life.</p>
</div>


     


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
          <p>Facility</p>
        </button>
      </div>

      <div>
        {currentView === "Hostels" && (
          
          <div className="md:flex w-full justify-center w-full mt-10 pl-[10%] pr-[10%] mb-20">
          {/* <SelectionCheckBox /> */}
          
         <HostelLists /> 
          </div>
        )}

        {currentView === "Apartments" && (
          <div className="ml-[5%] mr-[5%] md:ml-[10%] md:mr-[10%]">
            <div className="md:flex md:justify-between">
              <div>
                <h2 className="hostel-names mb-2">Rooms</h2>
                <p className="text-gray-500 login2 mb-3">Hostel Location</p>
                <div className="flex mb-3">
                  <img src="images/star-icon.png" className="w-4 h-4 "></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                </div>
                <p className="login2 mb-3">4.8/5 Wonderful - 500 reviews</p>
              </div>
              <div>
                <p className="new-price mb-3 ">
                  {" "}
                  ₵ 2500 <span className="login2">(Per year)</span>
                </p>

               <div></div>

              </div>
            </div>
            <div className="hostel-profile mb-5 md:mt-5 ">
              <p className="line-height mb-2 md:mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English.{" "}
              </p>

              <p className="line-height">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sit this the first true generator
                on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsu
              </p>
            </div>
            <div className="relative">
              <div className="md:flex md:justify-center">
                <div className="md:w-[40%] md:mr-5">
                  <img
                    src="https://angular.envytheme.com/elad/assets/images/gallery/blue-atcr.jpg"
                    className="w-[40%] md:w-[100%] h-[40%] md:h-[100%] mb-2"
                  ></img>
                </div>
                <div className="md:w-[100%] md:mr-5">
                  <h2 className="mb-2 md:mb-4 hostel-manager">Hostel 1</h2>
                  <h3 className="mb-2 md:mb-4  ori-hostel-manager active-button">
                    Hostel Manager
                  </h3>
                  <div className="hostel-profile">
                    <p className="line-height">
                      Cras ultricies ligula sed magna dictum porta. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Vivamus magna justo, lacinia eget
                      consectetur sed, convallis at tellus. Pellentesque in
                      ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                      eget consectetur sed.
                    </p>
                  </div>
                </div>

                <div className="md:w-[40%] mt-5 md:mt-0 ">
                  <h2 className="mb-2 md:mb-5 hostel-manager">
                    Most Popular facilities
                  </h2>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className="w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === "Facilities" && (
          <div className="ml-[5%] mr-[5%] md:ml-[10%] md:mr-[10%]">
            <div className="md:flex md:justify-between">
              <div>
                <h2 className="hostel-names mb-2">Location</h2>
                <p className="text-gray-500 login2 mb-3">Hostel Location</p>
                <div className="flex mb-3">
                  <img src="images/star-icon.png" className="w-4 h-4 "></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                </div>
                <p className="login2 mb-3">4.8/5 Wonderful - 500 reviews</p>
              </div>
              <div>
                <p className="new-price mb-3">
                  {" "}
                  ₵ 2500 <span className="login2">(Per year)</span>
                </p>

                <button
                  className="primary-color p-4 w-[30%] md:w-[100%] rounded-md text-color-white book-now mb-5"
                  onClick={handleHostelPagesClick}
                >
                  Book now
                </button>
              </div>
            </div>
            <div className="hostel-profile mb-5 md:mt-5 ">
              <p className="line-height mb-2 md:mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English.{" "}
              </p>

              <p className="line-height">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sit this the first true generator
                on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsu
              </p>
            </div>
            <div className="relative">
              <div className="md:flex md:justify-center">
                <div className="md:w-[40%] md:mr-5">
                  <img
                    src="https://angular.envytheme.com/elad/assets/images/gallery/blue-atcr.jpg"
                    className="w-[40%] md:w-[100%] h-[40%] md:h-[100%] mb-2"
                  ></img>
                </div>
                <div className="md:w-[100%] md:mr-5">
                  <h2 className="mb-2 md:mb-4 hostel-manager">Hostel 1</h2>
                  <h3 className="mb-2 md:mb-4  ori-hostel-manager active-button">
                    Hostel Manager
                  </h3>
                  <div className="hostel-profile">
                    <p className="line-height">
                      Cras ultricies ligula sed magna dictum porta. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Vivamus magna justo, lacinia eget
                      consectetur sed, convallis at tellus. Pellentesque in
                      ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                      eget consectetur sed.
                    </p>
                  </div>
                </div>

                <div className="md:w-[40%] mt-5 md:mt-0 ">
                  <h2 className="mb-2 md:mb-5 hostel-manager">
                    Most Popular facilities
                  </h2>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className="w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === "Amenities" && (
          <div className="ml-[5%] mr-[5%] md:ml-[10%] md:mr-[10%]">
            <div className="md:flex md:justify-between">
              <div>
                <h2 className="hostel-names mb-2">Amenities</h2>
                <p className="text-gray-500 login2 mb-3">Hostel Location</p>
                <div className="flex mb-3">
                  <img src="images/star-icon.png" className="w-4 h-4 "></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                  <img src="images/star-icon.png" className="w-4 h-4"></img>
                </div>
                <p className="login2 mb-3">4.8/5 Wonderful - 500 reviews</p>
              </div>
              <div>
                <p className="new-price mb-3">
                  {" "}
                  ₵ 2500 <span className="login2">(Per year)</span>
                </p>

                <button
                  className="primary-color p-4 w-[30%] md:w-[100%] rounded-md text-color-white book-now mb-5"
                  onClick={handleHostelPagesClick}
                >
                  Book now
                </button>
              </div>
            </div>
            <div className="hostel-profile mb-5 md:mt-5 ">
              <p className="line-height mb-2 md:mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Why do we use it? It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English.{" "}
              </p>

              <p className="line-height">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sit this the first true generator
                on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsu
              </p>
            </div>
            <div className="relative">
              <div className="md:flex md:justify-center">
                <div className="md:w-[40%] md:mr-5">
                  <img
                    src="https://angular.envytheme.com/elad/assets/images/gallery/blue-atcr.jpg"
                    className="w-[40%] md:w-[100%] h-[40%] md:h-[100%] mb-2"
                  ></img>
                </div>
                <div className="md:w-[100%] md:mr-5">
                  <h2 className="mb-2 md:mb-4 hostel-manager">Hostel 1</h2>
                  <h3 className="mb-2 md:mb-4  ori-hostel-manager active-button">
                    Hostel Manager
                  </h3>
                  <div className="hostel-profile">
                    <p className="line-height">
                      Cras ultricies ligula sed magna dictum porta. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Vivamus magna justo, lacinia eget
                      consectetur sed, convallis at tellus. Pellentesque in
                      ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                      eget consectetur sed.
                    </p>
                  </div>
                </div>

                <div className="md:w-[40%] mt-5 md:mt-0 ">
                  <h2 className="mb-2 md:mb-5 hostel-manager">
                    Most Popular facilities
                  </h2>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className="w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                  <div className="flex mb-5">
                    <img
                      src="images/car-icon.png"
                      className="w-4 h-4 md:mr-3"
                    ></img>
                    <span className=" w-full">Free Wifi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Container;
