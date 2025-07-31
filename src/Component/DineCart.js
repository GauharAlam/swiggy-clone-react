export default function DineCart({ RestData }) {
  return (
    <div className="max-w-sm flex-none">
    <a target="_blank" href={RestData?.cta?.link}>
      <div className="relative">
        <img
          className="w-full h-50 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            RestData?.info?.mediaFiles[0]?.url
          }
          alt="Restaurant photo"
        />

        {/* Gradient overlay — put this right after the img */}
        <div className="absolute bottom-0 left-0 right-0 h-20 
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                        z-0" />

        {/* Text on top of gradient */}
        <p className="absolute bottom-3 left-3 text-[20px] text-white 
                      font-extrabold z-10">
          {RestData?.info?.name}
        </p>
        <p className="absolute bottom-3 right-3 text-[20px] text-white 
                      font-extrabold z-10">
          {RestData?.info?.rating?.value}
        </p>
      </div>
      </a>
    </div>
  );
}
