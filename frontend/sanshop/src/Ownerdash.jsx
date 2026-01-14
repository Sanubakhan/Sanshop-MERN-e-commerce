import { useNavigate } from "react-router-dom";

const OwnerDash = () => {
  const navigate = useNavigate();
  const ownerName = "Sanuba Khan";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation Header */}
      <nav className="bg-black/40 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">SANSHOP</h1>
          <button
            onClick={() => navigate("/")}
            className="text-gray-300 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Welcome Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-10 border border-gray-600 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{ownerName}</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to your SANSHOP Owner Dashboard. This is your central hub for managing your e-commerce business, tracking inventory, and growing your sales. As a trusted merchant on our platform, you have access to powerful tools designed to help you succeed.
            </p>
          </div>
        </div>

        {/* About Website Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* About Website */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-blue-500 transition shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-white">About SANSHOP</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              SANSHOP is a curated e-commerce platform dedicated to connecting quality sellers with conscious consumers. Our mission is to provide a seamless shopping experience featuring carefully selected novels and thoughtfully curated products.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We believe in keeping things simple and meaningful. Every product on SANSHOP is handpicked to ensure quality and value. Our platform empowers sellers like you to reach customers who appreciate authenticity and craftsmanship.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Join thousands of successful sellers who trust SANSHOP to grow their business with our reliable, secure, and user-friendly platform.
            </p>
          </div>

          {/* About Owner */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-purple-500 transition shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-2xl">👤</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Owner Profile</h3>
            </div>
            <div className="mb-6">
              <p className="text-gray-500 text-sm uppercase tracking-wide">Owner Name</p>
              <p className="text-2xl font-bold text-white mb-4">{ownerName}</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              As a verified seller on SANSHOP, you have full control over your inventory, pricing, and customer interactions. We provide comprehensive tools to help you manage orders, track analytics, and optimize your shop performance.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your success is our success. We're committed to supporting your business growth with regular updates, dedicated support, and a thriving community of sellers.
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-4">
              <p className="text-purple-300 text-sm">
                <span className="font-semibold">Pro Tip:</span> Regularly update your inventory and maintain excellent customer service to boost your visibility on SANSHOP.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Explore Button */}
          <button
            onClick={() => navigate("/products")}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition"></div>
            <div className="relative flex items-center justify-center">
              <span className="text-2xl mr-3">🔍</span>
              <span className="text-xl">Explore Shop</span>
            </div>
            <p className="text-sm text-blue-200 mt-2">View all products and shop details</p>
          </button>

          {/* Create Item Button */}
          <button
            onClick={() => navigate("/createitem")}
            className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition"></div>
            <div className="relative flex items-center justify-center">
              <span className="text-2xl mr-3">➕</span>
              <span className="text-xl">Create New Item</span>
            </div>
            <p className="text-sm text-purple-200 mt-2">Add new products to your inventory</p>
          </button>
        </div>

        {/* Stats Section */}
        
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 SANSHOP. All rights reserved. | Empowering sellers, one product at a time.</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDash;
