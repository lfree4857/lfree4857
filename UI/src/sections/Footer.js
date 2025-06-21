import React from 'react'
import { CLIENT } from '../constants/environment'

export const Footer = () => {
    return (
        <div className="w-100 float-left weight-footer-con position-relative">
            <div className="container">
                <div className="weight-footer-content text-center wow fadeInUp" >
                    <figure className="">
                        <img src={`${CLIENT}image/innovators.webp`} alt="footer-logo" className="img-fluid" />
                    </figure>
                    <div className="footer-navbar">
                        <ul className="list-unstyled">
                            <li className="d-inline-block border-left-0 pl-0"><a href="#">Home</a></li>
                            <li className="d-inline-block"><a href="#About">About</a></li>
                            <li className="d-inline-block"><a href="#Services">Services</a></li>
                            <li className="d-inline-block"><a href="#Portfolio">Portfolio</a></li>
                            <li className="d-inline-block"><a href="#Blog">Blog</a></li>
                            <li className="d-inline-block pr-0"><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* <div className="footer-social-icon">
                        <ul className="mb-0">
                            <li className="d-inline-block">
                                <a href="https://www.behance.net/"><i className="fab fa-behance d-flex align-items-center justify-content-center"></i></a>
                            </li>
                            <li className="d-inline-block">
                                <a href="https://dribbble.com/"><i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i></a>
                            </li>
                            <li className="d-inline-block">
                                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i></a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="copy-right-content text-center">
                    <p className="mb-0">Copyright {new Date().getFullYear()} lfree4857@gmail.com | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}
