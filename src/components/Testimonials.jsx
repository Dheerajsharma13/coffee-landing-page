import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Title from './Title';
import coffeeBlast from '../assets/coffee_blast.svg'

const testimonials = [
    {
        id: 1,
        name: 'Jonny Thomas',
        role: 'Project Manager',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Freelance Designer',
        quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const { quote, name, role, image } = testimonials[currentIndex];

    return (
        <section className="py-20 md:py-24 bg-white relative overflow-hidden" id="testimonials">

            <img src={coffeeBlast} className='absolute md:block hidden h-[300px] top-0 right-0' alt="" />



            <div className="container mx-auto px-8 md:px-24 xl:px-[93px] text-center relative z-10">

                <div className="mb-16">
                    <Title text="Our coffee perfection feedback" />
                    <p className="text-gray-600 text-lg">
                        Our customers have amazing things to say about us
                    </p>
                </div>

                <div className="md:max-w-5xl max-w-full py-4 mx-auto relative md:px-24">

                    <button
                        onClick={handlePrevious}
                        className="absolute md:left-18 left-[-24px] z-4 top-1/2 -translate-y-1/2 bg-coffee-gold hover:bg-yellow-500 text-white p-3 rounded-lg shadow-md transition-colors duration-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute md:right-18 right-[-24px] z-4 top-1/2 -translate-y-1/2 bg-coffee-gold hover:bg-yellow-500 text-white p-3 rounded-lg shadow-md transition-colors duration-300"
                    >
                        <ChevronRight size={24} />
                    </button>


                    <div className="bg-coffee-cream/40 border border-coffee-gold/20 rounded-2xl p-8 md:p-12 relative transition-all duration-500 min-h-[300px] flex flex-col justify-center">
                        <Quote size={60} className="text-coffee-gold/30 absolute top-6 left-6" />

                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 mt-6">
                            "{quote}"
                        </p>

                        <div className="flex flex-col items-center mt-auto">
                            <h4 className="text-2xl font-bold font-serif text-coffee-dark">{name}</h4>
                            <span className="text-sm text-gray-500 mb-6">{role}</span>

                            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white absolute -bottom-10 left-1/2 -translate-x-1/2">
                                <img src={image} alt={name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <img src={coffeeBlast} className='absolute md:block hidden rotate-180 h-[250px] z-8 bottom-0 left-0' alt="" />
        </section>
    );
};

export default Testimonials;
