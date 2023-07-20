
import { Link } from "react-router-dom";
import Social from "./Social";
import React, { Fragment } from "react";
import "./Blog.css";
import FreeThemesjson from "./FreeThemesjson";
import "./FreeThemes.css" ;
import Themes from "./Themes";

const FreeThemes = () => {
    return(
        <div>
            <SocialData/>
            <FreeThemesjson/>
            <ThemesComponent/>
        </div>
    )
};



const SocialData = () => {
    return(
        <Fragment>
        <div className=" blog-minor">
            <div className="blog-logo">
               <h4 style={{ fontSize: '15px', textAlign: 'left', color: 'white'}}>Our free WordPress themes are downloaded over 5 millions times. <Link to='/WpThemes' className="blog-link">Get them now!</Link></h4> 
            </div>
            <div className="social-container">
                {
                    Social.map((social) => {
                        const{imageUrl} = social;
                        return(
                            <div key={social.id} className="social-info">
                             <Link className="img-link"><img src={imageUrl} alt="" /></Link>   
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </Fragment>
    )
};


const ThemesComponent = () => {
    return(
        <Fragment>
            <h3 style={{textAlign: 'center', marginTop: '100px'}}> OUR FREE THEMES</h3>
        <div className="theme-container">
            {
                Themes.map((theme) => {
                    const {name, imageUrl, description} = theme;
                    return(
                        <div key={name.id} className="theme-info">
                            <h3 style={{fontSize: '15PX'}}>{name}</h3>
                            <img src={imageUrl} alt="" />
                            <p style={{fontSize: '10px', padding: '5px'}}>DESCRIPTION: {description}</p>
                        </div>
                    )
                })
            }
        </div>
        </Fragment>
    ) 
};

export default FreeThemes;