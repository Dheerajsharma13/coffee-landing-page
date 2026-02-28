import React from 'react';
import ctaImage from '../assets/cup-img.png';
import bgBeansImage from '../assets/coffee-bean-img.png';
import cupbgimg from '../assets/cup-bg-img.jpg';

const CTA = () => {
    return (
        <section className="relative  flex items-center bg-coffee-primary">

            <div
                className="absolute py-8 object-cover inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-coffee-dark/80 before:z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${cupbgimg})` }}
            ></div>

            <section className="relative w-full md:min-h-125 min-h-120 flex items-center object-cover">

                <img
                    className='absolute md:block hidden right-0 h-full z-8 '
                    src={bgBeansImage} alt="bgbeansimage" />


                <div className="absolute inset-0 bg-[#603809]/40"></div>

                <div className="container mx-auto px-8 md:pt-8 md:px-24 xl:px-23.25 relative z-20">
                    <div className="flex flex-col md:flex-row items-center justify-between md:gap-12">

                        <div className="w-full md:w-2/3 text-white space-y-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                                Get a chance to have an Amazing morning
                            </h2>

                            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                                We are giving you a one-time opportunity to experience a better life with coffee.
                            </p>

                            <button className="mt-4 px-8 py-3 bg-[#F9C06A] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                                Order Now
                            </button>
                        </div>

                        <div className="w-full md:block hidden py-8 md:w-1/3 flex justify-center md:justify-end object-cover bottom-8 right-30 relative">
                            <img
                                src={ctaImage}
                                alt="Coffee Cup"
                                className="w-64 z-10 h-100 md:w-80 lg:w-105 object-contain drop-shadow-2xl translate-y-6 md:translate-y-10"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default CTA;
