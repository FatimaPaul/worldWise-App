import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "./logo";
// in Link we dont have the class attritubute to check which page is active so we use "Navlink"
function Navbar() {
    return (
        <nav className={styles.nav}>
            <Logo/>
            <ul >
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/product">Products</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/login" className={styles.ctaLink}>Login</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar;
