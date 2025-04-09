import React from "react";
import { BrainCircuit, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-shadow">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="h-6 w-6 text-shadow-accent" />
              <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-shadow-highlight to-shadow-cyan">
                Shadow Mind
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              AI-powered social media tools for brand analysis and content planning.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon icon={<Github className="h-4 w-4" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-200 mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/brand-analysis" className="text-gray-400 hover:text-white transition-colors">Brand Analysis</Link></li>
              <li><Link to="/content-calendar" className="text-gray-400 hover:text-white transition-colors">Content Calendar</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-200 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-200 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 Shadow Mind. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-shadow-light/10 flex items-center justify-center hover:bg-shadow-light/30 transition-colors">
      {icon}
    </a>
  );
};

export default Footer;
