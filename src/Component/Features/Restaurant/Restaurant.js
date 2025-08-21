import { useEffect, useState } from "react";
import RestCard from "../../Cards/RestCard"
import Shimmer from "../../Shimmer/Shimmer";

export default function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const swiggyApiUrl =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2198&is-seo-homepage-enabled=true&";

        const response = await fetch(swiggyApiUrl);
        const swiggyData = await response.json();

        const restaurants =
          swiggyData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setRestData(restaurants || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (restData.length === 0) return <Shimmer />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[90%] md:w-[80%] mx-auto mt-10 md:mt-20">
      {restData?.map((restInfo) => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
      ))}
    </div>
  );
}
