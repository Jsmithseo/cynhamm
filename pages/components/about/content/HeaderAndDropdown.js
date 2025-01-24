import React from 'react';
import Dropdown from './Dropdown';

const HeaderAndDropdown = () => {
  return (
    <div className="parent-container">
      <div className="content-wrapper">
        <h1 className="fw-bold about-title text-center">Hello I am Cyn</h1>
        <p className="fs-6 about-paragraph text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          excepturi odit eos in voluptas! Eaque culpa molestias odio quasi
          dignissimos architecto consectetur quam vero at, sit animi quisquam
          expedita tempora?
        </p>
        <div className="accordion-wrapper">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default HeaderAndDropdown;
