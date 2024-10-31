import React, { useEffect, useState } from 'react';

import {OrderService} from "components/Services/OrderService";
 import {BookingService} from "components/Services/BookingService";




const MobileMoneyPaymentForm = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [name, setName]=useState('');
    const [studentNumber, setStudentNumber] =useState('');
    const [itemId, setItemId]=useState(0);
    const [hostel, setHostel] =useState('')
    const [isLoading, setIsLoading] = useState(false);
    
 

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Basic validation
        if (!mobileNumber || !amount) {
            setError('Please fill in all fields');
            return;
        }

        if (isNaN(amount) || Number(amount) <= 0) {
            setError('Please enter a valid amount');
            return;
        }



        const orderModel ={
            studentNumber: studentNumber,
            phoneVerificationId: 0,
            phoneNumber: mobileNumber,
            orderType: 4,
            lastName: name,
            otherNames: '',
            email: '',
            orderItems: [
              {
                id:itemId,
                name: hostel,
                description: hostel,
                amount: amount,
                quantity: 1,
              },
            ],
            deliveryAddressCostId: 0,
            deliveryMode: 0,
            description: '',
            channelType: 1,
          };

          console.log(orderModel);

            var response = await OrderService.sendOrderToApi(orderModel);
            
        //   //await new Promise(resolve => setTimeout(resolve, 2000));
           if (response.isSuccessful) {
                window.location.href=response.url;
             }

       setIsLoading(false);
        
    };


    const getBooking = async () => {
        try {
            const data = await BookingService.getBooking();
            setAmount(data.amount);
            setHostel(data.hostel);

            
        } catch (error) {
            console.error("Error fetching booking:", error);
        }
    };


    useEffect(()=>{
        getBooking();
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
           setMobileNumber(userData.phoneNumber)
           setStudentNumber(userData.studentNumber)
           setName(userData.name)
      }
    },[])

    useEffect(()=>{
        if(hostel==='KT Hall'){
            setItemId(4);
        }
        if(hostel==='Chamber of Mines Hall'){
            setItemId(20);
        }
        if(hostel==='Gold Hall'){
            setAmount(22);
        }
    })

    return (
        <div className="max-w-md mx-auto p-6  rounded-lg bg-white">
            
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your mobile number"
                        
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
                        placeholder="Enter amount"
                        disabled // Disable the input field
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-2 text-green-100 bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isLoading} 
                >
                    {isLoading ? (
                       
                       <span className="flex justify-center items-center">
                       Loading 
                       <img src="/images/loader.gif" className="w-7 h-7 ml-2" alt="Loading..." />
                   </span>
                   
                        
                    ) : (
                        <span>Submit Payment</span>
                    )}
                </button>
            </form>
        </div>
    );
};

export default MobileMoneyPaymentForm;
