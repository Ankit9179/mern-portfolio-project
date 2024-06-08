// import React from "react";
// import "./Projects.css";
// import Fade from "react-reveal/Fade";
// import Spin from "react-reveal/Spin";

// const Projects = () => {
//   return (
//     <>
//       <div className="container project-main-div" id="project">
//         <Fade left>
//           <h1 className="text-center">Top Recent Project</h1>
//         </Fade>
//         <hr />
//         <Fade right>
//           <p className="text-center">
//             My top three mern stack projects , if you want to use my web
//             projects than you can hit view button
//           </p>
//         </Fade>
//         <div className=" mb-4 mt-4 project-card-div  ">
//           <div className=" row projects-divs d-flex">
//             <Spin>
//               <div className="col-md-3 project-card mt-4  ">
//                 <div className="card card-div" style={{ width: "18rem" }}>
//                   <span>Full Stack</span>
//                   <img
//                     src="https://www.wikihow.com/images/thumb/9/90/Ask-Questions-on-Facebook-Messenger-on-Android-Step-1.jpg/v4-460px-Ask-Questions-on-Facebook-Messenger-on-Android-Step-1.jpg"
//                     alt="pic"
//                   />
//                   <div className="card-body d-flex project-use-skills">
//                     <p>MongoDB</p>
//                     <p>Express</p>
//                     <p>React</p>
//                     <p>NodeJs</p>
//                   </div>
//                   <div className="text-center">
//                     <h3>A chat</h3>
//                   </div>
//                   <div className="project-view-div">
//                     <a href="https://caht-app-ld.onrender.com">View</a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3  project-card mt-4  ">
//                 <div className="card card-div" style={{ width: "18rem" }}>
//                   <span>Full Stack</span>
//                   <img
//                     src="https://fireapps.io/wp-content/uploads/2020/08/shopping-e-commerce-concept-isometric-poster_1284-15256.jpg"
//                     alt="pic"
//                   />
//                   <div className="card-body d-flex project-use-skills">
//                     <p>MongoDB</p>
//                     <p>Express</p>
//                     <p>React</p>
//                     <p>NodeJs</p>
//                   </div>
//                   <div className="text-center">
//                     <h3>E-commerce</h3>
//                   </div>
//                   <div className="project-view-div">
//                     <a href="https://e-commerce-mern-client.onrender.com">
//                       View
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-3 project-card mt-4 ">
//                 <div className="card card-div" style={{ width: "18rem" }}>
//                   <span>Full Stack</span>
//                   <img
//                     src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/11/App-design-trends-2023.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
//                     alt="pic"
//                     height={"240px"}
//                   />
//                   <div className="card-body d-flex project-use-skills">
//                     <p>MongoDB</p>
//                     <p>Express</p>
//                     <p>React</p>
//                     <p>NodeJs</p>
//                   </div>
//                   <div className="text-center">
//                     <h3>Blog App</h3>
//                   </div>
//                   <div className="project-view-div">
//                     <a href="https://blog-1hj5.onrender.com/">View</a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 project-card mt-4 ">
//                 <div className="card card-div" style={{ width: "18rem" }}>
//                   <span>Full Stack</span>
//                   <img
//                     src="https://www.reactive-executive.com/wp-content/uploads/2023/02/quel-est-le-role-du-manager-management-et-sa-hierarchie-Reactive-Executive.webp"
//                     alt="..."
//                   />
//                   <div className="card-body d-flex project-use-skills">
//                     <p>MongoDB</p>
//                     <p>Express</p>
//                     <p>React</p>
//                     <p>NodeJs</p>
//                   </div>
//                   <div className="text-center">
//                     <h3>Expense Management System</h3>
//                   </div>
//                   <div className="project-view-div">
//                     <a href="https://tiny-fedora-moth.cyclic.app/login">View</a>
//                   </div>
//                 </div>
//               </div>
//             </Spin>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project-main-div" id="project">
        <Fade left>
          <h1 className="text-center">Top Recent Projects</h1>
        </Fade>
        <hr />
        <Fade right>
          <p className="text-center">
            My top three MERN stack projects. If you want to use my web
            projects, you can hit the view button.
          </p>
        </Fade>
        <div className="project-card-div">
          <div className="row projects-divs d-flex">
            <Spin>
              <div className="col-md-6 col-lg-3 project-card mt-4">
                <div className="card card-div">
                  <span>Full Stack</span>
                  <img
                    src="https://www.wikihow.com/images/thumb/9/90/Ask-Questions-on-Facebook-Messenger-on-Android-Step-1.jpg/v4-460px-Ask-Questions-on-Facebook-Messenger-on-Android-Step-1.jpg"
                    alt="pic"
                    className="card-img-top"
                  />

                  <div className="text-center">
                    <h3>A Chat</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="https://caht-app-ld.onrender.com">View</a>
                    <a href="https://github.com/Ankit9179/chat-yt-app">Code</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 project-card mt-4">
                <div className="card card-div">
                  <span>Full Stack</span>
                  <img
                    src="https://fireapps.io/wp-content/uploads/2020/08/shopping-e-commerce-concept-isometric-poster_1284-15256.jpg"
                    alt="pic"
                    className="card-img-top"
                  />

                  <div className="text-center">
                    <h3>E-commerce</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="https://e-commerce-mern-client.onrender.com">
                      View
                    </a>
                    <a href="https://github.com/Ankit9179/E-Commerce-Mern">
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 project-card mt-4">
                <div className="card card-div">
                  <span>Full Stack</span>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/11/App-design-trends-2023.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces"
                    alt="pic"
                    className="card-img-top"
                  />

                  <div className="text-center">
                    <h3>Blog App</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="https://blog-1hj5.onrender.com/">View</a>
                    <a href="https://github.com/Ankit9179/Blog-app-mern-project">
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 project-card mt-4">
                <div className="card card-div">
                  <span>Full Stack</span>
                  <img
                    src="https://www.reactive-executive.com/wp-content/uploads/2023/02/quel-est-le-role-du-manager-management-et-sa-hierarchie-Reactive-Executive.webp"
                    alt="pic"
                    className="card-img-top"
                  />

                  <div className="text-center">
                    <h3>Expense Management System</h3>
                  </div>
                  <div className="project-view-div">
                    <a href="https://tiny-fedora-moth.cyclic.app/login">View</a>
                    <a href="https://github.com/Ankit9179/Expense-Management-app-mern">
                      Code
                    </a>
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
