import React from "react";
import Natures from "./Natures";
import "./Home.css";
import { Link } from "react-router-dom";
import Simplicity from "./Simplicity";
import Footer from "./Footer";

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
      <SimplicityComponent/>
      <FooterComponent/>
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
      <p style={{textAlign: 'center', fontSize: '19px'}}>
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
      <p style={{color: 'black',textAlign: 'center', fontSize: '25px', marginTop: '15px'}}>Looking for more customizable WordPress Themes?</p>
      <p style={{color: 'black', textAlign: 'center', fontSize: '25px' }}>You might to have <Link to='/FreeThemes' className="theme-link" style={{textDecoration: 'none'}}>a look at these</Link></p>
      </div>
    </div>

      <div className="premium-con">
        <h4 style={{color: 'black', fontSize: '45px', marginTop: '110px'}} className="h-premium">Premium WordPress Themes</h4>
        <p style={{color: 'black',textAlign: 'center', fontSize: '23px', marginTop: '15px'}}>If you are looking for more featured and costomization option then</p>
        <p style={{color: 'black',textAlign: 'center', fontSize: '23px'}}>premium WordPress themes are the right fit for you. Best examples can be <Link to='/WpThemes'>found here</Link></p>
      </div>
    </div>
  );
};

const SimplicityComponent = () => {
    return(
        <div>
            <p style={{color: 'black', textAlign: 'center', fontSize: '43px'}}>Simplicity. Performance. Perfection. </p>
            <p style={{color: 'black', textAlign: 'center', fontSize: '22px'}}>Simple, responsive, clean and fast loading WordPress themes for everyone.</p>
            <p style={{color: 'black', textAlign: 'center', fontSize: '22px'}}>Highly customizable functionality and design to create website you have always wanted.</p>
        <div className="simplicity-con">
            {
                Simplicity.map((Simplicity) => {
                    const{imageUrl, title, description} = Simplicity
                    return(
                        <div key={Simplicity.id} className="simplicity-info">
                            <img src={imageUrl} alt="" />
                            <p style={{fontSize: '20px', textAlign: 'center'}}>{title}</p>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
};

const FooterComponent = () => {
    return(
        
        <div className="footer-con">
            {
                Footer.map((Footer) => {
                    const{title} = Footer
                    return(
                        <div key={Footer.id} className="footer-info">
                            <p style={{fontSize: '13px'}}><Link className="footer-link">{title}</Link></p>
                            
                        </div>
                        
                    )
                   
                })
            }
        </div>
        
    
    )
}

export default Home;
