
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

export default function FoodDeliveryCities() {
  return (
    <>
    <div className="w-full  mt-20 mb-20">
        <img   src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
    </div>
    <div className="my-10 max-w-[80%] mx-auto">
      <h2 className="text-2xl font-bold mb-6">Cities with food delivery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {foodCities.map((city, index) => (
          <button
            key={index}
            className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium hover:shadow-md transition"
          >
            Order food online in {city}
          </button>
        ))}
        <button className="border border-gray-300 rounded-xl py-4 px-2 text-center font-medium text-orange-500 hover:shadow-md transition">
          Show More ⌄
        </button>
      </div>
    </div>
    </>
  );
}
