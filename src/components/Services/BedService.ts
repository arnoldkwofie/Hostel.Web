const API_URL = process.env.REACT_APP_API_BASE_URL;

export const BedService = {
    Book: async (id: string | number) => {
        const bookingData = { id: id };
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${API_URL}/Booking/Create`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
               
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                console.error( errorData.detailedMessage); 
                return { isSuccessful: false, message: errorData.message }; 
            }

            const data = await response.json(); 
            if (!data.isSuccessful) {
                console.error(data.message); 
                return { isSuccessful: false, message: data.message }; 
            }

            return { isSuccessful: true, data }; 

        } catch (error) {
            console.error(error);
            return { isSuccessful: false, message: 'An unexpected error occurred.' }; 
        }
    }
}

export default BedService