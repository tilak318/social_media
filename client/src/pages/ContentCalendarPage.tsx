import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";
import { useToast } from "@/components/ui/use-toast";

const ContentCalendarPage = () => {
  const [formData, setFormData] = useState({
    industry: "",
    target_audience: "",
    content_goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    trend_analysis: string;
    calendar: string;
    briefs: string;
  } | null>(null);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateCalendar = async () => {
    if (!formData.industry || !formData.target_audience || !formData.content_goals) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINTS.CONTENT_CALENDAR, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate calendar");
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error generating calendar:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate calendar",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-shadow text-white">
      <Navbar />
      <main className="pt-12 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-shadow-accent via-white to-shadow-cyan">
            Content Calendar Generator
          </h1>
          <p className="text-lg text-center text-gray-300 mb-10 max-w-3xl mx-auto">
            Create AI-powered content calendars and briefs for your social media strategy
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Industry/Niche</label>
                <Input
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Fashion, Tech, Food"
                  className="bg-white/40 border-white/40 text-shadow-dark placeholder:text-shadow-dark/60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                <Input
                  name="target_audience"
                  value={formData.target_audience}
                  onChange={handleInputChange}
                  placeholder="e.g., Young professionals, 25-34"
                  className="bg-white/40 border-white/40 text-shadow-dark placeholder:text-shadow-dark/60"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content Goals</label>
                <Textarea
                  name="content_goals"
                  value={formData.content_goals}
                  onChange={handleInputChange}
                  placeholder="e.g., Increase brand awareness, drive engagement"
                  className="h-24 bg-white/40 border-white/40 text-shadow-dark placeholder:text-shadow-dark/60"
                />
              </div>
              <Button
                onClick={generateCalendar}
                disabled={loading || !formData.industry || !formData.target_audience || !formData.content_goals}
                className="w-full bg-shadow-accent hover:bg-shadow-accent/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Calendar"
                )}
              </Button>
            </div>
          </div>

          {results && (
            <div className="space-y-8 max-w-6xl mx-auto">
              <Card className="p-6 bg-shadow-card backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-shadow-accent">Trend Analysis</h2>
                <div className="prose prose-invert max-w-none">
                  {results.trend_analysis.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-shadow-card backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-shadow-highlight">Content Calendar</h2>
                <div className="prose prose-invert max-w-none">
                  {results.calendar.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-shadow-card backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-shadow-cyan">Content Briefs</h2>
                <div className="prose prose-invert max-w-none">
                  {results.briefs.split('\n').map((line, i) => (
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

export default ContentCalendarPage; 