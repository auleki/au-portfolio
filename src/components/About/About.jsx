import React from 'react';
import s from './About.module.scss';

const About = () => {
  return(
    <div className={s.container}>
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

      <div className={s.skills}>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>95 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>HTML</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>70 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>CSS</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>60 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>JAVASCRIPT</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>80 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>WORDPRESS</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>75 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>REACT</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>65 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>NODE JS</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>60 <span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>MONGO DB</h2>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.box}>
            <div className={s.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" ></circle>
              </svg>
              <div className={s.number}>
                <h2>40<span>%</span></h2>
              </div>
            </div>
            <h2 className={s.text}>PYTHON</h2>
          </div>
        </div>

        {/* <span className={s.skill}>
            HTML 99%
        </span>
        <span className={s.skill}>
          CSS 70%
        </span>
        <span className={s.skill}>
          JAVASCRIPT 60%
        </span>
        <span className={s.skill}>
          WORDPRESS 80%
        </span>
        <span className={s.skill}>
          REACT 75%
        </span>
        <span className={s.skill}>
          PHP 20%
        </span>
        <span className={s.skill}>
          NODE 65%
        </span>
        <span className={s.skill}>
          MONGO DB 60%
        </span> */}



      </div>

      <div className={s.experiences}>
        <div className={s.case}>
          <div className={s.icon}>
            <i class="fas fa-briefcase"></i>
          </div>

        </div>


      </div>


      
{/* intersectionality */}


    </div>
)
}

export default About;


