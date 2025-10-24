import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.Conf';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])
    const authdata = {
        logOut,
        createUser,
        user,
        setUser,
    }
    return <AuthContext value={authdata}
    >{children}</AuthContext>
};
export default Authprovider;