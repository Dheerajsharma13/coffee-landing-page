import React from 'react';
import pngwing from '../assets/pngwing.svg'
import cupbgimg from '../assets/cup-bg-img.jpg'

const Newsletter = () => {
    return (
        <section className="relative md:py-24 py-10 flex items-center justify-center text-center">
            <div
                className="absolute py-8 object-cover inset-0 z-0 before:content-[''] before:absolute before:inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${cupbgimg})` }}
            ></div>
            <img src={pngwing} className='absolute md:block hidden z-8 h-[270px] bottom-[-50px] left-0' alt="" />
            <img src={pngwing} className='absolute md:block hidden z-8 h-[270px] rotate-y-180 bottom-[-50px] right-0' alt="" />


            <div
                className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 bg-[#603809]/80 before:z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472201-4475510620ef?q=80&w=2000&auto=format&fit=crop')" }}
            ></div>

            <div className="container mx-auto px-8 md:px-24 xl:px-[93px] relative z-20">
                <div className=" text-white">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                        Subscribe to get the Latest News
                    </h2>
                    <p className="text-gray-300 text-lg mb-10">
                        Don't miss out on our latest news, updates, tips and special offers
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white p-2 rounded-lg shadow-2xl relative z-30">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-3 text-coffee-dark bg-transparent border-none focus:outline-none focus:ring-0 w-full"
                            required
                        />
                        <button
                            type="submit"
                            className="btn-primary whitespace-nowrap !rounded-md sm:w-auto w-full"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
