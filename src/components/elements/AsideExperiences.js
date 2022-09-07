import React from 'react';
import './style/aside-experiences.css'

export default function AsideExperiences() {
  return (
  <div className = "aside-experiences">
      <h3 className="aside-experiences-title blue-macro">RECENT EXPERIENCES</h3>
      <p className = "aside-experiences-date">june 2021 - june 2022 </p>
      <h4 className = "aside-experiences-entreprise">Openclassroom</h4>
      <p className = "aside-experiences-name">Developer</p>
      <ul className = "aside-experiences-list">
          <li>Choose a technical solution adapted to your client and work in Agile mode </li>
          <li>Create websites with HTML and CSS ;</li>
          <li>Create dynamic web applications with JavaScript and React ;</li>
          <li>Communicate with the back-end of the application using an API ;</li>
          <li>Implement unit and integration tests and debug code ;</li>
          <li>Solve technical problems with a programming language and algorithms ;</li>
          <li>Refactor code to make it more modern and optimized.</li>
      </ul>
  </div>
  );
}
