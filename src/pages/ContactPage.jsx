import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form
            className="contact-form"
            action="https://formsubmit.co/funtogamer489@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you.html"
            />

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <section id="location" className="section">
        <div className="locationcontainer">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22563.933705296342!2d75.78114022729625!3d31.01634117837066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a889b40931c31%3A0xb504e70453b09832!2sSohal%20Engg.%20Works!5e0!3m2!1sen!2sin!4v1747553129425!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
