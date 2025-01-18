import React from "react";
import Link from "next/link";

const HeroButton = () => {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <Link href="https://calendly.com/cynhamm/30min">
        <button className="btn btn-md text-dark brandName yellow w-100 hero-button"> 
          Schedule 
        </button>
      </Link>
    </div>
  );
};

export default HeroButton;
