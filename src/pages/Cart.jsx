import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="mt-[100px]">
      {cart.length > 0 ? (
        <div className="max-w-6xl flex max-md:flex-col mx-auto mt-[30px] gap-[30px] mb-[100px]">
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })}
          </div>
          <div className="flex flex-col max-md:px-[50px] justify-between w-[50%] mt-[20px]">
            <div className="flex flex-col ">
              <div className="text-xl uppercase font-semibold text-green-700">
                Your Cart
              </div>
              <div className="text-4xl uppercase font-semibold text-green-700">
                Summary
              </div>
              <p className="mt-[25px] text-lg font-semibold text-gray-600">
                <span>Total Items : {cart.length}</span>
              </p>
            </div>
            <div>
              <p className="mt-[25px] text-lg font-semibold text-gray-600">
                Total Amount :{" "}
                <span className="text-black font-bold">Rs. {totalAmount}</span>
              </p>
              <NavLink to={"/order"}>
                <button className="px-[100px] mt-[20px] py-[10px] bg-green-600 border-2 border-green-600 text-white rounded-xl text-lg hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 ease-in">
                  Buy now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center flex-col gap-[25px]">
          <h1 className="text-xl text-gray-700 font-semibold">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="px-[70px] py-[15px] bg-green-600 border-2 border-green-600 text-white rounded-xl text-lg hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 ease-in">
              Shop now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Cart;
