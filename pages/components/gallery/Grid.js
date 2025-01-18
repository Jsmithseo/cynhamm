
import Image from "next/image";
import pic1 from "../../../public/gallery/pic1.jpg";
import pic2 from "../../../public/gallery/pic2.jpg";
import pic3 from "../../../public/gallery/pic3.jpg";
import pic4 from "../../../public/gallery/pic4.jpg";

const Grid = () => {
  return (
    <div className="container my-5">
      <div className="row g-2 px-2 px-md-0">
        {/* First Image */}
        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative" style={{ height: "300px" }}>
            <Image
              src={pic1}
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative" style={{ height: "300px" }}>
            <Image
              src={pic2}
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Third and Fourth Images */}
        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative" style={{ height: "300px" }}>
            <Image
              src={pic3}
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-grow-1 border p-3 mt-2 position-relative" style={{ height: "300px" }}>
            <Image
              src={pic4}
              alt="Gallery Image 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
