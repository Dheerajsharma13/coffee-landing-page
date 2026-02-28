import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-coffee-dark shadow-lg py-4 opacity-70' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-8 md:px-24 xl:px-[93px] flex justify-between items-center">

                <a id='navLogo' href="#" className="text-3xl font-bold text-white font-clicker">
                    Bean Scene
                </a>


                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-white hover:text-coffee-gold transition-colors  font-medium">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-white hover:text-coffee-gold transition-colors font-medium">
                        Sign In
                    </a>
                    <button className="btn-primary cursor-pointer">
                        Sign Up
                    </button>
                </div>

                <button
                    className="md:hidden text-white hover:text-coffee-gold transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-coffee-dark shadow-xl pb-6 pt-2 flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg hover:text-coffee-gold transition-colors font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-700 w-3/4">
                        <a href="#" className="text-white text-lg hover:text-coffee-gold transition-colors font-medium">
                            Sign In
                        </a>
                        <button className="btn-primary w-full max-w-xs">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
