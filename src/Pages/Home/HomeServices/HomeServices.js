import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data =>setHomeServices(data))
    }, [])
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-4xl font-bold text-white mb-3'>Our Services</h3>
                <p className='text-sm'>Choose your destination. Visit our latest services available.</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    homeServices.slice(-3).map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-8'><Link to='/services'><button className="btn btn-primary">Check All Services</button></Link></div>
        </div>
    );
};

export default HomeServices;