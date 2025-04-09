
import React from "react";
import { Calendar, Clock, Instagram, Linkedin, Twitter } from "lucide-react";

const CalendarPreview = () => {
  return (
    <section id="calendar" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-gradient-accent">
            Intelligent Content Calendar
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Plan, optimize, and automate your content strategy with our AI-powered calendar system.
          </p>
        </div>
        
        <div className="glass-morphism p-6 md:p-8 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-shadow-accent" />
                April 2025
              </h3>
              
              <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                <div className="text-gray-500 text-sm">Sun</div>
                <div className="text-gray-500 text-sm">Mon</div>
                <div className="text-gray-500 text-sm">Tue</div>
                <div className="text-gray-500 text-sm">Wed</div>
                <div className="text-gray-500 text-sm">Thu</div>
                <div className="text-gray-500 text-sm">Fri</div>
                <div className="text-gray-500 text-sm">Sat</div>
                
                {/* Calendar days */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <CalendarDay 
                    key={i} 
                    day={i + 1} 
                    hasEvents={[3, 5, 8, 12, 15, 18, 20, 22, 25, 28].includes(i + 1)}
                    isHighlighted={i + 1 === 15}
                  />
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-bold mb-2">Upcoming Content</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-shadow-accent mr-2"></div>
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Product launch - Apr 18</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-shadow-highlight mr-2"></div>
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Industry report - Apr 22</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-shadow-cyan mr-2"></div>
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Customer stories - Apr 25</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-2/3 border-t lg:border-l lg:border-t-0 border-white/10 lg:pl-8 pt-6 lg:pt-0">
              <h3 className="text-xl font-bold mb-6">April 15 Content Plan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ContentCard 
                  platform="Twitter"
                  icon={<Twitter className="h-5 w-5" />}
                  time="9:30 AM"
                  content="Exciting news! We're revealing our latest AI features next week. Stay tuned for a game-changing announcement! #AIInnovation #TechNews"
                  media="Product Teaser"
                  stats={{ likes: 48, comments: 12, shares: 26 }}
                />
                
                <ContentCard 
                  platform="Instagram"
                  icon={<Instagram className="h-5 w-5" />}
                  time="12:00 PM"
                  content="Behind the scenes look at how our team is preparing for the big launch. Swipe to see the magic happen!"
                  media="Image Gallery"
                  stats={{ likes: 216, comments: 54, shares: 13 }}
                />
                
                <ContentCard 
                  platform="LinkedIn"
                  icon={<Linkedin className="h-5 w-5" />}
                  time="3:30 PM"
                  content="Our CEO shares insights on how our upcoming product will transform the industry landscape. Read the full article on our blog."
                  media="Blog Article"
                  stats={{ likes: 87, comments: 23, shares: 41 }}
                />
                
                <ContentCard 
                  platform="Twitter"
                  icon={<Twitter className="h-5 w-5" />}
                  time="5:00 PM"
                  content="Q&A alert! Our product team will be answering your questions live tomorrow at 2 PM EST. Drop your questions below! #AskShadowMind"
                  media="None"
                  stats={{ likes: 32, comments: 28, shares: 15 }}
                />
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-lg font-bold mb-3">AI Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-shadow-accent mt-1 mr-2"></div>
                    <span className="text-sm text-gray-300">Schedule an Instagram Story poll to increase engagement with your audience.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-shadow-cyan mt-1 mr-2"></div>
                    <span className="text-sm text-gray-300">Your LinkedIn audience is most active between 2-4 PM. Consider scheduling additional content.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 h-4 rounded-full bg-shadow-highlight mt-1 mr-2"></div>
                    <span className="text-sm text-gray-300">Based on trending topics, include #AIFuture hashtag in your Twitter posts this week.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface CalendarDayProps {
  day: number;
  hasEvents: boolean;
  isHighlighted: boolean;
}

const CalendarDay = ({ day, hasEvents, isHighlighted }: CalendarDayProps) => {
  return (
    <div 
      className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm ${
        isHighlighted 
          ? 'bg-shadow-accent text-white' 
          : hasEvents 
          ? 'bg-shadow-light/20 text-white' 
          : 'bg-shadow-light/5 text-gray-400'
      }`}
    >
      {day}
      {hasEvents && !isHighlighted && (
        <div className="w-1 h-1 bg-shadow-accent rounded-full mt-1"></div>
      )}
    </div>
  );
};

interface ContentCardProps {
  platform: string;
  icon: React.ReactNode;
  time: string;
  content: string;
  media: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const ContentCard = ({ platform, icon, time, content, media, stats }: ContentCardProps) => {
  return (
    <div className="neo-blur p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="rounded-full p-1.5 bg-shadow-light/30 mr-2">
            {icon}
          </div>
          <span className="font-medium">{platform}</span>
        </div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
      <p className="text-sm mb-3">{content}</p>
      {media !== "None" && (
        <div className="bg-shadow-light/20 rounded px-2 py-1 text-xs inline-block mb-3">
          {media}
        </div>
      )}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{stats.likes} likes</span>
        <span>{stats.comments} comments</span>
        <span>{stats.shares} shares</span>
      </div>
    </div>
  );
};

export default CalendarPreview;
