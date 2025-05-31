import { useRef, useState } from "react";
import toast from "react-hot-toast";
import OrderSummary from "../components/OrderSummary";

export default function Order() {
  const firstNameEle = useRef();
  const LastNameEle = useRef();
  const phoneNoEle = useRef();
  const emailEle = useRef();
  const deliveryAddressEle = useRef();
  const cityEle = useRef();
  const stateEle = useRef();
  const pinCodeEle = useRef();
  const modeOfPaymentEle = useRef();

  const orderInfo = {
    firstName: "",
    LastName: "",
    phoneNo: "",
    email: "",
    deliveryAddress: "",
    city: "",
    state: "",
    pinCode: "",
    modeOfPayment: "",
  };

  const [orderDetails, setOrderDetails] = useState(orderInfo);
  const [orderSummary, setOrderSummary] = useState(false);

  function SubmitHandler(event) {
    event.preventDefault();
    const order = {
      firstName: firstNameEle.current.value,
      LastName: LastNameEle.current.value,
      phoneNo: phoneNoEle.current.value,
      email: emailEle.current.value,
      deliveryAddress: deliveryAddressEle.current.value,
      city: cityEle.current.value,
      state: stateEle.current.value,
      pinCode: pinCodeEle.current.value,
      modeOfPayment: modeOfPaymentEle.current.value,
    };

    setOrderDetails(order);
    console.log(order);
    toast.success("Address saved and Order Placed successfully");
    setOrderSummary(true);
  }

  return (
    <div className="min-h-[80vh]  flex flex-col items-center mt-[100px]">
      {orderSummary ? (
        <OrderSummary orderDetails={orderDetails}></OrderSummary>
      ) : (
        <div>
          <div className="text-center text-3xl font-bold">
            <h1 className="text-green-600">Fill Up Details & Place Order</h1>
          </div>
          <form
            action="/"
            onSubmit={SubmitHandler}
            className="flex flex-col items-center"
          >
            <div className="mt-[25px]">
              <label htmlFor="name" className="text-lg ">
                Full Name
              </label>
              <div className="flex max-md:flex-col gap-[20px] mt-[5px]">
                <input
                  type="text"
                  ref={firstNameEle}
                  id="name"
                  required
                  placeholder="First Name"
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
                <input
                  type="text"
                  ref={LastNameEle}
                  id="name"
                  required
                  placeholder="Last Name"
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="flex max-md:flex-col gap-[20px] mt-[20px]">
              <div className="flex flex-col">
                <label htmlFor="Phone-Number" className="text-lg ">
                  Phone Number
                </label>
                <input
                  type="text"
                  ref={phoneNoEle}
                  required
                  placeholder="+91 00000 00000"
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg ">
                  E-mail
                </label>
                <input
                  type="email"
                  ref={emailEle}
                  required
                  placeholder="ex: myname@gmail.com"
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="address" className="text-lg ">
                Delivery Address
              </label>
              <input
                type="text"
                ref={deliveryAddressEle}
                required
                className="p-[10px_15px] w-[720px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
              />
            </div>
            <div className="flex max-md:flex-col gap-[20px] mt-[20px]">
              <div className="flex flex-col">
                <label htmlFor="city" className="text-lg ">
                  City
                </label>
                <input
                  type="text"
                  ref={cityEle}
                  required
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" className="text-lg ">
                  State
                </label>
                <input
                  type="text"
                  ref={stateEle}
                  required
                  className="p-[10px_15px] w-[350px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="pincode" className="text-lg">
                Pin Code
              </label>
              <input
                type="text"
                ref={pinCodeEle}
                required
                className="p-[10px_15px] w-[720px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
              />
            </div>
            <div className="flex flex-col mt-[20px]">
              <label htmlFor="modeOfPayment" className="text-lg">
                Mode of Payment
              </label>
              <select
                name="modeOfPayment"
                ref={modeOfPaymentEle}
                id="modeOfPayment"
                className="p-[10px_15px] w-[720px] max-md:w-[600px] max-sm:w-[350px] rounded-md border-[2px] border-gray-500 outline-none"
              >
                <option value=""> -- Select -- </option>
                <option value="Online">Online</option>
                <option value="Cash On Delivery">Cash On Delivery</option>
              </select>
            </div>

            <button className="px-[90px] mt-[30px] py-[10px] bg-green-600 border-2 border-green-600 text-white rounded-xl text-lg hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 ease-in mb-[50px]">
              Save & Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
