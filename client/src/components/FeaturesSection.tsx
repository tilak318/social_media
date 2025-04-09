
import React from "react";
import { BrainCircuit, Calendar, ChartBar, Globe, MessageSquare, Settings, Star, Users, Zap } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="absolute inset-0 grid-background opacity-30 z-0"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient-accent">
            Next-Level Social Media Intelligence
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Shadow Mind combines advanced AI algorithms with deep social media expertise
            to give you unparalleled control over your digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Calendar className="h-6 w-6 text-shadow-accent" />}
            title="Smart Content Calendar"
            description="AI-powered content calendar with automated scheduling, theme suggestions, and optimal posting times."
          />
          
          <FeatureCard 
            icon={<ChartBar className="h-6 w-6 text-shadow-cyan" />}
            title="Performance Analytics"
            description="Track engagement metrics, audience growth, and content performance across all platforms in one dashboard."
          />
          
          <FeatureCard 
            icon={<Globe className="h-6 w-6 text-shadow-highlight" />}
            title="Competitor Analysis"
            description="Monitor competitor strategies, benchmark your performance, and identify market opportunities."
          />
          
          <FeatureCard 
            icon={<MessageSquare className="h-6 w-6 text-shadow-accent" />}
            title="Content Generation"
            description="Generate platform-specific content ideas, captions, and hashtags tailored to your brand voice."
          />
          
          <FeatureCard 
            icon={<Star className="h-6 w-6 text-shadow-cyan" />}
            title="Trend Detection"
            description="Stay ahead with real-time trend alerts and recommendations for your industry and audience."
          />
          
          <FeatureCard 
            icon={<BrainCircuit className="h-6 w-6 text-shadow-highlight" />}
            title="AI Assistant"
            description="Get strategic advice, content optimization suggestions, and answers to all your social media questions."
          />
          
          <FeatureCard 
            icon={<Settings className="h-6 w-6 text-shadow-accent" />}
            title="Customizable Workflows"
            description="Create approval processes, content pipelines, and team collaboration tools that match your needs."
          />
          
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-shadow-cyan" />}
            title="Automation Suite"
            description="Schedule posts, automate repetitive tasks, and deploy smart response systems across platforms."
          />
          
          <FeatureCard 
            icon={<Users className="h-6 w-6 text-shadow-highlight" />}
            title="Audience Insights"
            description="Understand your followers with demographic data, interest mapping, and engagement patterns."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass-morphism p-6 hover:border-shadow-accent/30 transition-colors group">
      <div className="rounded-full bg-gradient-to-br from-shadow-accent/10 to-shadow-highlight/20 p-3 w-fit mb-4 group-hover:from-shadow-accent/20 group-hover:to-shadow-highlight/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeaturesSection;
