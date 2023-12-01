import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
function Product() {
    return (
        <div>
            <Navbar/>
            Product
            <Link to="/pricing">Go to price</Link>
        </div>
    )
}

export default Product
