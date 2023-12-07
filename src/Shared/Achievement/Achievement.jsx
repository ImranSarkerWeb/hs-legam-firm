import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const Achievement = () => {
    const { t } = useTranslation()
    const counter = [
        {
            id: 1,
            text: `${t('funFact.counter.box1.text')}`,
            count: `${t('funFact.counter.box1.count')}`
        },
        {
            id: 2,
            text: `${t('funFact.counter.box2.text')}`,
            count: `${t('funFact.counter.box2.count')}`
        },
        {
            id: 3,
            text:`${t('funFact.counter.box3.text')}`,
            count: `${t('funFact.counter.box3.count')}`
        },
        {
            id: 3,
            text:`${t('funFact.counter.box4.text')}`,
            count: `${t('funFact.counter.box4.count')}`
        }
    ]
    const getCounterStyle = (index) => {
        switch (index) {
            case 0:
                return 'bg-primery text-white';
            case 1:
                return 'bg-black text-white';
            case 2:
                return 'bg-primery text-white';
            case 3:
                return 'bg-black text-white';
            default:
                return ''; // Default style for other items
        }
    };
    return (
        <div className='py-16 px-8 md:px-20'>
            <div className=" py-8 md:grid grid-cols-4 ">

                <div className="col-span-2 mb-4">
                    <p className="text-primery text-base tracking-widest mb-3 ">{t('funFact.header.p')}</p>
                    <p className="text-3xl md:w-[80%] font-semibold">{t('funFact.header.h1')} <span className="text-primery italic">{t('funFact.header.span')}</span></p>
                </div>
                <div className="col-span-2  flex flex-col md:flex-row gap-3 text-lg font-normal">
                    <p>{t('funFact.text.p1')}</p>
                    <p>{t('funFact.text.p2')}</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  '>
                {
                    counter.map((item, index) => (
                        <div key={item.id} className={`text-center py-10  rounded-md ${getCounterStyle(index)} shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]`}>
                            <div>
                                <CountUp className='text-4xl font-extrabold' delay={2} enableScrollSpy={true} start={0} suffix='+' end={item.count} />
                            </div>
                            <p className='text-xl font-semibold'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Achievement;