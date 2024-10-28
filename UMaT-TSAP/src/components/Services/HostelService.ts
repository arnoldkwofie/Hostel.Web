// Import the Building type correctly
import { Building, Geolocation, Picture} from "components/Models/Data";
// Define hostel data as an array
const hostelData: Building[] = [
 {
    id: 1,
    name: "Chanmbers",
    buildingType: 1,
  ownershipType: 1,
  genderOption: 1,
  geolocation: {
    longitude : "-23324456676",
    latitude : "54678665"
  },
  address: "this is the address of the hostel",
  description: "this is the description of the hostel",
  picture: "images/hostel1.jpeg",
  reviews:"4.5/5 (500 reviews)",
  priceRange: "GHC 3000 - 4000",
  amenities: ["Free Wi-Fi", "AC", "Gym", "DSTV", "Car Park"]
 },
 

 {
  id: 2,
  name: "KT",
  buildingType: 1,
ownershipType: 1,
genderOption: 1,
geolocation: {
  longitude : "-23324456676",
  latitude : "54678665"
},
address: "this is the address of the hostel",
description: "this is the description of the hostel",
picture: "images/hostel1.jpeg",
reviews:"4.5/5 (500 reviews)",
priceRange: "GHC 3000 - 4000",
amenities: ["Free Wi-Fi", "AC", "Gym", "DSTV", "Car Park"]
},


{
  id: 3,
  name: "Gold Hall",
  buildingType: 1,
ownershipType: 1,
genderOption: 1,
geolocation: {
  longitude : "-23324456676",
  latitude : "54678665"
},
address: "this is the address of the hostel",
description: "this is the description of the hostel",
picture: "images/hostel3.jpeg",
reviews:"4.5/5 (500 reviews)",
priceRange: "GHC 3000 - 4000",
amenities: ["Free Wi-Fi", "AC", "Gym", "DSTV", "Car Park"]
},


{
  id: 3,
  name: "Waterloo Hostel",
  buildingType: 1,
ownershipType: 2,
genderOption: 1,
geolocation: {
  longitude : "-23324456676",
  latitude : "54678665"
},
address: "this is the address of the hostel",
description: "this is the description of the hostel",
picture: "images/hostel3.jpeg",
reviews:"4.5/5 (500 reviews)",
priceRange: "GHC 3000 - 4000",
amenities: ["Free Wi-Fi", "AC", "Gym", "DSTV", "Car Park"]
},

{
  id: 3,
  name: "Gold Hall",
  buildingType: 1,
ownershipType: 1,
genderOption: 1,
geolocation: {
  longitude : "-23324456676",
  latitude : "54678665"
},
address: "this is the address of the hostel",
description: "this is the description of the hostel",
picture: "images/hostel3.jpeg",
reviews:"4.5/5 (500 reviews)",
priceRange: "GHC 3000 - 4000",
amenities: ["Free Wi-Fi", "AC", "Gym", "DSTV", "Car Park"]
},

]



export const HostelService = {
  
    getHostels: async (): Promise<Building[]> => {
      
      const dataList = await fetch(
        "https://localhost:7163/api/Building/GetHostels",
        {
          method: "GET"
          
        }
        
      );
      

      const viewList = await dataList.json();
        return viewList;
    }
};
