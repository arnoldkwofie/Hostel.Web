import React, { useState } from "react";
import LoginPopup from "components/Modal";
import { Link } from 'react-router-dom';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  function Login() {
      setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="">
      <div className="login flex p-2 md:justify-end justify-center ">
        <div className="flex pr-5 pt-1 ">
          <img src="images/login.png" className="h-6 pr-1 cursor-pointer" />
          <p className="pr-1 cursor-pointer"  onClick={() => Login()}>Login</p>
        
        </div>
     

        <div className="flex md:pr-10 pt-2 pb-2 " onClick={toggleDropdown}>
          <div className="flex">
            <img src="images/lang.png" className="h-4 pr-1 cursor-pointer" />
            <p className="pr-1 cursor-pointer">Language</p>

            {dropdownVisible && (
              <div className="absolute md:right-10 right-[30%] mt-6 bg-white overlap border border-gray-300 rounded-md shadow-lg">
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  //onClick={() => console.log("English selected")}
                >
                  English
                </p>
              </div>
            )}
          </div>

          <img
            src="images/down-arrow.png"
            className="h-4 pr-2 cursor-pointer"
          ></img>
        </div>
      </div>
      <div className="flex justify-between md:justify-around mt-7 mb-7 ml-5 mr-5 md:ml-0 md:mr-0">
       
      
      <img 
    src="images/UMaT-Logo-dark.png" 
    className="" 
    alt="UMaT Logo" 
/>


        <div
          className="md:hidden cursor-pointer z-50 absolute top-18 right-5  "
          onClick={toggleMobileMenu}
        >
        
        </div>
        <div className="hidden md:flex items-center link-labels">
          <div className="flex items-center link-labels relative">
            {/* <div className="flex items-center link-labels">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="relative">
                  <div
                    className="cursor-pointer flex"
                    onMouseEnter={() => openMenu(index)} // Open the menu on hover
                  >
                    <p className="pr-1">Menu {index + 1}</p>
                    <img
                      src="images/down-arrow.png"
                      className="h-4 mr-10"
                      alt="Dropdown Arrow"
                    />
                  </div>
                 
                  {isMenuOpen === index && (
                    <div
                      className="dropdown-menu absolute top-[100%] z-50"
                      onMouseLeave={closeMenu}
                    >
                     
                      <div className="dropdown-content bg-gray-50 border border-gray-300 rounded-md shadow-lg py-2 w-60">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div> */}


<div className="flex items-center link-labels">
             
                <div className="relative">
                  <div className="cursor-pointer flex">
                    

                    <Link to="/" className="pr-10">Home</Link>
                    <Link to="/About" className="pr-10">About</Link>
                    <Link to="/" className="pr-10">Hostels</Link>
                    <Link to="/" className="pr-10">Apartments</Link>
                    <Link to="/" className="pr-10">Facilities</Link>
                    <Link to="/Faqs" className="pr-10">FAQs</Link>
                    <Link to="/HelpDesk" className="pr-10">Help Desk</Link>
                    
                  </div>
                </div>
            
            </div>



          </div>
        </div>
        <div className="relative">
        <div className="hidden md:flex">
          <input
            type="text"
            name="Search"
            placeholder={focusedInput === 5 ? "" : "Search..."}
            className=" rounded-full search-box h-14 w-80 border-green-900"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
          ></input>
          <div className="green-color absolute top-[-2%] right-[0%] w-14 h-14 rounded-full flex justify-center items-center cursor-pointer">
            <img src="images/search-icon1.png" className=""></img>
          </div>
        </div>
        </div>
      </div>
      {showModal && <LoginPopup onClose={closeModal} />}
    </div>
  );
}

export default Header;
