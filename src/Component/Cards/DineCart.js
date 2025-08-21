export default function DineCart({ RestData }) {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] flex-none mb-4">
      <a target="_blank" href={RestData?.cta?.link}>
        <div className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt={RestData?.info?.name}
          />

          {/* Gradient overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20
                       bg-gradient-to-t from-black/80 via-black/40 to-transparent
                       z-0"
          />

          {/* Text on top */}
          <p
            className="absolute bottom-3 left-3 text-base sm:text-lg md:text-xl
                       text-white font-extrabold z-10"
          >
            {RestData?.info?.name}
          </p>
          <p
            className="absolute bottom-3 right-3 text-base sm:text-lg md:text-xl
                       text-white font-extrabold z-10"
          >
            {RestData?.info?.rating?.value}
          </p>
        </div>
      </a>
    </div>
  );
}
