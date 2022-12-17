import React from "react";

function Services(){

    const heading = {
        mainHeader: "My Expertise",
        subHeading: "Provide Wide Range of Digital Services",
    };
    const state = [
        {
            id:1,
            icon:'./images/website-design.png',
            heading:"Web Design",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
        {
            id:2,
            icon:'./images/web-development.png',
            heading:'Web Development',
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
        {
            id:3,
            icon:'./images/ux.png',
            heading:'UI & UX Design',
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
        {
            id:4,
            icon:'./images/app-development.png',
            heading:'App Development',
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
        {
            id:5,
            icon:'./images/video-editing.png',
            heading:'Video Editing',
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
        {
            id:6,
            icon:'./images/seo.png',
            heading:'SEO Expert',
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nisi dicta aperiam expedita, beatae corporis.",
        },
    ]
    return(
        <div className="services">
            <div className="container">
                <div className="services-header">
                    <div className="common">
                        <h6 className="heading">{heading.mainHeader}</h6>
                        <h2 className="subHeading">{heading.subHeading}</h2>
                        <div className="commonBorder">

                        </div>
                    </div>
                    <div className="row bgMain">
                        {state.map((service) => {
                            return(
                               <div className="col-4 bgMain" key={service.id}>
                                <div className="service-box">
                                    <img src={service.icon} alt="Icon" />
                                    <h4 className="service-box-heading">{service.heading}</h4>
                                    <p className="service-box-text">{service.text}</p>

                                </div>
                               </div>
                            )
                        })}
                    </div>
              </div>
            </div>
        </div>
    )
}

export default Services;