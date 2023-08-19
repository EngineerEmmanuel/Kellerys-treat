import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navigation from "./Components/Navigation";
import Process from "./Components/Process";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Why from "./Components/Why";

// for the animation
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <Process/>
      <Fade top>
        <Services/>
      </Fade>
      
      <Why/>
      <Testimonials/>
      <Fade bottom>
        <Footer/>
      </Fade>
      
    </div>
  );
}

export default App;
