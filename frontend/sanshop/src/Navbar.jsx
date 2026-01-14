import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LEFT LOGO */}
        <h1 className="text-lg font-semibold text-gray-900">
          Sanshop
        </h1>

        {/* RIGHT LINKS */}
        <div className="flex gap-6 text-xl font-small text-gray-900">
          <NavLink
            to="/products"
            className="hover:text-blue-900 transition  "
          >
            Products
          </NavLink>

          <NavLink
            to="/collection"
            className="hover:text-blue-900 transition"
          >
            Collection
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-blue-900 transition"
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
