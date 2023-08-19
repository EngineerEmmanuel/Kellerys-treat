import { useState } from "react";
import "../Components/Styles/TestimonialsStyles.css"
import testimonialsData from "../Components/TestimonialsData";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Testimonials = () => {
    
    const [index, setIndex]= useState(0);
    // const data = testimonialsData[index];
    const {message,name, location,img}= testimonialsData[index];
       
    const nextSlide=()=>{
        setIndex((index)=>{
           let newIndex = index + 1;
           if(newIndex>testimonialsData.length-1){
            return 0;
           }
           
           return newIndex;
        })
    }


    const prevSlide=()=>{
        setIndex((index)=>{
            let newIndex = index -1;
            if(newIndex<0){
                return testimonialsData.length-1;
            }
            return newIndex
          
        })
    }
    return ( 
        <section className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-center-con">
            <div className="testimonial-con">
            <i class="fa-solid fa-quote-left"></i>
                    <p>{message}</p>
                    <div className="img-para-con">
                        <div className="img-con">
                            <img src={img} alt={name} />
                        </div>
                        <div className="para-con">
                            <p>{name}</p>
                            <p className="location">{location}</p>
                        </div>
                    </div>
                    
                </div>
            
                <KeyboardArrowLeftIcon id="prev-btn" onClick={prevSlide}/>
                <KeyboardArrowRightIcon id="next-btn" onClick={nextSlide}/>
            </div>
                
        </section>
     );
}
 
export default Testimonials;