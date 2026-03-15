"use client";

import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { CommonContext } from '../Context/CommonContext';
import { success } from '../constants/messages';
import useApi from '../CustomHooks/API';
import axios from 'axios';
import { getById } from '../Utils/documentFunction';
import { CLIENT } from '../constants/environment';

export const ContactUs = () => {
    const { state, dispatch } = useContext(CommonContext)

    const schema = Yup.object().shape({
        name: Yup.string()
            .required('Please enter your fullname')
            .min(6, 'Fullname must be at teast 6 character long')
            .max(30, 'Fullname must not exceed 30 characters'),
        email: Yup.string()
            .required('Please enter your email')
            .email('Please enter a valid email')
            .min(6, 'Email must be at teast 6 character long')
            .max(30, 'Email must not exceed 30 characters'),
        phone: Yup.string()
            .required('Please enter your email')
            .length(10, 'Phone number must be 10 digits long'),
        subject: Yup.string()
            .required('Please enter your subject')
            .min(6, 'Subject must be at teast 6 character long')
            .max(30, 'Subject must not exceed 30 characters'),
        comments: Yup.string()
            .required('Please enter your comments')
            .min(6, 'Comments must be at teast 6 character long')
            .max(300, 'Comments must not exceed 300 characters'),
    })

    const Submit = async (values) => {
        dispatch({ type: 'enablePageLoader' })
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sendQuery`, values);
            dispatch({ type: 'enableToaster', payload: { type: 'success', message: response.data.data.message, show: true } })
            dispatch({ type: 'disablePageLoader' })
            handleFormClear()
        } catch (error) {
            dispatch({ type: 'disablePageLoader' })

        }
    }

    const { handleSubmit, handleChange, errors, touched, resetForm } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            subject: '',
            comments: ''
        },
        validationSchema: schema,
        onSubmit: (values) => Submit(values)
    })

    const handleFormClear = () => {
        resetForm();
        ['name', 'email', 'phone', 'subject', 'comments'].map(key => getById(key).value = '');
    }

    return (
        <section className="w-100 float-left form-main-con padding-top padding-bottom" id="Contact">
            <div className="container">
                <div className="form-main-inner-con position-relative">
                    <div className="generic-title text-center">
                        <h6>Get in Touch</h6>
                        <h2 className="mb-0">Any Questions? Feel Free<br />
                            to Contact
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 order-lg-0 order-2">
                            <div className="contact-information position-relative wow slideInLeft" >
                                <ul className="list-unstyled">
                                    <li>
                                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                                            <img src={`${CLIENT}image/location-icon.png`} alt="location-icon" className="img-fluid" />
                                        </figure>
                                        <div className="contact-information-content">
                                            <h5>Address:</h5>
                                            <p className="mb-0">Guwahati, Assam, India</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                                            <img src={`${CLIENT}image/message-icon.png`} alt="message-icon" className="img-fluid" />
                                        </figure>
                                        <div className="contact-information-content">
                                            <h5>Email:</h5>
                                            <p className="mb-0">lfree4857@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="mb-0">
                                        <figure className="mb-0 d-flex align-items-center justify-content-center">
                                            <img src={`${CLIENT}image/phone-icon.png`} alt="phone-icon" className="img-fluid" />
                                        </figure>
                                        <div className="contact-information-content">
                                            <h5>Phone:</h5>
                                            <p className="mb-0">+91 8638099280</p>
                                            <p className="mb-0">+91 6000587566</p>
                                            <p className="mb-0">+91 9101906834</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div id="form_result">
                            </div>
                            <form onSubmit={handleSubmit} className="contact-form wow slideInRight text-lg-left text-center" >
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-0">
                                            <input onChange={handleChange} type="text" placeholder="Name" name="name" id="name" autoComplete="off" />
                                            {errors.name && touched.name ? (
                                                <div className='error-text'>{errors.name}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-0">
                                            <input onChange={handleChange} type="email" id="email" name="email" placeholder="Email" autoComplete="off" />
                                            {errors.email && touched.email ? (
                                                <div className='error-text'>{errors.email}</div>
                                            ) : null}
                                            <small className="form-text text-muted"></small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-0">
                                            <input onChange={handleChange} type="tel" placeholder="Phone" name="phone" id="phone" />
                                            {errors.phone && touched.phone ? (
                                                <div className='error-text'>{errors.phone}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group mb-0">
                                            <input onChange={handleChange} type="text" name="subject" placeholder="Subject" id="subject" />
                                            {errors.subject && touched.subject ? (
                                                <div className='error-text'>{errors.subject}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className=" form-group mb-0">
                                            <textarea onChange={handleChange} placeholder="Message" rows="3" name="comments" id="comments"></textarea>
                                            {errors.comments && touched.comments ? (
                                                <div className='error-text'>{errors.comments}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' style={{ outline: 'none', backgroundColor: state?.pageLoading ? 'gray' : null }} disabled={state?.pageLoading} className="appointment-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
