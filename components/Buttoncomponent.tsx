import Link from 'next/link';
import React from 'react';

const Buttoncomponent = ({
  link,
  buttontext,
  buttonImage,
  extraclassName,
  target,
}: any) => {
  return (
    <>
      <Link
        href={link}
        className={`inline-block leading-[1.4] rounded-[35px] whitespace-nowrap text-center cursor-pointer uppercase no-underline relative z-[1] py-[16px] pr-[70px] pl-[35px] text-[15px] md:font-semibold bg-transparent border-[1px] border-solid border-magenta md:mb-0 mb-[5%] top-[40px] md:top-0 font-bold md:w-[45%] before:absolute before:right-[5%] before:top-0 before:w-0 before:h-full before:bg-magenta before:rounded-[35px] before:-z-10 before:transition-all  before:duration-300 hover:before:w-[95%] group ${
          extraclassName ? extraclassName : ''
        }`}
        target={target ? '_blank' : '_self'}
      >
        <span className="text-lightgray relative z-[2] transition-all ease-out delay-0.3 group-hover:text-white">
          {buttontext}
        </span>
        <span className="bg-magenta absolute right-[-1px] top-[-1px] bottom-0 w-[55px] h-[55px] flex justify-center items-center text-[25px] text-white rounded-[50%]">
          {buttonImage}
        </span>
      </Link>
    </>
  );
};

export default Buttoncomponent;
