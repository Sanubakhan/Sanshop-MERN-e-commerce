import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-100 flex items-center overflow-hidden">
        
        
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sanshop
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Sanshop is your personal corner for discovering meaningful novels
            and carefully curated reads. From emotional stories to powerful
            narratives, every book here is selected to make you feel something.
            Dive into worlds filled with imagination, depth, and unforgettable
            characters.
          </p>

          <p className="text-gray-500 text-sm mb-6">
            Whether you love fiction, romance, mystery, or thought-provoking
            novels — Sanshop brings stories that stay with you long after the
            last page.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition"
          >
            Get Started
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1524578271613-d550eacf6090"
            alt="Novel"
            className="h-40 w-40 object-cover rounded-lg shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Novel"
            className="h-40 w-40 object-cover rounded-lg shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Novel"
            className="h-40 w-40 object-cover rounded-lg shadow-sm"
          />
        </div>

      </div>
    </div>
    </div>
  );
};

export default Home;
