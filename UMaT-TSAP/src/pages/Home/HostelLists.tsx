import { Building } from "components/Models/Data";
import { useState, useEffect } from "react";
import { HostelService } from "components/Services/HostelService";
import { HostelComponent } from "components/HostelComponent/HostelComponent";
import HostelSkeleton from "components/Skeleton";

const HostelList: React.FC = () => {
  const [hostelData, setHostelData] = useState<Building[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    HostelService.getHostels()
      .then((data) => {
        console.log(data);
        // Update hostelData state with fetched data
        const mappedData = data.map((hostel) => ({
          id: hostel.id,
          name: hostel.name,
          address: hostel.address,
          picture: hostel.picture,
          priceRange: hostel.priceRange,
          reviews: hostel.reviews,
          amenities: hostel.amenities || [],
        }));

        // setTimeout(() => {
        setIsVisible(true);
        // }, 5000);

        setHostelData(mappedData);
      })
      .catch((error) => console.error("Error fetching Hostels:", error));
  }, []);

  return (
    <>
      {isVisible ? (
        <div className="grid grid-cols-1  md:pl-8 pl-0">
          {hostelData.map((hostel) => (
            <HostelComponent
              key={hostel.id}
              image={hostel.picture} // Assuming picture is the image URL
              name={hostel.name}
              location={hostel.address} // Assuming address is the location
              reviews={hostel.reviews}
              price={hostel.priceRange} // Assuming priceRange is a string
              amenities={hostel.amenities}
            />
          ))}
        </div>
      ) : (
        <HostelSkeleton />
      )}
    </>
  );
};

export default HostelList;
