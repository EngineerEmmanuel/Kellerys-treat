import "../Components/Styles/ProcessStyles.css";
import bookingIcon from "../Components/Images/booking.png";
import prepareIcom from "../Components/Images/prepare icon.png";
import deliverIcon from "../Components/Images/deliver icon.png";



const Process = () => {
    const processData = [
        {
            id:1,
            text:"Tell us What You Want",
            para:"You don`t have to stress yourself, just tell us what you want ",
            img:bookingIcon
        },
        
         {
                id:2,
                text:"We Prepare Your Request",
                para:"The job is now on us, and we will deliver to your taste",
                img:prepareIcom
        },
        {
            id:3,
            text:"Then We Deliver ",
            para:"We will deliver it as you had requested it",
            img:deliverIcon
        }
        
    ]
    return ( 
        <section className="process-section">
            <h2>Our Process</h2>
            <div className="process-con padding">
                {processData.map((pro)=>{
                    return(
                        <div className="pro-con">
                            <img src={pro.img} alt={pro.para} />
                            <h2>{pro.text}</h2>
                            <p>{pro.para}</p>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Process;