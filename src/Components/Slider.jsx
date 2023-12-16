import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { GoLink } from "react-icons/go";
// import Button from "./Button/Button";
import { useTranslation } from "react-i18next";

const Slider = () => {
  // const [isOpen, setIsopen] = useState(0);
  const [isSlideTransitionEnd, setIsSlideTransitionEnd] = useState(false);
  const { t } = useTranslation();

  // console.log(isOpen);
  const sliderData = [
    {
      id: 1,
      text: `${t('slider.slid1')}`,
      img: "https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/slider-man2.png",
    },
    {
      id: 2,
      text: `${t('slider.slid2')}`,
      img: "https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/slider-man.png",
    },
    {
      id: 3,
      text: `${t('slider.slid3')}`,
      img: "https://demo.casethemes.net/lawsight/wp-content/uploads/2019/03/slider-man3.png",
    },
  ];

  const handleSlideTransitionEnd = () => {
    setIsSlideTransitionEnd(true);
  };
  useEffect(() => {
    AOS.init({
      offset: 300,
      delay: 10,
      duration: 700,
      easing: "linear",
      // once: true,
      // startEvent: 'load',
      animatedClassName: "animated",
    });
    if (isSlideTransitionEnd) {
      AOS.refreshHard();
      setIsSlideTransitionEnd(false); // Reset the state
    }
  }, [ isSlideTransitionEnd]);

  return (
    <div className=" relative h-full w-full  ">
      <div className="">
        <Swiper
          effect={"fade"}
          spaceBetween={30}
          centeredSlides={true}
          // onSlideChange={() => setIsopen(isOpen + 1)}
          onSlideChangeTransitionEnd={handleSlideTransitionEnd}
          // onSlideChange={() => hadleChange()}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
          className="mySwiper"
        >
          {sliderData.map(({ id, text, img }) => (
            <SwiperSlide
              key={id}
              className="bg-white flex  items-center justify-center "
            >
              <div className="grid grid-cols-2 justify-center items-center h-full">
                <div
                  data-aos="fade-right"
                  className="h-screen flex justify-center items-center mt-8"
                >
                  <img className=" h-full w-fit md:h-[90%]" src={img} alt="" />
                </div>
                <div
                  data-aos="fade-left"
                  className="flex justify-center items-center md:pr-8"
                >
                  <p className=" text-2xl md:text-5xl  lg:text-7xl font-bold">
                    {text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:mt-0 md:absolute md:left-1/2 md:-bottom-22 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full z-10  grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[80%] mx-auto ">
        <div className=" group transition-all duration-500 bg-white hover:bg-black shadow-md  py-12 mb-3  grid grid-cols-3">
          <div className="col-span-1">
            <SlCalender className=" group-hover:shadow-md text-5xl text-primery mx-auto " />
          </div>
          <div className="col-span-2 relative">
            <div>
              <p className="text-assh text-xl font-bold">{t('afterSlider.box1.text1')}</p>
              <p className="text-3xl group-hover:text-white group-hover:underline  font-bold">
              {t('afterSlider.box1.text2')}
              </p>
            </div>
            <span className="absolute -top-10 right-6 scale-0 group-hover:transition-all group-hover:duration-500 group-hover:scale-[1.8]">
              <SlCalender className="  group-hover:shadow-md text-5xl text-assh " />
            </span>
          </div>
        </div>
        <div className=" group transition-all duration-500 bg-black py-12 mb-3  grid grid-cols-3">
          <div className="col-span-1">
            <GoLink className=" shadow-md text-5xl text-primery mx-auto " />
          </div>
          <div className="col-span-2 relative">
            <div>
              <p className="text-assh text-xl font-bold">{t('afterSlider.box2.text1')}</p>
              <p className="text-3xl text-white underline  font-bold">
              {t('afterSlider.box2.text2')}
              </p>
            </div>
            <div className="absolute -top-10 right-6 transition-all duration-500  scale-[1.8]">
              <GoLink className="   text-5xl text-assh " />
            </div>
          </div>
        </div>
        <div className=" group transition-all duration-500 bg-white hover:bg-black shadow-md   py-12 mb-3  grid grid-cols-3">
          <div className="col-span-1">
            <SlCalender className=" group-hover:shadow-md text-5xl text-primery mx-auto " />
          </div>
          <div className="col-span-2 relative">
            <div>
              <p className="text-assh text-xl font-bold">{t('afterSlider.box3.text1')}</p>
              <p className="text-3xl group-hover:text-white group-hover:underline  font-bold">
              {t('afterSlider.box3.text2')}
              </p>
            </div>
            <div className="absolute -top-10 right-6 scale-0 group-hover:transition-all group-hover:duration-500 group-hover:scale-[1.8]">
              <SlCalender className="  group-hover:drop-shadow-2xl text-5xl text-assh " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
