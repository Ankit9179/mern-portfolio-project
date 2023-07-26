import React from "react";
import "./AboutPage.css";
import pic from "../../assets/Images/menu-pic1.jpg";
import RubberBand from "react-reveal/RubberBand";

const AboutPage = () => {
  return (
    <>
      <RubberBand>
        <div className="main-div" id="about">
          <div className="row about-content">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 img-div">
              <img src={pic} alt="about pic" />
            </div>
            <div className="col-md-6 about-contant">
              <h1>About Me</h1>
              <p>
                <h2 style={{ display: "inline-block" }}>Hello</h2> everyone, my
                name is ankit i don't have any type of technical degree because
                i have done my bachelor's in B.sc (Mathematics). but i know very
                well about web development.nowadays i'm learning MERN stack from
                youtube.if i talk about my skills, so i have knowledge about
                these fields html , css , Javascript React js library ,
                Bootstrap framework for frontend , i use Node js and MongoDB
                database for creating server .
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                excepturi dolore provident adipisci labore amet sapiente rem
                porro fugiat culpa nesciunt ipsa architecto delectus possimus
                sint dolore quisquam velit eos enim autem omnis alias illum?
                Consequuntur id qui veniam, asperiores voluptate distinctio cum
                hic, sequi esse veritatis iusto, aspernatur ut delectus quam nam
                error adipisci. Autem odio fuga earum nemo ad et aperiam hic
                commodi eum ratione quis tenetur modi, incidunt nisi. Magni
                soluta velit omnis excepturi illo sunt aut recusandae aliquid
                iste, similique, quas fugiat! */}
              </p>
            </div>
          </div>
        </div>
      </RubberBand>
    </>
  );
};

export default AboutPage;
