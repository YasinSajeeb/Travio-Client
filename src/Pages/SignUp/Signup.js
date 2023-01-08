import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Signup = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            alert('Please verify your email address.')
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err));

        const handleUpdateUserProfile = (name, photoURL) => {
          const profile = {
              displayName: name,
              photoURL: photoURL
          }

          updateUserProfile(profile)
              .then(() => { })
              .catch(e => console.error(e));
      }
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signup now!</h1>
          <p className="py-6">
          Book a ticket now! And join the tour. Please signup to book a ticket.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
               <span className='text-red-600'>{error}</span>
              </label>
              
            </div>
            <div className="form-control mt-6">
            <input  className="btn btn-primary" type="submit" value="Signup" />
            </div>
            <p className="text-sm text-center">Already have an account? Please <Link to='/login' className="text-blue-600">Log in</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
