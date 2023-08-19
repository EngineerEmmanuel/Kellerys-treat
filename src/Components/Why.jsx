import "../Components/Styles/WhyStyles.css";
import appIcon from "../Components/Images/app icon.png";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Fade from 'react-reveal/Fade';

const Why = () => {
    return ( 
        <section className="why-section padding">
            <div className="why-us-grid-con">
                <Fade left>
                <div className="why-us-img-con">
                    <img src={appIcon} alt="" />
                </div>
                </Fade>
                


                <Fade right>
                <div className="why-us-text-con">
                    <h2>Why Kellery`s <span>Treat?</span></h2>
                    <p>We craft unforgettable moments – from artisanal cakes to tantalizing cuisine and speechless surprises. With culinary expertise and personalized touches, we turn ordinary moments into cherished memories. Join us to savor life's delights.</p>
                    <div className="why-us-listing">
                        <div className="list-con1">
                            <h4><CheckCircleOutlineIcon className="check-icon"/> Fresh and tasty foods</h4>
                        <p>Experience Flavorful Perfection: Fresh, Tasty, Unforgettable. Indulge now.</p>
                        </div>

                        <div className="list-con2">
                            <h4><CheckCircleOutlineIcon className="check-icon"/> Affordable services</h4>
                        <p>Exceptional quality, affordable services. Enjoy yourself without compromise.</p>
                        </div>

                        <div className="list-con3">
                            <h4><CheckCircleOutlineIcon className="check-icon"/> Always on time</h4>
                        <p>Happy moments uninterrupted, our delights always arrive right on time.</p>
                        </div>
                        
                    </div>
                </div>
                </Fade>
                
            </div>
        </section>
     );
}
 
export default Why;