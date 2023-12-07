// import loaderImg from '../assets/loader.png';
import loaderImg from '../assets/Animation - 1701521564090.gif';

const Loading = () => {
    return (
        <div className="flex items-center bg-assh justify-center h-screen">
           <img  className='h-52 w-52 '  src={loaderImg} alt="" />
           <img src="" alt="" />
            {/* <div className="animate-spin rounded-full border-t-4 border-gray-600 border-solid h-12 w-12"></div> */}
        </div>
    );
};

export default Loading;