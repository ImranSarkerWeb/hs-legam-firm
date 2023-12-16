import profileImg from '../../../assets/profile.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutSection = () => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-out',
        delay: 200,
    });
    return (
        <div className='px-2 w-full my-8 gap-16 place-items-center grid grid-cols-1 md:grid-cols-2  py-0 md:py-8 lg:px-28'>
            <div className='relative' data-aos="fade-right">
                <img className='h-[550px] rounded-tl-[150px] w-[400px]' src={profileImg} alt="" />
                <div className=' md:absolute text-center px-8 py-3 -bottom-10 -right-16 bg-primery text-white'>
                    <p className=' text-4xl md:text-7xl font-bold'>10</p>
                    <p className='text-2xl' >Years of <br /> experience</p>
                </div>
            </div>
            <div data-aos="fade-left" className=''>
                <p className='text-4xl font-extralight '>Why You Need the Top Lawyers in O’Renders</p>
                <p className='text-2xl my-7' >Our professional leadership team is truly committed to producing the best results for our clients very successfully</p>
                <p className='text-lg text-assh'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway workplace diversity and empowerment.</p>
                <h1 className='text-xl py-9'>Reuben Sandwich <span className='text-assh text-sm'>- CEO of Colorlib</span></h1>
            </div>
        </div>
    );
};

export default AboutSection;