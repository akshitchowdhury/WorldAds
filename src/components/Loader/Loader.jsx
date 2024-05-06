import React from 'react';
import './Loader.css';
import loadLogo from '../../assets/loaderLogo.png';

const Loader = () => {
  return (
    <div className='loading'>
      <img src={loadLogo} alt="Loader Logo" className="w-16 md:w-24" />
      <h1 className="text-lg md:text-xl">
        See The world your own way
      </h1>
      <hr className="w-full my-2 md:my-4 border-gray-300" />
    </div>
  );
};

export default Loader;
