import { NavLink } from "react-router-dom"
// in Link we dont have the class attritubute to check which page is active so we use "Navlink"
function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/">HomePage</NavLink></li>
                <li><NavLink to="/product">Products</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
