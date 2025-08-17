import FoodDeliveryCities from "./FoodDeliveryCities";
import GroceryDeliveryCities from "./GroceryDeliveryCities";
import Footer from "./Footer";

export default function MainFooterSection() {
  return (
    <div>
    <div className=" mx-auto ">
      <FoodDeliveryCities />
      <GroceryDeliveryCities />
    </div>
      <Footer />
    </div>
  );
}
