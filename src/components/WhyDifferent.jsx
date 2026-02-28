import * as React from 'react';
import { Coffee, Award, Sparkles, DollarSign } from 'lucide-react';
import Title from './Title';
import coffeeBlast from '../assets/coffee_blast.svg'

const features = [
    {
        id: 1,
        title: 'Supreme Beans',
        description: 'Beans that provides great taste',
        icon: Coffee
    },
    {
        id: 2,
        title: 'High Quality',
        description: 'We provide the highest quality',
        icon: Award
    },
    {
        id: 3,
        title: 'Extraordinary',
        description: 'Coffee like you have never tasted',
        icon: Sparkles
    },
    {
        id: 4,
        title: 'Affordable Price',
        description: 'Our Coffee prices are easy to afford',
        icon: DollarSign
    }
];

const WhyDifferent = () => {
    return (
        <section className="py-24 relative bg-white" id="why-us">
            <img src={coffeeBlast} className='md:block hidden absolute h-[200px] top-0 right-0' alt="" />
            <div className="container mx-auto px-8 md:px-24 xl:px-[93px] text-center">

                <div className="mb-16">
                    <Title text="Why are we different?" />
                    <p className="text-gray-600 text-lg">
                        We don't just make your coffee, we make your day!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-coffee-cream/50 rounded-lg p-8 hover:bg-coffee-cream transition-colors duration-300 border border-transparent hover:border-coffee-gold/30 hover:-translate-y-2 transform cursor-pointer group flex flex-col items-center"
                        >
                            <div className="w-20 h-20 bg-coffee-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-coffee-gold transition-colors duration-300">
                                <feature.icon size={40} className="text-coffee-dark" />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-coffee-dark mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-6 text-lg">
                        Great ideas start with great coffee, let us help you achieve that
                        <br className="hidden md:block" /> Get started today.
                    </p>
                    <button className="btn-primary">
                        Join Us
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WhyDifferent;
