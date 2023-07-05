import React from 'react';

const aboutbackup = () => {
  return (
    <>
      {/* customers column section start */}
      <div className="max-w-[50%] flex-50 relative w-full px-[15px]">
        <div className="border border-solid border-bordergray mb-[25px] md:mb-[30px] rounded-[5px] pt-[15px] pb-[20px] pr-[20px] pl-[25px] md:pt-[20px] md:pb-[25px] md:pl-[40px] md:pr-[30px]">
          <h3 className="text-magenta relative inline-block m-0 text-[40px] md:text-[50px] font-bold after:absolute after:right-[-24px] after:text-[33px] after:font-light after:top-[2px] after:content-['+']">
            81
          </h3>
          <p className="pl-0 md:pl-[45px] uppercase relative m-0 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[13px] md:before:w-[30px] md:before:h-[1px] md:before:bg-textblack">
            happy <span className="block">customers</span>
          </p>
        </div>
      </div>
      {/* customers column section end */}
      {/* awards column section start */}
      <div className="max-w-[50%] flex-50 relative w-full px-[15px]">
        <div className="border border-solid border-bordergray mb-[25px] md:mb-[30px] rounded-[5px] pt-[15px] pb-[20px] pr-[20px] pl-[25px] md:pt-[20px] md:pb-[25px] md:pl-[40px] md:pr-[30px]">
          <h3 className="text-magenta relative inline-block m-0 text-[40px] md:text-[50px] font-bold after:absolute after:right-[-24px] after:text-[33px] after:font-light after:top-[2px] after:content-['+']">
            53
          </h3>
          <p className="pl-0 md:pl-[45px] uppercase relative m-0 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-[13px] md:before:w-[30px] md:before:h-[1px] md:before:bg-textblack">
            awards <span className="block">won</span>
          </p>
        </div>
      </div>
      {/* awards column end */}
    </>
  );
};

export default aboutbackup;
