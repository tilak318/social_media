import React, { useState } from "react";
import { BrainCircuit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-r from-shadow-card/90 via-shadow/95 to-shadow-card/90 border-b border-shadow-accent/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-shadow-accent" />
              <span className="text-3xl md:text-4xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-shadow-highlight to-shadow-cyan">
                Shadow Mind
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-lg px-4 py-2">Home</Link>
            <Link to="/brand-analysis" className="text-gray-300 hover:text-white transition-colors text-lg px-4 py-2">Brand Analysis</Link>
            <Link to="/content-calendar" className="text-gray-300 hover:text-white transition-colors text-lg px-4 py-2">Content Calendar</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/brand-analysis" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
            
            <button 
              className="md:hidden relative w-10 h-10 flex justify-center items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-7 h-0.5 bg-white absolute transition-all duration-300 ${mobileMenuOpen ? 'rotate-45' : 'translate-y-[-8px]'}`}></div>
              <div className={`w-7 h-0.5 bg-white absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-7 h-0.5 bg-white absolute transition-all duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 mt-2 border-t border-white/10 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-white/5 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/brand-analysis" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-white/5 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brand Analysis
              </Link>
              <Link 
                to="/content-calendar" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-white/5 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Content Calendar
              </Link>
              <Link 
                to="/brand-analysis" 
                className="sm:hidden text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
