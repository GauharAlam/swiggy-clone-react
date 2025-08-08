import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RestaurantMenu(){

    let {id} = useParams();

    const [RestData , setRestData] = useState(null);

  useEffect(() => {
    async function fetchData() {
        try {
            const swiggyApi = 'https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10392&submitAction=ENTER';
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(swiggyApi)}`;

            const response = await fetch(proxyUrl);
            const data = await response.json();

            // Parse the Swiggy JSON from the 'contents' string
            const swiggyData = JSON.parse(data.contents);

            console.log("Full Swiggy JSON:", swiggyData); // <-- debug here
            setRestData(swiggyData); // Now you have actual API JSON
        } catch (err) {
            console.error("Error fetching:", err);
        }
    }

    fetchData();
}, []);



    return(
        <>
            <h1>Hello Coder</h1>
            <h2>{id}</h2>
        </>
    )
}