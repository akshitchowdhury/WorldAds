import React from "react";
import "./Body.css";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import iSmall from "../../assets/nodeSmallPointer.png";

import line from "../../assets/bodyLine.png";
import nodePointer from "../../assets/nodePointer.png";
const Body = () => {
  return (
    <div className="body bg-white">
      {/* -----------------------------content1: Node operators------------------------------------------- */}
      <div className="content1 p-6 flex flex-col md:flex-row  gap-36">
        
        <img className="i1"  src={i1} />
        
        <div className=" NodeText">
          <img className="nomralPointer" src={nodePointer} />
          
        
          <div>
            
        <div className="iSmall "  >
        <div className="ball">
          
        </div>
        </div>
        
          </div>
          
          <h1 className="contentText  text-black ">Node Operators</h1>

          <p className="NodePara text-black">
          
            Become a cornerstone of digital advertising. Own a smart digital
            screen and start earning as advertisers choose your prime ad slots.
            
          </p>
          <div
            className="NodeBtnBorder "
          >
          <button className="NodeBtn">
            <p>Join waitlist</p>
          </button>
          </div>
        </div>
      </div>

      {/* -----------------------------content2: Ride and earn------------------------------------------- */}

      <div className="content2  flex flex-col md:flex-row  ">
        <div className=" RideText">
          
          <h1 className="contentText text-4xl text-black ">Ride & Earn</h1>
          <p className="text-black my-8">
            Transform every journey into a profitable venture. Our Smart Rooftop
            Digital Screens turn miles into money, making every trip count.
          </p>
          <div
            className="RideBtnBorder "
          >
          <button className="RideBtn">
            <p>Join waitlist</p>
          </button>
          </div>
        </div>
        <div className="i2">
        <img  src={i2} />
        </div>
      </div>
      {/* -----------------------------content3: Advertise with WorldAds------------------------------------------- */}
      <div className="content3  flex flex-col md:flex-row ">
        <img className="i3" src={i3} />
        <div className=" AdText">
          
          <h1 className="contentText  text-black ">
            Advertise with{" "}
            <h2 className="worldAds" style={{ color: "rgba(252, 54, 3, 1)" }}> WorldAds</h2>
          </h1>
          <p className="adText text-black " >
            Seize the spotlight in bustling areas with high-traffic visibility.
            Make your brand the center of attention with
          </p>
          <p
            className="outfit-ad bg-white
          
            text-black "
          >
            Precision Targeting
            
          </p>
          <hr className="line1" />
          <p
            className="outfit-subAd bg-white
          
            text-black "
          >
            Reach your ideal audience at the right time and place.
          </p>

          
          <hr className="belowPrecision"></hr>
      
          {/* --------------------------Dynamic HD 2nd point-------------------------------------- */}
          <p
            className="outfit-hd bg-white
          
            text-black "

          >
            Dynamic HD Quality Ads
          </p>
          
          <hr className="line2" />
          <p
            className="outfit-hdSubAd 
          
            text-black "
          >
            Captivate viewers with stunning, crystal-clear advertisements.
          </p>

          <hr className="belowAdvertisements"></hr>


          {/* --------------------------Geofenced campaign 3rd point-------------------------------------- */}

          <p
            className="outfit-geofence bg-white
          
            text-black "

          >
            Scalable Geofenced Campaigns
          </p>
          
          <hr className="line3" />
          <p
            className="outfit-geofenceSubAd bg-white
          
            text-black "
          >
            Customize and scale your campaigns with precision.
          </p>

         <div
            className="geofenceBtnBorder "
          >
          <button className="geofenceBtn">
            <p>Join waitlist</p>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
