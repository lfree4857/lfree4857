"use client";

import React from 'react'
import { CLIENT } from '../constants/environment'

export const Service = () => {
    return (
        <section className="w-100 float-left service-con padding-top padding-bottom position-relative" id="Services" >
            <div className="container">
                <div className="service-inner-con position-relative">
                    <div className="generic-title text-center">
                        <h6>Our Expertise</h6>
                        <h2 className="mb-0">Provide Wide Range of<br />
                            Digital Services
                        </h2>
                    </div>
                    <div className="service-box wow fadeInUp">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="service-box-item">
                                    <figure className="mb-0">
                                        <img src={`${CLIENT}image/service-icon1.png`} alt="service-icon" className="img-fluid" />
                                    </figure>
                                    <div className="service-box-item-content">
                                        <h4>Ui/Ux Design</h4>
                                        <p>Designing, creating seamless digital experiences that captivate and resonate. Let's bring your vision to life!
                                        </p>
                                        <a href="#" data-toggle="modal" data-target="#Ui-Design">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="service-box-item">
                                    <figure className="mb-0">
                                        <img src={`${CLIENT}image/service-icon2.png`} alt="service-icon" className="img-fluid" />
                                    </figure>
                                    <div className="service-box-item-content">
                                        <h4>Web Design</h4>
                                        <p>Web Designing, crafting captivating online experiences that captivate and resonate. Let's bring your vision to life!
                                        </p>
                                        <a href="#" data-toggle="modal" data-target="#web-design">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-0">
                            <div className="col-lg-6 col-md-6">
                                <div className="service-box-item">
                                    <figure className="mb-0">
                                        <img src={`${CLIENT}image/service-icon3.png`} alt="service-icon" className="img-fluid" />
                                    </figure>
                                    <div className="service-box-item-content">
                                        <h4>Web Development</h4>
                                        <p>Creating, captivating online experiences that engage and lasting impact. Let's bring your vision to life!
                                        </p>
                                        <a href="#" data-toggle="modal" data-target="#web-development">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="service-box-item mb-0">
                                    <figure className="mb-0">
                                        <img src={`${CLIENT}image/service-icon4.png`} alt="service-icon" className="img-fluid" />
                                    </figure>
                                    <div className="service-box-item-content">
                                        <h4>App Development</h4>
                                        <p>Create immersive mobile experiences that leave a lasting impression. Let's bring your vision to life!
                                        </p>
                                        <a href="#" data-toggle="modal" data-target="#app-development">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
