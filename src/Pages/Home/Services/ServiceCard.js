import React from "react";

const ServiceCard = ({service}) => {
    const {img, price, title, description} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-blue-600 font-bold">{title}</h2>
        <p>{description}</p>
        <h5 className="text-xl font-bold">Price: <span className="text-xl text-blue-500">{price}</span> tk</h5>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
