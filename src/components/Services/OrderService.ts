import { Order, Payload } from "components/Models/Data";
const API_URL = process.env.REACT_APP_API_PAYMENT_URL;

 export const OrderService = {
    sendOrderToApi: async (order: Order) => {
        try {

          const payload: Payload = {
            payload: order,
        };


          const response =  await fetch(`${API_URL}/Order/Create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          const url = await response.text();
          console.log(url);
          return { isSuccessful: true, url:url }; 
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          return { isSuccessful: false }; 
        }
      }
      
}


export default OrderService;
