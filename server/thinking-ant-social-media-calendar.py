import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
import requests
import json
from datetime import datetime
import argparse

# Load environment variables
load_dotenv()
SERPER_API_KEY = os.getenv("SERPER_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME", "groq/llama3-70b-8192")

def search_web(query, api_key=SERPER_API_KEY):
    """Search the web using Serper API"""
    url = "https://google.serper.dev/search"
    headers = {
        'X-API-KEY': api_key,
        'Content-Type': 'application/json'
    }
    payload = {
        'q': query,
        'num': 5
    }
    response = requests.post(url, headers=headers, json=payload)
    return response.json()

def get_llm():
    """Get the Groq language model"""
    if not GROQ_API_KEY:
        print("Error: GROQ_API_KEY is not set. Please check your .env file.")
        return None
    
    if not MODEL_NAME:
        model = "llama3-70b-8192"
        print(f"Warning: MODEL_NAME not set. Using default model: {model}")
    else:
        model = MODEL_NAME
        
    return ChatGroq(
        model=model,
        groq_api_key=GROQ_API_KEY,
        temperature=0.7
    )

def analyze_trends(industry, target_audience):
    """Research trends for the target industry and audience"""
    llm = get_llm()
    if not llm:
        return "Error: Could not initialize the language model. Please check your API keys."
        
    search_results = search_web(f"{industry} {target_audience} content trends social media")
    
    trend_prompt = f"""Based on these search results, analyze content trends for {industry} targeting {target_audience}:
    {json.dumps(search_results, indent=2)}
    
    Please provide:
    1. Top 5 trending content formats
    2. Popular topics and themes
    3. Successful content examples
    4. Best posting times and frequency
    5. Platform-specific trends
    
    Format as a clear, structured analysis."""
    
    return llm.invoke(trend_prompt)

def create_content_calendar(industry, target_audience, content_goals, trend_analysis):
    """Create a 7-day content calendar"""
    llm = get_llm()
    if not llm:
        return "Error: Could not initialize the language model. Please check your API keys."
    
    calendar_prompt = f"""Create a 7-day social media content calendar for {industry} targeting {target_audience}.
    
    Content Goals: {content_goals}
    
    Trend Analysis: {trend_analysis}
    
    For each day, provide:
    1. Day and platform
    2. Content type
    3. Topic/Theme
    4. Key message
    5. Call-to-action
    
    Make it engaging and aligned with the goals. Format as a clear, day-by-day plan."""
    
    return llm.invoke(calendar_prompt)

def create_content_briefs(calendar):
    """Create detailed content briefs for each day"""
    llm = get_llm()
    if not llm:
        return "Error: Could not initialize the language model. Please check your API keys."
    
    brief_prompt = f"""Based on this content calendar, create detailed briefs for each day:
    {calendar}
    
    For each day's content, provide:
    1. Headline/Title
    2. Key points to cover
    3. Tone and style
    4. Hashtags
    5. Visual recommendations
    
    Format as a clear, day-by-day content brief."""
    
    return llm.invoke(brief_prompt)

def save_results(results, filename):
    """Save results to a JSON file"""
    # Convert any AIMessage objects to strings
    serializable_results = {}
    for key, value in results.items():
        if hasattr(value, 'content'):
            serializable_results[key] = str(value.content)
        else:
            serializable_results[key] = value
            
    with open(filename, 'w') as f:
        json.dump(serializable_results, indent=2, fp=f)
    print(f"\nResults saved to {filename}")

def main():
    parser = argparse.ArgumentParser(description="AI Content Calendar Creator")
    parser.add_argument('--industry', type=str, help="Industry/Niche")
    parser.add_argument('--audience', type=str, help="Target Audience")
    parser.add_argument('--goals', type=str, help="Content Goals")
    
    args = parser.parse_args()
    
    print("\n=== AI Content Calendar Creator ===")
    
    if not args.industry:
        industry = input("Enter Industry/Niche: ")
    else:
        industry = args.industry
        
    if not args.audience:
        target_audience = input("Enter Target Audience: ")
    else:
        target_audience = args.audience
        
    if not args.goals:
        content_goals = input("Enter Content Goals: ")
    else:
        content_goals = args.goals
    
    try:
        print("\nAnalyzing trends...")
        trend_analysis = analyze_trends(industry, target_audience)
        print("\n=== Trend Analysis ===")
        print(trend_analysis)
        
        print("\nCreating content calendar...")
        calendar = create_content_calendar(industry, target_audience, content_goals, trend_analysis)
        print("\n=== Content Calendar ===")
        print(calendar)
        
        print("\nGenerating content briefs...")
        briefs = create_content_briefs(calendar)
        print("\n=== Content Briefs ===")
        print(briefs)
        
        # Save results
        filename = f"content_calendar_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        save_results({
            "industry": industry,
            "target_audience": target_audience,
            "content_goals": content_goals,
            "trend_analysis": trend_analysis,
            "calendar": calendar,
            "briefs": briefs,
            "timestamp": datetime.now().isoformat()
        }, filename)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        print("Please check your API keys and try again.")

if __name__ == "__main__":
    main()