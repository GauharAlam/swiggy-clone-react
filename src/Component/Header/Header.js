import { Link } from "react-router-dom"
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="box-border bg-[#FF5200] py-6 relative z-[1001] font-[Gilroy]">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full max-w-[1200px] px-4 md:px-8 mx-auto">
        {/* Logo */}
        <img
          className="w-32 h-10 md:w-40 md:h-12 cursor-pointer"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="logo"
        />

        {/* Hamburger Button (visible only on mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white text-base lg:text-lg font-semibold">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
          <a className="border border-white py-2 px-3 lg:py-3 lg:px-4 rounded-lg" target="_blank" href="">Get the App</a>
          <a className="bg-black py-2 lg:py-[14.8px] px-6 lg:px-[44px] border border-black rounded-[12px]" href="">Sign in</a>
        </div>
      </div>

      {/* Mobile Menu (only when open) */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 text-white text-lg font-semibold md:hidden">
          <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
          <a className="border border-white py-2 px-4 rounded-lg" target="_blank" href="">Get the App</a>
          <a className="bg-black py-2 px-8 border border-black rounded-[12px]" href="">Sign in</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-12 pb-8 relative">
        {/* Left & Right Images */}
        <img
          className="hidden md:block h-72 w-48 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="photo"
        />
        <img
          className="hidden md:block h-72 w-48 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="photo"
        />

        {/* Main Text */}
        <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[90%] md:max-w-[60%] font-bold container mx-auto text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        {/* Inputs */}
        <div className="max-w-[95%] sm:max-w-[80%] md:max-w-[70%] container mx-auto flex flex-col md:flex-row gap-4 mt-6 justify-center text-black font-[Gilroy]">
          <input
            className="bg-white px-4 py-3 md:px-6 md:py-4 w-full md:w-[40%] text-base md:text-lg border rounded-[16px] font-bold"
            placeholder="Enter your delivery location"
          />
          <input
            className="bg-white px-4 py-3 md:px-6 md:py-4 w-full md:w-[50%] text-base md:text-lg border rounded-[16px] font-bold"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>

      {/* Bottom Banner Section */}
      <div className="max-w-[90%] md:max-w-[80%] container mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4">
        <Link to="/restaurant">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt="food img"
          />
        </Link>

        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt="instamart img"
          />
        </a>

        <a href="https://www.swiggy.com/dineout">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt="Dineout img"
          />
        </a>
      </div>
    </header>
  );
}
