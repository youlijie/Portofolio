import React from 'react';
import ProfilePicture from './ProfilePicture';
import './style/aside-link.css'

export default function AsideLinks() {

  const redirect = (e) => {
    const href = e.target.dataset.id
    window.open(href , '_blank')
  }
  const copy = (e) => {
    const mail = e.target.dataset.id
    navigator.clipboard.writeText(mail)
    alert("Copied the mail: " + mail);
  }
  return (
  <div className="aside-links">
    <div className = "aside-links-icons">
    <div className = "aside-links-redirect"><i data-id = "https://github.com/youlijie" className = "icon icon-github" onClick={redirect}></i></div>
    <div className = "aside-links-redirect"><i data-id = "thi95540@gmail.com" className = "icon icon-email" onClick={copy}></i></div>
    </div>
    <ProfilePicture />
    <div className = "aside-links-icons">
    <div className = "aside-links-redirect"><i data-id="https://www.linkedin.com/in/thibault-werl%C3%A9-1527491b8/?locale=en_US/" className = "icon icon-linkedin" onClick={redirect}></i></div>
    <div className = "aside-links-redirect"><i data-id="https://drive.google.com/file/d/1uOewcCMMZ9XXOWjsIyNJdP4WJVKlKgmO/view?usp=sharing" className = "icon icon-cv" onClick={redirect}></i></div>
    </div>
  </div>
  );
}
