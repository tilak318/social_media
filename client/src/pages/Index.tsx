
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, LineChart, BrainCircuit } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Explore Shadow Mind's Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-shadow-card backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-shadow-accent/40 transition-all hover:shadow-lg hover:shadow-shadow-accent/20">
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-shadow-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Social Media Calendar</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Schedule and organize your posts with AI-powered content planning
                </p>
                <div className="text-center">
                  <Link to="/calendar">
                    <Button variant="outline" className="border-shadow-cyan text-shadow-cyan hover:bg-shadow-cyan/20">
                      View Calendar
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-shadow-card backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-shadow-accent/40 transition-all hover:shadow-lg hover:shadow-shadow-accent/20">
                <div className="flex justify-center mb-4">
                  <LineChart className="h-12 w-12 text-shadow-highlight" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Track performance and gain insights across all your social platforms
                </p>
                <div className="text-center">
                  <Link to="/analytics">
                    <Button variant="outline" className="border-shadow-highlight text-shadow-highlight hover:bg-shadow-highlight/20">
                      View Analytics
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-shadow-card backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-shadow-accent/40 transition-all hover:shadow-lg hover:shadow-shadow-accent/20">
                <div className="flex justify-center mb-4">
                  <BrainCircuit className="h-12 w-12 text-shadow-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">AI Assistant</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Get personalized recommendations to optimize your strategy
                </p>
                <div className="text-center">
                  <Link to="/assistant">
                    <Button variant="outline" className="border-shadow-cyan text-shadow-cyan hover:bg-shadow-cyan/20">
                      Try AI Assistant
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
