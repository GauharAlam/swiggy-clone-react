import { Link } from "react-router-dom"

export default function Header(){

    return(
        <header className=" box-border bg-[#FF5200] py-8  relative z-[1001] font-[Gilroy]  " >
            <div className="flex items-center justify-between box-border w-full max-w-[1200px] px-8 mx-auto">
                <img className="w-40 h-12 cursor-pointer" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logo" />
                <div className="flex items-center justify-center box-border gap-8 text-white text-lg font-semibold">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-lg"  target="_blank" href="">Get the App</a>
                    <a className="bg-black py-[14.8px] px-[44px] border border-black rounded-[12px] " href="">Sign in</a>
                </div>
            </div>
            <div className="pt-16 pb-8 relative">
                
                <img className="h-110 w-64 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="photo" />
                <img className="h-110 w-64 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="photo" />
                <div className="text-white  text-5xl max-w-[60%] font-bold container mx-auto text-center">
                    Order food & groceries. Discover best restaurants.Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-4 mt-6 justify-center text-black font-[Gilroy]">
                    <input className="bg-white px-6 py-4 w-[40%] text-lg leading-[22px] border  rounded-[16px] font-bold "  placeholder="Enter your delivery location" />
                    <input className="bg-white px-6 py-4  w-[50%] text-lg border  rounded-[16px] font-bold"  placeholder="Search for restaurant,item or more" />
                </div>
            </div>


            <div className="max-w-[80%] container mx-auto flex">

            <Link to="/restaurant">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="food img" />
            </Link>

            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="instamart img" />
            </a>

            <a href="https://www.swiggy.com/dineout">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="Dineout img" />
            </a>

            </div>
            
        </header>
    )
}