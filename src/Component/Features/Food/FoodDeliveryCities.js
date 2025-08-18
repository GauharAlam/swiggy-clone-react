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
  "Guntur"
];

// Constants to control the grid display
const CITIES_PER_ROW = 4;
const VISIBLE_ROWS = 3;
const INITIAL_VISIBLE_COUNT = CITIES_PER_ROW * VISIBLE_ROWS;

export default function FoodDeliveryCities() {
  // State to manage the expanded/collapsed view
  const [isExpanded, setIsExpanded] = useState(false);

  // Reusable style for the toggle button
  const toggleButtonStyle = "border border-gray-300 rounded-xl py-4 px-2 text-center font-medium text-orange-500 hover:shadow-md transition";

  return (
    <>
      <div className="w-full mt-20 mb-20">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="App download banner" />
      </div>
      <div className="my-10 max-w-[70%] mx-auto">
        <h2 className="text-2xl font-bold mb-6">Cities with food delivery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {isExpanded ? (
            <>
              {/* --- EXPANDED VIEW --- */}
              {/* Show all cities from the array */}
              {foodCities.map((city, index) => (
                <button
                  key={index}
                  className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
                >
                  Order food online in {city}
                </button>
              ))}
              {/* Add the "Show Less" button at the end */}
              <button
                onClick={() => setIsExpanded(false)}
                className={toggleButtonStyle}
              >
                Show Less ⌃
              </button>
            </>
          ) : (
            <>
              {/* --- COLLAPSED VIEW --- */}
              {/* Show the first 11 cities (12 - 1) */}
              {foodCities.slice(0, INITIAL_VISIBLE_COUNT - 1).map((city, index) => (
                <button
                  key={index}
                  className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
                >
                  Order food online in {city}
                </button>
              ))}
              {/* Add the "Show More" button in the 12th grid slot */}
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
