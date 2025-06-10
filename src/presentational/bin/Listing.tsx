import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoMdCash } from "react-icons/io";
import type { IBinProps } from "../../types/bin";

function Listing({ bin }: { bin: IBinProps }) {
  // Helper function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(price);
  };

  // Helper function to get status based on bin properties
  const getStatus = () => {
    if (bin.forbidden)
      return { text: "Forbidden", color: "bg-red-100 text-red-800" };
    if (!bin.allowed_on_road)
      return {
        text: "Road Restricted",
        color: "bg-yellow-100 text-yellow-800",
      };
    return { text: "Available", color: "bg-green-100 text-green-800" };
  };

  const status = getStatus();
  const totalPrice = bin.price_before_vat * (1 + bin.vat / 100);

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-80 max-w-96 border border-gray-100">
      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.color}`}
        >
          {status.text}
        </span>
      </div>

      {/* Heavy Waste Badge - Only show if applicable */}
      {bin.allows_heavy_waste && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Heavy Waste
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          alt="Waste bin"
          src="https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {bin.size} yd³ Waste Bin
          </h3>
          <p className="text-sm text-gray-600">
            📍 {bin.area || "Location not specified"}, {bin.postcode}
          </p>
        </div>

        {/* Simplified Stats - Only show key info */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-blue-100 rounded-full text-blue-600">
              <RiDeleteBin4Fill />
            </div>
            <div>
              <p className="text-xs text-gray-500">Size</p>
              <p className="text-sm font-medium text-gray-900">
                {bin.size} yd³
              </p>
            </div>
          </div>

          <div className="flex items-center p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 mr-3 bg-green-100 rounded-full text-green-600">
              <IoMdCash />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Price</p>
              <p className="text-sm font-medium text-green-600">
                {formatPrice(totalPrice)}
              </p>
            </div>
          </div>
        </div>

        {/* Simplified pricing - Just show hire period and total */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-gray-600">Hire Period</span>
            <span className="font-medium text-gray-900">
              {bin.hire_period_days} days
            </span>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-gray-900">Total (inc. VAT)</span>
            <span className="text-indigo-600">{formatPrice(totalPrice)}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`w-full font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            bin.forbidden
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500"
          }`}
          disabled={bin.forbidden}
        >
          {bin.forbidden ? "Not Available" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default Listing;
