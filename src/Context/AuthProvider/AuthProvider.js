import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => {});
  }, []);

  const provider = new GoogleAuthProvider();

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
    localStorage.removeItem("token");
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

  const info = {
    services,
    createUserEmailAndPassword,
    loginUserWithEmailAndPassword,
    googleLogin,
    user,
    logOut,
    loading,
    setError,
    userUpdateProfile,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
