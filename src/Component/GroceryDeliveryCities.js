import React from "react";

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
  "Kochi",
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

export default function GroceryDeliveryCities() {
  return (
    <div className="my-10 max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cities with grocery delivery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {groceryCities.map((city, index) => (
          <button
            key={index}
            className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
          >
            Order grocery delivery in {city}
          </button>
        ))}
        <button className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium text-orange-500 hover:shadow-md transition">
          Show More ⌄
        </button>
      </div>
    </div>
  );
}
