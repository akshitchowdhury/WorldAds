
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
                    <>
                    <div className="openMenu bg-inherit border border-white "
    >
                                
                            
                    </div>
                    <p className="about">About</p>
                                <p className="nodeOp">Node Operators</p>
                                <p className="ride">Ride & Earn</p>
                                <p className="adWorld">Advertise With WorldAds</p>
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
        </>
    );
};

export default Nav;
