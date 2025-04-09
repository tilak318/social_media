
import React from "react";
import Navbar from "@/components/Navbar";
import AnalyticsPreview from "@/components/AnalyticsPreview";
import Footer from "@/components/Footer";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-white to-shadow-cyan">
            Social Media Analytics Dashboard
          </h1>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Get detailed insights on your social media performance across all platforms
          </p>
        </div>
        <AnalyticsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
