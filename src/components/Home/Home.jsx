import React from 'react';
import s from './Home.module.scss'
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return(
    
    <div className={s.homepage}> 
        <div className={s.container}>
            <div className={s.imageBox}>
                <img src="http://slimhamdi.net/tunis/dark/img/2.jpg" alt="Wahab avatar" />
            </div>
            <div className={s.infoBox}>
                <div className={s.info}>
                    <h1>I am <span>Wahab Giwa</span> </h1>
                    <p>
                        I'm a Tunisian based web designer & front‑end developer 
                        focused on 
                        crafting clean & user‑friendly experiences, 
                        I am passionate about building excellent 
                        software that improves the lives 
                        of those around me.
                    </p>
                    <a href="/" className={s.button}>Read more</a>
                </div>
                <Navbar />
                
            </div>
        </div>
        
    </div>
)
}

export default Home;