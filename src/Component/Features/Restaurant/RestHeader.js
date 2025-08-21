export default function RestHeader() {
  return (
    <div className="container mx-auto py-4 px-4 bg-gray-200 text-xl sm:text-2xl flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
      
      {/* Logo */}
      <div className="w-full sm:w-auto text-center sm:text-left">
        <p className="font-bold">Swiggy</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-end w-full sm:w-auto gap-4 sm:gap-8">
        <p>Swiggy Corporate</p>
        <p>Search</p>
        <p>Offers</p>
        <p>Help</p>
        <p>Sign In</p>
        <p>Cart</p>
      </div>
    </div>
  );
}
