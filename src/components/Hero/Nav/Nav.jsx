
import React, { useState } from 'react';
import '../../../assets/fonts/style.css';
import navButton from '../../../assets/navButton.png';
import './Nav.css';
import logo from '../../../assets/lgoTitleImg.png';
import X from '../../../assets/Close_square@3x.png';

const Nav = () => {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <>
            <div className="container ">
                <img className='logoImg' src={logo} alt="Logo" />
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
                    
                    <div className="openMenu flex md:items-center bg-inherit border border-white rounded-full p-4 my-6 md:mx-16 max-w-auto h-12"
    style={{
        border: "2pt solid white",

    }}>
                        <div className="flex-2 flex flex-row justify-between mx-26">
                            <div className="colBlock flex flex-col md:flex-row items-center text-white text-sm w-full">
                                <p className="mr-10">About</p>
                                <p className="mr-10">Node Operators</p>
                                <p className="mr-10">Ride & Earn</p>
                                <p className="adPara mr-10">Advertise With WorldAds</p>
                                <img
                                    onClick={toggleInput}
                                    src={X}
                                    className="h-1/3 -mx-6 "
                                    style={{ cursor: 'pointer' }}
                                    alt="Close Button"
                                />
                            </div>
                        </div>
                    </div>
                    
                )}
            </div>
        </>
    );
};

export default Nav;
