import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App overflow-clip=">
      {loading ? (
        <div className="loading-page">
        <Loader/>
        </div>
      ) : (
        <div className='mainContent'>
        

          <Hero/> 
          <Body/>
          {/* <Footer/> */}
          
        </div>
      )}
    </div>
  );
}

export default App;
