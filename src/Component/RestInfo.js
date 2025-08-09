

export default function RestInfo({restData}){
    
    // console.log("error");
    // console.log(restData?.defaultPrice);
    // console.log(restData?.name);
    
    

    return(
        <div className="flex w-full justify-between">
        <div className="w-[70%]">
        <p>{restData?.name}</p>
        <p>{"₹" + (restData?.defaultPrice / 100)}</p>
        {/* <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#228B22"/></svg> */}

        <span>{restData?.ratings?.aggregatedRating?.rating}</span>
        <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
        </div>
        <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restData?.imageId}/>
            <button className="obsoulte bottom-0 left-0 text-green-600 px-4 py-2 bg-white">Add</button>

        </div>

        </div>
    )
}