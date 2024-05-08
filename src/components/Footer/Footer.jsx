import React from "react";
import "./Footer.css";
import footerImage from '../../assets/footerImage.png'
import "../../assets/fonts/style.css";

import logo from '../../assets/footerLogo.png';

const Footer = () => {

  const isSmallScreen = window.innerWidth <= 390;
  return (
    <>
      <div className="footer  md:p-20">

          <div className="footerText">
            <h1 className=" text-white">
              Innovating 
              Digital
              
              
              <p> Advertising</p>
            </h1>
          </div>
          {/*right group TNC and Blog  */}

          <div className="footContent text-white  ">
            
              
            
              <p className="blog">Blog</p>
              <p className="privacyPolicy">Privacy Policy</p>
            
              <p className="contact">Contact Us</p>
              <p className="terms">Terms of Sevice</p>
            
        </div>
        
        <div className="WorldAds ">
        
        <img src={logo} alt="Logo" />
        </div>
      
      
        <div className="outfit-footerCopyright ">
      <p className=" ">©2024 WorldAds Tech DAO LLC. All Right Reserved </p>
      
      </div>
      <div>
            {/* Render the hr element with or without the className based on screen size */}
            <hr className={`md:hidden`} />
            <hr className={`hidden md:block footerLine bg-black`} />
        </div>
        {/* Grid image */}


        <img className="footerImage" src={footerImage}/>
      </div>

    </>
  );
};

export default Footer;
