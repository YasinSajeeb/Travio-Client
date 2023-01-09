import React from 'react';

const AddService = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
            <h3 className='text-5xl mr-10'>Create your own custom service</h3>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" name='serviceName' placeholder="Service Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input type="number" name='duration' placeholder="Duration" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Photo</span>
          </label>
          <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default AddService;