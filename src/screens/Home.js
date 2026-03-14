"use client";

import React, { useContext } from 'react'
import { Header } from '../sections/Header'
import { Profile } from '../sections/Profile'
import { Service } from '../sections/Service'
import { Skill } from '../sections/Skill'
import { Portfolio } from '../sections/Portfolio'
import { Testimonials } from '../sections/Testimonials'
import { Blog } from '../sections/Blog'
import { ContactUs } from '../sections/ContactUs'
import { Footer } from '../sections/Footer'
import { Project } from '../sections/Project'

export const Home = () => {
    return (
        <>
            <div className="header-and-banner-con w-100 float-left position-relative">
                <div className="header-and-banner-inner-con">
                    <Header />
                    <Profile />
                </div>
            </div>
            <Service />
            <Skill />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Project />
            <ContactUs />
            <Footer />
            <a id="button"></a>
        </>
    )
}
