import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import footerImg from '../assets/footer_image.svg'


const Footer = () => {
    return (
        <footer className="relative bg-coffee-dark text-gray-300 pt-15 md:pt-20 pb-10" id="contact">

            <div
                className="absolute py-8 object-cover inset-0 z-0 before:content-[''] before:absolute before:inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${footerImg})` }}
            ></div>

            <div
                className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 bg-[#603809]/80 before:z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472201-4475510620ef?q=80&w=2000&auto=format&fit=crop')" }}
            ></div>

            <div className="relative z-10 container mx-auto px-8 md:px-24 xl:px-[93px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">


                    <div className="space-y-6">
                        <a href="#" className="text-4xl font-bold text-white script-font">
                            Bean Scene
                        </a>
                        <p className="text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-coffee-primary flex items-center justify-center hover:bg-coffee-gold hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-coffee-primary flex items-center justify-center hover:bg-coffee-gold hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-coffee-primary flex items-center justify-center hover:bg-coffee-gold hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-coffee-primary flex items-center justify-center hover:bg-coffee-gold hover:text-white transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white  mb-4 md:mb-6">About</h4>
                        <ul className="md:space-y-4 space-y-1">
                            <li><a href="#" className="hover:text-coffee-gold  transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">News & Blogs</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">Help & Supports</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-4 md:mb-6">Company</h4>
                        <ul className="md:space-y-4 space-y-1">
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">How we work</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">Terms of service</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-coffee-gold transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
                        <ul className="md:space-y-6 space-y-1">
                            <li className="flex items-start">
                                <MapPin className="text-coffee-gold mr-3 mt-1 shrink-0" size={20} />
                                <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-coffee-gold mr-3 shrink-0" size={20} />
                                <span>+1 202-918-2132</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-coffee-gold mr-3 shrink-0" size={20} />
                                <span>beanscene@mail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>© {new Date().getFullYear()} Bean Scene. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
