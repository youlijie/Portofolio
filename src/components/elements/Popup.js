import React, { useEffect } from "react";
import ReactDOM , { unmountComponentAtNode, render } from 'react-dom'
import "./style/popup.css";

export default function Popup(data) {
  useEffect(() => {
    console.log(data.data, "popup");
  });



const githubLink = () => {
    window.open(data.data.githubLink , '_blank')
}
const directLink = () => {
    window.open(data.data.directLink , '_blank')
}
const closePopup = () => {
    unmountComponentAtNode(document.querySelector('.popup'))
    const html = document.querySelector('html');
    html.classList.remove('no-scroll')
}
  return (
    <div className="popup-main">

      <div className="popup-container">
        <div className="popup-title">
          <h1>{data.data.title}</h1>
          <i className="icon icon-close" onClick={closePopup}></i>
        </div>
        <div className ="popup-scrollable">
        <div className="popup-technologies-links">
          <div className="popup-technologies">
            <h3>Technologies</h3>
            <ul className="popup-technologies-list">
              {data.data.icons.map((icon, index) => (
                <div className="popup-technologie-card" key={index}>
                  <i className={"icon icon-" + icon}></i>
                  {icon}
                </div>
              ))}
            </ul>
          </div>
          <div className="popup-links">
            <h3>Links</h3>
            <p className = "popup-links-p"><span className="popup-links-black">Github :</span> <span className="popup-links-spanlink" onClick={githubLink}>{data.data.githubLink}</span></p>
        
            <p className = "popup-links-p"><span className="popup-links-black">Direct Link :</span> <span className="popup-links-spanlink" onClick={directLink} >{data.data.directLink}</span> </p>
          </div>
        </div>
        <div className = "popup-description-images">
            <div className="popup-description">
                <h3>Description</h3>
                <p>{data.data.fullDescription}</p>
                </div>
            <div className="popup-images">
                 <h3>Pictures</h3>
            {data.data.pictures.map((pic,index) =>(
                <img key={index} src={pic} alt ="presentation"/>
            ))}</div>

</div>
        </div>
      </div>
    </div>
  );
}
