import Banner from "../About/AboutComponets/Banner";
import ContactMap from "./ContactComponent/ContactMap";
import GetInToch from "./ContactComponent/GetInToch";


const Contact = () => {
    return (
        <div>
            <Banner title={'Contact'} discripction={"Connect with us for personalized support and inquiries. We're here to address your concerns and provide timely assistance. Reach out today"} />
            <GetInToch />
            <ContactMap />
        </div>
    );
};

export default Contact;