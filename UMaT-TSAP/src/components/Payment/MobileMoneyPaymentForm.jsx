import React, { useEffect, useState } from 'react';
import {BookingService} from "components/Services/BookingService";


const MobileMoneyPaymentForm = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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

        // Submit the form (replace with actual submission logic)
        alert(`Submitting payment of ${amount} to ${mobileNumber}`);
    };


    const getBooking = async () => {
        try {
            const data = await BookingService.getBooking();
            setAmount(data.amount);
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
      }
    },[])

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
                    className="w-full py-2 text-green-100 bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-200"
                >
                    Submit Payment
                </button>
            </form>
        </div>
    );
};

export default MobileMoneyPaymentForm;
