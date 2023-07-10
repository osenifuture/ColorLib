import React from "react";
import Natures from "./Natures";
import "./Home.css";
import { Link } from "react-router-dom";
import Simplicity from "./Simplicity";


const Home = () => {
  return (
    
    <div className="home-container1">
      <div className="box-1">
        <div className="color-con">
          <h1>Colorlib</h1>
        </div>
        <div className="dot"></div>
      </div>

      <div className="box-2">
        <p>We change everything WorldPress.</p>
        <p>One WP theme at a time.</p>
      </div>

      <NaturesComponent />
      <SimplicityComponent />
    
    </div>
  );
};

const NaturesComponent = () => {
  return (
    <div>
      <div className="mother-nature">
        <div className="theme-con">
          <h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              fontSize: "40px",
              fontWeight: "200",
            }}
          >
            Free WordPress Themes
          </h1>
          <p style={{ textAlign: "center", fontSize: "19px" }}>
            We are excited to be part of WordPress community and looking to make
            contribution by releasing free WordPress themes for everyone to
            use.Other themes can be found here.
          </p>
        </div>

        <div className="nature-container">
          {Natures.map((nature) => {
            const { imageUrl, title, description } = nature;
            return (
              <div key={nature.id} className="nature-info">
                <img src={imageUrl} alt="" />
                <h3> {title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <div className="moretheme">
          <p
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "25px",
              marginTop: "15px",
            }}
          >
            Looking for more customizable WordPress Themes?
          </p>
          <p style={{ color: "black", textAlign: "center", fontSize: "25px" }}>
            You might to have{" "}
            <Link
              to="/FreeThemes"
              className="theme-link"
              style={{ textDecoration: "none" }}
            >
              a look at these
            </Link>
          </p>
        </div>
      </div>

      <div className="premium-con">
        <h4 style={{ color: "black", fontSize: "45px", marginTop: "110px" }}>
          Premium WordPress Themes
        </h4>
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontSize: "23px",
            marginTop: "15px",
          }}
        >
          If you are looking for more featured and costomization option then
        </p>
        <p style={{ color: "black", textAlign: "center", fontSize: "23px" }}>
          premium WordPress themes are the right fit for you. Best examples can
          be <Link to="/WpThemes">found here</Link>
        </p>
        <div className="premium-linkcon">
            <div className="link-box">
              <ul>
               
              <li><Link className="prem-link">3 Coloum</Link></li>
              <li> <Link className="prem-link">AdSence Ready</Link></li>
              <li>  <Link className="prem-link">Affiliate Marketing</Link></li>
              <li>  <Link className="prem-link">App Landing Pages</Link></li>
              <li> <Link className="prem-link">Architect</Link></li>
              <li> <Link className="prem-link">bbPress/ Forum</Link></li>
              <li> <Link className="prem-link">Blog</Link></li>
              <li>  <Link className="prem-link">Boostrap</Link></li>
              <li>  <Link className="prem-link">Business</Link></li>
              <li> <Link className="prem-link">Clean</Link></li>
              <li> <Link className="prem-link">Church</Link></li>
              <li>  <Link className="prem-link">Comig Soon</Link></li>
              <li>  <Link className="prem-link">Construction Company</Link></li>
              </ul>
            </div>
            <div className="link-box">
              <ul>
              <li> <Link className="prem-link">Creative</Link></li>
              <li>  <Link className="prem-link">Directive</Link></li>
              <li>  <Link className="prem-link">Eco & Green</Link></li>
              <li>  <Link className="prem-link">eCommerce</Link></li>
              <li>  <Link className="prem-link">Education</Link></li>
              <li> <Link className="prem-link">Fashion</Link></li>
              <li>  <Link className="prem-link">Fatest</Link></li>
              <li> <Link className="prem-link">Feminine</Link></li>
              <li> <Link className="prem-link">Fitness & Gym</Link></li>
              <li> <Link className="prem-link">Fullscreen and FullPage</Link></li>
              <li>  <Link className="prem-link">Grid</Link></li>
              <li> <Link className="prem-link">Health & Medical</Link></li>
              </ul>
            </div>

            <div className="link-box">
              <ul>
              <li>  <Link className="prem-link">Hosting</Link></li>
              <li> <Link className="prem-link">Hotel</Link></li>
              <li>   <Link className="prem-link">Job Board</Link></li>
              <li>   <Link className="prem-link">Landing Page</Link></li>
              <li>  <Link className="prem-link">Lawyer</Link></li>
              <li>  <Link className="prem-link">Magazine</Link></li>
              <li>  <Link className="prem-link">MultiPurpose</Link></li>
              <li>  <Link className="prem-link">Music</Link></li>
              <li>  <Link className="prem-link">Night Club</Link></li>
              <li>  <Link className="prem-link">One Page </Link></li>
              <li>  <Link className="prem-link">Parallax Scrolling</Link></li>
              </ul>
            </div>

            <div className="link-box">
              <ul>
              <li>  <Link className="prem-link">Photograph</Link></li>
              <li>  <Link className="prem-link">Popular</Link></li>
              <li>  <Link className="prem-link">Portfolio</Link></li>
              <li>   <Link className="prem-link">Real Estate</Link></li>
              <li>  <Link className="prem-link">Resume</Link></li>
              <li>   <Link className="prem-link">Restaurant</Link></li>
              <li>  <Link className="prem-link">SEO Friendly</Link></li>
              <li> <Link className="prem-link">Simple</Link></li>
                  <li>   <Link className="prem-link">SPA & Salon</Link></li>
                  <li>  <Link className="prem-link">Tech Startup</Link></li>
                  <li>  <Link className="prem-link">Travel</Link></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

const SimplicityComponent = () => {
  return (
    <div className="mother-simplecon">
      <p style={{ color: "black", textAlign: "center", fontSize: "43px", marginTop: '40px' }}>
        Simplicity. Performance. Perfection.{" "}
      </p>
      <p style={{ color: "black", textAlign: "center", fontSize: "22px" }}>
        Simple, responsive, clean and fast loading WordPress themes for
        everyone.
      </p>
      <p style={{ color: "black", textAlign: "center", fontSize: "22px" }}>
        Highly customizable functionality and design to create website you have
        always wanted.
      </p>
      <div className="simplicity-con">
        {Simplicity.map((Simplicity) => {
          const { imageUrl, title, description } = Simplicity;
          return (
            <div key={Simplicity.id} className="simplicity-info">
              <img src={imageUrl} alt="" />
              <p style={{ fontSize: "20px", textAlign: "center" }}>{title}</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
      
<div className="footer-container1">
  <div className="foot-linkcon">
  <Link to='/' className="foot-link">About</Link>
  <Link to='WpThemes' className="foot-link">WordPress Themes</Link>
  <Link to='/Support' className="foot-link">Contact Us</Link>
  <Link to='/Support' className="foot-link">Support Forum</Link>
  <Link to='FreeThemes' className="foot-link">Boostrap Template</Link>
  <Link to='/Myaccount' className="foot-link">Privacy Policy</Link>
  <p>Disclaimer</p>
  </div>
  <div>
    <footer style={{fontSize: '15px'}}>&copy;  2013-2023 colorlib.com | operated by Divilab LLC | 1309 Coffeen Ave Ste 1200 Sheridian WY 32801</footer>
  </div>
</div>
    </div>
  );
};




export default Home;
