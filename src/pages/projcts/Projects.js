import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project-main-div" id="project">
        <Fade left>
          <h1 className="text-center">Top Recent Project</h1>
        </Fade>
        <hr />
        <Fade right>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nostrum alias fuga amet, molestias temporibus tempore maxime minima
            reiciendis, quidem dolorum consequuntur autem accusamus officiis
            culpa rerum quasi eveniet placeat?incuding programming languages ,
            frameworks , databases ,frontend and backend bevelopment tools , and
            Apis
          </p>
        </Fade>
        <div className=" mb-4 mt-4 project-card-div  ">
          <div className="row" d-flex>
            <Spin>
              <div className="col-md-4 project-card ">
                <div className="card" style={{ width: "18rem" }}>
                  <span>Full Stack</span>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/11/App-design-trends-2023.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
                    alt="..."
                  />
                  <div className="card-body d-flex project-use-skills">
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>NodeJs</p>
                  </div>
                  <div className="text-center">
                    <h3>Blog App</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 project-card ">
                <div className="card" style={{ width: "18rem" }}>
                  <span>Full Stack</span>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/11/App-design-trends-2023.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
                    alt="..."
                  />
                  <div className="card-body d-flex project-use-skills">
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>NodeJs</p>
                  </div>
                  <div className="text-center">
                    <h3>Blog App</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 project-card ">
                <div className="card" style={{ width: "18rem" }}>
                  <span>Full Stack</span>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/11/App-design-trends-2023.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
                    alt="..."
                  />
                  <div className="card-body d-flex project-use-skills">
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>NodeJs</p>
                  </div>
                  <div className="text-center">
                    <h3>Blog App</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </Spin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
