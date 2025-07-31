import React from "react";
import ReactDom from "react-dom/client"
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App(){
    return(
        <>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element ={<Home></Home>}></Route>
                    <Route path="/restaurant" element ={<Restaurant></Restaurant>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}




ReactDom.createRoot(document.getElementById("root")).render(<App></App>)