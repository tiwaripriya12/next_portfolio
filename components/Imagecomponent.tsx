import Image from 'next/image';
import React from 'react';

const Imagecomponent = ({
  imagesrc,
  imagealt,
  width,
  height,
  className,
}: any) => {
  return (
    <>
      <Image
        src={imagesrc}
        alt={imagealt}
        width={width}
        height={height}
        className={className}
      />
    </>
  );
};

export default Imagecomponent;
