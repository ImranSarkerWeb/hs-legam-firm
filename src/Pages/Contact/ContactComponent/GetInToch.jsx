import { IoCall } from "react-icons/io5";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const GetInToch = () => {
    const form = useRef();
    console.log(import.meta.env.VITE_YOUR_SERVICE_ID)
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                toast.success('Send Email')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                toast.error('Some Problem')
            });
    }
    // console.log(form.current)
    return (
        <div className="my-8">
            <Toaster />
            <div className="text-center">
                <p className=" text-xl md:text-2xl lg:text-3xl">We are ready to help you</p>
                <p className="text-primery text-3xl md:text-4xl lg:text-5xl font-bold" >Our contacts</p>
                <div className="text-assh">
                    <p className="my-6 text-base md:text-lg px-4">87 Tennesee hwy., Alexandria, VA USA, 22303</p>
                    <p className="text-center text-lg md:text-xl font-semibold flex justify-center items-center"><IoCall className="text-primery text-2xl" />+8801312345675</p>
                </div>
            </div>
            <div className=" mt-14 md:mt-28">
                <div className="text-center">
                    <p className="text-xl md:text-2xl lg:text-3xl">Get in touch</p>
                    <p className="text-primery text-3xl md:text-4xl lg:text-5xl font-bold">Contact us</p>
                </div>
                <div className="mt-5">
                    <form ref={form} className="w-full px-2 md:p-8 md:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:w-[50%] rounded-2xl  mx-auto" onSubmit={sendEmail}>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-assh_normal transition-all focus:placeholder:text-black border-red-500" name="user_email" placeholder="Enter Your Email" />
                        </div>
                        <div className="">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Name
                            </label>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500 focus:bg-assh_normal transition-all focus:placeholder:text-black" name="user_name" placeholder="Enter Subject" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Message
                            </label>
                            <textarea rows={'10'} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500 focus:bg-assh_normal transition-all focus:placeholder:text-black" name="message" placeholder="Enter Message" />
                        </div>
                        <div className="text-center mt-5">
                            <button className=" cursor-pointer relative px-6 py-3 font-bold text-black group text-center" >

                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-primery group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full border-2 border-black"></span>
                                <span className="relative">Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default GetInToch;