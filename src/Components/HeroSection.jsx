import "../Components/Styles/HeroStyles.css"

import heroImage from "../Components/Images/hero img.jpg";
import CakeIcon from '@mui/icons-material/Cake';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';

const HeroSection = () => {
    return ( 
        <section className="hero-section" id="home">
            <div className="hero-con padding">
                <div className="hero-text-con">
                    <h1> <span>Indulge</span> in Delightful Creations: <br/> Cakes, Cuisine, and <span>Celebrations</span> </h1>
                    <p>Experience Joyful Moments with Our Exquisite Culinary Delights, Artisanal Cakes, and Sweet Surprises That Make Every Celebration Extra Special at Kellery`s Treat.</p>
                    <div className="hero-btns">
                        <button className="first-btn"><a href="https://wa.me/2349022124280">WhatsApp Us</a> </button>
                        <button className="second-btn"><a href="#services">Services</a></button>
                    </div>
                    <div className="hero-icons">
                        <p><span><CakeIcon/></span> Amazing cakes</p>
                        <p><span><OutdoorGrillIcon/></span> Awesome food</p>
                    </div>
                </div>
                <div className="hero-image-con">
                    <img src={heroImage} alt="A delivery person" />
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;