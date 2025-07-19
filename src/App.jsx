import React from 'react';
// Import all your components
import Home from './components/Home'; // Assuming SgpaCalculator is your Home component
import About from './components/About';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Blog from './components/Blog';

export default function App() {
  // Helper function for smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // The main container for the entire application, applying the consistent gradient background
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen">
      {/* Navbar - now sticky at the top for easy navigation */}
      <nav className="bg-white p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
        <div className="font-extrabold text-2xl text-blue-700">SGPA Calc</div>
        
        {/* Scrollable navigation links container */}
        <div className="flex-grow overflow-x-auto whitespace-nowrap scrollbar-hide md:flex md:justify-end md:gap-6">
          <div className="inline-flex gap-4 px-2 md:px-0">
            {/* These buttons now trigger smooth scrolling to sections */}
            <button onClick={() => scrollToSection('home-calculator')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Contact</button>
            <button onClick={() => scrollToSection('privacy')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Privacy Policy</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none">Blog</button>
          </div>
        </div>
      </nav>

      {/* Main Content Sections - each component is rendered in its own scrollable section */}
      {/* Note: The min-h-screen and centering styles from individual components 
                 are removed here as the App.jsx handles the overall page layout. 
                 The inner components will simply render their card content. */}

      <section id="home-calculator" className="py-16 flex items-center justify-center">
        {/* SgpaCalculator already has its own internal styling for the card */}
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
        <p>&copy; {new Date().getFullYear()} SGPA Calc. All rights reserved.</p>
      </footer>
    </div>
  );
}
