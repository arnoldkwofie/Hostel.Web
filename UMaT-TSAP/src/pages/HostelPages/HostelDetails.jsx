import React from "react";

function HostelDetails({ hostel }) {
  return (
    <div>
      {/* Display images of the hostel */}
      <div className="image-container">
        {hostel.images.map((image, index) => (
          <img key={index} src={image} alt={`Hostel Image ${index + 1}`} />
        ))}
      </div>
      
      {/* Display hostel information */}
      <div className="hostel-info">
        <h2>{hostel.name}</h2>
        <p>Location: {hostel.location}</p>
        <p>Rooms Available: {hostel.roomsAvailable}</p>
        <p>Amenities: {hostel.amenities.join(", ")}</p>
        
        {/* Overview section */}
        <div className="overview">
          <h3>Overview</h3>
          <p>{hostel.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HostelDetails;
