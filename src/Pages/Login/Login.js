import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

  const [error, setError] = useState();
  const {providerLogin, login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user)
      })
    .catch(e => console.log(e))
    
  }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result =>{
         const user = result.user;
         console.log(user)
         setError('');
        form.reset();
        navigate(from, { replace: true });
        })
        .then(error => console.log(error));
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Book a ticket now! And join the tour. Please Login to book a ticket.
          </p>
        </div>
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form  onSubmit={handleLogin} className="card-body">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
              <span className='text-red-600'>{error}</span>
              </label>
            </div>
            <div className="form-control my-6">
                <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className="text-sm text-center">New to Travio? Please <Link to='/signup' className="text-blue-600">Sign up</Link> </p>
          </form>
          <p className="text-center my-5">or</p>
          <button className='rounded-none btn bg-[#3078fb] border-0  hover:bg-white hover:text-[#3078fb] hover:border-[1px] hover:border-[#3078fb] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 flex items-center w-3/4 mx-auto mb-5' onClick={handleGoogleSignIn}>Log in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
