import Image from "next/image";

const Grid = () => {
  return (
    <div className="container my-5">
      <div className="row g-2 px-2 px-md-0">

        <div className="col-md-4 col-12 d-flex flex-column">
          <div
            className="border position-relative full-height-on-md"
            style={{ height: "100%", minHeight: "600px" }}
          >
            <Image
              src="/gallery/pic1.jpg"
              alt="Image 1"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-md-4 col-12 d-flex flex-column">
          <div
            className="border position-relative full-height-on-md"
            style={{ height: "100%", minHeight: "600px" }}
          >
            <Image
              src="/gallery/pic2.jpg"
              alt="Image 2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-md-4 col-12 d-flex flex-column">
          <div
            className="border position-relative mb-2 full-height-on-md"
            style={{ height: "300px", minHeight: "300px" }}
          >
            <Image
              src="/gallery/pic3.jpg"
              alt="Image 3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="border position-relative full-height-on-md"
            style={{ height: "300px", minHeight: "300px" }}
          >
            <Image
              src="/gallery/pic4.jpg"
              alt="Image 4"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Grid;