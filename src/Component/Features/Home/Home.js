import Header from "../../Header/Header"
import FoodOption from "../Food/FoodOption"
import GroceryOption from "../Food/GroceryOption"
import DineOption from "../Food/DineOption"
import MainFooterSection from "../../Layout/MainFooterSection"

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