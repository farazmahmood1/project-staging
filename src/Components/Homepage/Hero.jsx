import React from 'react'
import backgroundVideo from "../Sourcefiles/wp-content/uploads/2023/01/video-1.mp4";


const Hero = () => {
    return (
        <div>

            <section
                data-particle_enable="false"
                data-particle-mobile-disabled="false"
                className="elementor-section elementor-top-section elementor-element elementor-element-d5e3db3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="d5e3db3"
                data-element_type="section"
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bd4ca57"
                        data-id="bd4ca57"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-1c07943 elementor-widget elementor-widget-html"
                                data-id="1c07943"
                                data-element_type="widget"
                                data-widget_type="html.default"
                            >
                                <div className="elementor-widget-container">
                                    <section
                                        className="s-BannerVideo-22"
                                        style={{ padding: 0, margin: 0 }}
                                    >
                                        <div className="s-BannerVideo-22__Slider">
                                            <div id="js-BannerVideo-22">
                                                <div data-title="CRM consultants">
                                                    <video
                                                        title
                                                        className="s-BannerVideo-22__Video"
                                                        muted
                                                        playsInline
                                                        loop
                                                    >
                                                        <source
                                                            src={backgroundVideo}
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                    <div className="s-BannerVideo-22__Content">
                                                        <div className="row l-ContentColumn">
                                                            <div className="columns xsmall-24">
                                                                <h1 className="t-MainHeader">
                                                                    <span className="weare">
                                                                        We are{" "}
                                                                    </span>
                                                                    <br />
                                                                    CRM Consultants
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-title="system Integrator">
                                                    <video
                                                        title
                                                        className="s-BannerVideo-22__Video"
                                                        muted
                                                        playsInline
                                                        loop
                                                    >
                                                        <source
                                                            // src={"wp-content/uploads/2023/01/video-2.mp4"}
                                                            src={backgroundVideo}
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                    <div className="s-BannerVideo-22__Content">
                                                        <div className="row l-ContentColumn">
                                                            <div className="columns xsmall-24">
                                                                <h1 className="t-MainHeader">
                                                                    <span className="weare">
                                                                        We are{" "}
                                                                    </span>{" "}
                                                                    <br />
                                                                    System Integrators
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-title="TECHNOLOGY EXPERTS">
                                                    <video
                                                        title
                                                        className="s-BannerVideo-22__Video"
                                                        muted
                                                        playsInline
                                                        loop
                                                    >
                                                        <source
                                                            src={backgroundVideo}
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                    <div className="s-BannerVideo-22__Content">
                                                        <div className="row l-ContentColumn">
                                                            <div className="columns xsmall-24">
                                                                <h1 className="t-MainHeader">
                                                                    <span className="weare">
                                                                        We are{" "}
                                                                    </span>
                                                                    <br />
                                                                    Technology Experts
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div data-title="CLOUD ENGINEERS">
                                                    <video
                                                        title
                                                        className="s-BannerVideo-22__Video"
                                                        muted
                                                        playsInline
                                                        loop
                                                    >
                                                        <source
                                                            src={backgroundVideo}
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                    <div className="s-BannerVideo-22__Content">
                                                        <div className="row l-ContentColumn">
                                                            <div className="columns xsmall-24">
                                                                <h1 className="t-MainHeader">
                                                                    <span className="weare">
                                                                        We are{" "}
                                                                    </span>{" "}
                                                                    <br />
                                                                    Cloud Engineers
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero