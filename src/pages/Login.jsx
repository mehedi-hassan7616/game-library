import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router';
const Login = () => {
    // const { signInUser } = use(AuthContext);
    // console.log(signInUser);
    const [error, setError] = useState('');
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        setError('');
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((result) => {
        //         const user = result.user;
        //         console.log(user)
        //         if (!user.emailVerified) {
        //             alert("Verification koro")
        //         }
        //     })
        // .catch((error) => {
        //     const errorMessage = error.message;
        //     console.log(errorMessage)
        //     setError(errorMessage);
        // });
    }
    const handleForgatePass = () => {
        console.log('forget password')
        // const email = e
    }
    return (
        <div className='pt-50'>
            <div className='container mx-auto space-y-4 py-4'>
                <title> Login</title>
                <div className="flex justify-center">
                    <form onSubmit={handleLogin} action="">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend pt-10">Login</legend>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
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
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        {error && <p className="text-red-500">{error}</p>}
                        <p>
                            new to web account ? please
                            <Link className="text-blue-500 underline" to="/register">
                                register
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;