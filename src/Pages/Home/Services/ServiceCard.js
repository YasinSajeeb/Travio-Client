import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, img, price, title, description} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
          <img src={img} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
        
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-blue-600 font-bold">{title}</h2>
        <p>{description}</p>
        <h5 className="text-xl font-bold">Price: <span className="text-xl text-blue-500">{price}</span> tk</h5>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
