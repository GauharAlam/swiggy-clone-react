

export default function RestInfo({restData}){
    
    // console.log("error");
    // console.log(restData?.defaultPrice);
    // console.log(restData?.name);
    
    

    return(
        <>
        <div className="flex w-full justify-between mb-2 pb-2">
        <div className="w-[70%]">
        <p className="text-2xl text-gray-700 font-semibold pb-3">{restData?.name}</p>
        <p className="text-xl">{"₹"+restData?.defaultPrice / 100}</p>
        <div className="flex items-center gap-1">
         <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#228B22">
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
        </div>
        <p className="truncate">
            {restData?.description}
        </p>
        </div>
        <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restData?.imageId} alt={restData?.name}/>
            <button  className="absolute bottom-0 left-20 rounded-[4px] text-xl  -translate-x-1/2 text-green-600 px-6 py-2 bg-white font-semibold">Add</button>
        </div>

        </div>
        <hr className="mb-6 mt-2"/>
        </>
    )
}