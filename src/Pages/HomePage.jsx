
import Services from "../Components/Services";
import Slider from "../Components/Slider";
import Achievement from "../Shared/Achievement/Achievement";
// import Cart from "./Card/Cart";

const HomePage = () => {
    return (
        <div className="">
                <Slider />
            {/* <Cart /> */}
                <Services />
            <Achievement />
        </div>
    );
};

export default HomePage;