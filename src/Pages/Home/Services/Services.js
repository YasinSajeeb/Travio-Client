import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://travio-server.vercel.app/services')
        .then(res =>res.json())
        .then(data =>setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='text-4xl font-bold text-white mb-3'>Our Services</h3>
                <p className='text-sm'>Choose your destination. Visit our latest services available.</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;