import { BrowserRouter } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from './components/Navbar';
import Tech from "./components/Tech";
import Work from "./components/Work";
import ImageContainer from "./components/ImageContainer";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Intro/>
          {/* <ImageContainer/> */}
        </div>
        <About/>
        <Tech/>
        <Work/>
        <Contact/>
        </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
