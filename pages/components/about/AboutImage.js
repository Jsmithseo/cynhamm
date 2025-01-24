import React from 'react';
import Image from 'next/image';

const AboutImage = () => {
  return (
    <div
      className='position-relative'
      style={{
        margin: '0 auto',
        overflow: 'hidden',
        boxShadow: '16px -16px 0px 0px rgba(254,228,0,1)',
      }}
    >
      <Image
        src="/gallery/pic1.jpg"
        alt="about-section-image"
        width={500}
        height={600}
        style={{objectFit: 'cover'}}
      />
    </div>
  );
};

export default AboutImage;
