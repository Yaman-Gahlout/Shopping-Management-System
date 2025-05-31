import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

function CartItem({ item }) {
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }

  const price = Math.floor(item.price * 85.31);

  return (
    <div className="flex gap-[50px] pb-[30px] border-b-2 border-gray-800 mt-[35px]">
      <div className="flex justify-center items-center">
        <img src={item.image} alt="/" className="w-[180px]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-gray-900 font-bold text-xl">{item.title}</div>
        <div className="text-gray-400">
          {item.description.slice(0, 110) + "..."}
        </div>
        <div className="flex items-center justify-between mt-[30px]">
          <p className="text-green-600 font-bold">Rs. {price}</p>
          <div className="mr-6">
            <MdDeleteForever
              onClick={removeFromCart}
              className="text-2xl cursor-pointer text-red-600"
            ></MdDeleteForever>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
