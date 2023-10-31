"use client";
import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import card1 from "../../../assets/Card 1.svg";
import card2 from "../../../assets/Card 2.svg";
import card3 from "../../../assets/Card 3.svg";
import Image from "next/image";

const NotificationCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 0.5,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
    };

    const imgs = [card1, card2, card3];

    return (
        <Slider {...settings}>
            {imgs.map((_, index) => (
                <Image
                    key={index}
                    src={imgs[index]}
                    alt="card"
                    className="w-[10rem] object-contain"
                />
            ))}
        </Slider>
    );
};

export default NotificationCarousel;
