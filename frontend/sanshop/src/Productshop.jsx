import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

const Productshop = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/products/product"
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* ===== Sidebar ===== */}
      <aside className="w-56 bg-white border-r p-6 hidden md:block">
        <h2 className="text-xl underline font-bold text-gray-900">Sanshop</h2>

        {/* Light sidebar paragraph */}
       

        <nav className="mt-6 space-y-4 text-gray-700">
          <Link to="/home" className="block w-full text-left hover:text-black transition">
            Home
          </Link>
          <Link to="/collection" className="block w-full text-left hover:text-black transition">
            Collection
          </Link>
          <Link to="/contact" className="block w-full text-left hover:text-black transition">
            Contact
          </Link>
        </nav>
        <br />
        <br />
        <hr />
        <br />
        <br />
         <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          A curated space for novels and thoughtfully selected products,
          designed to keep things simple and meaningful.
        </p>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Sanshop
          </h1>
          <p className="text-gray-600 mt-2">
            Discover amazing novels and products curated specially for you.
          </p>
        </div>

        {/* Products */}
        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No products available</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-13">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-md shadow-sm hover:shadow-md transition p-3"
              >
                {/* Image */}
                {product.image ? (
                  <img
                    src={`http://localhost:3000${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded text-xs">
                    No Image
                  </div>
                )}

                {/* Info */}
                <div className="mt-2">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-gray-800 font-medium">
                      ₹ {product.discountPrice || product.price}
                    </p>

                    {product.discountPrice && (
                      <span className="text-xs line-through text-gray-400">
                        ₹ {product.price}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product);
                      navigate("/collection");
                    }}
                    className="mt-2 w-full text-sm bg-gray-900 text-white py-1.5 rounded hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Productshop;
