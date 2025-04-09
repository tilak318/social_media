import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-white to-shadow-cyan">
              AI-Powered Social Media Tools
            </h1>
            <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
              Enhance your social media strategy with our intelligent brand analysis and content planning tools
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-shadow-card backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-shadow-accent/40 transition-all hover:shadow-lg hover:shadow-shadow-accent/20">
                <div className="flex justify-center mb-6">
                  <Search className="h-16 w-16 text-shadow-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Brand Analysis</h2>
                <p className="text-gray-300 mb-6 text-center">
                  Get detailed insights about any brand's social media presence, including platform usage, content strategy, and sentiment analysis
                </p>
                <div className="text-center">
                  <Link to="/brand-analysis">
                    <Button variant="outline" className="border-shadow-accent text-shadow-accent hover:bg-shadow-accent/20">
                      Analyze Brand
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-shadow-card backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-shadow-accent/40 transition-all hover:shadow-lg hover:shadow-shadow-accent/20">
                <div className="flex justify-center mb-6">
                  <Calendar className="h-16 w-16 text-shadow-highlight" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Content Calendar</h2>
                <p className="text-gray-300 mb-6 text-center">
                  Generate AI-powered content calendars and briefs tailored to your industry, target audience, and goals
                </p>
                <div className="text-center">
                  <Link to="/content-calendar">
                    <Button variant="outline" className="border-shadow-highlight text-shadow-highlight hover:bg-shadow-highlight/20">
                      Create Calendar
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
