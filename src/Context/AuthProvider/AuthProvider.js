import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
 export const AuthContext = createContext()

 const auth = getAuth(app);
 console.log(auth);

const AuthProvider = ({children}) => {

    const [services, setServices ] = useState([])
    
    useEffect(()=>{

     fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => setServices(data))
       .catch(error =>console.log(error))


    },[])

    const provider = new GoogleAuthProvider();

  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /// create user with email and password //
  const createUserEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /// signIn user with email and password ///
  const loginUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// login with google pop up ///
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };


  ///sign out ////
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  ///update profile ///
  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  ///onAuthStateChanged with firebase///
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
   

    const info ={services, createUserEmailAndPassword,
        loginUserWithEmailAndPassword,
        googleLogin,
        user,
        logOut,
        loading,
        setError,
        userUpdateProfile,}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;