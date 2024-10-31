import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPopup from "components/Modal";

//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";

interface HostelComponentProps {
  image: string;
  name: string;
  location: string;
  price: string;
  reviews: string;
  amenities?: string[];
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const HostelComponent: React.FC<HostelComponentProps> = ({
  image,
  name,
  location,
  price,
  amenities,
  reviews,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleHostelPagesClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/HostelPages");
  };

  const navigate = useNavigate();

  const [userLoggedIn, setUserIsLoggedIn] = useState(false);

  function getUserDataFromLocalStorage() {
    let userData = localStorage.getItem("userData");
    if (userData) {
      setUserIsLoggedIn(true);
      navigate("/Dashboard");
    } else {
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="w-full hostel-list">
      <div className="md:flex items-center justify-center md:space-x-10 space-y-10 md:p-10 bg-color w-[100%] border-b border-gray-300 mb-5">
        <img
          src={image}
          alt={name}
          className="hostel-img object-cover rounded-sm fade-in"
          loading="lazy"
        />
        <div className="pl-2 ">
          <h2 className="bottom-headings mb-2">{name}</h2>
          <p className="text-gray-500 login2 mb-2">{location}</p>
          <div className="flex mb-3">
            <img src="images/star-icon.png" className="w-4 h-4 "></img>
            <img src="images/star-icon.png" className="w-4 h-4"></img>
            <img src="images/star-icon.png" className="w-4 h-4"></img>
          </div>
          <p className="login2 mb-2">{reviews}</p>
          <p className="bottom-headings mb-2"> ₵{price}</p>
          <div className="flex">
            <button
              className="green-color p-2 w-[40%] mr-5 rounded-md text-color-white book-now"
              onClick={handleHostelPagesClick}
            >
              Details
            </button>

            <button
              className="green-color p-2 w-[40%] rounded-md text-color-white book-now"
              onClick={() => getUserDataFromLocalStorage()}
            >
              Book
            </button>
          </div>
        </div>
        <div className="hidden md:block thin-line-longer "></div>
        <ul className="mt-2 ">
          {amenities?.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-4  price pl-2">
              <img
                src="images/wifi-icon2.png"
                className="w-4 h-4"
                loading="lazy"
              ></img>
              <span className="mt-1 mb-1 w-full">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
      {showModal && <LoginPopup onClose={closeModal} />}
    </div>
  );
};
export { HostelComponent };
