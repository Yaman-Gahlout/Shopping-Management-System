import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { NavLink } from "react-router-dom";

export default function Product({ post }) {
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
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)] gap-3 p-4 mt-10 ml-5 rounded-xl border-2 border-gray-300 hover:border-none">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title.slice(0, 25) + "...."}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left overflow-hidden">
          {post.description.slice(0, 50) + "...."}
        </p>
      </div>
      <NavLink to={"productDetails"} state={post}>
        <div className="h-[180px]">
          <img src={post.image} alt="/" className="h-full w-full" />
        </div>
      </NavLink>
      <div className="flex justify-between gap-12">
        <div>
          <p className="text-green-600 font-semibold items-center w-full ">
            $ {post.price}
          </p>
        </div>
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in"
            onClick={addToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
