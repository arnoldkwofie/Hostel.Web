
import React, { useState } from "react";
import Header from "pages/Home/Header";

import NewFooter from "pages/Home/Footer";

function HelpDesk() {
  
    const [openIndex, setOpenIndex] = useState(null);

   

  return (
    <div className="overall-container">
       <Header />
       <div className="flex justify-center mx-auto p-20 md:mb-20">
        <div className=" items-center mb-6">
            {/* <FaQuestionCircle className="text-blue-600 mr-2 text-3xl" /> */}
            <img src="/images/helpdesk.png" />
            
        </div>

      
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Help Desk</h2>
        <p className="text-gray-700">For immediate assistance, you can reach us at:</p>
        <ul className="mt-2 space-y-2">
          <li>Email: <a href="mailto:support@hostel.com" className="text-blue-600">accomodation@umat.edu.gh</a></li>
          <li>Phone: <a href="tel:+233123456789" className="text-blue-600">+233 12 345 6789</a></li>
          <li>Office Hours: Monday to Friday, 8 AM - 5 PM</li>
        </ul>
      </div>
    </div>
       
      <NewFooter />
    </div>
  );
}

export default HelpDesk;
