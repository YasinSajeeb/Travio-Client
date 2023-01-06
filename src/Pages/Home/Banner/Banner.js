import React from 'react';
import banner from '../../../asset/Banner.jpg';

const Banner = () => {
    return (
        <div className="hero sm:w-full lg:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-xl lg:text-5xl font-bold text-white">Wanna have a best travel experience?</h1>
      <p className="mb-5 text-white">We are offering best safe and enjoyable travel services to you.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;