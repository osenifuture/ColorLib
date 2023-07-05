
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
    const [ ismobile, setismobile]= useState(false);
    const handleMenu = () => {
        setismobile(!ismobile)
    }

    const closeMenu = () => {
        setismobile(false)
    }

    return(
        <Fragment>  
        <div>
            <div className="nav-container">
                
                    <Link to='/' className="c-logo">ColorLib</Link>
                

                <div className={ismobile ? 'mobile-link' : 'nav-con'} onClick={closeMenu} > 
                <Link to='/' className="link">Home</Link>
                <Link to='/Blog' className="link">Blog</Link>
                <Link to='/FreeThemes' className="link">Free Themes</Link>
                <Link to='/WpThemes' className="link">Wp Themes</Link>
                <Link to='/WebsiteTemplate' className="link">Website Template</Link>
                <Link to='/Support' className="link">Support</Link>
                <Link to='/Myaccount' className="link">My Account</Link>
                <div className="s-container">
                <Link to='/' className="s-link" ><img src="https://i.ibb.co/5Yv5KpP/twitter.png" alt="" className="twit"/></Link>
                <Link to='/' className="s-link" >{<h2>f</h2>}</Link>
               </div>
                </div>
                <div className="mobile-menu" onClick={handleMenu}>
                {
                        ismobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                 }
                </div>
            </div>

        </div>
        <Outlet/>
        </Fragment>
    )
};

export default Navigation;