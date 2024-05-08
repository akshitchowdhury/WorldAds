
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
        
        </>
    );
};

export default Nav;
