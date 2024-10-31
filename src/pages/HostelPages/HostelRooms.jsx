import React, { useState, useEffect } from "react";


const RoomBox = ({ roomNumber, roomType, hostel, price, capacity, slotLeft, onClick  }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
    onClick={onClick}
    className={`room-box ${isMobile ? "w-32 h-32" : "w-40 h-40"} m-2 flex flex-col items-center justify-center ori-hostel-manager relative`}
    style={{
      boxShadow: '0 4px 8px rgba(0, 90, 35, 1)' // Green shadow
    }}
  >
      <h1 className='text-center big-screen-labels mb-5'>{roomNumber}</h1>
      <p className='text-center'>{roomType}</p>
      <p className='text-center text-sm mb-5'><small>{hostel}</small></p>
      <h3 className='text-center big-screen-labels '>¢{price}/yr</h3>
      
      <span className='absolute bottom-1 left-1 flex '>
      <small> {capacity} </small> <img src="/images/icons8-users-16.png" alt="Users Icon" />
      </span>

      <span className='absolute text-sm bottom-1 right-1'>
       <small>{slotLeft} left</small> 
      </span>
    </div>
  );
};

export default RoomBox;

