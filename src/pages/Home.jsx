import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { products } from "../data";

function Home() {
  //const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  // const [posts, setPosts] = useState([]);

  // async function fetchProducts() {
  //   setLoading(true);
  //   try {
  //     const result = await fetch(API_URL);
  //     const data = await result.json();
  //     setPosts(data);
  //   } catch (e) {
  //     alert("ERROR : ", e);
  //     setPosts([]);
  //   }
  //   setLoading(false);
  // }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mt-[70px]">
      {loading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-[100px]">
          {products.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
