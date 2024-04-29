import React from 'react';
import { Link } from 'react-router-dom';
import Oski from '../assets/oski.jpeg';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='container'>
      <img src={Oski} alt='Oski' ></img>
      <h1>Welcome to the Berkeley Blog!</h1>
    </div>
  );
};

export default Welcome;