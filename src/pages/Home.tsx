import { useState, useEffect, useRef } from 'react';
import '../styles/home.scss';

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    const homeContentRef = useRef<HTMLDivElement | null>(null); // Add type here

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle scrolling when chevron is clicked
    const handleChevronClick = () => {
        if (homeContentRef.current) {
            homeContentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="home-container">
                <video className="background-video" autoPlay loop muted>
                    <source src="./assets/waves.mp4" type="video/mp4" />
                </video>
                <div className={`overlay ${isVisible ? 'visible' : 'hidden'}`}>
                    <h1>Welcome to the art of silent landscapes</h1>
                    <div className="scroll-indicator" onClick={handleChevronClick}>
                        <span>Scroll down to discover more</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </div>
            <div className="home" id="home-content" ref={homeContentRef}>
                <section className="home-header">
                    <h2>My collection</h2>
                    <h3>Explore the beauty of nature and the art of minimalism through my lens.</h3>
                    <p>This portfolio showcases a curated selection of my work, focusing on landscapes and minimalistic photography. Each photograph is a reflection of my passion for capturing the subtleties and grandeur of the natural world. My aim is to inspire and invite viewers to experience the world through a different perspective.</p>
                    <a href="./portfolio" className="btn-main">Explore collection</a>
                </section>
                <section className="home-about">
                    <h2>About me</h2>
                    <p>
                        I am a passionate photographer with a love for capturing the beauty of landscapes and minimalistic scenes. Each photo tells a story, and I am excited to share my vision with you.
                    </p>
                    <a href="./about" className="btn-main">Learn More</a>
                </section>
                <section className="home-contact">
                    <h2>Contact</h2>
                    <p>If you'd like to get in touch, feel free to reach out via the contact page.</p>
                    <a href="./contact" className="btn-main">Contact Me</a>
                </section>
            </div>
        </>
    );
};

export default Home;
