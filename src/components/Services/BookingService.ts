import { BookingData} from "components/Models/Data";
const API_URL = process.env.REACT_APP_API_BASE_URL;

export const BookingService = {
    getBooking: async (): Promise<BookingData[]> => {
        const token = localStorage.getItem('token');
        
        const dataList = await fetch(
             `${API_URL}/Booking/GetBooking`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the request headers
                },
            }
        );

        if (!dataList.ok) {
            throw new Error(`Error fetching data: ${dataList.statusText}`);
        }

        const viewList = await dataList.json();
        return viewList;
    }
};

