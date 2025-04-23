import React from "react";

// styles
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="pageContainer">
      <div className="formContainer">
        <form action="" className="contactForm">
          <input
            type="text"
            placeholder="Name"
            name="name"
            autocomplete="off"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
