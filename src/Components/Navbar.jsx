import { NavLink } from "react-router-dom";
import { useState, useContext , useEffect } from "react";
import Hamburger from "hamburger-react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  const { setLang } = useContext(AuthContext)
  const options = [
    { value: '', text: '--Choose an option--' },
    { value: 'en', text: 'English' },
    { value: 'ba', text: 'Bangla' },
  ]
  const [selected, setSelected] = useState(options[0].value);
  useEffect(()=>{
    const langValue = localStorage.getItem('lang')
    if(langValue === 'en'){
      setSelected('English')
    }
    setSelected('--Choose an option--')
  },[selected])
  const navLinks = [
    {
      path: "/",
      title: `${t('navber.home')}`,
    },
    {
      path: "/about",
      title: `${t('navber.about')}`,
    },
    {
      path:"/team_member",
      title:`${t('navber.team_member')}`
    }
  ];

  const handleLanguage = (event) => {
    setSelected(event.target.value);
    setLang(event.target.value)
    localStorage.setItem('lang',event.target.value)
  }
  const handleClick =()=>{
    setOpen(false)
  }

  return (
    <nav className="flex relative justify-between items-center px-5 md:px-9 lg:px-12 h-20 bg-white shadow-lg ">
      <img
        src="https://web.lsc-bd.net/assets/img/logo/xlogo.png.pagespeed.ic.HRjdIdGKzd.png"
        alt="img"
      />
      <span className="block lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </span>

      <div
        className={`flex flex-col lg:flex-row gap-3  lg:gap-8 transition-all lg:transition-none duration-300 pt-16 lg:pt-0 absolute lg:static top-20  h-[calc(100vh-80px)] lg:h-fit w-full md:w-1/3 lg:w-fit bg-primery  lg:bg-transparent items-center ${isOpen ? " left-0  " : "-left-[10000px]  "
          }`}
      >
        <div
          className={`flex flex-col lg:flex-row gap-3  lg:gap-8 transition-all lg:transition-none duration-300 pt-16 lg:pt-0 absolute lg:static top-20  h-[calc(100vh-80px)] lg:h-fit w-full md:w-1/3 lg:w-fit bg-gray-400  lg:bg-transparent items-center ${isOpen ? " left-0  " : "-left-[10000px]  "
            }`}
        >
          {navLinks.map(({ path, title }, index) => (
            <NavLink
            onClick={handleClick}
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-black font-semibold isActive " : " text-black "
              }
            >
              {title}
            </NavLink>
          ))}
          <div>
            <select defaultValue={selected} onChange={handleLanguage} >
              {
                options.map(({ value, text }, index) => (
                  <option value={value} key={index} >
                    {text}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
