import { GroceryGridCards } from "../../../utils/GroceriesData"
import GroceryCard from "../../Cards/GroceryCard"


export default function GroceryOption(){


    return(
        <div className="   w-[80%]  container mx-auto mt-20 ">
            <h1 className="text-3xl font-bold   text-[#02060C]/95">Shop groceries on Instamart</h1>
            <div className="  container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
               {
                    GroceryGridCards.map((foodData)=>
                      
                      <GroceryCard key = {foodData.id} foodData ={foodData} />

                    )
               }
                
            </div>
        </div>
    )
}