

import React from 'react'

function RoomSkeleton() {
    return (
      <div className='flex flex-wrap'>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className="room-box w-40 h-40 m-2 items-center justify-center ori-hostel-manager relative">
            <div className="h-4 w-40 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  
  export default RoomSkeleton;