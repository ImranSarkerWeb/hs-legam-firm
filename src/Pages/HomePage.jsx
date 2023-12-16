
import Services from "../Components/Services";
import Slider from "../Components/Slider";
import Accordion from "../Shared/Accordion/Accordion";
// import Accordion from "../Shared/Accordion/Accordion";
import Achievement from "../Shared/Achievement/Achievement";
// import Cart from "./Card/Cart";

const HomePage = () => {
    return (
        <div className="">
                <Slider />
            {/* <Cart /> */}
                <Services />
            <Achievement />
            {/* <Accordion /> */}
            <Accordion />
        </div>
    );
};

export default HomePage;