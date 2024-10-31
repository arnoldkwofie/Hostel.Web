import React, { useState, useEffect } from "react";
import RoomBox from "./HostelRooms"; // Ensure this component accepts onClick
import { useNavigate } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { RoomService } from "components/Services/RoomService";
import { BedService } from "components/Services/BedService";
import RoomSkeleton from "components/Skeleton/RoomSkeleton";
import { Text } from "components";
import { ErrorMessage } from "components/ErrorMessage";
import {BedStatus} from "components/Models/Data"
import { HubConnectionBuilder } from '@microsoft/signalr';

const BOOKINGHUB_URL = process.env.REACT_APP_API_BOOKINGHUB_URL;

const RoomList = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [connection, setConnection] = useState(null);

 
  // const [isBooked, setIsBooked] = useState(false);
 
 


  const [selectedBed, setSelectedBed] = useState(null);

  const handleClick = (bedId) => {
    setSelectedBed(bedId);
  };

  const getRooms = async () => {
    try {
      setSkeleton(true);
      const data = await RoomService.getRooms(1);
      //await new Promise(resolve => setTimeout(resolve, 3000));
      console.log(data)
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setSkeleton(false);
    }
  };



  const popUpConfirmation = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const CheckBookingStatusFromModal=(() => {
    setShowModal(false);
    if(isSuccess){
      navigate('/Booked',); 
     
    }
  })


  const Book = async(id) =>{
      setIsLoading(true);

      var response=await BedService.Book(id);
      await new Promise(resolve => setTimeout(resolve, 2000));
       if (response.isSuccessful) {
         setIsLoading(false);
         setIsError(false);
         setIsSuccess(true);

          const storedUserData = localStorage.getItem('userData');
           if (storedUserData) {
             const userData = JSON.parse(storedUserData);
             userData.isBooked=true;
             localStorage.setItem('userData',JSON.stringify(userData));
         }

       }else{
         setIsSuccess(false);
         setIsLoading(false);
         setIsError(true);
         setErrorMessage(response.message);
       }

  }


  useEffect(() => {
   
    getRooms();
    
    const connect = async () => {
      const newConnection = new HubConnectionBuilder()
          .withUrl("https://localhost:7163/bookingHub") // Replace with your SignalR hub URL
          .withAutomaticReconnect()
          .build();

      try {
          await newConnection.start();
          console.log('Connection started');
          setConnection(newConnection);

          // Set up listeners after the connection is established
          newConnection.on('BedBooked', (roomId, bedId) => {
            console.log(`Received BedBooked for roomId: ${roomId}, bedId: ${bedId}`);
            newConnection.invoke('AcknowledgeBedBooked', newConnection.connectionId, roomId, bedId);

           // Update room status
              setRooms(prevRooms => {
                const updatedRooms = prevRooms.map(room => {
                    if (room.id === roomId) {
                        return {
                            ...room, slotLeft: room.slotLeft-1,
                            beds: room.beds.map(bed => {
                                if (bed.id === bedId) {
                                    return { ...bed, bedStatus: BedStatus.booked }; // Mark the bed as booked
                                }
                                return bed;
                            })
                        };
                    }
                    return room;
                });
                
                //console.log("Updated rooms: ", updatedRooms); // Log updated rooms
                return updatedRooms.filter(room => room.slotLeft > 0);
            });

          });

          // Handle connection closed event
          newConnection.onclose(async () => {
              console.log('Connection closed. Attempting to reconnect...');
              await new Promise(resolve => setTimeout(resolve, 2000)); // Wait before reconnecting
              await connect(); // Restart connection
          });
      } catch (err) {
          console.error('Error starting connection: ', err);
      }
  };



    connect();

    

    // Cleanup on unmount
    return () => {
        if (connection) {
            connection.stop();
        }
    };
}, []);


  return (
    <>
      <div style={{ minHeight: "70vh" }} className="w-100 flex flex-wrap pl-5 pr-15  md:pl-10 pr-25 ">
        <>
        {skeleton ? (
          <RoomSkeleton />
        ) : (
          rooms.map((room, index) => (
            <RoomBox
              key={index}
              roomNumber={room.roomNumber}
              roomType={room.roomType}
              hostel={room.hostel}
              price={room.price}
              capacity={room.capacity}
              slotLeft={room.slotLeft}
              onClick={() => popUpConfirmation(room)} // Ensure this function is passed correctly
            />
          ))
        )}
        </>
     
      </div>

      {showModal && selectedRoom && (
        <form>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black-900/70">
            <div className="w-[30%] my-6 mx-auto max-w-6xl " style={{  minWidth: "200px" }}>
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-slate-50 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <span className="text-1xl font-semibold">Choose Bed & Confirm Booking</span>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                <div className="flex flex-col items-center justify-center">
                  {isLoading && <div className="loader">
                    <img
                      src="/images/sample.gif" // Replace with your actual success icon path
                      alt="loading..."
                      className=""
                    />
                    
                    </div>} 
                  {isSuccess && (
                    <>
                    <img
                      src="/images/checked.png" 
                      alt="Success"
                      className=""
                    />
                    <p className="align-center text-sm text-gray-600 ">Bed Requested!!</p>
                    <span className="align-center text-sm text-gray-600 text-justify-end "> Complete payment within the next 48 hours to secure your slot.</span>
                   </>
                  )}
                   {isError && (
                    <>
                    <img
                      src="/images/fail.png" 
                      alt="Success"
                      className=""
                    />
                    <p>
                      <span className="align-center"> {errorMessage}</span>
                    </p>
                   </>
                  )}

                  </div>
                  {!isLoading && !isSuccess && !isError && (
                        <div className="bg-white" style={{ borderRadius: "1rem", maxWidth: "500px" }}>
                          <div className="p-5 w-100 d-flex flex-column">
                            <p className="text-black mb-3 text-center"> {/* Changed to text-black for visibility */}
                              You are booking{" "}
                              <span className="block">
                                <Text className="text-center text-[15px] ">
                                  {selectedRoom.roomNumber} - {selectedRoom.roomType}
                                </Text>
                              </span>
                            </p>

                            {selectedRoom.beds && selectedRoom.beds.length > 0 && (
                              <>
                              <div className="mb-4">
                                 <ul className="flex justify-between flex-wrap pl-5">
                                 {selectedRoom.beds
                                    .filter(bed => bed.bedPosition === 1)
                                    .map((bed) => {
                                      const isBooked = bed.bedStatus != BedStatus.available; // Assuming `isBooked` indicates if the bed is booked
                                      const liClasses = `relative flex flex-col items-center w-full sm:w-auto p-2 border rounded ${
                                        selectedBed === bed.id 
                                          ? 'border-green-500 bg-green-100'
                                          : isBooked 
                                          ? 'border-gray-300 bg-gray-200 cursor-not-allowed' 
                                          : 'border-gray-300'
                                      }`;

                                      return (
                                        <li
                                          key={bed.id}
                                          className={liClasses}
                                          onClick={() => !isBooked && handleClick(bed.id)} // Prevent click if booked
                                        >
                                          {selectedBed === bed.id && (
                                            <img
                                              src="/images/checked.png" // Replace with your actual icon path
                                              alt="Selected"
                                              className="absolute top-2 right-2 w-3 h-3" // Adjust size as needed
                                            />
                                          )}
                                          <img 
                                            src="/images/empty-bed.png" 
                                            alt={`Bed ${bed.bedNumber}`} 
                                            className="mb-1" 
                                          />
                                          <span>{bed.bedNumber} - Up</span>
                                        </li>
                                      );
                                  })}
                                  </ul>
                              </div>

                              
                              <div className="mb-4">
                                 <ul className="flex justify-between flex-wrap pl-5">
                                  {selectedRoom.beds
                                    .filter(bed => bed.bedPosition === 2)
                                    .map((bed) => {
                                      const isBooked = bed.bedStatus != BedStatus.available; // Assuming `isBooked` indicates if the bed is booked
                                      const liClasses = `relative flex flex-col items-center w-full sm:w-auto p-2 border rounded cursor-pointer ${
                                        selectedBed === bed.id 
                                          ? 'border-green-500 bg-green-100' 
                                          : isBooked 
                                          ? 'border-gray-300 bg-gray-200 cursor-not-allowed' 
                                          : 'border-gray-300'
                                      }`;

                                      return (
                                        <li
                                          key={bed.id}
                                          className={liClasses}
                                          onClick={() => !isBooked && handleClick(bed.id)} // Prevent click if booked
                                        >
                                          {selectedBed === bed.id && (
                                            <img
                                              src="/images/checked.png" // Replace with your actual icon path
                                              alt="Selected"
                                              className="absolute top-2 right-2 w-3 h-3" // Adjust size as needed
                                            />
                                          )}
                                          <img 
                                            src="/images/empty-bed.png" 
                                            alt={`Bed ${bed.bedNumber}`} 
                                            className="mb-1" 
                                          />
                                          <span>{bed.bedNumber} - Down</span>
                                        </li>
                                      );
                                  })}

                                  </ul>
                              </div>

                              </>
                            )}
                          </div>
                        </div>
                    
                 
               
                  )}
                </div>
                <div className="flex items-center justify-between md:p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => CheckBookingStatusFromModal()}
                  >
                    Close
                  </button>
                  {!isLoading && !isSuccess && !isError && selectedBed && (
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => {
                    //   setShowModal(false);
                    //   navigate("/ConfirmRoomBook");
                    // }}
                    onClick={() => Book(selectedBed)}
                  >
                    Confirm
                  </button>
                  )}
                  
                  {isSuccess && (
                    <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                      onClick={() => {
                      setShowModal(false);
                      navigate("/ConfirmRoomBook");
                     }}
                    >
                    Pay Now
                    </button>
                  )
                }
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      )}
    </>
  );
};

export default RoomList;
