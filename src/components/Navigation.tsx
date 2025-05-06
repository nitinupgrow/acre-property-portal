
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Menu, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/873211f9-13ba-4123-b2e3-ab3e938ed6f5.png" 
            alt="90acre Logo" 
            className="h-10 mr-2" 
          />
          <span className="text-2xl font-bold text-primary font-playfair">
            90<span className="text-accent">acre</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
            About Us
          </Link>
          <Link to="/properties" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Properties
          </Link>
          <Link to="/team" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Our Team
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Contact
          </Link>
        </nav>
        
        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <Button className="btn-accent flex items-center gap-2" asChild>
            <a href="tel:+9911288282">
              <Phone size={16} /> Call Now
            </a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/properties" 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Properties
            </Link>
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="btn-accent flex items-center gap-2 w-full justify-center" asChild>
              <a href="tel:+9911288282">
                <Phone size={16} /> Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
