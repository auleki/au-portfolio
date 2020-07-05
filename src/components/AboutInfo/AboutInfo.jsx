import React from 'react';
import s from './AboutInfo.module.scss';


const AboutInfo = () => {
  return(
  <>
    
    <div className={s.title}>About Me</div>

      <div className={s.row}>
        <div className={s.info}>
        <div className={s.left}>
          <p>First Name: <span>Wahab</span></p>
          <p>Last Name: <span>Giwa</span></p>
          <p>Age: <span>26 Years</span></p>
          <p>Nationality: <span>Nigeria</span></p>
          <p>Freelance: <span>Available</span></p>
        </div>
        <div className={s.right}>
          <p>Address: <span>Lagos</span></p>
          <p>Phone: <span>+234808995150</span></p>
          <p>Email: <span>kodagiwa@gmail.com</span></p>
          <p>Hobbies: <span>Speaking, Reading</span></p>
          <p>Languages: <span>English, Yoruba</span></p>
        </div>

        <button className={s.button}>Download CV</button>

        </div>

        <div className={s.statistics}>

          <div className={s.box}>
            <p>19 <sup>+</sup></p>
            <p>Months of experience</p>
          </div>
          <div className={s.box}>
            <p>20 <sup>+</sup></p>
            <p>Completed Projects</p>
          </div>
          <div className={s.box}>
            <p>55 <sup>+</sup></p>
            <p>Satisfied Clients</p>
          </div>
          <div className={s.box}>
            <p>19 <sup>+</sup></p>
            <p>Awards Won</p>
          </div>

        </div>



      </div>

  </>
)
}

export default AboutInfo;