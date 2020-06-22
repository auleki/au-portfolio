import React from 'react';
import s from './About.module.scss';

const About = () => {
  return(
    <div className={s.container}>
      <div className={s.title}>About Me</div>

      <div className={s.info}>
        <div className={s.left}>
          <p>First Name: <span>Wahab</span></p>
          <p>Last Name: <span>Giwa</span></p>
          <p>Age: <span>26 Years</span></p>
          <p>Nationality: <span>Nigeria</span></p>
          <p>Freelance: <span>Available</span></p>
        </div>
        <div className={s.left}>
          <p>Address: <span>Lagos</span></p>
          <p>Phone: <span>+234808995150</span></p>
          <p>Email: <span>kodagiwa@gmail.com</span></p>
          <p>Hobbies: <span>Speaking, Reading</span></p>
          <p>Languages: <span>English, Yoruba</span></p>
        </div>

        <button className={s.button}>Download CV</button>

      </div>
{/* intersectionality */}


    </div>
)
}

export default About;


