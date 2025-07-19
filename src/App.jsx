import React, { useState } from 'react'; // Import useState for managing mobile menu state
// Import all your components
import Home from './components/Home'; // Assuming SgpaCalculator is your Home component
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Blog from './components/Blog';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Helper function for smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    // The main container for the entire application, applying the consistent gradient background
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      {/* Navbar - now sticky at the top for easy navigation */}
      <nav className="bg-white p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
        <div className="font-extrabold text-2xl text-blue-700">CGPA Calculator</div>
        
        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {/* Hamburger icon (you can replace with an SVG icon if desired) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex md:justify-end md:gap-6">
          {/* These buttons now trigger smooth scrolling to sections */}
          <button onClick={() => scrollToSection('home-calculator')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">About</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Contact</button>
          <button onClick={() => scrollToSection('privacy')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Privacy Policy</button>
          <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Blog</button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-4 px-4 pb-4">
            <button onClick={() => scrollToSection('home-calculator')} className="w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none border-b border-gray-100">Home</button>
            <button onClick={() => scrollToSection('about')} className="w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none border-b border-gray-100">About</button>
            <button onClick={() => scrollToSection('contact')} className="w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none border-b border-gray-100">Contact</button>
            <button onClick={() => scrollToSection('privacy')} className="w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none border-b border-gray-100">Privacy Policy</button>
            <button onClick={() => scrollToSection('blog')} className="w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Blog</button>
          </div>
        </div>
      )}

      {/* Main Content Sections - each component is rendered in its own scrollable section */}
      <section id="home-calculator" className="py-16 flex items-center justify-center">
        <Home />
      </section>

      <section id="about" className="py-16 flex items-center justify-center">
        <About />
      </section>

      <section id="contact" className="py-16 flex items-center justify-center">
        <Contact />
      </section>

      <section id="privacy" className="py-16 flex items-center justify-center">
        <PrivacyPolicy />
      </section>

      <section id="blog" className="py-16 flex items-center justify-center">
        <Blog />
      </section>

      {/* Footer for the application */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; {new Date().getFullYear()} CGPA Calc. All rights reserved.</p>
      </footer>
    </div>
  );
}
