import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const location = useLocation();
  const post = location.state;

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }
  return (
    <div className="flex justify-center items-center">
      <div className="h-[500px] w-[1000px] flex gap-[50px] mt-[100px] justify-center ">
        <div className="w-[40%]">
          <img src={post.image} alt="" className="h-[400px] w-[400px]" />
        </div>
        <div className="w-[60%]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-500 text-justify">{post.description}</p>
            <p className="text-green-700 text-2xl font-bold mt-[10px]">
              ${post.price}
            </p>
          </div>
          <div className="mt-[100px] flex gap-[50px] items-center ">
            <NavLink to={"/order"}>
              <button className="px-[80px] py-[10px] bg-green-600 border-2 border-green-600 text-white rounded-xl text-lg hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition duration-300 ease-in">
                Buy Now
              </button>
            </NavLink>
            <div>
              {cart.some((p) => p.id === post.id) ? (
                <button
                  className="text-gray-700 border-2 border-gray-700 font-semibold w-[240px] py-[10px] rounded-xl text-lg 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in"
                  onClick={removeFromCart}
                >
                  Remove item
                </button>
              ) : (
                <button
                  className="text-gray-700 border-2 border-gray-700 font-semibold w-[240px] py-[10px] rounded-xl text-lg 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
