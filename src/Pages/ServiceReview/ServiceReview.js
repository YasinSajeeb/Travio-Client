import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceSingleReview from './ServiceSingleReview';



const ServiceReview = ({serviceDetails}) => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const { title, price, _id } = serviceDetails;

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'unregistered';
        const img = user?.photoURL || 'unregistered';
        const customerReview = form.customerReview.value;


        const review = {
            singleService: _id,
            serviceName: title,
            price,
            customer: name,
            customer_photo: img,
            email,
            customerReview
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
}
useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
}, [])

console.log(reviews);

    return (
        <div>
            <h3 className='text-center text-4xl font-bold mt-12'>Our Customers Reviews</h3>
            <p className='text-center mt-5'>Add your reviews to help and improve our services better in the future. We always try to give our best services to our customers</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6'>
                    {
                        reviews.map(singleReview => <ServiceSingleReview
                            key={singleReview._id}
                            singleReview={singleReview}
                        ></ServiceSingleReview>)
                    }
                </div>
             <form onSubmit={handleReview} className='mt-10 mx-4'>
                    {
                        user?.uid ?
                            <div className='lg:flex items-center '>

                                <div className='shrink lg:w-80 lg:mr-4 '>
                                    <textarea name='customerReview' className="textarea textarea-info w-full border-blue" placeholder="Add Your Review" required></textarea>
                                </div>
                                <div className=''>
                                    <button className="btn bg-blue-600 border-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Post Review</button>
                                </div>
                            </div>
                            :
                            <span className='font-bold'>Please login to add a review.<Link className='btn btn-link transition ease-in-out delay-150' to='/login'>Login here..</Link></span>
                    }
                </form>
        </div>
    );
};

export default ServiceReview;