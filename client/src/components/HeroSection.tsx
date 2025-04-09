
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, CalendarDays, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-shadow-accent/20 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-shadow-highlight/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-gradient leading-tight">
            Master Social Media with <br/>
            <span className="text-gradient-accent">AI-Powered Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Shadow Mind analyzes your social presence, creates engaging content calendars, and provides 
            strategic insights to dominate your social media presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-shadow-accent to-shadow-highlight hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-morphism p-6">
            <div className="rounded-full bg-gradient-to-br from-shadow-accent/20 to-shadow-highlight/30 p-3 w-fit mb-4">
              <CalendarDays className="h-6 w-6 text-shadow-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Calendar</h3>
            <p className="text-gray-300">AI-generated content calendar optimized for your audience and goals.</p>
          </div>
          
          <div className="glass-morphism p-6">
            <div className="rounded-full bg-gradient-to-br from-shadow-accent/20 to-shadow-highlight/30 p-3 w-fit mb-4">
              <BarChart2 className="h-6 w-6 text-shadow-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Analytics Engine</h3>
            <p className="text-gray-300">Deep insights into your social media performance and competitor analysis.</p>
          </div>
          
          <div className="glass-morphism p-6">
            <div className="rounded-full bg-gradient-to-br from-shadow-accent/20 to-shadow-highlight/30 p-3 w-fit mb-4">
              <Users className="h-6 w-6 text-shadow-highlight" />
            </div>
            <h3 className="text-xl font-bold mb-2">Audience Targeting</h3>
            <p className="text-gray-300">Identify and engage your ideal audience across all major platforms.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
