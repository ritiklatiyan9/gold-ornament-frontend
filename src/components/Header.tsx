// Header.tsx
import React, { useState, useEffect } from 'react';
import { Home, ShoppingCart, Info, Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const MenuItem = ({ icon: Icon, text, to, onClick }) => (
  <li>
    <Link
      to={to}
      className="flex items-center text-yellow-800 hover:text-white transition hover:bg-yellow-700 transition duration-200 py-2 px-4 rounded-lg"
      onClick={onClick}
    >
      <Icon className="mr-2" size={20} />
      <span>{text}</span>
    </Link>
  </li>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { icon: Home, text: 'Home', to: '/' },
    { icon: ShoppingCart, text: 'Collections', to: '/construction' },
    { icon: Info, text: 'About Us', to: '/construction' },
    { icon: Phone, text: 'Contact', to: '/construction' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://bharatgoldornaments.com/web/wp-content/uploads/2024/03/Bharat-Gold-Ornaments-logo-1.svg"
              alt="Bharat Gold Ornaments Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </ul>
          </nav>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-yellow-800 hover:text-yellow-600 transition duration-200 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://bharatgoldornaments.com/web/wp-content/uploads/2024/03/Bharat-Gold-Ornaments-logo-1.svg"
                alt="Bharat Gold Ornaments Logo"
                className="h-10"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-yellow-800 hover:text-yellow-600 transition duration-200 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  {...item}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
