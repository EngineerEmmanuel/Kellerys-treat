import "../Components/Styles/NavigationStyles.css";
import logo from "../Components/Images/Kellery main logo.jpg";
import { ShoppingBag } from "@mui/icons-material";
import { Dehaze} from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Navigation = () => {
    const [isMobile, setIsMobile]=useState(false);
    return ( 
        <nav className="">
            <div className="nav-con padding">
                <div className="logo-con">
                    <img src={logo} alt="Kellery`s logo" />
                    
                </div>
                <ul>
                <li><a href="#home">Home</a></li>
                    <li><a href="#services">Service</a></li>
                    <li> <a href="#footer">Contact</a></li>
                </ul>
                <div className="cart-icon"><ShoppingBag/></div>
                <div className="mobile-icon" onClick={()=> setIsMobile(!isMobile)}>{isMobile?<CloseIcon/>:<Dehaze/>}</div>
            </div>
            {isMobile &&
            <div className="mobile-con">
                <ul onClick={()=> setIsMobile(!isMobile)}>
                    <li onClick={()=> setIsMobile(!isMobile)}><a href="#home">Home</a></li>
                    <li onClick={()=> setIsMobile(!isMobile)}><a href="#services">Service</a></li>
                    <li onClick={()=> setIsMobile(!isMobile)}> <a href="#footer">Contact</a></li>
                </ul>
            </div>


            }
        </nav>
     );
}
 
export default Navigation;