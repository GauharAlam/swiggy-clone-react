import { useState } from "react"
import RestInfo from "../Features/Restaurant/RestInfo"


export default function MenuCard({menuItems,foodSelected}){

    const [isOpen , setisOpen] = useState(true);
    console.log(foodSelected);
    

    // Case: menuItems has "categories"
    if("categories" in menuItems)
{
    return(
        <div className="w-full">
        <p className="text-2xl font-bold">{menuItems?.title}</p>
        <div>
            {
                menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>)
            }
        </div>
        </div>
    )
}


    if(!isOpen){
        return(
        <div className="w-full">
        <div className="flex justify-between w-full">
            <p className="text-3xl font-bold">{menuItems?.title}</p>
            <button className="text-4xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'⌃'}</button>
            </div>
            <div className="h-6 bg-gray-400 mt-2 mb-2"></div>
        </div> 
        )   
    }
    if(foodSelected==='veg'){
        return(
             <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold">{menuItems?.title}</p>
            <button className="text-4xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'⌃'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info)?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-6 bg-gray-300 mt-2 mb-2"></div>
        </div>
            
        )
    }

    if(foodSelected==='nonveg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold">{menuItems?.title}</p>
            <button className="text-4xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'⌃'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !("isVeg" in food?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-6 bg-gray-300 mt-2 mb-2"></div>
        </div>
        )
    }

    return(

        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold">{menuItems?.title}</p>
            <button className="text-4xl font-bold mr-20" onClick={()=>setisOpen(!isOpen)}>{isOpen?'˅':'⌃'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-6 bg-gray-300 mt-2 mb-2"></div>
        </div>
    )
}