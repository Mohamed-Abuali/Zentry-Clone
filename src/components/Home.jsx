import React from 'react'
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Features from "./Features.jsx";
import Story from "./Story.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div id="home">
            <Hero/>
            <About/>
            <Features/>
            <Story/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home
