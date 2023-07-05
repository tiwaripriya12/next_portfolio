import React from 'react';

const Personaldata1 = ({ personaldata }: any) => {
  return (
    <>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">address :&nbsp;</span>
        <span className="block font-semibold">{personaldata.address}</span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">phone :&nbsp;</span>
        <span className="block font-semibold">{personaldata.phone}</span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">email :&nbsp;</span>
        <span className="block font-semibold break-words md:inline-block">
          {personaldata.email}
        </span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">skype :&nbsp;</span>
        <span className="block font-semibold">{personaldata.skype}</span>
      </li>
      <li>
        <span className="opacity-[0.8] capitalize">languages :&nbsp;</span>
        <span className="block font-semibold">{personaldata.languages}</span>
      </li>
    </>
  );
};

export default Personaldata1;
