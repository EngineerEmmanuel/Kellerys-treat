import "../Components/Styles/FooterStyles.css";
import logo from "../Components/Images/Kellery main logo.jpg"
import facebookLogo from "../Components/Images/facebook.png";
import instagramLogo from "../Components/Images/instagram.png";
import tiktokLogo from "../Components/Images/tik-tok.png";


const Footer = () => {
    return ( 
        <footer id="footer">
            
            <div className="footer-con padding">
                <div className="logo-con">
                    <img src={logo} alt="" />
                    <h4>Kellery`s Treat</h4>
                    <p>Elevating Taste, Crafting Unforgettable Joy.</p>
                    

                </div>
                <div className="time-con">
                    <h5>Monday - Saturday</h5>
                    <p>8:00am - 5:00pm</p>
                    <div className="sub-time-con">
                        <h5>Sunday</h5>
                        <p>off day</p>
                    </div>
                </div>
                <div className="contact">
                    <p>Location: <span>Ojerinde street, idi araba.</span> </p>
                    <p>Phone: <span><a href="tel:+2349022124280">09022124280</a></span> </p>
                </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0063733360976!2d3.3492993750750246!3d6.520874893471674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c322c72b787%3A0x7d7b0c1f3055dd75!2sOjerinde%20St%2C%20Idi%20Oro%20102215%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1692351604378!5m2!1sen!2sng" id="map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="social-cons padding">
                <a href="https://web.facebook.com/kellerykitchen"><img src={facebookLogo} alt="" /></a>
               
               <a href="https://www.instagram.com/kellerystreat/"> <img src={instagramLogo} alt="" /></a>
               <a href="https://www.tiktok.com/@kellerystreat?lang=en"><img src={tiktokLogo} alt="" /></a>
                
            </div>
            <p className="copy">&copy; 2023 Kellery`s Treat. All rights reserved.</p>

        </footer>
     );
}
 
export default Footer;