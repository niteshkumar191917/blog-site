import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'

function Footer() {
    return (
        <footer className='py-1 shadow bg-slate-100'>
            <Container>
                <section className="relative overflow-hidden ">
                    <div className="flex flex-wrap">
                        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col justify-between">
                                <div className="mb-4 inline-flex items-center">
                                    <Logo width="100px" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">
                                        &copy; Copyright 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                    Company
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                            to="/all-posts"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                    Support
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                            to="/login"
                                        >
                                            Account
                                        </Link>
                                    </li>

                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                            to="/contectus"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                            <div className="h-full">
                                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                    Social Handles
                                </h3>
                                <ul>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-gray-900 hover:text-blue-600"
                                            to="https://www.linkedin.com/in/nitesh-poonia-859891187/"
                                            target="_blank"
                                        >
                                            Linkdlin
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            className=" text-base font-medium text-gray-900 hover:text-blue-600"
                                            to="https://github.com/niteshkumar191917"
                                            target="_blank"
                                        >
                                            GitHub
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </Container>
        </footer>
    )
}

export default Footer