import React from 'react';
import "./Catering.css";

// Catering component
export default function Catering () {  
  return (
    <div>
      <div className="catering-description">
        <h1 className="catering-title">Catering Services Tirana Albania</h1>
        <p className="catering-content">
          If you’re looking for <span>top-notch catering services in Tirana, Albania,</span> you’ve come to the right
          place! Whether you’re hosting a corporate event, wedding, or private party, our team of experienced caterers
          has got you covered. We offer a wide range of catering services that are sure to meet your every need.
        </p>
        <p className="catering-content">
          Our catering services in Tirana, Albania are designed to make your event a success. We pride ourselves on
          using only <span>the freshest ingredients to create delicious dishes</span> that will leave your guests
          satisfied and impressed. From appetizers to main courses, we have a menu that will suit every taste and
          dietary requirement.
        </p>
        <p className="catering-content">
          One of the things that sets us apart from other catering services in Tirana, Albania is our attention to
          detail. We understand that every event is unique and requires a personalized approach. That’s why we work
          closely with our clients to ensure that their vision is brought to life. From the décor to the menu, we will
          make sure that every detail is perfect.
        </p>
        <p className="catering-content">
          If you’re looking for the{" "}
          <a className="catering-link" href="#">
            best catering services in Tirana, Albania,
          </a>{" "}
          look no further. Contact us today to learn more about our services and to book your event. We’re here to help
          you create an unforgettable event that your guests will be talking about for years to come.
        </p>
      </div>
      <img src='/IMAGES/catering.jpg' alt='Catering.jpg'></img>
    </div>
  );
}

// MainSection component
const MainSection = () => (
  <section className="main-section">
    <img className="catering-main-image" src="Catering.jpg" alt="Catering Service" />
  </section>
);

// DescriptionSection component
const DescriptionSection = () => (
  <section>
    <div className="description">
      <div className="description-content">
        <h3 className="description-title">EXPERIENCED CATERERS IN TIRANA, ALBANIA</h3>
        <h4 className="menu-title">CUSTOMIZED MENUS TO FIT YOUR NEEDS</h4>
        <p className="description-list">
          Our team of experienced caterers has been providing exceptional catering services in Tirana, Albania for
          years. We know how to create delicious dishes and deliver exceptional service. You can count on us to make
          your event a success.
        </p>
        <h5>Why you should choose "Alar Catering" as your caterer:</h5>
        <div className="flex-container">
          <img className="img-icon" src="icon.PNG" alt="Icon" />
          <p className="check-list">
            Personalized service: We understand that every event is unique, which is why we work closely with our
            clients to create a personalized experience that meets their needs. From menu selection to décor, we’ll
            work with you to make sure every detail is perfect.
          </p>
        </div>
      </div>
      <img className="sushi-main-jpg" src="/sushi.jpg" alt="Sushi" />
    </div>
  </section>
);

// Carousel component
const Carousel = () => (
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="catering-testimonials.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="catering-testimonials.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="catering-testimonials.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>WHAT THE CLIENTS SAY</h5>
          <p>Delicious food. Perfect service; Personally I recommend it.</p>
          <p>Jurgen D.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);
import React from 'react';
import './Catering.css'; // Importojmë stilimet

const Catering = () => {
  return (
    <div className="catering-container">
      <div className="catering-text">
        <h1>EXPERIENCED CATERERS IN TIRANA, ALBANIA</h1>
        <h2>CUSTOMIZED MENUS TO FIT YOUR NEEDS</h2>
        <p>
          Our team of experienced caterers has been providing exceptional catering
          services in Tirana, Albania for years. We know how to create delicious
          dishes and deliver exceptional service. You can count on us to make your
          event a success. We understand that everyone has different tastes and
          dietary requirements That’s why we offer customized menus that can be tailored to fit your needs. 
          Whether you’re looking for vegetarian options, gluten-free dishes, or something else, we’ll work with you to create a menu that meets your needs
        </p>

        <h3>Why you should choose "Alar Catering" as your caterer:</h3>
        <ul className="reasons-list">
          <li>
            <strong>Exceptional food:</strong> At Alar Catering, we use only the freshest ingredients
            to create dishes that are sure to impress your guests. From appetizers to main courses, our menu is designed to delight your taste buds.
          </li>
          <li>
            <strong>Customized Service:</strong> We understand that every event is unique 
          </li>which is why we work closely with our clients to create a personalized experience that meets their needs. From menu selection to décor, we'll work with you to make sure every detail is perfect.
          <li>
            <strong>Professional staff:</strong> Our team of experienced caterers is dedicated 
          </li>
          <li>to providing exceptional service. From set up to clean up, we'll take care of everything so you can focus on enjoying your event.
            <strong>Affordable prices:</strong> 
          </li>We believe that everyone deserves high-quality catering services, which is why we offer affordable pricing options. We'll work with you to create a package that fits your budget.
          <li>
            <strong>Variety of menu options:</strong> 
          </li>
          <li>We offer a wide variety of menu options to fit your tastes and dietary requirements. Whether you're looking for vegetarian options, gluten-free dishes, or something else, we've got you covered.
            <strong>Attention to detail:</strong> We know that little things can make a big difference.
          </li>
          <li>
            <strong>Years of experience:</strong> Our team has years of experience providing
          </li>
        </ul>
      </div>
      <div className="catering-image">
        <img src="image.png" alt="Catering Dish" />
      </div>
    </div>
  );
};






