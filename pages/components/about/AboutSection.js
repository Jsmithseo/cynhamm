import React from "react";
import HeaderAndDropdown from "./content/HeaderAndDropdown";
import AboutImage from "./AboutImage";

const AboutSection = () => {
  return (
    <div className="wrapper position-relative d-flex align-items-center">
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "10px",
          zIndex: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
      </div>

      <div className="content-container d-flex flex-column flex-md-row align-items-start">
        <div className="content-area order-md-1 order-2">
          <HeaderAndDropdown />
        </div>
        <div className="image-area order-md-2 order-1">
          <AboutImage />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
