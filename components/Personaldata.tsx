import React from 'react';

const Personaldata = ({ personaldata }: any) => {
  return (
    <>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">first name :&nbsp;</span>
        <span className="block font-semibold">{personaldata.first_name}</span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">last name :&nbsp;</span>
        <span className="block font-semibold">{personaldata.last_name}</span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">age :&nbsp;</span>
        <span className="block font-semibold">{personaldata.age}</span>
      </li>
      <li className="pb-[20px]">
        <span className="opacity-[0.8] capitalize">nationality :&nbsp;</span>
        <span className="block font-semibold">{personaldata.nationality}</span>
      </li>
      <li>
        <span className="opacity-[0.8] capitalize">freelance :&nbsp;</span>
        <span className="block font-semibold">{personaldata.freelance}</span>
      </li>
    </>
  );
};

export default Personaldata;
