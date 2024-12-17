import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
            Agency
          </a>
          
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/PortfolioPage" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/ServicesPage" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/SkillsTimelinePage" className="text-muted-foreground hover:text-primary transition-colors">Skills & Timeline</a>
            <a href="/PricingPage" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/AboutPage" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/PortfolioPage" className="block text-muted-foreground hover:text-primary transition-colors">Portfolio</a>
            <a href="/ServicesPage" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="/SkillsTimelinePage" className="block text-muted-foreground hover:text-primary transition-colors">Skills & Timeline</a>
            <a href="/PricingPage" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/AboutPage" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            <a
              href="#contact"
              className="block bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;