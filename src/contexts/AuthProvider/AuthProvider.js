import React, { createContext, useState } from 'react';
import {getAuth} from 'firebase/app';
import app from '../../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;