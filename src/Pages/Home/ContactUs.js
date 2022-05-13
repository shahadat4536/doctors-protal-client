import React from "react";
import appointment from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div>
        <h3>Contact Us</h3>
        <h4>Stay connected with us</h4>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-success w-full max-w-xs"
        />
        <br />
      </div>
    </section>
  );
};

export default ContactUs;
