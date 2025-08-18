import React from "react";
import ReactDom from "react-dom/client"
import Home from "./Component/Features/Home/Home"
import Restaurant from "./Component/Features/Restaurant/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import RestaurantMenu from "./Component/Features/Restaurant/RestaurantMenu";
import SearchFood from "./Component/Features/Food/SearchFood";



function App(){
    return(
        <>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element ={<Home></Home>}></Route>
                    <Route path="/restaurant" element ={<Restaurant></Restaurant>}></Route>
                    <Route path = "/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
                    <Route path = "/city/delhi/:id/search" element = {<SearchFood></SearchFood>}></Route>
                </Routes>   
            </BrowserRouter>
        </>
    )
}




ReactDom.createRoot(document.getElementById("root")).render(<App></App>)