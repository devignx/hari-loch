"use client";
import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { testData } from "@/data/testimonials-data";
import Testimonials from "../testimonials";

const TestCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        cssEase: "linear",
    };

    return (
        <Slider {...settings}>
            {testData.map((item, index) => (
                <Testimonials
                    key={index}
                    name={item.name}
                    msg={item.msg}
                    org={item.org}
                />
            ))}
        </Slider>
    );
};

export default TestCarousel;
