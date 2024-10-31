import React, {useState} from "react";

function NewFooter (){
    return <footer className="footer-container ">
    <div className="md:flex p-[5%]">
      <div className=" md:w-[25%] mr-[10%]">
        
        <div className="mb-5 footer-content ">
          Follow us on
        </div>
        <div className="flex">
          <a href="http://facebook.com/umatedugh" target="_blank">
            <img
              src="images/facebook-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="http://instagram.com/umatedugh" target="_blank">
            <img
              src="images/instagram-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="http://x.com/umatedugh" target="_blank">
            <img
              src="images/twitter-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="https://gh.linkedin.com/school/university-of-mines-and-technology-tarkwa" target="_blank">
            <img
              src="images/linkedin-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
        </div>
      </div>

      <div className="md:w-[25%] mt-10 md:mt-0 ">
        <h2 className="mb-3 md:mb-5">Quick Links</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">FAQs </p>
          </a>
          <a>
            <p className="mb-3">Help Desk </p>
          </a>
          <a>
            <p className="mb-3">Contact us </p>
          </a>
         
        </div>
      </div>

      

      <div className="md:w-[25%] mt-5 md:mt-0">
        <h2 className="mb-3 md:mb-5"> Services</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">University Website </p>
          </a>
          <a>
            <p className="mb-3">Student Portal </p>
          </a>
          <a>
            <p className="mb-3">E-learning </p>
          </a>
          <a>
            <p className="mb-3">Admission Portal </p>
          </a>
        </div>
      </div>

      <div className="md:w-[25%]">
        <h2 className="mb-3 md:mb-5 mt-5 md:mt-0">Contact Us</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">University Accomodation Services </p>
          </a>
          <a>
            <p className="mb-3">+233 2472 125 236 </p>
          </a>
          <a>
            <p className="mb-3">Tarkwa - Ghana </p>
          </a>
          
        
        </div>
      </div>
    </div>
    <div className="thin-line-horizontal-footer mt-1 mb-1"></div>

    <p className="footer-content big-searchBox p-4">
      © 2024 - UMaT-ICT | All rights reserved
    </p>
  </footer>
}

export default NewFooter;