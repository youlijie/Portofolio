import React from 'react';
import './style/aside-formations.css'

export default function AsideFormation() {
  return (
    <div className = "aside-formations">
    <h3 className="aside-formations-title blue-macro">TRAINEESHIP</h3>
    <p className = "aside-formations-date">june 2021 - june 2022 </p>
    <h4 className = "aside-formations-entreprise ">Openclassroom</h4>
    <p className = "aside-formations-name">Front-End Developer RNCP level 6(Bachelor degree level)</p>
    <ul className = "aside-formations-list">
        <li>Analyze the needs from the specifications defined by the client or the project manager;</li>
        <li>Implement mockups with quality code ;</li>
        <li>Optimize page load time ;</li>
        <li>Communicate with back-end developers to ensure the exchange of information in the application ;</li>
        <li>Use best practices to structure HTML, CSS and JavaScript code ;</li>
        <li>Use frameworks like React to build powerful, modular apps ;</li>
        <li>Test the proper functioning of the application and correct the code when necessary ;</li>
        <li>Provide technical support for the website and produce technical and functional documentation of the website for the client.</li>
    </ul>
</div>
  );
}
