import React from "react";

function Price(){
    const header = {
        subheading: 'Popular Pricing Plan For Creative Project',
        text:'When building a website, start here. Our shared services delivers a powerful, proven plans',
    }
    const prices = [
        {
            id:1,
            heading:'Basic',
            price:30,
            msg1:"Web Design (UX/UI)",
            msg2:"Software Development",
            msg3:"Fashion Design (Arts)",
            msg4:"Web Development (App)",
            msg5:"Game Design & DV",
        },
        {
            id:2,
            heading:"Professional",
            price:100,
            msg1:"Web Design (UX/UI)",
            msg2:"Software Development",
            msg3:"Fashion Design (Arts)",
            msg4:"Web Development (App)",
            msg5:"Game Design & DV",
        },
        {
            id:3,
            heading:'Business',
            price:190,
            msg1:"Web Design (UX/UI)",
            msg2:"Software Development",
            msg3:"Fashion Design (Arts)",
            msg4:"Web Development (App)",
            msg5:"Game Design & DV",
        },

    ]
    return(
        <div className="prices">
            <div className="container">
                <div className="common">
                    <h2 className="mainHeader">{header.subheading}</h2>
                    <h6 className="mainContent">{header.text}</h6>
                    <div className="commonBoarder"></div>
                </div>
                <div className="row">
                    {prices.map((price) => (
                        <div className="col-4" key={price.id}>
                            <div className="price">
                                <div className="priceHeading">
                                    {price.heading}                                    
                                </div>
                                <div className="price-amount">
                                    <span>$</span>
                                    {price.price}
                                </div>
                                <ul>
                                    <li>{price.msg1}</li>
                                    <li>{price.msg2}</li>
                                    <li>{price.msg3}</li>
                                    <li>{price.msg4}</li>
                                    <li>{price.msg5}</li>
                                </ul>
                                <div className="price-btn">
                                    <a href="price" className="btn btn-outlined">
                                        Start Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Price;