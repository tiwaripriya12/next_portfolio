import React from 'react';
import Head from 'next/head';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import Contactform from '@/components/Contactform';
import Pageheader from '@/components/Pageheader';

const Contact = () => {
  const Social = [
    {
      id: 1,
      name: 'Facebook',
      link: '/',
      target: '_self',
      icon: <FaFacebookF size="25" />,
    },
    {
      id: 2,
      name: 'LinkedIn',
      link: '/about',
      target: '_self',
      icon: <FaLinkedinIn size="25" />,
    },
  ];
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      {/* Title section start */}
      <Pageheader
        transparenttitle={'contact'}
        maintitle={'get in '}
        maintitle1={'touch'}
      />
      {/* Title section end */}
      {/* Body section start */}
      <section className="pb-[10px] md:pb-[60px] mt-[-12px] pt-[85px] md:pt-0 md:mt-[-15px] transition-all duration-75 transform-none opacity-100 block">
        {/* Container section start */}
        {/* Container section start */}
        <div className="w-full px-[25px] md:px-[15px] mx-auto lg:max-w-[1140px] my-0">
          {/* row section start */}
          <div className="flex flex-wrap mx-[-15px]">
            {/* Column section start */}
            <div className="max-w-full md:max-w-[33.333333%] md:flex-33 flex-100 relative w-full px-[15px]">
              <h3 className="md:pb-[1rem] text-[26px] font-semibold uppercase mb-0 leading-[1.2]">
                Don&#39;t be shy
              </h3>
              <p className="mb-3 text-justify">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <p className="font-semibold pl-[50px] leading-[21px] pt-[5px] relative mb-[1rem]">
                <i className="text-magenta absolute text-[33px] top-[10px] left-0">
                  <FaEnvelopeOpen />
                </i>
                <span className="uppercase opacity-[.8] font-normal block">
                  mail me
                </span>
                sibimariamabraham@gmail.com
              </p>
              <p className="font-semibold pl-[50px] leading-[21px] pt-[5px] relative mb-[1rem]">
                <i className="text-magenta absolute text-[33px] top-[10px] left-0">
                  <FaPhoneSquareAlt size={37} />
                </i>
                <span className="uppercase opacity-[.8] font-normal block">
                  call me
                </span>
                +91 9987984085
              </p>
              {/* <ul className="flex p-0 m-0 transition-all delay-75 opacity-100 transform-none">
                {Social.map((menu) => (
                  <li
                    key={menu.id}
                    className={`hover:bg-magenta hover:text-white w-[50px] h-[50px] list-none relative flex items-center transition-all delay-75 my-[20px] rounded-[50%] group bg-profileimageborder mx-[6px]`}
                  >
                    <a
                      href={menu.link}
                      className="block p-0 w-[50px] h-[50px] group hover:bg-magenta hover:rounded-[50%]"
                      target={`${menu.target}`}
                    >
                      <i
                        className={`group-hover:text-white  text-[19px] transition-all delay-75 absolute pointer-events-none left-[0.8rem] right-0 mx-auto my-0 block text-center top-[12px]`}
                      >
                        {menu.icon}
                      </i>
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
            {/* Column section end */}
            {/* Column section start */}
            <div className="max-w-full md:max-w-[66.666667%] md:flex-66 flex-100 relative w-full px-[15px]">
              <Contactform />
            </div>
            {/* Column section end */}
          </div>
          {/* row section end */}
        </div>
        {/* Container section end */}
      </section>
    </>
  );
};

export default Contact;
