import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoMdCash } from "react-icons/io";
import yarder4 from "../../assets/images/4-yarder-skip.jpg";
import yarder6 from "../../assets/images/6-yarder-skip.jpg";
import yarder8 from "../../assets/images/8-yarder-skip.jpg";
import yarder12 from "../../assets/images/12-yarder-skip.jpg";
import yarder16 from "../../assets/images/16-yarder-skip.jpg";
import yarder20 from "../../assets/images/20-yarder-skip.jpg";
import yarder40 from "../../assets/images/40-yarder-skip.jpg";
import { formatPrice, getStatus, getSkipImage } from "../../utils/skip";
import { useState } from "react";
import type { ISkipLisingProps } from "../../types/skip";

function Listing({ skip, selected, setSelected }: ISkipLisingProps) {
  const [schedule, setSchedule] = useState(false);
  const imageMap: { [key: number]: string } = {
    4: yarder4,
    6: yarder6,
    8: yarder8,
    12: yarder12,
    16: yarder16,
    20: yarder20,
    40: yarder40,
  };

  const status = getStatus(skip);
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const skipImage = getSkipImage(skip.size, imageMap);
  const isSelected = skip.id === selected;

  const handleCardClick = () => {
    if (!skip.forbidden) {
      setSelected(skip.id);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    if (!skip.forbidden) {
      setSelected(skip.id);
      setSchedule(true);
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-80 max-w-96 border-2 cursor-pointer ${
        isSelected
          ? "border-indigo-500 ring-2 ring-indigo-200 transform scale-105"
          : "border-gray-100 hover:border-indigo-300"
      } ${skip.forbidden ? "opacity-60 cursor-not-allowed" : ""}`}
      onClick={handleCardClick}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-3 left-3 z-20">
          <div className="flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.color}`}
        >
          {status.text}
        </span>
      </div>

      {/* Heavy Waste Badge - Adjust position when selected */}
      {skip.allows_heavy_waste && (
        <div
          className={`absolute top-3 z-10 ${isSelected ? "left-11" : "left-3"}`}
        >
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Heavy Waste
          </span>
        </div>
      )}

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          alt={`${skip.size} yard skip`}
          src={skipImage}
          className={`w-full h-32 object-cover transition-transform duration-300 ${
            isSelected ? "scale-105" : "group-hover:scale-105"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Selected Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-indigo-600 bg-opacity-10"></div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="mb-4">
          <h3
            className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
              isSelected ? "text-indigo-600" : "text-gray-900"
            }`}
          >
            {skip.size} yd³ Skip
          </h3>
          <p className="text-sm text-gray-600">
            📍 {skip.area || "Location not specified"}, {skip.postcode}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div
            className={`flex items-center p-2 rounded-lg transition-colors duration-300 ${
              isSelected ? "bg-indigo-50" : "bg-gray-50"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 mr-3 rounded-full ${
                isSelected
                  ? "bg-indigo-200 text-indigo-700"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              <RiDeleteBin4Fill />
            </div>
            <div>
              <p className="text-xs text-gray-500">Size</p>
              <p className="text-sm font-medium text-gray-900">
                {skip.size} yd³
              </p>
            </div>
          </div>

          <div
            className={`flex items-center p-2 rounded-lg transition-colors duration-300 ${
              isSelected ? "bg-indigo-50" : "bg-gray-50"
            }`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 mr-3 rounded-full ${
                isSelected
                  ? "bg-indigo-200 text-indigo-700"
                  : "bg-green-100 text-green-600"
              }`}
            >
              <IoMdCash />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Price</p>
              <p
                className={`text-sm font-medium ${
                  isSelected ? "text-indigo-600" : "text-green-600"
                }`}
              >
                {formatPrice(totalPrice)}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`mb-4 p-3 rounded-lg transition-colors duration-300 ${
            isSelected ? "bg-indigo-50" : "bg-gray-50"
          }`}
        >
          <div className="flex justify-between items-center text-sm mb-1">
            <span className="text-gray-600">Hire Period</span>
            <span className="font-medium text-gray-900">
              {skip.hire_period_days} days
            </span>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-gray-900">Total (inc. VAT)</span>
            <span
              className={isSelected ? "text-indigo-600" : "text-indigo-600"}
            >
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        <button
          className={`w-full font-medium py-2 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            skip.forbidden
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : isSelected
              ? "bg-indigo-700 hover:bg-indigo-800 text-white focus:ring-indigo-500"
              : "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500"
          }`}
          disabled={skip.forbidden}
          onClick={handleButtonClick}
        >
          {skip.forbidden
            ? "Not Available"
            : isSelected
            ? schedule
              ? "Selected ✓"
              : "Select This Skip"
            : "Select Skip"}
        </button>
      </div>
    </div>
  );
}

export default Listing;
