import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsFillHouseDoorFill, BsFillBriefcaseFill } from 'react-icons/bs';
import { FaUserAlt, FaEnvelopeOpen, FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Navbarmenu = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [sidebar, setSidebar] = useState(false);

  const Menus = [
    {
      id: 1,
      name: 'Home',
      link: '/',
      target: '_self',
      icon: <BsFillHouseDoorFill size="25" />,
    },
    {
      id: 2,
      name: 'About',
      link: '/about',
      target: '_self',
      icon: <FaUserAlt size="25" />,
    },
    {
      id: 3,
      name: 'Portfolio',
      link: '/portfolio',
      target: '_self',
      icon: <BsFillBriefcaseFill size="25" />,
    },
    {
      id: 4,
      name: 'Contact',
      link: '/contact',
      target: '_self',
      icon: <FaEnvelopeOpen size="25" />,
    },
  ];
  return (
    <header className="fixed flex right-[30px] bottom-0 z-[111] items-center h-[calc(100vh_-_200px)] top-[100px] opacity-100 transition-opacity md:z-[1]">
      <ul className="hidden p-0 m-0 transition-all delay-75 opacity-100 md:block transform-none">
        {Menus.map((menu) => (
          <li
            key={menu.id}
            className={`hover:bg-magenta hover:text-white w-[50px] h-[50px] list-none relative flex items-center transition-all delay-75 mx-0 my-[20px] rounded-[50%]  group ${
              pathname == menu.link ? 'bg-magenta' : 'bg-profileimageborder'
            }`}
          >
            <a
              href={menu.link}
              className="block p-0 w-[50px] h-[50px] group hover:bg-magenta hover:rounded-[50%]"
              target={`${menu.target}`}
            >
              <i
                className={`group-hover:text-white  text-[19px] transition-all delay-75 absolute pointer-events-none left-[0.8rem] right-0 mx-auto my-0 block text-center top-[12px]  ${
                  pathname == menu.link ? 'text-white' : 'text-lightgray'
                }`}
              >
                {menu.icon}
              </i>

              <h2 className="group-hover:opacity-100 group-hover:right-[28px] group-hover:m-0 group-hover:text-center group-hover:rounded-tl-[30px] group-hover:rounded-bl-[30px] group-hover:rounded-br-[0] group-hover:rounded-tr-[0] bg-magenta z-[-1] absolute top-0 right-0 opacity-0 text-white leading-[50px] font-medium transition-all delay-75 rounded-[30px] uppercase h-[50px] py-0 pr-[25px] pl-[30px]">
                {menu.name}
              </h2>
            </a>
          </li>
        ))}
      </ul>
      <nav className="block md:hidden">
        <div
          className={`border-0 bg-profileimageborder right-[25px] top-[10px] pt-[14px] pl-[13px] pb-0 pr-0 w-[49px] h-[49px] inline-block fixed z-[1111] select-none rounded-[5px]`}
        >
          <FaBars
            className="left-[0.2rem] relative"
            size={20}
            onClick={() => setSidebar(!sidebar)}
          />
          <ul
            className={`bg-profileimageborder fixed left-0 top-0 w-full h-full m-0 pt-[60px] pl-0 list-none ${
              sidebar ? 'block' : 'hidden'
            }`}
            id="menu"
          >
            <RxCross2
              className="absolute float-right flex w-[54px] h-[54px] absolut e cursor-pointer opacity-100 z-[2] top-[1rem] right-[1rem]"
              onClick={() => setSidebar(false)}
            />
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className="pl-[25px] relative after:bg-bordergray after:left-[25px] after:w-[calc(100%_-_50px)] after:absolute after:h-[1px] after:content-['']"
              >
                <a
                  href={menu.link}
                  className={` text-[18px] uppercase transition delay-75 inline-flex no-underline relative px-0 py-[14px] group ${
                    pathname == menu.link ? 'text-magenta' : 'text-lightgray'
                  }`}
                >
                  <i>{menu.icon}</i>
                  <span className="font-semibold left-[35px] absolute">
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbarmenu;
