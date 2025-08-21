import { useState } from "react"
import RestInfo from "../Features/Restaurant/RestInfo"

export default function MenuCard({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);
  console.log(foodSelected);

  // Case: menuItems has "categories"
  if ("categories" in menuItems) {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{menuItems?.title}</p>
        <div className="space-y-4">
          {menuItems?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodSelected={foodSelected}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">{menuItems?.title}</p>
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˅" : "⌃"}
          </button>
        </div>
        <div className="h-[1px] bg-gray-400 mt-2 mb-4"></div>
      </div>
    );
  }

  // veg only
  if (foodSelected === "veg") {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">{menuItems?.title}</p>
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˅" : "⌃"}
          </button>
        </div>
        <div className="space-y-3">
          {menuItems?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            ?.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              />
            ))}
        </div>
        <div className="h-[1px] bg-gray-300 mt-4 mb-6"></div>
      </div>
    );
  }

  // non-veg only
  if (foodSelected === "nonveg") {
    return (
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">{menuItems?.title}</p>
          <button
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "˅" : "⌃"}
          </button>
        </div>
        <div className="space-y-3">
          {menuItems?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            ?.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              />
            ))}
        </div>
        <div className="h-[1px] bg-gray-300 mt-4 mb-6"></div>
      </div>
    );
  }

  // default case (all items)
  return (
    <div className="w-full px-2 sm:px-4 md:px-6">
      <div className="flex justify-between items-center w-full">
        <p className="text-lg sm:text-xl md:text-2xl font-bold">{menuItems?.title}</p>
        <button
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "˅" : "⌃"}
        </button>
      </div>
      <div className="space-y-3">
        {menuItems?.itemCards?.map((items) => (
          <RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />
        ))}
      </div>
      <div className="h-[1px] bg-gray-300 mt-4 mb-6"></div>
    </div>
  );
}
