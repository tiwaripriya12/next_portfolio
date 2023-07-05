import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import Modal from '../../components/Modal';
import { portfoliodata } from '../../data/data';
import Head from 'next/head';
import Pageheader from '@/components/Pageheader';

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const expandModal = (project: any) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  return (
    <Fragment>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* Title section start */}
      <Pageheader
        transparenttitle={'works'}
        maintitle={'my '}
        maintitle1={'portfolio'}
      />
      {/* Title section end */}
      {/* Body section start */}
      <section
        className={`pb-[10px] md:pb-[60px] mt-[-12px] pt-[85px] md:pt-0 md:mt-[-15px] transition-all duration-75 transform-none opacity-100 text-center block`}
      >
        {/* Container section start */}
        <div
          className={`px-[10px] py-0 w-full mx-auto md:px-[15px]  ${
            modalIsOpen ? 'overflow-hidden' : 'overflow-auto'
          }`}
        >
          {/* Grid section start */}
          <div className="block mx-auto my-0 max-w-[1140px]">
            {/* Grid row section start */}
            <ul className="relative flex flex-wrap p-0 m-0 list-none ">
              {portfoliodata.map((menu, i) => (
                <li
                  key={menu.id}
                  className={`w-full md:w-1/3 float-left cursor-pointer p-[15px]`}
                >
                  <div
                    className="text-[30px] font-bold leading-[1.1em] tracking-[0.8px] no-underline text-white"
                    onClick={() => expandModal(menu)}
                  >
                    <div className="relative overflow-hidden bg-no-repeat bg-cover border border-solid border-magenta rounded-[30px]">
                      <Image
                        src={menu.projectimage}
                        alt=""
                        className="rounded-[30px]"
                      />

                      <div className="absolute text-center top-0 bottom-0 w-full h-full hidden transition duration-300 ease-in-out bg-fixed bg-magenta opacity-0 hover:opacity-100 hover:overflow-hidden hover:rounded-[30px] rounded-[30px] md:flex group">
                        <div className="relative hidden md:block group-hover:text-center group-hover:m-auto">
                          <p>{menu.title}</p>
                          <p>{menu.framework} Project</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* Grid row section end */}
          </div>
          {/* Grid section end */}
        </div>
        {/* Container section end */}
        <Modal
          isVisible={modalIsOpen}
          onRequestClose={closeModal}
          portfolio={selectedProject}
        />
      </section>
      {/* Body section end */}
    </Fragment>
  );
};

export default Portfolio;
