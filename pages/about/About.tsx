import React from 'react';
import ProfileImage from '../../public/images/img-mobile-light.jpg';
import { FaDownload } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import Head from 'next/head';
import {
  aboutdata,
  experiencedata,
  educationdata,
  personaldata,
  personaldata1,
  skillsdata,
} from '../../data/data';
import Personaldata from '@/components/Personaldata';
import Personaldata1 from '@/components/Personaldata1';
import Imagecomponent from '@/components/Imagecomponent';
import Buttoncomponent from '@/components/Buttoncomponent';
import Pageheader from '@/components/Pageheader';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      {/* Title section start */}
      <Pageheader
        transparenttitle={'resume'}
        maintitle={'about '}
        maintitle1={'me'}
      />
      {/* Title section end */}
      {/* Body section start */}
      <section className="pb-0 pt-[85px] md:pt-0 md:pb-[20px] transition-all delay-75 opacity-100 transform-none block">
        {/* Container section start */}
        <div className="w-full px-[25px] md:px-[15px] mx-auto lg:max-w-[1140px] my-0">
          {/* personal detail row section start */}
          <div className="flex flex-wrap mx-[-15px]">
            {/* Column section start */}
            <div className="max-w-full md:max-w-[50%] md:flex-50 flex-100 relative w-full px-[15px] mb-[60px] md:mb-0">
              {/* Row section start */}
              <div className="flex flex-wrap mx-[-15px]">
                {/* personal infos title section start */}
                <div className="max-w-full flex-100 relative w-full px-[15px]">
                  <h3 className="leading-[1.2] mb-0 uppercase font-semibold pb-[22px] md:text-[26px] text-[21px]">
                    personal infos
                  </h3>
                </div>
                {/* personal infos title section end */}
                {/* Desktop hidden Profile Image section start */}
                {/* <div className="max-w-full md:hidden flex-100 relative w-full px-[15px]">
                  <Imagecomponent
                    imagesrc={ProfileImage}
                    imagealt={'Profile Image'}
                    width={230}
                    height={230}
                    className={
                      'border-[4px] border-solid border-profileimageborder rounded-[50%] mx-auto mt-0 mb-[25px] block max-w-full align-middle'
                    }
                  />
                </div> */}
                {/* Desktop hidden Profile Image section end */}
                {/* Personal infos section start */}
                <div className="max-w-[50%] flex-50 relative w-full px-[15px]">
                  <ul className="pl-0 list-none">
                    {personaldata.map((personaldata, index) => (
                      <Personaldata key={index} personaldata={personaldata} />
                    ))}
                  </ul>
                </div>
                {/* Personal infos section end */}
                {/* Personal infos1 section start */}
                <div className="max-w-[50%] flex-50 relative w-full px-[15px]">
                  <ul className="pl-0 list-none">
                    {personaldata1.map((personaldata1, index) => (
                      <Personaldata1 key={index} personaldata={personaldata1} />
                    ))}
                  </ul>
                </div>
                {/* Personal infos1 section end */}
                {/* CV button section start */}
                <div className="max-w-full flex-100 relative w-full px-[15px] mt-4">
                  <Buttoncomponent
                    link={'/pdf/SibiAbraham.pdf'}
                    buttontext={'download CV'}
                    buttonImage={<FaDownload />}
                    target={'blank'}
                    extraclassName={
                      'overflow-hidden text-ellipsis align-middle outline-none w-[70%] transition-all ease-in-out duration-75  before:ease-out ml-0'
                    }
                  />
                </div>
                {/* CV button section end */}
              </div>
              {/* Row section end */}
            </div>
            {/* Column section end */}
            {/* Column section start */}
            <div className="max-w-full md:max-w-[50%] md:flex-50 flex-100 relative w-full px-[15px] m-auto">
              {/* Row section start */}
              <div className="flex flex-wrap -mx-[15px]">
                {/* experience column section start */}
                {aboutdata.map((menu) => (
                  <div
                    key={menu.id}
                    className="max-w-[50%] flex-50 relative w-full px-[15px]"
                  >
                    <div className="border border-solid border-bordergray mb-[25px] md:mb-[30px] rounded-[5px] pt-[15px] pb-[20px] pr-[20px] pl-[25px] md:pt-[20px] md:pb-[25px] md:pl-[40px] md:pr-[30px]">
                      <h3 className="text-magenta relative inline-block m-0 text-[40px] md:text-[50px] font-bold after:absolute after:right-[-24px] after:text-[33px] after:font-light after:top-[2px] after:content-['+']">
                        {menu.totalnumber}
                      </h3>
                      <p className="pl-0 md:pl-[45px] uppercase relative m-0 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[13px] md:before:w-[30px] md:before:h-[1px] md:before:bg-textblack">
                        {menu.data}
                        <span className="block">{menu.data1}</span>
                      </p>
                    </div>
                  </div>
                ))}

                {/* experience column section end */}
              </div>
              {/* Row section end */}
            </div>
            {/* Column section end */}
          </div>
          {/* personal detail row section end */}
          {/* Separator section start */}
          <hr className="max-w-[40%] border-t border-t-solid border-t-bordergray md:mt-[70px] mx-auto md:mb-[55px] mb-[30px]" />
          {/* Separator section end */}
          {/* skills and education detail row section start */}
          <div className="flex flex-col items-center justify-center w-full mx-auto xl:max-w-screen-xl snap-center">
            <div className="max-w-full flex-100 relative w-full px-[15px]">
              <h3 className="leading-[1.2] mb-0 uppercase font-semibold pb-[3rem] md:text-[26px] text-[21px] text-left md:text-center">
                My Skills
              </h3>
            </div>
            <div className="grid items-center grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {skillsdata.map((skillsdatamenu) => (
                <div
                  key={skillsdatamenu.id}
                  className="relative z-10 flex flex-col items-center justify-start gap-4 p-4 text-3xl font-bold transition duration-700 ease-in-out cursor-pointer skills md:flex-row text-slate hover:-translate-y-2 hover:text-magenta"
                >
                  {skillsdatamenu.logo}
                  <h2>{skillsdatamenu.title}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* skills and education detail row section end */}
          {/* Separator section start */}
          <hr className="max-w-[40%] border-t border-t-solid border-t-bordergray md:mt-[70px] mx-auto md:mb-[55px] mb-[30px]" />
          {/* Separator section end */}
          {/* professional and education detail row section start */}
          <div className="flex flex-wrap mx-[-15px]">
            {/* Column section start */}
            <div className="max-w-full md:max-w-[50%] md:flex-50 flex-100 relative w-full md:pr-[15px] md:pl-0 px-[15px]">
              {/* Experience section start */}
              <div>
                <div className="max-w-full flex-100 relative w-full px-[15px]">
                  <h3 className="leading-[1.2] mb-0 uppercase font-semibold pb-[3rem] md:text-[26px] text-[21px] text-left md:text-center">
                    Experience
                  </h3>
                </div>
                <ul className="p-0 m-0 list-none">
                  {experiencedata.map((experiencedatamenu) => (
                    <li
                      key={experiencedatamenu.id}
                      className="relative pr-[20px] pl-[60px] py-0 mb-[50px] mt-0 mx-0 after:absolute after:content-[''] after:top-0 after:left-[20px] after:bottom-0 after:border-l-[1px] after:border-l-solid after:border-l-bordergray"
                    >
                      <div className="bg-magenta w-[40px] h-[40px] absolute left-0 right-0 leading-[40px] text-center z-[1] rounded-[50%] text-white">
                        <i className="inline-block text-[20px] absolute top-[23%] left-[23%]">
                          <BsFillBriefcaseFill />
                        </i>
                      </div>
                      <span className="uppercase text-lightgray bg-profileimageborder text-[12px] px-[10px] py-[1px] inline-block mb-[12px] rounded-[20px] font-semibold opacity-80">
                        {experiencedatamenu.year}
                      </span>
                      <h5 className="uppercase text-[18px] font-semibold leading-[1.2] mx-0 mt-[7px] mb-[10px] text-lightgray">
                        {experiencedatamenu.title}
                        <span className="opacity-80 font-semibold text-[15px] relative pl-[26px] before:absolute before:w-[10px] before:h-[2px] before:bg-lightgray before:left-[7px] before:top-[9px] before:opacity-80 before:content-['']">
                          {experiencedatamenu.subtitle}
                        </span>
                      </h5>
                      <p className="open-sans-font">
                        {experiencedatamenu.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Experience section end */}
            </div>
            {/* Column section end */}
            {/* Column section start */}
            <div className="max-w-full md:max-w-[50%] md:flex-50 flex-100 relative w-full md:pr-[15px] md:pl-0 px-[15px]">
              {/* Education section start */}
              <div>
                <div className="max-w-full flex-100 relative w-full px-[15px]">
                  <h3 className="leading-[1.2] mb-0 uppercase font-semibold pb-[3rem] md:text-[26px] text-[21px] text-left md:text-center">
                    Education
                  </h3>
                </div>
                <ul className="p-0 m-0 list-none">
                  {educationdata.map((educationdatamenu) => (
                    <li
                      key={educationdatamenu.id}
                      className="relative pr-[20px] pl-[60px] py-0 mb-[50px] mt-0 mx-0 after:absolute after:content-[''] after:top-0 after:left-[20px] after:bottom-0 after:border-l-[1px] after:border-l-solid after:border-l-bordergray"
                    >
                      <div className="bg-magenta w-[40px] h-[40px] absolute left-0 right-0 leading-[40px] text-center z-[1] rounded-[50%] text-white">
                        <i className="inline-block text-[20px] absolute top-[23%] left-[23%]">
                          <FaGraduationCap />
                        </i>
                      </div>
                      <span className="uppercase text-lightgray bg-profileimageborder text-[12px] px-[10px] py-[1px] inline-block mb-[12px] rounded-[20px] font-semibold opacity-80">
                        {educationdatamenu.year}
                      </span>
                      <h5 className="uppercase text-[18px] font-semibold leading-[1.2] mx-0 mt-[7px] mb-[10px] text-lightgray">
                        {educationdatamenu.title}
                        <span className="opacity-80 font-semibold text-[15px] relative pl-[26px] before:absolute before:w-[10px] before:h-[2px] before:bg-lightgray before:left-[7px] before:top-[9px] before:opacity-80 before:content-['']">
                          {educationdatamenu.subtitle}
                        </span>
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Education section end */}
            </div>
            {/* Column section end */}
          </div>
          {/* professional and education detail row section end */}
        </div>
        {/* Container section end */}
      </section>
      {/* Body section end */}
    </>
  );
};

export default About;
