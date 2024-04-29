import React from 'react';
import { Link } from 'react-router-dom';
import Oski from '../assets/oski.jpeg';
import './Welcome.css';
/*
const Welcome = () => {
  return (
    <div className='container'>
      <img src={Oski} alt='Oski' ></img>
      <h1>Welcome to the Berkeley Blog!</h1>
    </div>
  );
};
*/

const Welcome = () => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen -z-50 flex justify-center items-center gap-20 bg-base-200 hero">
      <div className="fade-in hero-content flex-col lg:flex-row-reverse px-[15%] gap-20">
        <img
          src={Oski}
          className="max-w-sm rounded-lg shadow-2xl md:hidden lg:block"
          alt="Oski"
        />
        <div>
          <h1 className="font-bold text-5xl text-center">Our blogs</h1>
          <h2 className="font-semibold text-2xl">Guide you around berkeley!</h2>
        </div>
      </div>
    </div>
  );
};
export default Welcome;