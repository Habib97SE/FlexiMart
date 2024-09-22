import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Mark Jenco',
        role: 'Designer',
        image: '/assets/images/avtar.jpg',
        quote: 'You how all this mistaken idea of denouncing pleasure and praising pain was born, and I will give you a complete account of the system, and expound the actual teachings.'
    },
    {
        name: 'Sarah Smith',
        role: 'Developer',
        image: '/assets/images/2.jpg',
        quote: 'I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.'
    },
    // Add more testimonials as needed
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
};

const TestimonialSlider = () => {
    return (
        <section className="testimonial small-section py-12">
            <div className="container mx-auto">
                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-4">
                                <div className="media flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full mb-4"
                                    />
                                    <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                                    <h6 className="text-sm text-gray-500 mb-4">{testimonial.role}</h6>
                                    <p className="text-gray-700">{testimonial.quote}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
