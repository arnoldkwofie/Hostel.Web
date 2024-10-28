import { Room} from "components/Models/Data";
const API_URL = process.env.REACT_APP_API_BASE_URL;

export const RoomService = {
    getRooms: async (id: string | number): Promise<Room[]> => {
        const token = localStorage.getItem('token');
        
        const dataList = await fetch(
             `${API_URL}/Room/GetsByHostelId?id=${id}`,
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



