
import PropTypes from 'prop-types';

import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase.cofig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext=createContext();
import { getAuth, signOut } from "firebase/auth";

const AuthProvider= ({children}) => {
    const [user,setUser]=useState(null);
  const createUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(()=>{ 
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('observing current User')
        setUser(currentUser)
    });
    return ()=>unSubscribe();
  },[])
  const logOut=()=>{
return signOut(auth);
  }
    const authinfo= {user,createUser,signInUser,logOut}
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node,
}