import { Link } from "react-router-dom";

export default function RestCard({ restInfo }) {
  // Destructuring for cleaner code
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines
  } = restInfo?.info;

  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="w-[280px] p-3 rounded-lg transition-transform duration-200  hover:scale-95">
      <img
        // FIX: Using standard Tailwind height class and w-full.
        className="w-full h-40 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }

        alt={name}
      />

      <div className="mt-3">
        {/* FIX: Added truncate to prevent long names from breaking the layout. */}
        <h3 className="font-bold text-xl truncate">{name}</h3>
        
        <div className="flex items-center gap-2 mt-1 font-semibold text-gray-800">
          <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#28a745" />
            <polygon points="16,3 20.3,11.5 29.5,11.5 22.5,17.5 25,26.5 16,21 7,26.5 9.5,17.5 2.5,11.5 11.7,11.5" fill="#FFFFFF"/>
          </svg>
          <span className="text-lg">{avgRating}</span>
          {/* FIX: Added a separator for better UI. */}
          <span className="text-gray-400">•</span>
          <span className="text-lg">{sla?.slaString}</span>
        </div>

        {/* FIX: Joined cuisines with ", " and used truncate for readability and overflow. */}
        <p className="mt-1 text-gray-500 truncate">
          {cuisines?.join(", ")}
        </p>
      </div>
    </div>
    </Link>
  );
}