import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // if (loading) {
    //     return <div className="flex items-center">
    //         <div className="spinner-border animate-spin inline-block w-6 h-6 border-3 rounded-full m-12" role="status">
    //             <span className="">.</span>
    //         </div>
    //     </div>
    // }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;