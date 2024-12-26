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
              <img src={pic} alt="about pic " />
            </div>
            <div className="col-md-6 about-contant">
              <h1>About Me</h1>
              <p>
                <h2 style={{ display: "inline-block" }}>Hello</h2> everyone, As
                an aspiring MERN Stack Developer, I am passionate about building
                dynamic and responsive web applications using a modern tech
                stack. With a solid foundation in React.js, MongoDB, HTML, CSS,
                JavaScript, and Node.js, I am equipped to tackle complex coding
                challenges and deliver high-quality software solutions. I am
                excited to connect with fellow professionals, explore new
                opportunities, and contribute to exciting and impactful
                projects. Let's connect and collaborate!
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
