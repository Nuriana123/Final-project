import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="Big-Black-Burger.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-center">
              <div>
                <p className="first-paragraph">
                  Foods that’s fast but never rushed
                </p>
                <button className="btn btn-light">Order Now</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="carusel2.jpeg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-center">
              <div>
                <p className="first-paragraph">Bringing flavor to your event</p>
                <button className="btn btn-light">Order Now</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="carusel3.jpeg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle text-center">
              <div>
                <p className="first-paragraph">
                  Savour the moment with our catering
                </p>
                <button className="btn btn-light">Order Now</button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
