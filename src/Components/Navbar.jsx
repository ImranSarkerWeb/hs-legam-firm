import { NavLink } from "react-router-dom";
import { useState } from "react";
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const navLinks = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/asdfasd',
            title: 'Home'
        }
    ]
    return (
        <nav className="flex relative justify-between items-center px-5 md:px-9 lg:px-12 h-20 bg-white shadow-lg ">
            <img src="https://web.lsc-bd.net/assets/img/logo/xlogo.png.pagespeed.ic.HRjdIdGKzd.png" alt="img" />
            <span className="block lg:hidden" ><Hamburger toggled={isOpen} size={20} toggle={setOpen} /></span>
            
            <div className={`flex flex-col lg:flex-row gap-3  lg:gap-8 transition-all lg:transition-none duration-300 pt-16 lg:pt-0 absolute lg:static top-20  h-[calc(100vh-80px)] lg:h-fit w-full md:w-1/3 lg:w-fit bg-gray-400  lg:bg-transparent items-center ${isOpen ? ' left-0  ':'-left-[10000px]  '}`}>

                {
                    navLinks.map(({ path, title }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            className={({ isActive }) =>
                                isActive ? "text-blue-500 font-semibold" : "font-medium"
                            }
                        >{title}</NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;