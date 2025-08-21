import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MenuCard from "../../Cards/MenuCards";

export default function RestaurantMenu() {
  let { id } = useParams();

  const [RestData, setRestData] = useState([]);
  const [selected, setselected] = useState();

  useEffect(() => {
    async function fetchData() {
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`;

      const response = await fetch(swiggyApi);
      const data = await response.json();

      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter(
        (items) => "title" in items?.card?.card
      );

      setRestData(filterData);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {/* 🔹 Search Section */}
      <div className="w-[95%] md:w-[80%] mx-auto mt-10 md:mt-20 mb-6 md:mb-10">
        <Link to={`/city/delhi/${id}/search`}>
          <p className="w-full text-center py-3 md:py-4 bg-gray-200 text-lg md:text-2xl rounded-2xl cursor-pointer">
            Search for dishes
          </p>
        </Link>
      </div>

      {/* 🔹 Filter Buttons */}
      <div className="w-[95%] md:w-[80%] flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto mt-8 md:mt-20 mb-10 md:mb-16">
        <button
          className={`text-base md:text-xl py-2 px-6 md:px-8 border rounded-2xl font-semibold transition ${
            selected === "veg" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setselected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-base md:text-xl py-2 px-6 md:px-8 border rounded-2xl font-semibold transition ${
            selected === "nonveg" ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setselected(selected === "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>

      {/* 🔹 Menu List */}
      <div className="w-[95%] md:max-w-[80%] mx-auto px-2 md:px-4 mt-10 md:mt-20">
        {RestData.map((menuItems) => (
          <MenuCard
            key={menuItems?.card?.card?.title}
            menuItems={menuItems?.card?.card}
            foodSelected={selected}
          />
        ))}
      </div>
    </div>
  );
}
