import React from "react";
import './style/aside-technologie.css'

export default function AsideTechnologies() {
  return (
    <div className="aside-technologies blue-macro">
      <h2 className="aside-technologies-title">TECHNOLOGIES</h2>
      <section className="aside-technologies-cards">
      <div className="aside-technologies-card">
        <i className="icon icon-git"></i>Git
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-html"></i>HTML5
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-css"></i>CSS3
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-sass"></i>SASS
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-bootstrap"></i>Bootstrap
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-javascript"></i>JavaScript
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-react"></i>React.js
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-redux"></i>Redux
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-node"></i>Node.js
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-express"></i>Express
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-mongodb"></i>Mongodb
      </div>
      <div className="aside-technologies-card">
        <i className="icon icon-typescript"></i>TypeScript
      </div>
      </section>
    </div>
  );
}
