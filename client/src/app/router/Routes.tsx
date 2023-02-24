import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../../featues/about/AboutPage";
import Catalog from "../../featues/catalog/Catalog";
import ProductDetails from "../../featues/catalog/ProductDetails";
import ContactPage from "../../featues/contact/ContactPage";
import HomePage from "../../featues/home/HomePage";
import App from "../layout/App";

export const router=createBrowserRouter([
    {
path:'/',
element:<App/>
,children:[
    
    {path:'',element:<HomePage/>},
    {path:'catalog',element:<Catalog/>},
    {path:'catalog/:id',element:<ProductDetails/>},
    {path:'about',element:<AboutPage/>},
    {path:'contact',element:<ContactPage/>}

]
    }
])