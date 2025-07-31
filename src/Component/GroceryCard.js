

export default function GroceryCard({foodData}){


    return(
        <div className="flex-none ">
            <a href={foodData?.action?.link}>
                <img className="h-50 w-40  object-cover"  src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt="Grocery image" />
            </a>
            <h2 className="box-border text-[#02060CBF] text-[20px] font-semibold tracking-[-0.5px] leading-6 text-center max-w-[100px] ">{foodData?.action?.text}</h2>
        </div>
    )
}