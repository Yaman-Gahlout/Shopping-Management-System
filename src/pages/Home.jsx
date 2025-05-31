import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    } catch (e) {
      alert("ERROR : ", e);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-[70px]">
      {loading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-[100px]">
          {posts.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center">
          NO Data Found
        </div>
      )}
    </div>
  );
}
export default Home;
