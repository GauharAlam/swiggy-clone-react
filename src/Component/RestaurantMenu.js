import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCards";
import { Link } from "react-router-dom";

export default function RestaurantMenu() {
  let { id } = useParams();

  const [RestData, setRestData] = useState([]);
  const [selected , setselected] = useState();

  useEffect(() => {
    async function fetchData() {
      // console.log("hi");

      
      // this proxy api is better than other proxy api
      // "https://api.codetabs.com/v1/proxy/?quest="
      // "https://api.allorigins.win/get?url=";
      // "https://cors-anywhere.herokuapp.com/"
      // const proxyUrl ="https://api.codetabs.com/v1/proxy/?quest=";
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`;

     const response = await fetch(swiggyApi);

      console.log(response);

      const data = await response.json();

      // console.log("data", data);

      const tempData =data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter((items) => "title" in items?.card?.card);
      // console.log("fiil",filterData);

      setRestData(filterData);
    }

    fetchData();
  }, []);

  return (

       <div >

       <div className="w-[80%] mx-auto mt-20 mb-10">
          <Link to={`/city/delhi/${id}/search`}>
            <p className="w-full text-center py-4 bg-gray-200 text-2xl rounded-4xl">Search for dishes</p>
          </Link>
       </div>


        <div className="w-[80%] flex mx-auto mt-20 mb-16">
        <button className={`text-xl py-2 px-8 border rounded-2xl mr-4 font-semibold ${selected==="veg"?"bg-green-600":"bg-gray-300" } `} onClick={()=>setselected(selected==='veg'?null:'veg')}>Veg</button>
        <button className={`text-xl py-2 px-4 border rounded-2xl font-semibold ${selected==="nonveg"?"bg-red-500":"bg-gray-300" } `} onClick={()=>setselected(selected==='nonveg'?null:'nonveg')}>Non-Veg</button>

        </div>
    <div className="max-w-[80%] mx-auto px-4 mt-20">
      {RestData.map((menuItems) => (
        <MenuCard
          key={menuItems?.card?.card?.title}
          menuItems={menuItems?.card?.card}
          foodSelected = {selected}
        ></MenuCard>
      ))}
    </div>
    </div>
  );
}
