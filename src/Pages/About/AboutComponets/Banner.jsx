
const Banner = ({title ,discripction}) => {

    return (
        <div className=" w-full h-[400px] mt-[80px] bg-cover  bg-aboutBanner">
            <div className="h-full w-full backdrop-blur-xl px-5 text-white bg-black bg-opacity-20 ">
                <div className="flex flex-col h-full items-center justify-center">
                    <p className="text-2xl md:text-4xl font-bold text-primery mb-3 text-center" >{title}</p>
                    <p className="text-sm md:text-lg text-center">{discripction}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;