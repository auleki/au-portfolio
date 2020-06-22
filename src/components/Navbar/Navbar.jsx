import React from 'react';
import s from './Navbar.module.scss';

const Navbar = () => {
  return(
    <>
        <div className={s.navbar}>
                    <div className={s.icon}>
                        <i className="fas icon fa-home"></i>

                    </div>
                    <div className={s.icon}>
                        <i className="fas icon fa-user"></i>

                    </div>
                    <div className={s.icon}>
                        <i className="fas icon fa-briefcase"></i>

                    </div>
                    <div className={s.icon}>
                        <i className="fas icon fa-envelope-open"></i>

                    </div>
                    <div className={s.icon}>
                        <i className="far icon fa-comments"></i>

                    </div>
                </div>
    </>
)
}

export default Navbar;