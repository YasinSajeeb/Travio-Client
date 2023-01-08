import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import ServiceReview from '../ServiceReview/ServiceReview';

const ServiceDetails = () => {
    
    const serviceDetails = useLoaderData();
    const { title, img, duration, price, description, total} = serviceDetails;

    return (
        <div>
            <div className='lg:flex items-center justify-between mb-6'>
            <div className='lg:w-1/2'>
                        <figure><PhotoProvider>
                            <PhotoView src={img}>
                                <img className='' src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider></figure>
                    </div>
            <div className='lg:w-1/2'>
                <h1 className='text-center text-4xl font-bold mb-4 mt-5 lg:mt-5'>{title}</h1>
                <p className='text-2xl font-bold text-center'>Duration: {duration} Days</p>
                <p className='mx-3 my-5'>{description}</p>
                <hr className='w-3/4 mx-auto my-5' />
                <div className='m-3'>
                    <p className='text-xl font-bold'>Price: <span className='text-blue-500'>{price} Taka</span> </p>
                    <p className='text-xl font-bold'>Total Customers: <span className='text-blue-500'>{total}</span> </p>
                </div>
                <button className='w-1/2 ml-4 h-10 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-blue-700 mt-2 text-white'>Buy The Package</button>
            </div>
            </div>
            <ServiceReview
            serviceDetails={serviceDetails}
            ></ServiceReview>
        </div>
    );
};

export default ServiceDetails;