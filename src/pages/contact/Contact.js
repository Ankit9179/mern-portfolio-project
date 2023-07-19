import React from "react";
import "./Contact.css";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai"

const Contact = () => {
    return (
        <>
            <div className="contact-main">
                <h2 className="text-center">feel free to contact me anytime</h2>
                <div className="row contact-content-div">
                    <div className="col-md-6 col-sm-12 contact-img">
                        <div className="contact-img">
                            <img src="https://www.achintya.co.in/app_themes/images/contact-img.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 conatact-form">
                        <div className="contact-form-icons">
                            <h4>contact with</h4>  <AiOutlineLinkedin size={30} color="blue" /> <AiFillGithub size={30} /><AiOutlineInstagram size={30} color="red" />
                            <br />
                            <h5 className="text-center">OR</h5>
                            <hr />
                        </div>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <textarea cols="48" rows="3" placeholder="Wright something"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Contact;
