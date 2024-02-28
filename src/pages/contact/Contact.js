import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Contact = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const inputsHandle = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const sendDataToBackend = async (e) => {
    // e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://portfolio-project-server-03wy.onrender.com/api/v1/portfolio/contact",
        {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    e.target.name.name = "";
    e.target.name.email = "";
    e.target.name.message = "";
  };
  return (
    <>
      <div className="contact-main" id="contact">
        <h2 className="text-center">feel free to contact me anytime</h2>
        <div className="row contact-content-div">
          <div className="col-md-6 col-sm-12 contact-img">
            <div className="contact-img-div">
              <img
                src="https://www.achintya.co.in/app_themes/images/contact-img.svg"
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 conatact-form">
            <div className="contact-form-icons">
              <h4>contact with</h4>{" "}
              <a href="https://www.linkedin.com/in/ankit-rahi-563752258/">
                <AiOutlineLinkedin size={40} color="blue" />
              </a>{" "}
              <a href="https://github.com/Ankit9179?tab=repositories">
                <AiFillGithub size={40} />
              </a>
              <a href="https://www.instagram.com/ak_vampire12/">
                <AiOutlineInstagram size={40} color="red" />
              </a>
              <br />
              <h5 className="text-center">OR</h5>
              <hr />
            </div>
            <form
              onSubmit={sendDataToBackend}
              className="form"
              action="https://formspree.io/f/xzbldppp"
              method="POST"
            >
              <div className="mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={inputsHandle}
                  className="form-control"
                  placeholder="Enter your name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  required
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={inputsHandle}
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  name="message"
                  onChange={inputsHandle}
                  value={inputs.message}
                  required
                  cols="48"
                  rows="3"
                  placeholder=" write something"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary button-submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
