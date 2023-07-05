import React from 'react';

const Pageheader = ({ transparenttitle, maintitle, maintitle1 }: any) => {
  return (
    <>
      <section className="opacity-100 mx-auto my-0 w-full md:relative md:px-0 md:py-[80px] transform-none transition-all delay-75 md:text-center block md:bg-transparent md:border-none bg-profileimageborder border-b border-b-solid border-b-bordergray pt-[16px] pb-[14px] px-[25px] text-left fixed right-0 left-0 z-[11] top-0">
        <h1 className="text-lightgray text-[26px] md:text-[56px] font-black uppercase m-0 leading-[1.2]">
          {maintitle}
          <span className="text-magenta">{maintitle1}</span>
        </h1>
        <span className="hidden md:text-titlebackground md:text-[110px] md:left-0 md:leading-[0.7] md:tracking-[10px] md:absolute md:right-0 md:top-[50%] md:uppercase md:translate-y-[-50%] md:font-extrabold md:block">
          {transparenttitle}
        </span>
      </section>
    </>
  );
};

export default Pageheader;
