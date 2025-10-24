import React, { use } from 'react';
// import { NavLink } from 'react-router';
import { Link } from "react-router";
import { AuthContext } from '../provider/Authprovider';
import userIcon from "../assets/user.png"
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handlSignOut = (e) => {
        console.log("logout");
        logOut()
            .then((result) => {
                console.log(result.user);
                e.target.reset();
            })
            .catch(Error => {
                console.log(Error)
            })
    }
    const links = (
        <>
            <div className="flex gap-5 ">
                <Link to="/">  Home</Link>
                {user ? <Link to="/register" className='hidden'> {" "} Register </Link> : <Link to="/register"> {" "} Register </Link>}
            </div>
        </>
    );
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            className=" menu menu-sm dropdown-content bg-base-100 rounded   w-52 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="h-10 w-10">
                        <img src="https://thumbs.dreamstime.com/z/hexagon-gaming-logo-colorful-vector-design-hexagon-game-gaming-logo-design-168547122.jpg?ct=jpeg" alt="" />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="lg:flex justify-between">
                        <div className="flex justify-between"></div>
                        <div className="flex gap-5 login text-white">
                            <div className="nav  gap-5 md:flex  hidden mt-2">
                                {links}</div>
                            <div className='flex gap-2 '>
                                <img src={userIcon} alt="" />
                                {
                                    user ? <button onClick={handlSignOut} className=' p-2 bg-black rounded-2xl'>Log Out</button> : <Link to="/auth/login" className=' p-2 bg-black rounded-2xl'>Login</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;