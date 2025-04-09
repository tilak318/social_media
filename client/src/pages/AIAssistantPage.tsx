
import React from "react";
import Navbar from "@/components/Navbar";
import AIInteraction from "@/components/AIInteraction";
import Footer from "@/components/Footer";

const AIAssistantPage = () => {
  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-white to-shadow-cyan">
            AI Social Media Assistant
          </h1>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Get personalized content recommendations and optimize your social media strategy with our AI assistant
          </p>
        </div>
        <AIInteraction />
      </main>
      <Footer />
    </div>
  );
};

export default AIAssistantPage;
