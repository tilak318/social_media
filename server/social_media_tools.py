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
    """Initialize Groq LLM"""
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

def analyze_brand(brand_name):
    """Analyze a brand's social media presence"""
    llm = get_llm()
    
    if not llm:
        return {
            "brand_analysis": "Error: Could not initialize the language model. Please check your API keys.",
            "sentiment_analysis": "Error: Could not initialize the language model. Please check your API keys."
        }
    
    print(f"\nResearching {brand_name}'s online presence...")
    # Step 1: Research the brand
    search_results = search_web(f"{brand_name} company social media presence")
    
    research_prompt = f"""Based on the following search results about {brand_name}, provide a detailed analysis:
    {json.dumps(search_results, indent=2)}
    
    Please analyze:
    1. Brand overview
    2. Social media presence
    3. Key platforms they use
    4. Content strategy
    5. Notable campaigns or posts
    
    Format the response in a clear, structured way."""
    
    brand_analysis = llm.invoke(research_prompt)
    
    print(f"Analyzing sentiment for {brand_name}...")
    # Step 2: Analyze sentiment
    search_results = search_web(f"{brand_name} reviews feedback social media mentions")
    
    sentiment_prompt = f"""Based on these search results about {brand_name}, analyze the sentiment:
    {json.dumps(search_results, indent=2)}
    
    Please provide:
    1. Overall sentiment (positive/negative/neutral)
    2. Key positive themes
    3. Key negative themes
    4. Customer satisfaction indicators
    5. Areas for improvement
    
    Format the response in a clear, structured way."""
    
    sentiment_analysis = llm.invoke(sentiment_prompt)
    
    return {
        "brand_analysis": brand_analysis,
        "sentiment_analysis": sentiment_analysis
    }

def analyze_trends(industry, target_audience):
    """Research trends for the target industry and audience"""
    llm = get_llm()
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

def brand_analysis_tool():
    """Run the brand analysis tool"""
    print("\n=== Social Media Brand Analysis Tool ===")
    brand_name = input("Enter brand name to analyze: ")
    
    try:
        results = analyze_brand(brand_name)
        
        print("\n=== Brand Analysis ===")
        print(results["brand_analysis"])
        
        print("\n=== Sentiment Analysis ===")
        print(results["sentiment_analysis"])
        
        # Save results
        filename = f"{brand_name}_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        save_results({
            "brand_name": brand_name,
            "timestamp": datetime.now().isoformat(),
            "brand_analysis": str(results["brand_analysis"]),
            "sentiment_analysis": str(results["sentiment_analysis"])
        }, filename)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        print("Please check your API keys and try again.")

def content_calendar_tool():
    """Run the content calendar tool"""
    print("\n=== AI Content Calendar Creator ===")
    
    industry = input("Enter Industry/Niche: ")
    target_audience = input("Enter Target Audience: ")
    content_goals = input("Enter Content Goals: ")
    
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

def main():
    parser = argparse.ArgumentParser(description="Social Media Tools")
    parser.add_argument('tool', choices=['brand', 'calendar'], 
                      help='Choose which tool to run: brand (for brand analysis) or calendar (for content calendar)')
    
    args = parser.parse_args()
    
    if args.tool == 'brand':
        brand_analysis_tool()
    else:
        content_calendar_tool()

if __name__ == "__main__":
    main() 