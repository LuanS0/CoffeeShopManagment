import { HeaderContainer, Logo } from "./style";
import LogoIcon from "../../assets/logo-coffeeshop-2.png"
import Navbar from "../Navbar";

// DEFAULT NPUT COMPONENT
const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Logo src={LogoIcon}/>
                <Navbar />
            </HeaderContainer>
        </>
    )
}

export default Header;