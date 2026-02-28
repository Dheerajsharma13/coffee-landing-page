import React from 'react';
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
    return (
        <section
            className="relative md:min-h-screen min-h-[675px] flex items-center md:pt-8 pt-4"
            id="home"
        >

            <div
                className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-coffee-dark/70 before:z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            <div className="container mx-auto px-8 md:px-24 xl:px-[93px] relative z-20">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div className="w-full md:w-1/2 text-white space-y-6 md:pr-10 md:mt-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            We've got your morning covered with
                        </h1>
                        <div className="text-7xl md:text-8xl lg:text-9xl text-white script-font font-normal py-2 -ml-2">
                            Coffee
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.
                        </p>
                        <div className="pt-4">
                            <button className="btn-primary">
                                Order Now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
