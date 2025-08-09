import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCards";

export default function RestaurantMenu(){

    let {id} = useParams();

    const [RestData , setRestData] = useState([]);

    useEffect(() => {
    async function fetchData() {
    // console.log("hi");
    const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await fetch(proxyUrl + swiggyApi);
    // console.log(response);
    
    const data = await response.json();

    // console.log("data", data);
    

    const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
     const filterData = tempData.filter((items)=>'title'in items?.card?.card);
    // console.log("fiil",filterData);
    
    setRestData(filterData);

  }

  fetchData();
}, []);


    return(
        <div className="max-w-3xl mx-auto px-4">
           {
            RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
           }
        </div>
    )
}