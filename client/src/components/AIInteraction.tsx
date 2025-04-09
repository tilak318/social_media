
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Check, ChevronRight, Lightbulb, MessageSquare, SendHorizonal, Sparkles } from "lucide-react";

const AIInteraction = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Hello! I\'m Shadow Mind, your AI social media assistant. How can I help optimize your social strategy today?' },
  ]);
  
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: inputValue }]);
    
    // Simulate AI response (in real app, this would call an API)
    setTimeout(() => {
      const aiResponses = [
        "Based on your audience demographics, I recommend focusing on LinkedIn and Instagram for your B2B content strategy. These platforms show the highest engagement rates for your industry.",
        "Looking at your current calendar, I notice you're not posting consistently on Thursdays. Data shows your audience is highly active then, so I'd recommend adding content on those days.",
        "Your competitors are heavily using video content on Instagram. With your current engagement metrics, creating similar content with your unique angle could increase follower growth by approximately 22%.",
        "I've analyzed your recent posts and found that content with industry insights gets 3x more engagement than promotional content. I suggest a 70/30 split between value-based and promotional posts.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prev => [...prev, { role: 'ai', content: randomResponse }]);
    }, 1000);
    
    setInputValue('');
  };

  return (
    <section id="ai" className="py-20 px-6 relative">
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-shadow-highlight/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient-accent">
            Your AI Social Media Strategist
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get expert advice, content ideas, and performance insights with our advanced AI assistant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-morphism p-6 md:p-8 h-[600px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="rounded-full p-2 bg-shadow-accent/20 mr-3">
                  <BrainCircuit className="h-5 w-5 text-shadow-accent" />
                </div>
                <span className="font-bold">Shadow Mind Assistant</span>
              </div>
              <Button variant="outline" className="text-xs h-8 border-shadow-accent/30 text-shadow-accent hover:bg-shadow-accent/10">
                <Sparkles className="mr-1 h-3 w-3" />
                New Chat
              </Button>
            </div>
            
            <div className="flex-grow overflow-y-auto mb-4 space-y-6 scrollbar-none">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user' 
                      ? 'bg-shadow-accent/20 text-white' 
                      : 'neo-blur'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about your social media strategy..." 
                className="w-full bg-shadow-light/10 border border-white/10 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-shadow-accent/50"
              />
              <Button 
                onClick={handleSendMessage}
                className="absolute right-1.5 top-1.5 h-8 w-8 rounded-full p-0 bg-shadow-accent hover:bg-shadow-highlight transition-colors"
              >
                <SendHorizonal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-morphism p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-shadow-highlight" />
                Suggested Queries
              </h3>
              <div className="space-y-3">
                <SuggestedQuery text="What content types perform best for my industry?" />
                <SuggestedQuery text="Analyze my engagement trends for the past month" />
                <SuggestedQuery text="How can I improve my Instagram strategy?" />
                <SuggestedQuery text="Create a content calendar for next week" />
              </div>
            </div>
            
            <div className="glass-morphism p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-shadow-cyan" />
                AI Capabilities
              </h3>
              <div className="space-y-3 text-sm">
                <CapabilityItem text="Content strategy recommendations" />
                <CapabilityItem text="Competitor analysis & benchmarking" />
                <CapabilityItem text="Audience insights & targeting" />
                <CapabilityItem text="Performance optimization" />
                <CapabilityItem text="Content calendar creation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuggestedQuery = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center bg-shadow-light/10 hover:bg-shadow-light/20 transition-colors rounded-lg p-2 text-sm cursor-pointer">
      <span>{text}</span>
      <ChevronRight className="h-4 w-4 ml-auto text-gray-500" />
    </div>
  );
};

const CapabilityItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <div className="rounded-full bg-shadow-accent/20 p-1 mr-2">
        <Check className="h-3 w-3 text-shadow-accent" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default AIInteraction;
