import React from 'react';
import s from './About.module.scss';
import Skills from '../Skills/Skills'
import AboutInfo from '../AboutInfo/AboutInfo';
import Experience from '../Experience/Experience';

const About = () => {
  return(
    <div className={s.container}>
      
      <AboutInfo />
      <Skills />

      <Experience /> 

      


      
{/* intersectionality */}


    </div>
)
}

export default About;


