import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Agency
          </a>
          
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
              <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-center hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;