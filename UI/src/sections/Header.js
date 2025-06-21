import React from 'react'
import { CLIENT } from '../constants/environment';

export const Header = () => {

    const header = ['Home', 'Services', 'About', 'Portfolio', 'Testimonials', 'Blog'];

    return (
        <header className="main-header">
            {/* navbar-start */}
            <div className="container pl-0 pr-0">
                <div className="header-con">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand p-0" href="#">
                            <img src={`${CLIENT}image/innovators.webp`} alt="logo-img" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler p-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {Array(3).fill('').map((val, idx) => <span key={idx} className="navbar-toggler-icon"></span>)}
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {header.map((val, idx) => (<li key={idx} className={idx === 0 ? 'nav-item  active pl-0' : 'nav-item '}>
                                    <a className={`nav-link p-0 ${idx === 0 && 'is-active'}`} href={`#${idx === 0 ? '' : val}`}>{val}{idx === 0 && <span className="sr-only">(current)</span>}</a>
                                </li>))}
                            </ul>
                            <div className="d-inline-block contact">
                                <a href="#Contact">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* navbar-end */}
        </header>
    )
}
