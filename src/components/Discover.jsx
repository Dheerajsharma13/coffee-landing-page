import React from 'react';
import discoverImage from "../assets/discoverImage.svg";
import Title from './Title';

const Discover = () => {
    return (
        <section className="md:py-24 py-12 bg-white" id="about">
            <div className="container mx-auto px-8 md:px-24 xl:px-23.25">
                <div className="flex flex-col md:flex-row items-center">

                    <div className="w-full md:w-1/2 space-y-6">
                        <Title text="Discover the best coffee" />
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                        </p>
                        <div className="pt-4">
                            <button className="btn-secondary">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center md:mt-0 relative group">

                        <img
                            src={discoverImage}
                            alt="Heart shaped coffee beans"
                            className="md:block hidden h-116.75 w-142 transition-transform duration-700 hover:scale-110"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Discover;
