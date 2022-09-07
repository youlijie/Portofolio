import React from 'react';
import profile from '../../assets/pictures/profile.png'
import './style/profile-picture.css'

export default function ProfilePicture() {
  return (<img  className="profile-picture" src = {profile} alt = "profile "/>);
}
