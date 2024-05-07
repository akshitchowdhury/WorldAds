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
    <div className="flex  items-center ">
    
      <div className="midSection  flex flex-col ">
      <div >
        <h1 className="heroTitle text-4xl text-white">
          <span>Empowering </span>
          <br/>
          <span>
          Connections
          </span>
          <br/> Through Digital Out-
          <br/>
          <span>
          of-Home Advertising
          </span>
        </h1>
        </div>

        <h2 className="para text-sm text-white text-center w-auto "> {/* Adjusted this line */}
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
    <button className="bg-white  text-black font-bold h-10  py-2 px-4 rounded-full">Join waitlist</button>
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
