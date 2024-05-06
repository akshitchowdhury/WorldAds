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
        
        <img  src={i1} />
        
        <div className=" NodeText">
          <img className="nomralPointer" src={nodePointer} />
          
        
          <br />
          <br />
          <div>
            
        <div className="iSmall "  >
        <div className="ball">
          
        </div>
        </div>
        
          </div>
          
          <h1 className="contentText text-4xl text-black ">Node Operators</h1>
          {/* <div>
            
        <img className="iSmall " src={iSmall} />
          </div> */}
          <p className="text-black my-8">
          
            Become a cornerstone of digital advertising. Own a smart digital
            screen and start earning as advertisers choose your prime ad slots.
            
          </p>
          <button
            className="bg-white
          border border-black
            text-black font-bold h-10 -mx-2 py-2 px-4
           rounded-full text-sm"
          >
            Join waitlist
          </button>
        </div>
      </div>

      {/* -----------------------------content2: Ride and earn------------------------------------------- */}

      <div className="content2 p-6 flex flex-col md:flex-row  ">
        <div className=" RideText">
          <br />
          <br />
          <h1 className="contentText text-4xl text-black ">Ride & Earn</h1>
          <p className="text-black my-8">
            Transform every journey into a profitable venture. Our Smart Rooftop
            Digital Screens turn miles into money, making every trip count.
          </p>
          <button
            className="bg-white
          border border-black
            text-black font-bold h-10 -mx-2 py-2 px-4
           rounded-full text-sm"
          >
            Join waitlist
          </button>
        </div>
        <img src={i2} />
      </div>
      {/* -----------------------------content3: Advertise with WorldAds------------------------------------------- */}
      <div className="content3 p-6 flex flex-col md:flex-row  gap-36">
        <img src={i3} />
        <div className=" AdText">
          
          <h1 className="contentText text-4xl text-black ">
            Advertise with{" "}
            <h2 className="worldAds" style={{ color: "rgba(252, 54, 3, 1)" }}> WorldAds</h2>
          </h1>
          <p className="adText text-black my-8" style={{width: '330px'}}>
            Seize the spotlight in bustling areas with high-traffic visibility.
            Make your brand the center of attention with
          </p>
          <p
            className="outfit-ad bg-white
          
            text-black "
          >
            Precision Targeting
            <img src={line}/>
          </p>
          <p
            className="outfit-subAd bg-white
          
            text-black "
          >
            Reach your ideal audience at the right time and place.
          </p>


      
          {/* --------------------------Dynamic HD 2nd point-------------------------------------- */}
          <p
            className="outfit-hd bg-white
          
            text-black my-12"

          >
            Dynamic HD Quality Ads
            <img src={line}/>
          </p>
          <p
            className="outfit-hdSubAd bg-white
          
            text-black "
          >
            Captivate viewers with stunning, crystal-clear advertisements.
          </p>


          {/* --------------------------Geofenced campaign 3rd point-------------------------------------- */}

          <p
            className="outfit-geofence bg-white
          
            text-black my-12"

          >
            Scalable Geofenced Campaigns
            <img src={line}/>
          </p>
          <p
            className="outfit-geofenceSubAd bg-white
          
            text-black "
          >
            Customize and scale your campaigns with precision.
          </p>
          <button
            className="bg-white
          border border-black
            text-black font-bold h-10 -mx-2 py-2 px-4
           rounded-full text-sm my-10"
          >
            Join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
