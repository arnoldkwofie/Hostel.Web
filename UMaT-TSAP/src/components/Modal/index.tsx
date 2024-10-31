import React, { useEffect, useState } from "react";
import react, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

interface LoginPopupProps {
  onClose: () => void; // Define the type for onClose
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [closeModal, setCloseModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://portal.umat.edu.gh/mainapi/api/UserAccount/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();
      //  console.log(data)

      if (data.token) {
        const token = data.token;

        // Use the extracted information to construct the request to the other endpoint
        const studentDataEndpointResponse = await fetch(
          "https://localhost:7163/api/User/UserInfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request headers
            },
          }
        );

        const studentData = await studentDataEndpointResponse.json();
        if (studentData) {
          // Store the token in localStorage
          localStorage.setItem("token", token);

          localStorage.setItem("userData", JSON.stringify(studentData));
          if (studentData.isBooked) {
            return studentData.isOwned
              ? navigate("/Confirmed")
              : navigate("/Booked");
          } else {
            navigate("/Dashboard");
          }
        } else {
          setError("Student has not been registered");
        }
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      setError("An error occurred while authenticating");
    }
  };

  return (
    <>
      {closeModal ? null : (
        <form onSubmit={handleSubmit}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black-900/70">
            <div className=" w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative  w-full bg-slate-50 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Student Sign in</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="text-black-1000 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <MDBContainer fluid>
                    <MDBRow className="d-flex justify-content-center align-items-center h-100">
                      <MDBCol col="12">
                        <MDBCard
                          className="bg-white mx-auto"
                          style={{
                            borderRadius: "1rem",
                            maxWidth: "500px",
                          }}
                        >
                          <MDBCardBody className="p-5 w-100 d-flex flex-column">
                            <p className="text-white-50 mb-3">
                              Enter credentials to login
                            </p>

                            <MDBInput
                              wrapperClass="mb-4"
                              style={{ width: "100%" }}
                              id="formControlLg"
                              type="text"
                              size="lg"
                              placeholder="Student Number"
                              value={username}
                              onChange={handleUsernameChange}
                            />
                            <MDBInput
                              wrapperClass="mb-4"
                              style={{ width: "100%" }}
                              id="formControlLg"
                              type="password"
                              size="lg"
                              placeholder="Password"
                              value={password}
                              onChange={handlePasswordChange}
                            />

                            <MDBCheckbox
                              name="flexCheck"
                              id="flexCheckDefault"
                              className=""
                              label=" Remember password"
                            />
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>

                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => handleSubmit}
                  >
                    Log in
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
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

export default LoginPopup;
