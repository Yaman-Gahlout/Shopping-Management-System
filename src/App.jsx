import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div>
      <div className="bg-slate-900 fixed w-[100%] z-30 top-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
