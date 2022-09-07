import React from "react";
import ReactDOM from 'react-dom'
/*import cryptoGameVideo from "../../assets/videos/cryptogame_x264.mp4";
import dataCurveVideo from "../../assets/videos/dat-curve-smoother_x264.mp4";
import fishEyeVideo from "../../assets/videos/fisheye_x264.mp4";
import meteoVideo from "../../assets/videos/meteo-api_x264.mp4";
import myChatVideo from "../../assets/videos/myChat_x264.mp4";
import pinguiVideo from "../../assets/videos/pinguigny_x264.mp4";
*/
import { projectMap } from "../../data/realisationMap.js";
import Popup from "./Popup.js";
import "./style/project-realissations.css";

export default function ProjectsRealisations() {
  const popupOpen = (e) => {
    
  if (e.target.classList.contains('git-link')){
    const href = e.target.dataset.href
    window.open(href , '_blank')
  }else{
    const html = document.querySelector('html');
    html.classList.add('no-scroll')
    let title = e.target.dataset.id;
    let data;
    projectMap.forEach((project) => {
      console.log(project.title, title);
      if (project.title === title) data = project;
    });
    console.log("pop",title,data);
   // return <Popup data={data} />;
  
  ReactDOM.render(<Popup data={data} />, document.querySelector('.popup'))
}
};

  return (
    <div className="project-realisations">
      <div className="project-realisations-title blue-macro">
        <h2> MY LATEST REALIZATION </h2>
        <div className="project-relisations-title-line"></div>
      </div>
      <section className="project-relisations-cards">
        {projectMap &&
          projectMap.map((project, index) => (
            <article
              className="project-relisations-card"
              data-id={project.title}
              key={index + "card"}
              onClick={popupOpen}
            >
              <video
                className="project-realisation-background-video"
                preload="true"
                muted
                autoPlay
                loop
              >
                <source src={project.video} />
              </video>
              <div className="project-relisations-card-info" data-id={project.title} >
                <h2 data-id={project.title}>{project.title}</h2>
                <div className="project-relisations-hover"  data-id={project.title} >
                  <p  data-id={project.title} >{project.description}</p>
                </div>
                <div className="project-realisation-corner git-link" data-href={project.githubLink}></div>
                <i className="icon icon-git project-realisation-corner-icon git-link" data-href={project.githubLink}></i>
                <div className="aside-technologies-technos">
                  {project.icons.map((icon, index) => (
                    <div key={index + "icon"}  data-id={project.title}>
                      <i
                         data-id={project.title}
                        className={"icon icon-" + icon}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}
