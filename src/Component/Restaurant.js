import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const swiggyApiUrl =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6327&lng=77.2198&is-seo-homepage-enabled=true&";
        // const proxyUrl = "https://api.codetabs.com/v1/proxy/?quest=";
        const response = await fetch(swiggyApiUrl);
        const swiggyData = await response.json(); // Directly get JSON

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

  if (restData.length === 0) return <Shimmer></Shimmer>;

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5 justify-center ">
      {restData?.map((restInfo) => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>
      ))}
    </div>
  );
}
