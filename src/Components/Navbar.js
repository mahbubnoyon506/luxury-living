import React from 'react';
import {Link, NavLink } from "react-router-dom";
import Logo from '../Assets/Image/logo.png'

const Navbar = () => {
    return (
        <div className=''>
            <nav className=" w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        <Link className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" to="/">
                            <img className='w-' src={Logo} style={{ width: "7.8rem" }} alt=""
                                loading="lazy" />
                        </Link>
                        {/* <!-- Left links --> */}
                        <div className='mx-auto'>
                            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                                <li className="nav-item p-2 lg:pr-10 ">
                                    <NavLink className="text-secondary lg:text-base tracking-wide hover:border-b-2 pb-7 hover:border-primary hover:text-primary" to="#">Dashboard</NavLink>
                                </li>
                                <li className="nav-item p-2 lg:pr-10">
                                    <NavLink className="text-secondary lg:text-base tracking-wide hover:border-b-2 pb-7 hover:border-primary hover:text-primary" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item p-2 lg:pr-10">
                                    <NavLink className="text-secondary lg:text-base tracking-wide hover:border-b-2 pb-7 hover:border-primary hover:text-primary" to="#">Projects</NavLink>
                                </li>
                                <li className="nav-item p-2 lg:pr-10">
                                    <NavLink className="text-secondary lg:text-base tracking-wide hover:border-b-2 pb-7 hover:border-primary hover:text-primary" to="#">About</NavLink>
                                </li>
                                <li className="nav-item p-2 lg:pr-10">
                                    <NavLink className="text-secondary lg:text-base tracking-wide hover:border-b-2 pb-7 hover:border-primary hover:text-primary" to="#">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className="flex items-center relative">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-full w-8"
                            alt="Avatar"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;