import React from 'react';
import './style/aside.css'
import AsideExperiences from '../elements/AsideExperiences';
import AsideFormation from '../elements/AsideFormation';
import AsideInfo from '../elements/AsideInfo';
import AsideLinks from '../elements/AsideLinks';
import AsideMessage from '../elements/AsideMessage';
import AsideTechnologies from '../elements/AsideTechnologies';
import { useState , useRef } from 'react';

export default function Aside() {
  const [collapse ,setCollapse] = useState(false)
const iconRef = useRef()
  const toggle = () => {
    if (iconRef.current.classList.contains('rotate-180'))iconRef.current.classList.remove('rotate-180')
    else{iconRef.current.classList.add('rotate-180')}
    setCollapse(collapse => !collapse)
  }
  return (
  <div className = "aside-container">
      <AsideLinks />
      <AsideInfo />
      <AsideMessage />
      <AsideTechnologies />
      {collapse  &&
      <>
      <AsideExperiences />
      <AsideFormation />
      </>
      }
      <div className = "aside-collapse" onClick={toggle}><i ref ={iconRef}className="icon icon-down"></i></div>
  </div>
  );
}
