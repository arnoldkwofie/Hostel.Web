 import React, { useState } from "react";
import Header from "pages/Home/Header";
import { useNavigate } from "react-router-dom";
import NewFooter from "pages/Home/Footer";
import RoomBox from "./HostelRooms";

function HostelPages() {
  const [currentView, setCurrentView] = useState("Overview");

  const handleButtonClick = (view) => {
    setCurrentView(view);
    setActiveButton(view); // Update active button when clicked
  };

  const navigate = useNavigate();

  const handleHostelPagesClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/HostelPages");
  };

  const [activeButton, setActiveButton] = useState("Overview"); // State to track active button

  const [showRoomBoxes, setShowRoomBoxes] = useState(false);

  const handlesButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Detached") {
      setShowRoomBoxes(true);
    } else {
      setShowRoomBoxes(false);
    }
  };

  const handleNewButtonClick = () => {
    setActiveButton("Detached-rooms");
  };


  const rooms = [
    { roomNumber: "101", capacity: 4, slotsLeft: 2 },
    { roomNumber: "102", capacity: 6, slotsLeft: 4 },
    { roomNumber: "103", capacity: 4, slotsLeft: 2 },
    { roomNumber: "104", capacity: 6, slotsLeft: 4 },
    { roomNumber: "105", capacity: 6, slotsLeft: 4 },
    { roomNumber: "106", capacity: 6, slotsLeft: 4 },
    { roomNumber: "107", capacity: 4, slotsLeft: 2 },
    { roomNumber: "108", capacity: 6, slotsLeft: 4 },
    { roomNumber: "109", capacity: 4, slotsLeft: 2 },
    { roomNumber: "110", capacity: 6, slotsLeft: 4 },
    { roomNumber: "111", capacity: 6, slotsLeft: 4 },
    { roomNumber: "112", capacity: 6, slotsLeft: 4 },
    { roomNumber: "101", capacity: 4, slotsLeft: 2 },
    { roomNumber: "102", capacity: 6, slotsLeft: 4 },
    { roomNumber: "103", capacity: 4, slotsLeft: 2 },
    { roomNumber: "104", capacity: 6, slotsLeft: 4 },
    { roomNumber: "105", capacity: 6, slotsLeft: 4 },
    { roomNumber: "106", capacity: 6, slotsLeft: 4 },
    { roomNumber: "107", capacity: 4, slotsLeft: 2 },
    { roomNumber: "108", capacity: 6, slotsLeft: 4 },
    { roomNumber: "109", capacity: 4, slotsLeft: 2 },
    { roomNumber: "110", capacity: 6, slotsLeft: 4 },
    { roomNumber: "111", capacity: 6, slotsLeft: 4 },
    { roomNumber: "112", capacity: 6, slotsLeft: 4 },
  ];

  return (
    <div className="relative">
      <Header />
      <div className="md:flex mb-12 mt-[10%]">
        <div className="w-[100%] h-full md:h-[120] md:w-[50%] mb-10 md:ml-[5%] ml-5">
          {" "}
          <img
            src="https://angular.envytheme.com/elad/assets/images/gallery/gallery-1.jpg"
            className=" w-[90%] h-96 md:h-2/4 md:w-[100%] gallery-image rounded-lg  "
          />
        </div>
        <div className="flex ml-5 md:ml-8 md:mr-[5%]">
          <div className="w-[90%] md:w-[100%] h-96 md:h-[120] gallery-image">
            <img
              src="https://angular.envytheme.com/elad/assets/images/gallery/gallery-2.jpg"
              className="w-[90%] object-cover h-60 md:h-[90%] md:w-[90%] rounded-lg mb-10 gallery-image"
            />
            <img
              src="https://angular.envytheme.com/elad/assets/images/gallery/gallery-3.jpg"
              className="w-[90%]  md:w-[90%] h-32 md:h-[65%] rounded-lg gallery-image"
            />
          </div>
          <div className="w-[90%] md:w-[100%] h-96 gallery-image ">
            <img
              src="https://angular.envytheme.com/elad/assets/images/gallery/gallery-4.jpg"
              className="w-[90%]  md:w-[100%] h-32 md:h-[65%] rounded-lg mb-10 gallery-image"
            />
            <img
              src="https://angular.envytheme.com/elad/assets/images/gallery/gallery-5.jpg"
              className="w-[100%] object-cover h-60 md:h-[90%] md:w-[100%] rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <div className="big-screen-labels login shadow-md md:w-[90%] md:ml-[5%] md:mr-[5%] flex w-[100%] justify-around p-10 mb-10">
          <button
            onClick={() => handleButtonClick("Overview")}
            className={activeButton === "Overview" ? "active-button" : "labels"}
          >
            <p>Overview</p>
          </button>
          {/* <button
            onClick={() => handleButtonClick("Rooms")}
            className={activeButton === "Rooms" ? "active-button" : "labels"}
          >
            <p>Rooms</p>
          </button> */}
          <button
            onClick={() => handleButtonClick("Location")}
            className={activeButton === "Location" ? "active-button" : "labels"}
          >
            <p>Location</p>
          </button>
          <button
            onClick={() => handleButtonClick("Amenities")}
            className={
              activeButton === "Amenities" ? "active-button" : "labels"
            }
          >
            <p>Amenities</p>
          </button>
        </div>

        <div>
          {currentView === "Overview" && (
            <div className="ml-[5%] mr-[5%] md:ml-[10%] md:mr-[10%]">
              <div className="md:flex md:justify-between">
                <div>
                  <h2 className="hostel-names mb-2">Hostel 1</h2>
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
                    className="green-color p-4 w-[30%] md:w-[100%] rounded-md text-color-white book-now mb-5"
                    onClick={handleHostelPagesClick}
                  >
                    Book now
                  </button>
                </div>
              </div>
              <div className="hostel-profile mb-5 md:mt-5 ">
                <p className="line-height mb-2 md:mb-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.{" "}
                </p>

                <p className="line-height">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sit this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsu
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
                        ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus. Pellentesque in
                        ipsum id orci porta dapibus. Vivamus magna justo,
                        lacinia eget consectetur sed.
                      </p>
                    </div>
                  </div>

                  <div className="md:w-[40%] mt-5 md:mt-0 ">
                    <h2 className="mb-2 md:mb-5 hostel-manager">
                      Most Popular facilities
                    </h2>
                    <div className="flex mb-5 price">
                      <img
                        src="images/wifi-icon2.png"
                        className="w-4 h-4 md:mr-3"
                      ></img>
                      <span className="w-full">Free Wifi</span>
                    </div>
                    <div className="flex mb-5 price">
                      <img
                        src="images/wifi-icon2.png"
                        className="w-4 h-4 md:mr-3 "
                      ></img>
                      <span className=" w-full">Air Conditioning</span>
                    </div>
                    <div className="flex mb-5 price">
                      <img
                        src="images/wifi-icon2.png"
                        className="w-4 h-4 md:mr-3"
                      ></img>
                      <span className=" w-full">Gym</span>
                    </div>
                    <div className="flex mb-5 price">
                      <img
                        src="images/wifi-icon2.png"
                        className="w-4 h-4 md:mr-3"
                      ></img>
                      <span className=" w-full">DSTV</span>
                    </div>
                    <div className="flex mb-5 price">
                      <img
                        src="images/wifi-icon2.png"
                        className="w-4 h-4 md:mr-3"
                      ></img>
                      <span className=" w-full">Car Park</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {currentView === "Location" && (
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.{" "}
                </p>

                <p className="line-height">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sit this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsu
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
                        ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus. Pellentesque in
                        ipsum id orci porta dapibus. Vivamus magna justo,
                        lacinia eget consectetur sed.
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.{" "}
                </p>

                <p className="line-height">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sit this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsu
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
                        ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Vivamus magna justo, lacinia eget
                        consectetur sed, convallis at tellus. Pellentesque in
                        ipsum id orci porta dapibus. Vivamus magna justo,
                        lacinia eget consectetur sed.
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
      {/* <EmailCard /> */}
      <NewFooter />
    </div>
  );
}

export default HostelPages;







