
import { Link } from "react-router-dom";
import Social from "./Social";
import React from "react";
import "./Blog.css";

const WpThemes = () => {
  return (
    <div>
      <SocialData/>
    </div>
  );
};


const SocialData = () => {
  return(
      <div>
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
     
      </div>
  )
};



export default WpThemes;
