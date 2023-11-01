"use client";
import { testData } from "@/data/testimonials-data";
import Testimonials from "../testimonials";

const TestCarousel = () => {
    return (
        <>
            {testData.map((item, index) => (
                <Testimonials
                    key={index}
                    name={item.name}
                    msg={item.msg}
                    org={item.org}
                />
            ))}
        </>
    );
};

export default TestCarousel;
