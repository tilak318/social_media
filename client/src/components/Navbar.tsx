import React from "react";
import { BrainCircuit, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-shadow/80 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <BrainCircuit className="h-8 w-8 text-shadow-accent" />
              <span className="text-2xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-shadow-highlight to-shadow-cyan">
                Shadow Mind
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/brand-analysis" className="text-gray-300 hover:text-white transition-colors">Brand Analysis</Link>
            <Link to="/content-calendar" className="text-gray-300 hover:text-white transition-colors">Content Calendar</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/brand-analysis">
              <Button className="bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
