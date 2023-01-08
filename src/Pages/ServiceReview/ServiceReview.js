import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



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
            soloPackage: _id,
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
            .catch(e => console.error(e));
}
useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
}, [])

console.log(reviews);

    return (
        <div>
             <form onSubmit={handleReview} className='mt-10 mx-4'>
                    {
                        // user?.uid ?
                            <div className='lg:flex items-center '>

                                <div className='shrink lg:w-80 lg:mr-4 '>
                                    <textarea name='customerReview' className="textarea textarea-info w-full border-blue" placeholder="Add Your Review" required></textarea>
                                </div>
                                <div className=''>
                                    <button className="btn bg-blue-600 border-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">Post Review</button>
                                </div>
                            </div>
                            // :
                            // <span className='font-bold'>Please login to add a review.<Link className='btn btn-link transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300' to='/login'>Login...</Link></span>
                    }
                </form>
        </div>
    );
};

export default ServiceReview;