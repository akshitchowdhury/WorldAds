import React from "react";
import "./Footer.css";
import footerImage from '../../assets/footerImage.png'
import "../../assets/fonts/style.css";

import logo from '../../assets/footerLogo.png';
const Footer = () => {
  return (
    <>
      <div className="footer  md:p-20">
        <div
          className="blockOne flex flex-row gap-96"
          
        >
          <div className="footerText">
            <h1 className=" text-white">
              Innovating 
              Digital
              
              <br />
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
        </div>
        
        <div className="WorldAds ">
        
        <img src={logo} alt="Logo" />
        </div>
      
      
        <div className="outfit-footerCopyright ">
      <p className=" ">©2024 WorldAds Tech DAO LLC. All Right Reserved </p>
      
      </div>
      <hr className="footerLine"
       ></hr>
        {/* Grid image */}


        <img className="footerImage" src={footerImage}/>
      </div>

    </>
  );
};

export default Footer;
