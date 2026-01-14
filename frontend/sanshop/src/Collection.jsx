import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";

const Collection = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, product) => {
    return sum + (product.discountPrice || product.price);
  }, 0);

  // Empty cart
  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Start shopping and add some items to your cart!</p>
          <Link
            to="/products"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">You have {cart.length} item(s) in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {cart.map((product, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border-b pb-6 last:border-b-0"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      {product.image ? (
                        <img
                          src={`http://localhost:3000${product.image}`}
                          alt={product.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded text-xs">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {product.description || "No description available"}
                      </p>

                      <div className="flex items-center gap-3 mt-3">
                        <p className="text-lg font-bold text-gray-900">
                          ₹ {product.discountPrice || product.price}
                        </p>
                        {product.discountPrice && (
                          <span className="text-sm line-through text-gray-400">
                            ₹ {product.price}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="mt-3 text-red-600 hover:text-red-700 font-medium text-sm transition"
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>₹ 0</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                <span>Total</span>
                <span>₹ {totalPrice.toFixed(2)}</span>
              </div>

             

              <Link
                to="/products"
                className="block w-full text-center bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
