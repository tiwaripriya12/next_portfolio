import React from 'react';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';
import { BsCode } from 'react-icons/bs';
import { IoOpenOutline } from 'react-icons/io5';
import { ExternalLink } from 'react-external-link';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
import { SiFramework7 } from 'react-icons/si';
import { MdDescription } from 'react-icons/md';

const Modal = ({ isVisible, onRequestClose, portfolio }: any) => {
  if (!isVisible) return null;
  const handleClose = (e: any) => {
    if (e.target.className === '') onRequestClose();
  };
  return (
    <>
      <div
        className="fixed inset-0 z-50 items-center justify-center hidden bg-opacity-25 md:flex bg-modalbgcolor backdrop-blur-sm "
        onClick={handleClose}
      >
        <div className="flex items-center p-8 my-8 outline-none rounded-2xl md:p-4">
          <div className="w-[850px] items-center bg-white mx-auto rounded-xl md:p-4 p-8 absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
            <div className="overflow-hidden max-h-[80vh] w-full">
              <div className="border-magenta border-[2px] rounded-[50%] p-7 -top-[3rem] -right-[4rem] rotate-0 absolute bg-magenta">
                <button
                  className="text-[2.5rem] cursor-pointer absolute  top-[0.5rem] right-[0.5rem]  text-white transition transform hover:rotate-45 duration-300 ease-in-out z-[1]"
                  onClick={() => onRequestClose()}
                >
                  <RxCross2 />
                </button>
              </div>
              <h2 className="w-full text-[1.5625rem] text-center font-bold text-magenta">
                {portfolio.title}
              </h2>
              <div className="float-left w-full mt-4 mb-6">
                {/* Preview section start */}
                <div
                  className={`flex flex-row flex-wrap justify-center text-2xl text-center ${
                    portfolio.previewurl ? '' : 'hidden'
                  }`}
                >
                  <IoOpenOutline className="hidden mr-2 text-xl md:block w-[1.5em] h-[1.5em]" />
                  Preview:&nbsp;
                  <ExternalLink
                    href={portfolio.previewurl}
                    className="text-magenta hover:text-black"
                  >
                    <p className="font-medium transition-all duration-300 ease-in-out hover:text-black">
                      {portfolio.previewurlname}
                    </p>
                  </ExternalLink>
                </div>
                {/* Preview section end */}
              </div>
              <div className="w-full my-6 ">
                <div className="float-left w-full md:w-2/4">
                  {/* Project section start */}
                  <div className="items-center w-full">
                    <div className="flex float-left w-1/4 text-lg">
                      <HiOutlineDocumentPlus className="hidden mr-2 text-xl md:block" />
                      <p>Project:</p>
                    </div>
                    <div className="flex float-left w-3/4 text-lg">
                      <p className="font-medium text-black">
                        {portfolio.projecttype}
                      </p>
                    </div>
                  </div>
                  {/* Project section end */}
                  {/* Languages section start */}
                  <div
                    className={`items-center w-full ${
                      portfolio.languages ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex float-left w-[32%] text-lg">
                      <BsCode className="hidden mr-2 text-xl md:block" />
                      <p>Languages:</p>
                    </div>
                    <div className={`flex float-left w-[68%] text-lg `}>
                      <p className="font-medium text-black">
                        {portfolio.languages}
                      </p>
                    </div>
                  </div>
                  {/* Languages section end */}
                </div>
                <div className="float-left w-full mb-4 md:w-2/4">
                  {/* Framework section start */}
                  <div className="items-center w-full">
                    <div className="flex float-left w-[32%] text-lg">
                      <SiFramework7 className="hidden mr-2 text-xl md:block" />
                      <p>Framework:</p>
                    </div>
                    <div className="flex float-left w-[68%] text-lg">
                      <p className="font-medium text-black">
                        {portfolio.framework}
                      </p>
                    </div>
                  </div>
                  {/* Framework section end */}
                </div>
              </div>
              <div className="float-left w-full mb-4">
                {/* Description section start */}
                <div className="items-center w-full">
                  <div className="flex float-left w-[16%] text-lg">
                    <MdDescription className="hidden mr-2 text-xl md:block" />
                    <p>Description: &nbsp;</p>
                  </div>
                  <div className="flex float-left w-[84%] text-left text-lg">
                    <p className="font-medium text-black">
                      {portfolio.description}
                    </p>
                  </div>
                </div>
                {/* Description section end */}
              </div>
              <Image
                src={portfolio.imgUrl}
                width={200}
                height={200}
                alt="blog details image"
                className="w-full h-[450px] md:h-auto object-cover rounded-xl mt-6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section start */}
      <div className="block md:hidden pb-[10px] mt-[-12px] opacity-100 pt-[85px] transform-none transition-all duration-75 text-center">
        {/* Container start */}
        <div className="px-[10px] py-0 w-full mx-auto">
          <section className="bg-white fixed w-full h-full top-0 left-0 z-[1111] overflow-hidden text-left">
            <nav className="bg-profileimageborder border border-solid border-bordergray h-[62px] fixed top-0 w-full z-[1]">
              <button
                className="absolute top-[10px] w-[40px] h-[40px] -right-[0.7rem] left-0 mx-auto my-0 block p-0 text-lightgray z-[1]"
                onClick={() => onRequestClose()}
              >
                <RxCross2 size={40} />
              </button>
            </nav>
            <div className="absolute top-0 left-0 right-0 visible w-full h-full m-0">
              <figure className="bg-white pt-[85px] px-[25px] pb-[25px] max-w-[720px] mx-auto my-0 w-full h-full">
                <figcaption className="mb-[15px]">
                  <h3 className="text-magenta text-[25px] uppercase px-0 pt-[10px] pb-[20px] font-bold text-center mb-[0.5rem] leading-[1.2]">
                    {portfolio.title}
                  </h3>
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="relative flex w-full max-w-full flex-100 px-[15px] mb-[0.5rem]">
                      <div className="flex float-left w-2/6">
                        <i className="pr-[0.5rem] relative top-[0.3rem]">
                          <HiOutlineDocumentPlus />
                        </i>
                        <span>Project :</span>
                      </div>
                      <div className="flex float-left w-2/3">
                        <span>{portfolio.projecttype}</span>
                      </div>
                    </div>
                    <div
                      className={`relative flex w-full max-w-full flex-100 px-[15px] mb-[0.5rem] ${
                        portfolio.languages ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex float-left w-2/6">
                        <i className="pr-[0.5rem] relative top-[0.3rem]">
                          <BsCode />
                        </i>
                        <span>Languages :</span>
                      </div>
                      <div className="flex float-left w-2/3">
                        <span>{portfolio.languages}</span>
                      </div>
                    </div>
                    <div
                      className={`relative flex w-full max-w-full flex-100 px-[15px] mb-[0.5rem] ${
                        portfolio.previewurl ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex float-left w-2/6">
                        <i className="pr-[0.5rem] relative top-[0.3rem]">
                          <IoOpenOutline />
                        </i>
                        <span>Preview :</span>
                      </div>
                      <div className="flex float-left w-2/3">
                        <ExternalLink
                          href={portfolio.previewurl}
                          className="text-magenta hover:text-black"
                        >
                          <p className="font-medium transition-all duration-300 ease-in-out hover:text-black">
                            {portfolio.previewurlname}
                          </p>
                        </ExternalLink>
                      </div>
                    </div>
                    <div className="relative flex w-full max-w-full flex-100 px-[15px] mb-[0.5rem]">
                      <div className="flex float-left w-2/6">
                        <i className="pr-[0.5rem] relative top-[0.3rem]">
                          <IoOpenOutline />
                        </i>
                        <span>Description :</span>
                      </div>
                      <div className="flex float-left w-2/3">
                        <span>{portfolio.description}</span>
                      </div>
                    </div>
                  </div>
                </figcaption>
                <Image
                  src={portfolio.imgUrl}
                  alt="blog details image"
                  className="block w-full rounded-[5px] transition-all duration-75 align-middle border-none"
                  quality={100}
                />
              </figure>
            </div>
          </section>
        </div>
        {/* Container end */}
      </div>
      {/* Section end */}
    </>
  );
};
export default Modal;
