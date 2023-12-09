import AboutSection from "./AboutComponets/AboutSection";
import Banner from "./AboutComponets/Banner";


const About = () => {
    return (
        <div className="overflow-hidden">
            <Banner title={'About Us'} discripction={'Uncover the heart of our mission. Learn about our values, team, and the driving force behind our exceptional service'} />
            <AboutSection />
        </div>
    );
};

export default About;