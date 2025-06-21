import React from 'react'
import { CLIENT } from '../constants/environment'

export const Profile = () => {
    return (
        <section className="banner-main-con" id="home">
            <div className="container pl-0 pr-0">
                {/* banner-start */}
                {/* <div className="footer-social-icon banner-social-icon mb-0">
                    <ul className="mb-0 list-unstyled">
                        <li className="">
                            <a href="https://www.behance.net/"><i className="fab fa-behance d-flex align-items-center justify-content-center"></i></a>
                        </li>
                        <li className="mt-3 mb-3">
                            <a href="https://dribbble.com/"><i className="fab fa-dribbble d-flex align-items-center justify-content-center ml-0 mr-0 "></i></a>
                        </li>
                        <li className="">
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i></a>
                        </li>
                    </ul>
                </div> */}
                <div className="banner-con text-lg-left text-center">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
                            <div className="banner-left-con wow slideInLeft">
                                <div className="banner-heading">
                                    <h2>Hello, We Are</h2>
                                    <ul className="dynamic-txts">
                                        <li><h1>Innovators</h1></li>
                                        {/* <li><h1>Innovators</h1></li>
                                        <li><h1>Innovators</h1></li>
                                        <li><h1>Innovators</h1></li> */}
                                    </ul>
                                    <p>Passionate Freelancer with a love for creativity and <br /> innovation. Dedicated to delivering top-notch software <br /> solutions that exceed client expectations. Embracing <br /> challenges and turning them into opportunities for growth. <br />Let's collaborate and bring your ideas to life!
                                    </p>
                                </div>
                                <div className="banner-btn generic-btn d-inline-block">
                                    <a href="#Contact">Hire Me</a>
                                </div>
                                <a href="#Portfolio" className="See-btn">See Our Work</a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12">
                            <div className="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                                <figure className="mb-0">
                                    <img src={`${CLIENT}image/banner-right-img.png`} alt="banner-right-img" id="banner-right-img" />
                                </figure>
                                <div className="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                                    <div className="best-award-inner-con">
                                        <figure className="mb-0">
                                            <img src={`${CLIENT}image/cup-img.png`} alt="cup-img" className="img-fluid" />
                                        </figure>
                                        <div className="best-award-title">
                                            <p className="mb-0">Best Design<br />
                                                Award.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="best-award-con d-inline-block happy-con wow bounceInUp " data-wow-duration="1s" data-wow-delay="1s">
                                    <div className="best-award-inner-con text-center">
                                        <figure>
                                            <img src={`${CLIENT}image/admin-icon.png`} alt="admin-icon" className="img-fluid" />
                                        </figure>
                                        <div className="best-award-title d-inline-block ml-0">
                                            <p className="mb-0 d-inline-block count">4</p>
                                            <p className="mb-0 d-inline-block">k+</p>
                                            <span className="d-block">Happy<br />
                                                Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor"></div>
                                <div className="cursor2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* banner-end */}
            </div>
        </section>
    )
}
