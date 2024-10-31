import React, { useState, useEffect } from "react";
import { BookingService } from "components/Services/BookingService";
import RoomSkeleton from "components/Skeleton/RoomSkeleton";

const BookedMessage = () => {
    const [bookingData, setBookingData] = useState(null); // Initialize as null
    const [targetTime, setTargetTime] = useState(""); // Use state for targetTime
    const [room, setRoom] = useState("");
    const [bed, setBed] = useState("");
    const [hostel, setHostel] = useState("");
    const [timeLeft, setTimeLeft] = useState(0); // Initialize timeLeft
    const [isVisible, setIsVisible] = useState(false);

    const getBooking = async () => {
        try {
            const data = await BookingService.getBooking();
            setBookingData(data);
            setIsVisible(true);
        } catch (error) {
            console.error("Error fetching rooms:", error);
        }
    };

    useEffect(() => {
        getBooking();
    }, []);

    useEffect(() => {
        if (bookingData) {
            const expiryDate = bookingData.expiryDate; // Assuming expiryDate is in the correct format
            setTargetTime(expiryDate); // Update state with the expiryDate
            setBed(bookingData.bed);
            setHostel(bookingData.hostel);
            setRoom(bookingData.room);
        }
    }, [bookingData]);

    useEffect(() => {
        if (targetTime) {
            const remainingTime = calculateRemainingTime(targetTime);
            setTimeLeft(remainingTime); // Set initial timeLeft based on targetTime
        }
    }, [targetTime]); // Run when targetTime updates

    const calculateRemainingTime = (targetTime) => {
        const now = new Date();
        const target = new Date(targetTime);
        return Math.max(0, Math.floor((target - now) / 1000)); // Convert to seconds
    };

    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft(calculateRemainingTime(targetTime));
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, targetTime]);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours}hrs ${minutes}min ${seconds}s`;
    };

    return (
        <>
        {isVisible ? (
        <div style={{ minHeight: "70vh" }} className="room-list flex flex-wrap ml-8">
            <div className="bg-gray-200 border  rounded-lg p-6 shadow-md text-center w-full mr-10">
                <h2 className="text-teal-700 text-2xl font-bold mb-2">Booking Requested!</h2>
                <p className="text-teal-800 text-lg">
                    You have booked <strong>Room {room}</strong>, <strong>Bed {bed}, at {hostel}</strong>.
                </p>
                <p className="text-orange-600 text-lg font-semibold mt-4">
                    You have <strong>{formatTime(timeLeft)}</strong> to make payment to secure your slot.
                </p>
            </div>
        </div>
         ): (
            <RoomSkeleton />
          )}
          </>
    );
};

export default BookedMessage;
