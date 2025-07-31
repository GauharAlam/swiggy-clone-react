import{imageGridCards} from "../utils/FoodData"
import FoodCard from "./FoodCard";

export default function FoodOption(){
    return(
        <>
            <div className="w-[80%] container mx-auto flex flex-wrap items-center justify-center mt-20 gap-3">
                {
                    imageGridCards?.map((foodData)=>
                    <FoodCard key={foodData.id} foodData ={foodData} />
                    )
                }
            </div>
        </>
    )
}