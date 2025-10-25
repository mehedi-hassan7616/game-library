import React, { use, useRef, useState } from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router';
import { AuthContext } from '../provider/Authprovider';
import { sendPasswordResetEmail } from 'firebase/auth';
// import { useContext } from 'react';
const Login = () => {
    const emailref = useRef("")
    const { signIn, logInWithGoogle, profileUpdate } = use(AuthContext);
    const [error, setError] = useState('');
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        setError('');
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                if (!user.emailVerified) {
                    alert("Verification your email")
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // setError(errorMessage);
            });
    }
    const handleGoogle = (e) => {
        e.preventDefault();
        logInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user)
                if (!user.emailVerified) {
                    alert("Verification your email")
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // setError(errorMessage);
            });
    };
    const handleForgatePass = () => {
        const email = emailref.current.value;
        console.log('forget password ', email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email')
            })
            .catch((error) => {
                // console.log(error);
            });
    }
    return (
        <>
            <div className='pt-40'>
                <div className='container mx-auto space-y-4 py-4'>
                    <title> Login</title>
                    <div className="flex justify-center">
                        <form onSubmit={(e) => { handleLogin(e); handleGoogle(e); }} action="">
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                                <legend className="fieldset-legend pt-10 text-2xl font-bold">Login</legend>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    ref={emailref}
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                />
                                <div onClick={handleForgatePass}>
                                    {" "}
                                    <a className="text-blue-500">forget password</a>
                                </div>
                                <div className='flex justify-between'>
                                    <button className="btn btn-neutral mt-4">Email Login</button>
                                    <button className="btn btn-neutral mt-4"> Google Login</button>
                                </div>
                            </fieldset>
                            {error && <p className="text-red-500">{error}</p>}
                            <p>
                                new to game-library account ? please{" "}
                                <Link className="text-blue-500 underline" to="/register">
                                    register
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;