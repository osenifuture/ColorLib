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
              <li> <Link>Creative</Link></li>
              <li>  <Link>Directive</Link></li>
              <li>  <Link>Eco & Green</Link></li>
              <li>  <Link>eCommerce</Link></li>
              <li>  <Link>Education</Link></li>
              <li> <Link>Fashion</Link></li>
              <li>  <Link>Fatest</Link></li>
              <li> <Link>Feminine</Link></li>
              <li> <Link>Fitness & Gym</Link></li>
              <li> <Link>Fullscreen and FullPage</Link></li>
              <li>  <Link>Grid</Link></li>
              <li> <Link>Health & Medical</Link></li>
              </ul>
            </div>

            <div className="link-box">
              <ul>
              <li>  <Link>Hosting</Link></li>
              <li> <Link>Hotel</Link></li>
              <li>   <Link>Job Board</Link></li>
              <li>   <Link>Landing Page</Link></li>
              <li>  <Link>Lawyer</Link></li>
              <li>  <Link>Magazine</Link></li>
              <li>  <Link>MultiPurpose</Link></li>
              <li>  <Link>Music</Link></li>
              <li>  <Link>Night Club</Link></li>
              <li>  <Link>One Page </Link></li>
              <li>  <Link>Prallax Scrolling</Link></li>
              </ul>
            </div>

            <div className="link-box">
              <ul>
              <li>  <Link>Photograph</Link></li>
              <li>  <Link>Popular</Link></li>
              <li>  <Link>Portfolio</Link></li>
              <li>   <Link>Real Estate</Link></li>
              <li>  <Link>Resume</Link></li>
              <li>   <Link>Restaurant</Link></li>
              <li>  <Link>SEO Friendly</Link></li>
              <li> <Link>Simple</Link></li>
                  <li>   <Link>SPA & Salon</Link></li>
                  <li>  <Link>Tech Startup</Link></li>
                  <li>  <Link>Travel</Link></li>
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
