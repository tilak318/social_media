import React, { useState } from "react";
import { BrainCircuit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shadow border-b border-shadow-accent/20 shadow-lg shadow-shadow-dark/20">
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/brand-analysis">Brand Analysis</NavLink>
            <NavLink to="/content-calendar">Content Calendar</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/brand-analysis" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity border border-shadow-highlight/30 shadow-lg shadow-shadow-accent/20">
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
          <div className="md:hidden py-4 px-2 mt-2 border-t border-shadow-accent/20 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-shadow-accent/10 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/brand-analysis" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-shadow-accent/10 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Brand Analysis
              </Link>
              <Link 
                to="/content-calendar" 
                className="text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-md hover:bg-shadow-accent/10 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Content Calendar
              </Link>
              <Link 
                to="/brand-analysis" 
                className="sm:hidden text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity border border-shadow-highlight/30 shadow-lg shadow-shadow-accent/20">
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

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-300 hover:text-shadow-accent transition-colors text-lg px-4 py-2 relative group"
  >
    {children}
    <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-shadow-accent to-shadow-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
);

export default Navbar;
