import { useTranslation } from "react-i18next";
import ServiceCart from "./ServiceCart/ServiceCart";


const Services = () => {
    const { t } = useTranslation()
    const servicesData = [
        {
            id: '1',
            tilte: `${t('services.servicesData.box1.title')}`,
            path: "",
            discription: `${t('services.servicesData.box1.discription')}`,

        },
        {
            id: '2',
            tilte: `${t('services.servicesData.box2.title')}`,
            path: "",
            discription: `${t('services.servicesData.box2.discription')}`
        },
        {
            id: '3',
            tilte: `${t('services.servicesData.box3.title')}`,
            path: "",
            discription: `${t('services.servicesData.box3.discription')}`
        },
        {
            id: '4',
            tilte: `${t('services.servicesData.box4.title')}`,
            path: "",
            discription: `${t('services.servicesData.box4.discription')}`
        },
        {
            id: '5',
            tilte: `${t('services.servicesData.box5.title')}`,
            path: "",
            discription: `${t('services.servicesData.box5.discription')}`
        },
        {
            id: '6',
            tilte: `${t('services.servicesData.box6.title')}`,
            path: "",
            discription: `${t('services.servicesData.box6.discription')}`
        }
    ]
    return (
        <div className="md:mt-48 lg:mt-24 mt-0  h-fit  w-full bg-servicesImage ">
            <div className="backdrop-brightness-50  h-full py-8 bg-black bg-opacity-20">
                <div className="text-center w-full">
                    <p className="text-sm md:text-lg font-semibold text-primery">{t('services.header.p')}</p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold w-[80%] md:w-[60%] lg:w-[45%] mx-auto text-white" >{t('services.header.h1')} <span className="text-primery italic">{t('services.header.italic')}</span></p>
                </div>
                <div className=" mx-auto w-full">
                    <div className="grid w-full place-items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                        {
                            servicesData.map((item) => <ServiceCart key={item.id} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;