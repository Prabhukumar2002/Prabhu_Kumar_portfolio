import Hero from "../../sections/Hero/Hero.jsx";
import About from '../../sections/About/About.jsx';
import Skills from '../../sections/Skills/Skills.jsx';
import Experience from '../../sections/Experience/Experience.jsx';
import Projects from '../../sections/Projects/Projects.jsx';
import Contact from '../../sections/Contact/Contact.jsx';
import Footer from '../../sections/Footer/Footer.jsx';
import { BrowserRouter } from "react-router-dom";

const Home = () => {
    return(
        <>
            
            <Hero/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;