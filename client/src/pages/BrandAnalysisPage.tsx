import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";
import { useToast } from "@/components/ui/use-toast";

const BrandAnalysisPage = () => {
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    brand_analysis: string;
    sentiment_analysis: string;
  } | null>(null);
  const { toast } = useToast();

  const analyzeBrand = async () => {
    if (!brandName.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.BRAND_ANALYSIS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brand_name: brandName }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze brand");
      }
      
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error analyzing brand:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze brand",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-white to-shadow-cyan">
            Brand Analysis
          </h1>
          <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Get detailed insights about any brand's social media presence and sentiment analysis
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Enter brand name..."
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={analyzeBrand}
                disabled={loading || !brandName.trim()}
                className="bg-shadow-accent hover:bg-shadow-accent/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Brand"
                )}
              </Button>
            </div>
          </div>

          {results && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 bg-shadow-card backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-shadow-accent">Brand Analysis</h2>
                <div className="prose prose-invert max-w-none">
                  {results.brand_analysis.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-shadow-card backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-shadow-highlight">Sentiment Analysis</h2>
                <div className="prose prose-invert max-w-none">
                  {results.sentiment_analysis.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrandAnalysisPage; 