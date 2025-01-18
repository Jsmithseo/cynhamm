import Image from "next/image";

const Grid = () => {
  return (
    <div className="container my-5">
      <div className="row g-2 px-2 px-md-0">

        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative" >
            <Image
              src="/public/gallery/pic1.jpg"
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"

            />
          </div>
        </div>


        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative" >
            <Image
              src="/public/gallery/pic2.jpg"
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>


        <div className="col-md-4 col-12 d-flex flex-column">
          <div className="flex-grow-1 border p-3 position-relative">
            <Image
              src="/public/gallery/pic3.jpg"
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-grow-1 border p-3 mt-2 position-relative" >
            <Image
              src="/public/gallery/pic4.jpg"
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

