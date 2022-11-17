import React from "react";

const images = [
  {
    name: "image 1",
    src: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/626.jpg",
  },
  {
    name: "image 2",
    src: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1033.jpg",
  },
  {
    name: "image 3",
    src: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/874.jpg",
  },
  {
    name: "image 4",
    src: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/628.jpg",
  },
];

function Home() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide h-50"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((ima, index) => {
          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={`image-${index}`}
            >
              <img
                src={ima?.src}
                className="d-block w-100"
                height={500}
                alt={ima?.name}
                style={ {objectFit:'contain'}}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;
