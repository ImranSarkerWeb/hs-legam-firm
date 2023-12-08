
const AboutBanner = () => {

    return (
        <div className=" w-full h-[400px]  mt-[80px] bg-cover  bg-aboutBanner">
            <div className="h-full w-full backdrop-blur-xl text-white bg-black bg-opacity-20 ">
                <div className="flex flex-col h-full items-center justify-center">
                    <p className="text-4xl font-bold text-primery mb-3" >About Us</p>
                    <p className="text-lg">Uncover the heart of our mission. Learn about our values, team, and the driving force behind our exceptional service</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;