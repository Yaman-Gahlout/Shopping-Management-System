import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function OrderSummary({ orderDetails }) {
  const { cart } = useSelector((state) => state);
  const totalAmount = cart.reduce((acc, curr) => acc + curr.price, 0);

  const orderID = Math.floor(Math.random() * 10000000000) + "##abc";
  const today = new Date();
  const dateOfDelivery = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  return (
    <div className="h-[100%] w-[100%] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-700 mt-[10px]">
        Order Summary
      </h1>
      <div className="h-[350px] w-[600px] max-sm:w-[400px] max-sm:h-[400px] p-[20px_15px] shadow-2xl rounded-3xl mt-[30px] flex flex-col items-center justify-center">
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Order ID :</p>
          <p className="text-lg text-gray-600">{orderID}</p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Username:</p>
          <p className="text-lg text-gray-600">
            {orderDetails.firstName + " " + orderDetails.LastName}
          </p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Mobile No.:</p>
          <p className="text-lg text-gray-600">{orderDetails.phoneNo}</p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Email:</p>
          <p className="text-lg text-gray-600">{orderDetails.email}</p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Address:</p>
          <p className="text-lg text-gray-600 ml-[60px]">
            {orderDetails.deliveryAddress +
              " " +
              orderDetails.city +
              " " +
              orderDetails.state +
              " " +
              orderDetails.pinCode}
          </p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Mode of Payment:</p>
          <p className="text-lg text-gray-600">{orderDetails.modeOfPayment}</p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Total Amount:</p>
          <p className="text-lg text-gray-600">Rs.{totalAmount}</p>
        </div>
        <div className="flex justify-between w-[80%]">
          <p className="text-xl font-bold">Date of Delivery:</p>
          <p className="text-lg text-gray-600">
            {dateOfDelivery.toDateString()}
          </p>
        </div>
      </div>
      <NavLink to={"/"}>
        <button className="px-[100px] mt-[50px] py-[10px] bg-green-600 border-2 border-green-600 text-white rounded-xl text-lg hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 ease-in">
          Show now
        </button>
      </NavLink>
    </div>
  );
}
