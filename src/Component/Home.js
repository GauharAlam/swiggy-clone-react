import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import MainFooterSection from "./MainFooterSection"

export default function Home(){

    return(
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
            <MainFooterSection></MainFooterSection>
        </>
    )
}