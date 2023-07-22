import React from "react";
import "./AboutPage.css";
import RubberBand from "react-reveal/RubberBand";

const AboutPage = () => {
  return (
    <>
      <RubberBand>
        <div className="main-div" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 img-div">
              <img
                src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"
                alt="about pic"
              />
            </div>
            <div className="col-md-6 about-contant">
              <h1>About My</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                excepturi dolore provident adipisci labore amet sapiente rem
                porro fugiat culpa nesciunt ipsa architecto delectus possimus
                sint dolore quisquam velit eos enim autem omnis alias illum?
                Consequuntur id qui veniam, asperiores voluptate distinctio cum
                hic, sequi esse veritatis iusto, aspernatur ut delectus quam nam
                error adipisci. Autem odio fuga earum nemo ad et aperiam hic
                commodi eum ratione quis tenetur modi, incidunt nisi. Magni
                soluta velit omnis excepturi illo sunt aut recusandae aliquid
                iste, similique, quas fugiat!
              </p>
            </div>
          </div>
        </div>
      </RubberBand>
    </>
  );
};

export default AboutPage;
