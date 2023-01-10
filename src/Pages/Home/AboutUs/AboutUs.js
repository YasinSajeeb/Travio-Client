import React from 'react';
import about from '../../../asset/About_Us.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={about} className="max-w-lg rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">We are available for your services at anytime. We'll give you our maximum support in this journey and in abroad.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;