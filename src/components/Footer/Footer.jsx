import React from "react";
import "./Footer.css";
import footerImage from '../../assets/footerImage.png'
import "../../assets/fonts/style.css";

import logo from '../../assets/footerLogo.png';
const Footer = () => {
  return (
    <>
      <div className="footer p-20">
        <div
          className="blockOne flex flex-row gap-96"
          
        >
          <div className="footerText">
            <h1 className="text-4xl text-white">
              Innovating Digital
              <br />
              <p> Advertising</p>
            </h1>
          </div>
          {/*right group TNC and Blog  */}

          <div className="text-white max-w-96">
            <div
              className="flex flex-row gap-20 my-8"
              
            >
              <p>Blog</p>
              <p>Privacy Policy</p>
            </div>
            <div className="flex flex-row gap-9">
              <p>Contact Us</p>
              <p>Terms of Sevice</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-row my-24">
        
        <img src={logo} alt="Logo" />
                <h1 className="text-white my-2"> WorldAds</h1>
        </div>
      
      
        <div className="outfit-footerCopyright -my-20 flex flex-row">
      <p className=" text-sm">©2024 WorldAds Tech DAO LLC. All Right Reserved </p>
      <hr className="w-1/3 my-2 mx-20"
       style={{backgroundColor: "rgba(126, 126, 126, 0.2)"}}></hr>
      </div>
      
        {/* Grid image */}


        <img className="footerImage" src={footerImage}/>
      </div>

    </>
  );
};

export default Footer;
