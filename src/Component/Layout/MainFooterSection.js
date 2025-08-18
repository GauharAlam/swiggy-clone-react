import FoodDeliveryCities from "../Features/Food/FoodDeliveryCities";
import GroceryDeliveryCities from "../Features/Food/GroceryDeliveryCities";
import Footer from "../Footer/Footer";

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
