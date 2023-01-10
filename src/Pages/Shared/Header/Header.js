import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(err => console.error(err))
}

    const menuItems = <>
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
    <li className='font-semibold'><Link to='/services'>Services</Link></li>
    <li>{
            user?.uid ?
                <>

                    <Link to='/reviews'>My Reviews</Link>
                    <Link to='/addservice'>Add Service</Link>
                    <button onClick={handleLogOut} className="btn btn-ghost border-0 rounded-none">LogOut</button>
                </>
                :
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </>
        }</li>

    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt="" className='w-20 lg:w-28'/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <ul className='mr-3'>
      {
        user?.uid ?
          <p className='font-semibold'>{user?.displayName}</p>
            :
          <></>
       }
  </ul>
  <ul>
  {user?.photoURL ?
    <img className='rounded-full h-10 shadow-md' src={user?.photoURL} alt="" />
      :
    <FaUser></FaUser>
  }
  </ul>
  </div>
</div>
    );
};

export default Header;