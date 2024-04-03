import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="contact-form">
          <h2 className="--text">Contact Us</h2>
          <form className="--form-control --card --flex-center --dir-column">
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="--btn --btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="address-section">
          <h2>Our Address</h2>
          <p>Email: NitinOraon_zest@gmail.com</p>
          <p>Phone: 123-456-7890</p>
          <a href="https://maps.app.goo.gl/3yEYXYrnmi38USYj7">
            Address: IIIT Allahabad
          </a>
        </div>
      </div>
    </section>
  );
};
