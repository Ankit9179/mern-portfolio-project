import React from "react";
import "./Contact.css";
import {
    AiFillGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
} from "react-icons/ai";

const Contact = () => {
    return (
        <>
            <div className="contact-main" id="contact">
                <h2 className="text-center">feel free to contact me anytime</h2>
                <div className="row contact-content-div">
                    <div className="col-md-6 col-sm-12 contact-img">
                        <div>
                            <img
                                src="https://www.achintya.co.in/app_themes/images/contact-img.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 conatact-form">
                        <div className="contact-form-icons">
                            <h4>contact with</h4> <a href="https://www.linkedin.com/in/ankit-rahi-563752258/"><AiOutlineLinkedin size={40} color="blue" /></a> {" "}
                            <a href="https://github.com/Ankit9179?tab=repositories"><AiFillGithub size={40} /></a>
                            <a href="https://www.instagram.com/ak_vampire12/"><AiOutlineInstagram size={40} color="red" /></a>
                            <br />
                            <h5 className="text-center">OR</h5>
                            <hr />
                        </div>
                        <form className="form">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    cols="48"
                                    rows="3"
                                    placeholder=" wright something"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary button-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
