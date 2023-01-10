import React, { useEffect, useState } from 'react';

const MyReviewRow = ({review, handleDelete}) => {

    const[reviewService, setReviewService] = useState([])

    const { _id, serviceName, price, customerReview, customer, singleService } = review;

    useEffect(()=>{
        fetch(`https://travio-server.vercel.app/services/${singleService}`)
        .then(res=>res.json())
        .then(data => setReviewService(data))
    },[singleService])

    return (
        <tr>
        <th>
          <label>
          <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-outline '>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                     reviewService?.image_url &&
                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">Service {serviceName}</div>
              <div className="text-sm opacity-50">{customer}</div>
            </div>
          </div>
        </td>
        <td>
          {customerReview}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{price}</td>
      </tr>
    );
};

export default MyReviewRow;