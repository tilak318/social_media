import React from "react";
import { BrainCircuit, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 bg-gradient-to-b from-shadow to-shadow-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="h-6 w-6 text-shadow-accent" />
              <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-shadow-highlight to-shadow-cyan">
                Shadow Mind
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              AI-powered social media tools for brand analysis and content planning.
            </p>
            <div className="flex space-x-3">
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon icon={<Github className="h-4 w-4" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-shadow-accent mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/brand-analysis">Brand Analysis</FooterLink>
              <FooterLink href="/content-calendar">Content Calendar</FooterLink>
              <FooterLink href="#">API</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-shadow-accent mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">© 2025 Shadow Mind. All rights reserved.</p>
          <p className="text-base md:text-lg text-gray-500">Developed by{" "}
            <a 
              href="https://xdevsolutions.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium text-shadow-accent hover:text-shadow-highlight transition-colors duration-300"
            >
              xDev Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="w-8 h-8 rounded-full bg-shadow-light/10 flex items-center justify-center hover:bg-shadow-accent/20 hover:text-shadow-accent transition-all duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const isExternal = href.startsWith("http");
  
  if (isExternal || href === "#") {
    return (
      <li>
        <a 
          href={href} 
          className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link to={href} className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
