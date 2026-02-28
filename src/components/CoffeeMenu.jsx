import React from 'react';
import cappuccinoImage from "../assets/menu-image/cappuccino-img.jpg";
import chaiLatteImage from "../assets/menu-image/chailatte-img.jpg";
import macchiatoImage from "../assets/menu-image/macchiato-img.jpg";
import espressoImage from "../assets/menu-image/expresso-img.jpg";
import Title from './Title';
import coffeeBlast from '../assets/coffee_blast.svg'

const coffees = [
    {
        id: 1,
        name: 'Cappuccino',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        image: cappuccinoImage
    },
    {
        id: 2,
        name: 'Chai Latte',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        image: chaiLatteImage
    },
    {
        id: 3,
        name: 'Macchiato',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        image: macchiatoImage
    },
    {
        id: 4,
        name: 'Espresso',
        description: 'Coffee 50% | Milk 50%',
        price: '$8.50',
        image: espressoImage
    }
];

const CoffeeMenu = () => {
    return (
        <section className="md:py-24 py-13 relative bg-coffee-cream" id="menu">
            <img src={coffeeBlast} className=' md:block hidden absolute rotate-y-180 h-50 top-0 left-0' alt="" />
            <div className="container mx-auto px-8 md:px-24 xl:px-23.25 text-center">


                <div className="mb-16 mx-auto">
                    <Title text="Enjoy a new blend of coffee style" />
                    <p className="text-gray-600 text-lg">
                        Explore all flavours of coffee with us. There is always a new cup worth experiencing
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {coffees.map((coffee) => (
                        <div
                            key={coffee.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg border border-coffee-light/20 flex flex-col group hover:shadow-2xl"
                        >

                            <div className="h-56 relative overflow-hidden">
                                <img
                                    src={coffee.image}
                                    alt={coffee.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 flex flex-col grow items-center">
                                <h3 className="text-2xl font-bold font-serif text-coffee-dark mb-2">{coffee.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{coffee.description}</p>

                                <div className="mt-auto mb-6">
                                    <span className="text-xl font-bold text-coffee-dark">{coffee.price}</span>
                                </div>

                                <button className="btn-primary w-full py-2 text-sm! whitespace-nowrap opacity-90 group-hover:opacity-100 shadow-none hover:shadow-lg mt-auto">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoffeeMenu;
