import React, { useState } from "react";
import "./Hero.css";
import "../../assets/fonts/style.css";
import Nav from "./Nav/Nav";
import gridImg from '../../assets/gridImg.png'
import discord from '../../assets/discord.png'
import pointer from '../../assets/pointerHome.png'
import '../../assets/fonts/style.css';
import navButton from '../../assets/navButton.png';
import './Nav/Nav.css';
import logo from '../../assets/lgoTitleImg.png';
import X from '../../assets/Close_square@3x.png';

const Hero = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
      setShowInput(!showInput);
  };
  return (
    <>
    <div className="hero ">
    
    
    <div className="container ">
                <img className='logoImg' src={logo} alt="Logo" />
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
                {/* <h1 className="text-white"> WorldAds</h1> */}
                {!showInput && (
                    <img
                        src={navButton}
                        className="image  cursor-pointer"
                        onClick={toggleInput}
                        alt="Navigation Button"
                    />
                    
                )}
                {showInput && (
                    <>
                    <div className="openMenu bg-inherit border border-white "
    >
                                
                            
                    </div>
                    <div className='menuLinks'>
                    <p className="about">About</p>
                                <p className="nodeOp">Node Operators</p>
                                <p className="ride">Ride & Earn</p>
                                <p className="adWorld">Advertise With WorldAds</p>
                                </div>
                                <img
                                    onClick={toggleInput}
                                    src={X}
                                    className="cross"
                                    style={{ cursor: 'pointer' }}
                                    alt="Close Button"
                                />
                                
                    </>
                )}
                
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
    
<img className="pointer hidden md:block" src={pointer} alt="Node Pointer" />
    <div className="gridImage ">
    
    <img src={gridImg}/>
    </div>

    


    </div>
    </>
  );
};

export default Hero;
