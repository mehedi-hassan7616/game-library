import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.Config';
export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    // console.log(user)
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(auth.currentUser)
    }
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }
    const logInWithGoogle = (googleProvider) => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    };
    const profileUpdate = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authdata = {
        loader,
        setLoader,
        logInWithGoogle,
        profileUpdate,
        signIn,
        logOut,
        createUser,
        user,
        setUser,
    }
    return (
        <AuthContext.Provider value={authdata}>
            {children}
        </AuthContext.Provider>
    );
};
export default Authprovider;