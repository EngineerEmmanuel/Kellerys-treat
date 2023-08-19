import "../Components/Styles/ServicesStyle.css";
import data from "../Components/CategoriesData";
import { useState } from "react";


const Services = () => {
    const [cateData, setCateData]= useState(data);
    const foodCategory = (food)=>{
        const foodCate = data.filter((foodItems)=> foodItems.category === food)
        setCateData(foodCate);
    }

    const cakeCategory =(cake)=>{
        const cakeCate = data.filter((cakeItems)=> cakeItems.category === cake)
        setCateData(cakeCate);
    }

    const pastriesCategory =(pastries)=>{
        const pastriesCate = data.filter((pastriesItems)=> pastriesItems.category === pastries)
        setCateData(pastriesCate);
    }
    const allCate = (all)=>{
        if(all === "All"){
            setCateData(data)
        }
    }

    const changeBtnBg = (e) => {
        const buttons = document.querySelectorAll('.cate-btn');
    
        buttons.forEach(button => {
            button.classList.remove("active");
        });
    
        e.target.classList.add("active");
    }
    
    return ( 
        <section className="services-section" id="services">
            <h2>Our Services</h2>
            
            <div className="categories-btn-con padding" onClick={changeBtnBg}>
                <button onClick={()=> foodCategory("Food")} className="cate-btn">Food</button>
                <button onClick={()=>cakeCategory("Cake")} className="cate-btn">Cakes</button>
                <button onClick={()=> pastriesCategory("Pastries")} className="cate-btn">Pastries</button>
                <button onClick={()=> allCate("All")} className="cate-btn">All</button>
            </div>
            <div className="categories-grid-con">
                {cateData.map((ser)=>{
                    return(
                        <div className="service-con" key={ser.id}>
                            {ser.img && <img src={ser.img} className="image"/>}
                            {ser.video && <iframe src={ser.video} className="video" allowfullscreen controls="controls" autoplay="false"/>}
                            <div className="service-btn-con">
                                <button><a href="https://wa.me/2349022124280">Contact Us</a> </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
     );
}
 
export default Services;