import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
//const userIcon = <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium iconUser css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>;
//import userIcon from '/user.svg';
const menu = [
  {
    name: "Modelos",
    url: "/#models",
  },
  {
    name: "¿Cómo funciona?",
    url: "/#comunidad",
  },
  {
    name: "Beneficios",
    url: "/#beneficios",
  },
  {
    name: "Contacto",
    url: "/#contacto",
  },
  {
    name: "Blog",
    url: "/#blog",
  },
];
import logo from "../assets/logo.png";
import partnered from "../assets/partnered.png";
import wpp from "../assets/wpp.png";
const Header = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
  }, []);
  const location  = useLocation();
  const formulario = location.pathname.includes('formulario')
  return (
    <main className={`${formulario ? "overflow-y-hidden":"overflow-y-scroll"} h-[100vh] relative`} ref={scrollRef}>
      <div className="bg-transparent absolute top-0" id="home" />
      <header className="px-[60px] py-[5px] w-full fixed top-0 left-0 z-10 bg-white">
        <ul className="flex gap-[5px] justify-between items-center">
          <div className="w-[80%] flex items-center">
            <li className="mr-[50px]">
              <HashLink smooth to="/#home">
                <img src={logo} alt="logo" className="h-[70px]" />
              </HashLink>
            </li>
            {menu.map((item, index) => {
              return (
                <li key={index} className="ml-[100px] font-[400]">
                  <HashLink smooth to={item.url} className="hover:opacity-[0.63] transition-all duration-[0.3s]">
                    {item.name}
                  </HashLink>
                </li>
              );
            })}
            {/* <li className="ml-[100px]">
              <a href="/contact">¿Cómo funciona?</a>
            </li>
            <li className="ml-[100px]">
              <a href="/contact">Beneficios</a>
            </li>
            <li className="ml-[100px]">
              <a href="/contact">Blog</a>
            </li> */}
          </div>
          <div className="w-[20%] flex justify-end">
            <li>
             
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium iconUser css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AccountCircleIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </svg>
          
            </li>
          </div>
        </ul>
      </header>
      <Outlet />
      <div className="fixed bottom-[10px] right-[30px] flex justify-end flex-col items-end z-30">
        <img src={partnered} alt="partnered" className="w-[350px]" />
        <a href="https://bit.ly/3pGO0pN" className="absolute right-[30px] bottom-[10px]">
            <img src={wpp} alt="wpp" className="w-[50px]" />
        </a>
      </div>
    </main>
  );
};

export default Header;
