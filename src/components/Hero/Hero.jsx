import React from "react";
import "./Hero.css";
import "../../assets/fonts/style.css";
import Nav from "./Nav/Nav";
import gridImg from '../../assets/gridImg.png'
import discord from '../../assets/discord.png'
import pointer from '../../assets/pointerHome.png'
const Hero = () => {
  return (
    <>
    <div className="hero ">
    <Nav/>
    <div className=" ">
    
      <div className="midSection  ">
      <div >
        <h1 className="heroTitle  text-white">
          <span>Empowering </span>
          
          Connections
          
           Through Digital Out-
          
          
          of-Home Advertising
          
        </h1>
        </div>

        <h2 className="para  "> {/* Adjusted this line */}
          At Worldads, we're revolutionizing location-based advertising by
          harnessing the power of smart rooftop digital screens. Our innovative
          platform delivers programmatic advertisements that are not only
          precise but also captivating, tailored to the vehicle's exact
          location and time
        </h2>
      </div>
    </div>
    {/* ------------------------------------Search bar--------------------------------------- */}
    <div className="searchBar ">

    <input type="text" className=" searchInput bg-transparent focus:outline-none" placeholder="Enter your email address"/>
    <button className="bg-white  text-black font-bold rounded-full"><p className="joinBtn"> Join waitlist</p></button>
</div>
{/* ---------------------------------Discord lgoo and text-------------------------------- */}
<div className="discord ">
        <img src={discord}/>
        
    </div>
    <div className="discordText">
        <h1 className="outfit-text text-white font-thin">Stay updated. 
        <br/>
<p className="font-semibold">Join our discord community</p></h1>
</div>
{/* ------------------------------------Grid circle image--------------------------------------- */}
    
<img className="pointer" src={pointer}/>
    <div className="gridImage ">
    
    <img src={gridImg}/>
    </div>

    


    </div>
    </>
  );
};

export default Hero;
