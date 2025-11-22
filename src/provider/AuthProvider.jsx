import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import auth from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailAndPassword = (email, pass) =>{
        
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authData = {
        registerWithEmailAndPassword,
        setUser,
        user,
    }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>

}

export default AuthProvider
