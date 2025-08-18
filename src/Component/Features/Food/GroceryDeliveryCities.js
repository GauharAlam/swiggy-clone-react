import React, { useState } from "react";

const groceryCities = [
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

const CITIES_PER_ROW = 4;
const VISIBLE_ROWS = 3;
const INITIAL_VISIBLE_COUNT = CITIES_PER_ROW * VISIBLE_ROWS;

export default function GroceryDeliveryCities() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Style for the toggle button to make it stand out
  const toggleButtonStyle = "border border-gray-300 rounded-xl py-4 px-2 text-center font-medium text-orange-500 hover:shadow-md transition";

  return (
    <div className="my-10 max-w-[70%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cities with grocery delivery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {isExpanded ? (
          <>
            {/* EXPANDED: Show all cities */}
            {groceryCities.map((city, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
              >
                Order grocery delivery in {city}
              </button>
            ))}
            {/* "Show Less" button at the end */}
            <button
              onClick={() => setIsExpanded(false)}
              className={toggleButtonStyle}
            >
              Show Less ⌃
            </button>
          </>
        ) : (
          <>
            {/* COLLAPSED: Show first 11 cities */}
            {groceryCities.slice(0, INITIAL_VISIBLE_COUNT - 1).map((city, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
              >
                Order grocery delivery in {city}
              </button>
            ))}
            {/* "Show More" button in the 12th slot */}
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
  );
}