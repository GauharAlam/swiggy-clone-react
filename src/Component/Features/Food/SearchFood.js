import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"


export default function SearchFood(){

   const {id} = useParams;

   const [food , setfood] = useState("");
   const [RestData, setRestData] = useState([]);

    useEffect(() => {
       async function fetchData() {
        // data = `https://www.swiggy.com/dapi/menu/pl/search?lat=28.7040592&lng=77.10249019999999&restaurantId=${food}&isMenuUx4=true&query=${food}&submitAction=ENTER`;

         const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`;

         const proxyUrl ="https://api.codetabs.com/v1/proxy/?quest=";
   
         const response = await fetch(proxyUrl + encodeURIComponent(swiggyApi));
   
        //  console.log(response);
   
         const data = await response.json();
   
        //  console.log("data", data);
   
         const tempData =data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         const filterData = tempData?.filter((items) => "title" in items?.card?.card);
         console.log("fiil",filterData);
   
         setRestData(filterData);
       }
       

        fetchData();
       
     }, []);


    return(
        <div className="w-[80%] mx-auto mt-20">
            <input className="w-full pl-10 py-3 text-2xl bg-gray-200 rounded-2xl border" placeholder="Search here..." onChange={(e)=>setfood(e.target.value)} />
        </div>
    )
}