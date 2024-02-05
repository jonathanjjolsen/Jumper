import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Categories</a></li>
                        <li>
                            <a>+/-</a>
                            <ul className="p-2">
                                <li><a>Add Code</a></li>
                                <li><a>Remove Code</a></li>
                            </ul>
                        </li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Jumper</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a><Link to={'/categories'}>Categories</Link></a></li>
                    <li>
                        <details>
                            <summary>Add/Remove</summary>
                            <ul className="p-2">
                                <li><a><Link to={'AddCode'}>Add Code</Link></a></li>
                                <li><a>Remove Code</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>About</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Under Construction</a>
            </div>
        </div>
    );
}

export default NavBar;