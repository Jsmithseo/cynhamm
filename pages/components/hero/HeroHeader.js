import React from "react";
import Image from "next/image";


const HeroHeader = () => {
  return (
    <section className="hero-header-container text-center relative">
      
      <h1 className="fw-bold display-4">
        CynHam <br />
        Photography
      </h1>

      <div className="mt-1">
        <Image src="/underline.png" alt="Underline" width={260} height={16} />
      </div>

      <p className="mt-3 fs-4 text-muted">
        Capture Your Vision, Elevate Your Brand
      </p>

    </section>
  );
};

export default HeroHeader;
