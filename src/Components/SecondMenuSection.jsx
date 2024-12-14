import React from "react";
import "./SecondMenuSection.css";

function SecondMenuSection() {
  return (
    <div>
      <div className="section-pic-background">
        <p>FRESH INGREDIENTS</p>
        <p>BOLD FLAVORS</p>
          <p>UNFORGETTABLE DISHES.</p>
        <p>Feeling Hungry! Order Your Favourite Food.</p>
        <button>
          <i class="bi bi-shop"></i> Order now
        </button>
      </div>
      <div className="book-your-table">
        <div className="col-md-6">
          <iframe
            title="Alar Food & Catering Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.895567682074!2d19.818890815698526!3d41.327408879270504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310f51b7c553%3A0x52859bc872b620c0!2sRruga%20Abdyl%20Frash%C3%ABri%2C%20Tirana%2C%20Albania!5e0!3m2!1sen!2s!4v1696843852765!5m2!1sen!2s"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-6 reservation">
          <p>RESERVATION</p>
          <p>BOOK YOUR TABLE</p>
        </div>
      </div>
      <div className="subscribe-newsletter">
        <p>Subscribe to newsletter</p>
        <p>Subscribe to receive our weekly Hot Promotion every Monday!</p>
      </div>
    </div>
  );
}
export default SecondMenuSection;
