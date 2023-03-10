import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`https://travio-server.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete this Review?")
        if (proceed) {
            fetch(`https://travio-server.vercel.app/reviews/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='font-bold text-2xl text-center mb-4'>My Total Reviews: {reviews.length}</h1>
            {
            reviews.length !== 0 ?
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
        </th>
        <th>Service Name</th>
        <th>Review</th>
        <th>Price</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
    {
        reviews.map(review => <MyReviewRow
        key={review._id}
        review={review}
        handleDelete={handleDelete}
        ></MyReviewRow>)
    }
    </tbody>
  </table>
</div>

    :
<div className='mx-auto text-center font-semibold lg:h-96'>
        <span className=''>No reviews were added.</span>
        </div>
}
        </div>
    );
};

export default MyReviews;