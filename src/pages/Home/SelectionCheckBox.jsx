import React, {useState} from "react";

function SelectionCheckBox(){

    const [focusedInput, setFocusedInput] = useState(null);

    const handleFocus = (inputIndex) => {
      setFocusedInput(inputIndex);
    };
  
    const handleBlur = () => {
      setFocusedInput(null);
    };
    return <div className=" w-[100%] md:w-[20%] bg-color">
    <div className="pl-8 relative">
      <h2 className="bottom-headings mt-5 ">Search here</h2>
      <input
        type="text"
        className="w-[90%] h-15 px-4 py-2 mt-2 mb-2 border border-gray-200 focus:outline-none focus:border-blue-500"
        placeholder={focusedInput === 6 ? "" : "Search..."}
        onFocus={() => handleFocus(6)}
        onBlur={handleBlur}
      ></input>
      <img
        src="images/search-icon2.png"
        className="w-5 h-5 absolute md:top-[50%] top-[50%] md:left-[80%] left-[70%]"
      ></img>
    </div>

    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Popular Filters</h2>
      <div className="checkbox-texts">
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>

          <p className="pl-3">Popular Hostel</p>
        </div>
      </div>
    </div>
    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Amenities</h2>
      <div className="checkbox-texts">
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Wi-Fi</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Study Room</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Gym</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">AC</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>

          <p className="pl-3">Car Park</p>
        </div>
      </div>
    </div>
    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Popular filters</h2>
      <div className="checkbox-texts">
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>
          <p className="pl-3 pb-3">Popular Hostel</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="border border-gray-300 w-5 h-5"
          ></input>

          <p className="pl-3">Popular Hostel</p>
        </div>
      </div>
    </div>
    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Amenities</h2>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Wi-Fi</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Study Room</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Gym</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">AC</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>

        <p className="pl-3">Car Park</p>
      </div>
    </div>
    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Popular filters</h2>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Popular Hostel</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Popular Hostel</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Popular Hostel</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Popular Hostel</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>

        <p className="pl-3">Popular Hostel</p>
      </div>
    </div>

    <div className="thin-line-horizontal mt-5 mb-5"></div>

    <div className="mt-8 mb-8 pl-8">
      <h2 className="bottom-headings mb-3">Amenities</h2>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Wi-Fi</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Study Room</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">Gym</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>
        <p className="pl-3 pb-3">AC</p>
      </div>
      <div className="flex">
        <input
          type="checkbox"
          className="border border-gray-300 w-5 h-5"
        ></input>

        <p className="pl-3">Car Park</p>
      </div>
    </div>
  </div>

}

export default SelectionCheckBox;