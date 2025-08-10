import RestInfo from "./Restinfo"


export default function MenuCard({menuItems}){

    // Case: menuItems has "categories"
    if("categories" in menuItems)
{
    return(
        <div className="w-full">
        <p className="text-2xl font-bold">{menuItems?.title}</p>
        <div>
            {
                menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items}></MenuCard>)
            }
        </div>
        </div>
    )
}

    return(
        <div className="w-full">
            <p className="text-3xl font-bold">{menuItems?.title}</p>
            <div>
                {
                    menuItems?.itemCards?.map((items)=>{
                        // Add this console.log to inspect the data for each item
                        {/* console.log("Item Info Object:", items?.card?.info);  */}
                        
                        return <RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}></RestInfo>
                    })
                }
            </div>
        </div>
    )
}