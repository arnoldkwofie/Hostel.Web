import React, { useState, useEffect } from "react";
import {BookingService} from "components/Services/BookingService"
import RoomSkeleton from "components/Skeleton/RoomSkeleton";

const ConfirmedMessage = () => {
    const [bookingData, setBookingData] = useState(null); // Initialize as null
   
    const [room, setRoom] = useState("");
    const [bed, setBed] = useState("");
    const [hostel, setHostel] = useState("");
    const [isVisible, setIsVisible] = useState(false);

   

    const getBooking = async () => {
        try {
            const data = await BookingService.getBooking();
            setBookingData(data);
            setIsVisible(true);
        } catch (error) {
            console.error("Error fetching booking:", error);
        }
    };

    useEffect(() => {
        getBooking();
    }, []);

    useEffect(() => {
        if (bookingData) {
            setBed(bookingData.bed);
            setHostel(bookingData.hostel);
            setRoom(bookingData.room);
        }
    }, [bookingData]);


    return (
        <>
        {isVisible ? (
        <div style={{ minHeight: "70vh" }} className="room-list flex flex-wrap ml-8">
            <div className="bg-gray-200 border  rounded-lg p-6 shadow-md text-center w-full mr-10">
                <h2 className="text-teal-700 text-2xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-teal-800 text-lg">
                    You have booked <strong>Room {room}</strong>, <strong>Bed {bed}, at {hostel}</strong>.
                </p>
                <p className="text-lg font-semibold mt-4">
                           
                <button class="bg-teal-900 hover:bg-green-700 text-green-100 font-bold py-2 px-4 rounded shadow-lg transition">
                    Download Tenancy Agreement Form
                </button>
          


                </p>
            </div>
        </div>
        ): (
            <RoomSkeleton />
          )}
          </>
    );
  
}



export default ConfirmedMessage;
