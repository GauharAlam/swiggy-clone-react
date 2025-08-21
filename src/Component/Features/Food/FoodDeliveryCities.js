import React, { useState } from "react";

const foodCities = [
  "Bangalore",
  "Gurgaon",
  "Hyderabad",
  "Delhi",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Chandigarh",
  "Jaipur",
  "Kochi", // This city will be hidden initially
  "Coimbatore",
  "Lucknow",
  "Nagpur",
  "Vadodara",
  "Indore",
  "Vizag",
  "Surat",
  "Dehradun",
  "Noida",
  "Vijayawada",
  "Mysore",
  "Nashik",
  "Pondicherry",
  "Bhubaneswar",
  "Central Goa",
  "Thiruvananthapuram",
  "Mangaluru",
  "Faridabad",
  "Guntur",
];

const CITIES_PER_ROW = 4;
const VISIBLE_ROWS = 3;
const INITIAL_VISIBLE_COUNT = CITIES_PER_ROW * VISIBLE_ROWS;

export default function FoodDeliveryCities() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleButtonStyle =
    "border border-gray-300 rounded-xl py-3 px-2 text-center font-medium text-orange-500 hover:shadow-md transition";

  return (
    <>
      {/* Banner */}
      <div className="w-full mt-10 mb-10 px-4">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
          alt="App download banner"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Cities Section */}
      <div className="my-10 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
          Cities with food delivery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {isExpanded ? (
            <>
              {foodCities.map((city, index) => (
                <button
                  key={index}
                  className="border border-gray-300 rounded-xl py-3 px-2 text-center font-medium hover:shadow-md transition text-sm sm:text-base"
                >
                  Order food online in {city}
                </button>
              ))}
              <button
                onClick={() => setIsExpanded(false)}
                className={toggleButtonStyle}
              >
                Show Less ⌃
              </button>
            </>
          ) : (
            <>
              {foodCities.slice(0, INITIAL_VISIBLE_COUNT - 1).map((city, index) => (
                <button
                  key={index}
                  className="border border-gray-300 rounded-xl py-3 px-2 text-center font-medium hover:shadow-md transition text-sm sm:text-base"
                >
                  Order food online in {city}
                </button>
              ))}
              <button
                onClick={() => setIsExpanded(true)}
                className={toggleButtonStyle}
              >
                Show More ⌄
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
