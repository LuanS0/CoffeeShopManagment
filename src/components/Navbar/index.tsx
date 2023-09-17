import { Link } from "react-router-dom";
import { Nav } from "./style";

// DEFAULT NPUT COMPONENT
const Navbar = () => {
    // const navigate = useNavigate();

    return (
        <>
            <Nav>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
            </Nav>

        </>
    )
}

export default Navbar;