import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerWithEmailAndPassword = (email, pass) =>{
        
        return createUserWithEmailAndPassword(auth, email, pass)
    } 

    const handleGoogleSignin = () => {
      return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(prev => {
              // If previous had Google photo but new one doesn't → KEEP previous
              if (prev?.photoURL && !currentUser?.photoURL) {
                return prev;
              }
              return currentUser;
            });
            //setUser(currentUser)
            setLoading(false)
      })
      return () => {
        unsubscribe()
      }
    },[])

    const authData = {
        registerWithEmailAndPassword,
        setUser,
        user,
        handleGoogleSignin,
        loading
    }

  return <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>

}

export default AuthProvider
