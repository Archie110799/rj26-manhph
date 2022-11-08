import { useState } from "react";

function CaroselF() {
  const [indexImage, setIndexImage] = useState(0);
  const images = [
    {
      id: 0,
      url: "image 1",
    },
    {
      id: 1,
      url: "image 2",
    },
    {
      id: 2,
      url: "image 3",
    },
  ];

  const handlePrev = () => {
    if (indexImage > 0) {
      setIndexImage(indexImage - 1);
    }
    if (indexImage === 0) {
      setIndexImage(images.length - 1);
    }
  };
  const handleNext = () => {
    if (indexImage < images.length - 1) {
      setIndexImage(indexImage + 1);
    }
    if (indexImage === images.length - 1) {
      setIndexImage(0);
    }
  };
  return (
    <>
      {/* Carosel */}
      <div className="row">
        <div className="col-2" onClick={handlePrev}>
          Prev
        </div>
        <div className="col">
          {images?.map((item) => {
            return item.id === indexImage ? item.url : null;
          })}
        </div>
        <div className="col-2" onClick={handleNext}>
          Next
        </div>
      </div>
      {/* Thumnail */}
      <div>
        {images.map((item, index) => (
          <span
            onClick={() => setIndexImage(index)}
            className="px-3"
            key={item.url + index}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
}

export default CaroselF;
