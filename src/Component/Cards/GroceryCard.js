export default function GroceryCard({ foodData }) {
  return (
    <div className="flex-none w-24 sm:w-32 md:w-40 lg:w-48">
      <a href={foodData?.action?.link} target="_blank" rel="noopener noreferrer">
        <div className="rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-24 sm:h-28 md:h-32 lg:h-36 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              foodData?.imageId
            }
            alt={foodData?.action?.text || "Grocery image"}
          />
        </div>
      </a>
      <h2 className="mt-2 text-[#02060CBF] text-sm sm:text-base md:text-lg font-semibold tracking-[-0.5px] leading-6 text-center">
        {foodData?.action?.text}
      </h2>
    </div>
  );
}
