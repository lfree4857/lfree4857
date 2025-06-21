import React from 'react'

export const Skill = () => {

    const downloadImage = () => {
        var source = 'assets/image/cv-img.html';
        const fileName = 'test-image.html';
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }

    return (
        <section className="w-100 float-left skill-con padding-top padding-bottom position-relative" id="About">
            <div className="container">
                <div className="skill-inner-con position-relative">
                    <div className="row">
                        <div className="col-lg-6 order-lg-0 order-2">
                            <div className="skill-left-con text-center wow slideInLeft" >
                                <div className="row service-skill-sttaf-con">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="skill-left-item-con">
                                            <div className="circle-wrap firstPercentage">
                                                <div className="circle">
                                                    <div className="mask full">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="mask half">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="inside-circle">
                                                        <div className="service-skill-sttaf-item-con">
                                                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                                                                <h4 className="d-table-cell align-middle mb-0 text-center count">75</h4>
                                                                <span className="static-txt2">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-skill-sttaf-item-heading">
                                                <p className="mb-0">Graphic Design</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="skill-left-item-con">
                                            <div className="circle-wrap secondPercentage">
                                                <div className="circle">
                                                    <div className="mask full">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="mask half">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="inside-circle">
                                                        <div className="service-skill-sttaf-item-con">
                                                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                                                                <h4 className=" mb-0 text-center count">95</h4>
                                                                <span className=" static-txt2">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-skill-sttaf-item-heading">
                                                <p className="mb-0">Web Designing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row service-skill-sttaf-con">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="skill-left-item-con">
                                            <div className="circle-wrap thirdPercentage">
                                                <div className="circle">
                                                    <div className="mask full">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="mask half">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="inside-circle">
                                                        <div className="service-skill-sttaf-item-con">
                                                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item1-con d-flex align-items-center justify-content-center">
                                                                <h4 className="d-table-cell align-middle mb-0 text-center count">85</h4>
                                                                <span className="static-txt2">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-skill-sttaf-item-heading">
                                                <p className="mb-0">Branding Design</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                                        <div className="skill-left-item-con">
                                            <div className="circle-wrap fourPercentage">
                                                <div className="circle">
                                                    <div className="mask full">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="mask half">
                                                        <div className="fill"></div>
                                                    </div>
                                                    <div className="inside-circle">
                                                        <div className="service-skill-sttaf-item-con">
                                                            <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                                                                <h4 className=" mb-0 text-center count">80</h4>
                                                                <span className=" static-txt2">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service-skill-sttaf-item-heading">
                                                <p className="mb-0">Web Development</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="skill-right-con wow slideInRight" >
                                <h6>My Skills</h6>
                                <h2>Beautiful & Unique
                                    Digital Experiences
                                </h2>
                                <p>We aim to create distinct digital experiences that shine in today's crowded design arena. Each project merges creativity and innovation, intertwining visuals with user-friendly functionality. Infusing elegance and originality, my work ensures visually appealing interactions that resonate long after.
                                </p>
                                <p>We believe in crafting memorable and authentic digital experiences. Fusing meticulous attention to detail with creative flair, I design interfaces that deeply connect with users. Through collaboration and pushing boundaries, I'm committed to shaping uniquely captivating digital landscapes.
                                </p>
                                <div className="generic-btn download-bnt">
                                    <a href="#" id="downloadImg" onClick={downloadImage}>Download CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
