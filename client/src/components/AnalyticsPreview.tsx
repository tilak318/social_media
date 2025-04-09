
import React from "react";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { 
  LineChart as ReLineChart, 
  Line, 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart as RePieChart, 
  Pie, 
  Cell 
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const AnalyticsPreview = () => {
  // Sample data for charts
  const engagementData = [
    { name: 'Jan', twitter: 2400, instagram: 4000, linkedin: 1600 },
    { name: 'Feb', twitter: 1398, instagram: 3000, linkedin: 2210 },
    { name: 'Mar', twitter: 9800, instagram: 8000, linkedin: 7290 },
    { name: 'Apr', twitter: 3908, instagram: 7000, linkedin: 5390 },
    { name: 'May', twitter: 4800, instagram: 6000, linkedin: 4890 },
    { name: 'Jun', twitter: 3800, instagram: 8000, linkedin: 5990 },
  ];
  
  const audienceData = [
    { name: 'Twitter', value: 35 },
    { name: 'Instagram', value: 45 },
    { name: 'LinkedIn', value: 20 },
  ];
  
  const COLORS = ['#4CC9F0', '#9D4EDD', '#00B4D8'];
  
  return (
    <section id="analytics" className="py-20 px-6 relative">
      {/* Background effects */}
      <div className="absolute top-40 left-20 w-80 h-80 bg-shadow-accent/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-shadow-highlight/5 rounded-full filter blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient-accent">
            Advanced Social Media Analytics
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Gain deep insights into your social media performance with our comprehensive analytics suite.
          </p>
        </div>
        
        <div className="glass-morphism p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <LineChart className="mr-2 h-5 w-5 text-shadow-accent" />
              Engagement Overview
            </h3>
            <div className="flex items-center space-x-4">
              <div className="text-xs px-4 py-1.5 rounded-full neo-blur inline-flex items-center">
                Last 6 Months <span className="ml-1">▾</span>
              </div>
              <div className="text-xs px-3 py-1.5 rounded-full bg-shadow-accent text-white inline-block">
                Export
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ReLineChart
                data={engagementData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(26, 31, 44, 0.8)', 
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="twitter" stroke="#4CC9F0" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="instagram" stroke="#9D4EDD" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="linkedin" stroke="#00B4D8" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 6 }} />
              </ReLineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-morphism p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <PieChart className="mr-2 h-5 w-5 text-shadow-highlight" />
              Audience Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {audienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(26, 31, 44, 0.8)', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'white',
                    }} 
                  />
                </RePieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              {audienceData.map((platform, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                  <span>{platform.name}: {platform.value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-morphism p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-shadow-cyan" />
              Competitor Analysis
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart
                  data={[
                    { name: 'Posts', you: 45, competitor1: 35, competitor2: 52 },
                    { name: 'Engagement', you: 68, competitor1: 45, competitor2: 39 },
                    { name: 'Followers', you: 78, competitor1: 85, competitor2: 62 },
                    { name: 'Growth', you: 12, competitor1: 8, competitor2: 15 },
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(26, 31, 44, 0.8)', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'white',
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="you" fill="#4CC9F0" />
                  <Bar dataKey="competitor1" fill="#9D4EDD" />
                  <Bar dataKey="competitor2" fill="#00B4D8" />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mt-8 glass-morphism p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6">Key Analytics Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neo-blur p-4">
              <div className="text-shadow-accent mb-1 text-lg font-bold">+27%</div>
              <div className="text-sm text-gray-300 mb-2">Engagement Increase</div>
              <p className="text-xs text-gray-400">Your Twitter engagement grew by 27% compared to last month, outperforming industry average by 14%.</p>
            </div>
            
            <div className="neo-blur p-4">
              <div className="text-shadow-highlight mb-1 text-lg font-bold">43.2%</div>
              <div className="text-sm text-gray-300 mb-2">Video Completion Rate</div>
              <p className="text-xs text-gray-400">Your Instagram video content has a higher completion rate than 85% of similar accounts in your industry.</p>
            </div>
            
            <div className="neo-blur p-4">
              <div className="text-shadow-cyan mb-1 text-lg font-bold">12:30 PM</div>
              <div className="text-sm text-gray-300 mb-2">Optimal Posting Time</div>
              <p className="text-xs text-gray-400">Data shows your LinkedIn audience is most active and engaged between 12-2 PM on weekdays.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPreview;
