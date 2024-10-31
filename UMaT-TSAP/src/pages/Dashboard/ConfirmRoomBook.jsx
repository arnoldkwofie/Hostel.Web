import React, { useState, useEffect } from "react";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import Footer from "components/Footer";
import MobileMoneyPaymentForm from "components/Payment/MobileMoneyPaymentForm";
import CardPaymentForm from "components/Payment/CardPaymentForm";

const ConfirmRoomBook = () => {
    const [openNav, setOpenNav] = useState(false);
    const [activeTab, setActiveTab] = useState('Mobile Money');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const paymentMethods = [
        { name: 'Mobile Money', logo: '/images/umat-pay-MTN.png' },
        { name: 'Credit/Debit Card', logo: '/images/umat-pay-visa.png' },
        
    ];
   

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
  
          <div className="mt-[3%] " style={{ minHeight: "70vh" }}>
            

          <div className="ml-auto mr-auto w-[80%] h-auto bg-white-700 bg-white-A700 shadow-md">
                   <h1 className="p-5 text-gray-500 text-center">Pay online through UMaTPay</h1>

                   <div className="flex flex-col w-full p-10">
                       <div className="flex space-x-4 mb-6">
                       {paymentMethods.map(({ name, logo }) => (
                           <button
                               key={name}
                               className={`flex-1 flex items-center py-2 text-center text-lg font-semibold rounded-lg shadow-md transition duration-200 p-5 ${
                                   activeTab === name
                                       ? 'text-teal-600 border-teal-600 border border-green-500 bg-green-100'
                                       : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                               }`}
                               onClick={() => handleTabClick(name)}
                           >
                               {/* <img src={logo} alt={`${name} logo`} className="h-6 mr-2" /> */}
                               {name}
                               
                           </button>
                       ))}
                       </div>

                       <div className="p-6 border rounded-lg bg-white ">
                           
                           {activeTab === 'Mobile Money' && <MobileMoneyPaymentForm />}
                           {activeTab === 'Credit/Debit Card' && <CardPaymentForm />}
                          
                       </div>
                   </div>

                   </div>
                   <div className="ml-auto mr-auto w-[80%] h-[40px] p-2 text-center" >
                       OR
                   </div>
                   <div className="ml-auto mr-auto w-[80%] h-auto bg-white-700 bg-white-A700 shadow-md pb-10 text-center">
                   <h1 className="p-5 text-gray-500">Visit the following banks to make payment</h1>
                       
                           <div className="flex flex-wrap justify-between w-full pl-10 pr-10">
                               <div className="w-auto md:w-[400px] p-6 bg-gradient-to-r from-orange-100 to-orange-700 rounded-lg shadow-lg text-white relative overflow-hidden">
                                   <div className="flex items-center mb-4">
                                       <img src="/images/fidelity.png" alt="Fidelity Bank Logo" className="h-12 mr-4" />
                                       <span className="text-lg font-semibold">Fidelity Bank</span>
                                   </div>
                                   <span className="block text-sm">UMaT RFUF Account</span>
                                   <span className="block text-2xl font-semibold mt-2">5256211222333</span>
                                   <div className="mt-4">
                                       <div className="border-t border-white pt-2">
                                           <span className="text-sm">UMaT Hostel Payment</span>
                                       </div>
                                   </div>
                                 
                                   <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent"></div>
                               </div>
                               
                               <div className=" w-auto md:w-[400px] p-6 bg-gradient-to-r from-teal-100 to-green-700 rounded-lg shadow-lg text-white relative overflow-hidden">
                                   <div className="flex items-center mb-4">
                                       <img src="/images/zenith.png" alt="Zenith Bank Logo" className="h-12 mr-4" />
                                       <span className="text-lg font-semibold">Zenith Bank</span>
                                   </div>
                                   <span className="block text-sm">UMaT RFUF Account</span>
                                   <span className="block text-2xl font-semibold mt-2">854544566465</span>
                                   <div className="mt-4">
                                       <div className="border-t border-white pt-2">
                                           <span className="text-sm">UMaT Hostel Payment</span>
                                       </div>
                                   </div>
                                   
                                   <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent"></div>
                               </div>
                               
                               <div className="w-auto md:w-[400px] p-6 bg-gradient-to-r from-yellow-100 to-yellow-700 rounded-lg shadow-lg text-white relative overflow-hidden">
                                   <div className="flex items-center mb-4">
                                       <img src="/images/calbank.png" alt="Cal Bank Logo" className="h-12 mr-4" />
                                       <span className="text-lg font-semibold">Cal Bank</span>
                                   </div>
                                   <span className="block text-sm">UMaT RFUF Account</span>
                                   <span className="block text-2xl font-semibold mt-2">541213233112312</span>
                                   <div className="mt-4">
                                       <div className="border-t border-white pt-2">
                                           <span className="text-sm">UMaT Hostel Payment</span>
                                           
                                       </div>
                                   </div>
                                  
                                   <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent"></div>
                               </div>
                           </div>




                   </div>

          </div>
          <Footer />
        </div>
      </div>
    );
}

export default ConfirmRoomBook;
