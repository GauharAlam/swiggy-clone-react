import RestInfo from "./Restinfo"


// Inside MenuCard.js

export default function MenuCard({menuItems}){
    return(
        <div>
            <p>{menuItems?.title}</p>
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