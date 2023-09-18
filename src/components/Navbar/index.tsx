import { Link } from "react-router-dom";
import { Nav, NavItem } from "./style";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavItem><Link to={'/'}>Home</Link></NavItem>
                <NavItem><Link to={'/products'}> Our Products</Link></NavItem>
                <NavItem><Link to={'/dashboard'}>Dashboard</Link></NavItem>
                {/* <NavItem><Link to={'/delivery'}>Delivery</Link></NavItem> */}
            </Nav>

        </>
    )
}

export default Navbar;