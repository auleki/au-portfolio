import React from 'react';
import s from './Skills.module.scss';



const Skills = () => {
  return(
  <>
    
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

  </>
)
}

export default Skills;