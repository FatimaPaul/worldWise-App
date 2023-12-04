import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./Pages/product"
import Homepage from "./Pages/homepage"
import Pricing from "./Pages/pricing"
import PageNotFound from "./Pages/pageNotFound"
import Login from "./Pages/login"

import AppLayout from "./Pages/applayout";


export default function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      {/* root url */}
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="product" element={<Product/>}></Route>
      <Route path="pricing" element={<Pricing/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      {/* it will catch that router which doesnt match any path on the top */}
      <Route path="/applayout" element={<AppLayout/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}