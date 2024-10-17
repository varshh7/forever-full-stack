import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { currency } from '../App';
import parcel_icon from '../assets/parcel_icon.svg';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // Function to fetch all orders
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        'http://localhost:4000/api/order/list',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to handle order status changes
  const statusHandler=async (event,orderId)=>{
    try{
      const response=await axios.post('http://localhost:4000/api/order/status',{orderId,status:event.target.value},{headers:{token}})
      if(response.data.success){
        await fetchAllOrders()
      }

    }catch(error){
      console.log(error)
      toast.error(response.data.message)
    }
  }

  // Fetch orders when the component mounts or token changes
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Order Page</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          orders.map((order, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
              <img src={parcel_icon} alt="" className="w-16 h-16 mb-2" />
              
              <div className="mb-2">
                <p className="font-semibold">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <p className="text-gray-600">
                  {order.address.street + ", " + 
                   order.address.city + ", " + 
                   order.address.state + ", " + 
                   order.address.country + ", " + 
                   order.address.zipcode}
                </p>
                <p className="text-gray-600">{order.address.phone}</p>
              </div>

              <div className="mt-2">
                <div className="mb-2">
                  <h4 className="font-semibold">Items:</h4>
                  {order.items.map((item, index) => (
                    <p key={index} className="text-gray-700">
                      {item.name} X {item.quantity} <span className="text-sm text-gray-500">{item.size}</span>
                    </p>
                  ))}
                </div>
                <p>Method: <span className="font-semibold">{order.paymentMethod}</span></p>
                <p>Payment: <span className="font-semibold">{order.payment ? 'Done' : 'Pending'}</span></p>
                <p>Date: <span className="font-semibold">{new Date(order.date).toLocaleDateString()}</span></p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-bold">{currency} {order.amount}</p>
                <select 
                  value={order.status || "Order Placed"} // Use a default value
                  className="p-1 border border-gray-300 rounded" 
                  onChange={(event) => statusHandler(event,order._id)} // Correctly reference the function
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Orders;
