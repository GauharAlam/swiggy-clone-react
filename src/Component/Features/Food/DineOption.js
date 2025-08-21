import { useRef } from "react";
import { dineoutRestaurants } from "../../../utils/DineData";
import DineCart from "../../Cards/DineCart";

export default function DineOption() {
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // px per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-20 mb-20 relative">
        {/* Section Heading */}
        <p className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
          Discover the best restaurants on Dineout
        </p>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          ›
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-auto mt-5 gap-4 px-2 scrollbar-hide scroll-smooth"
        >
          {dineoutRestaurants.map((RestData) => (
            <DineCart key={RestData?.info?.id} RestData={RestData} />
          ))}
        </div>
      </div>
    </>
  );
}
