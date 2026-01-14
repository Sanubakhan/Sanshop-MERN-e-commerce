import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Createitem = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    backgroundColor: "#ffffff",
    panelColor: "#f3f4f6",
    textColor: "#000000"
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      if (formData.discount) data.append("discount", formData.discount);
      data.append("backgroundColor", formData.backgroundColor);
      data.append("panelColor", formData.panelColor);
      data.append("textColor", formData.textColor);
      if (imageFile) data.append("image", imageFile);

      const response = await axios.post(
        "http://localhost:3000/api/products/addproduct",
        data,
        {
        withCredentials: true,
        }
      );

      setMessage("Product created successfully!");
      setFormData({
        name: "",
        price: "",
        discount: "",
        backgroundColor: "#ffffff",
        panelColor: "#f3f4f6",
        textColor: "#000000"
      });
      setImageFile(null);
      setImagePreview("");
      navigate("/products");
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message || "Failed to create product"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Item</h1>

            {message && (
              <div className={`mb-4 p-4 rounded-md ${message.includes("Error") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter product name"
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter price"
                />
              </div>

              {/* Discount (Optional) */}
              <div>
                <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-2">
                  Discount (Optional)
                </label>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Enter discount percentage"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image *
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-900 file:text-white hover:file:bg-gray-800 file:cursor-pointer"
                />
                {imagePreview && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full max-w-md h-48 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>

              {/* Background Color */}
              <div>
                <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700 mb-2">
                  Background Color *
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="color"
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    className="h-10 w-20 cursor-pointer border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={formData.backgroundColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, backgroundColor: e.target.value }))}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Panel Color */}
              <div>
                <label htmlFor="panelColor" className="block text-sm font-medium text-gray-700 mb-2">
                  Panel Color *
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="color"
                    id="panelColor"
                    name="panelColor"
                    value={formData.panelColor}
                    onChange={handleChange}
                    className="h-10 w-20 cursor-pointer border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={formData.panelColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, panelColor: e.target.value }))}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="#f3f4f6"
                  />
                </div>
              </div>

              {/* Text Color */}
              <div>
                <label htmlFor="textColor" className="block text-sm font-medium text-gray-700 mb-2">
                  Text Color *
                </label>
                <div className="flex gap-4 items-center">
                  <input
                    type="color"
                    id="textColor"
                    name="textColor"
                    value={formData.textColor}
                    onChange={handleChange}
                    className="h-10 w-20 cursor-pointer border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={formData.textColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, textColor: e.target.value }))}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="#000000"
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Product Card Preview</h3>
                <div 
                  style={{ backgroundColor: formData.backgroundColor }}
                  className="rounded-lg p-4"
                >
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Product"
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                  )}
                  <div 
                    style={{ backgroundColor: formData.panelColor, color: formData.textColor }}
                    className="rounded-lg p-4"
                  >
                    <p className="font-semibold">{formData.name || "Product Name"}</p>
                    <p className="text-sm">${formData.price || "0.00"}</p>
                    {formData.discount && <p className="text-xs">Discount: {formData.discount}%</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Creating..." : "Create Product"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Createitem;