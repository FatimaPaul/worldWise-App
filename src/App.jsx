import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./Pages/Product"
import Homepage from "./Pages/Homepage"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/pageNotFound"


export default function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      {/* root url */}
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="product" element={<Product/>}></Route>
      <Route path="pricing" element={<Pricing/>}></Route>
      {/* it will cathc that router which doesnt match any path on the top */}
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}