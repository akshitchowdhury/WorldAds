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
    <div className="hero p-7">
    <Nav/>
    <div className="flex  items-center ">
    
      <div className="midSection  flex flex-col md:flex-col">
        <h1 className="text-4xl text-white">
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

        <h2 className="para text-sm text-white text-left w-auto "> {/* Adjusted this line */}
          At Worldads, we're revolutionizing location-based advertising by
          harnessing the power of smart rooftop digital screens. Our innovative
          platform delivers programmatic advertisements that are not only
          precise but also captivating, tailored to the vehicle's exact
          location and time
        </h2>
      </div>
    </div>
    {/* ------------------------------------Search bar--------------------------------------- */}
    <div className="searchBar flex items-center bg-inherit 
    
     border border-white rounded-full px-3 py-1
    my-20 mx-16 
     max-w-md h-12">

    <input type="text" className=" flex-1 bg-transparent focus:outline-none" placeholder="Enter your email address"/>
    <button className="bg-white  text-black font-bold h-10 -mx-2 py-2 px-4 rounded-full">Join waitlist</button>
</div>
{/* ---------------------------------Discord lgoo and text-------------------------------- */}
<div className="discord flex flex-row mx-20 ">
        <img src={discord}/>
        <div>
        <h1 className="outfit-text text-white font-thin">Stay updated. 
        <br/>
<p className="font-semibold">Join our discord community</p></h1>
</div>
    </div>
{/* ------------------------------------Grid circle image--------------------------------------- */}
    <div className="gridImage ">
    <img className="pointer" src={pointer}/>
    <img src={gridImg}/>
    </div>

    


    </div>
    </>
  );
};

export default Hero;
