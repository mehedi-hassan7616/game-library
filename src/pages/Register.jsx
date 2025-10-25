import React, { use } from "react";
// import { auth } from "../fireBase";
import { Link } from "react-router";
import { AuthContext } from "../provider/Authprovider";
import { useState } from "react";
import Navbar from "../component/Navbar";
const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('')
    const { createUser, setUser, profileUpdate } = use(AuthContext);
    // console.log(createUser);
    const HandleRegister = (e) => {
        e.preventDefault();
        const photo = e.target.photo.value
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("register", email, password, name, photo);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
                setSuccess(true);
                // user.target.reset();
                profileUpdate(result.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(error => {
                console.log(error);
                alert(error)
                setError(error.message);
            })
        // const terms = event.target.terms.checked;
        // const passwordPattern = /^.{6,}$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordPattern.test(password)) {
            console.log("not matched");
            setError('pass must be 6 and a uppercase and lowercase character')
            return;
        }
        else {
            {
                success && (
                    <p className="text-green-500">create successfully</p>
                )
            }
        }
        // createUserWithEmailAndPassword(auth, email, password)
        //   .then((result) => {
        //     console.log("after creation of a new user", result.user);
        //     setSuccess(true);
        //     event.target.reset();
        //     sendEmailVerification(result.user)
        //       .then(() => {
        //         alert('send Email Verification')
        //       })
        //   })
        //     .catch(error => {
        //       console.log(error.message);
        //       setError(error.message);
        //     });
    };
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">register now!</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={HandleRegister} action="">
                                    <fieldset className="fieldset">
                                        <label className="label">Photo</label>
                                        <input
                                            type="text"
                                            name="photo"
                                            className="input"
                                            placeholder="Photo URL"
                                        />
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="input"
                                            placeholder="name"
                                            required
                                        />
                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="input"
                                            placeholder="Email"
                                            required
                                        />
                                        <label className="label">Password</label>
                                        <div className="relative">
                                            <input
                                                // type={showPassword ? "text" : "password"}
                                                name="password"
                                                className="input"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-neutral mt-4">register</button>
                                    </fieldset>
                                    {error && <p className="text-red-500">{error}</p>}
                                </form>
                                <p>allready have account ? please <Link className="text-blue-500 underline" to='/login'>Login</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;