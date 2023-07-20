import { Link } from "react-router-dom";
import Social from "./Social";
import React from "react";
import "./Blog.css";
import "./Support.css";

const Support = () => {
  return (
    <div>
      <SocialData />
    </div>
  );
};

const SocialData = () => {
  return (
    <div>
      <div className=" blog-minor">
        <div className="blog-logo">
          <h4 style={{ fontSize: "15px", textAlign: "left", color: "white" }}>
            Our free WordPress themes are downloaded over 5 millions times.{" "}
            <Link to="/WpThemes" className="blog-link">
              Get them now!
            </Link>
          </h4>
        </div>
        <div className="social-container">
          {Social.map((social) => {
            const { imageUrl } = social;
            return (
              <div key={social.id} className="social-info">
                <Link className="img-link">
                  <img src={imageUrl} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="support-con">
        <Link className="support-link1"><p style={{fontWeight: 'bold', fontSize: '17.5px'}}>all category</p>
        <i class="fa-solid fa-caret-right"></i>          
        </Link>  
        <div className="support-box">
        <Link className="support-link2"> <h4 style={{color: 'white'}}>Categories</h4></Link>
        <Link className="support-link3"><h3>Latest</h3></Link>
   </div>
      </div>
    </div>
  );
};

export default Support;
