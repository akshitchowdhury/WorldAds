import React from 'react'
import'./Loader.css'
import loadLogo from '../../assets/loaderLogo.png'
const Loader = () => {
  return (
    <div className='loading'>
    <img src={loadLogo}/>
        <h1>
        See The world your own way
        </h1>
        <hr ></hr>      
    </div>
  )
}

export default Loader
