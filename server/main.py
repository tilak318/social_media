import os
import time
from dotenv import load_dotenv
from langchain_groq import ChatGroq
import requests
import json
import argparse

load_dotenv()

SERPER_API_KEY = os.getenv("SERPER_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")

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
    # Check if API key and model name are properly set
    if not GROQ_API_KEY:
        print("Error: GROQ_API_KEY is not set. Please check your .env file.")
        return None
    
    if not MODEL_NAME:
        # Fallback to a default model if MODEL_NAME is not set
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
    parser = argparse.ArgumentParser(description="Social Media Brand Analysis Tool")
    parser.add_argument('--brand', type=str, help="Brand name to analyze")
    
    args = parser.parse_args()
    
    if not args.brand:
        brand_name = input("Enter brand name to analyze: ")
    else:
        brand_name = args.brand
    
    try:
        results = analyze_brand(brand_name)
        
        print("\n=== Brand Analysis ===")
        print(results["brand_analysis"])
        
        print("\n=== Sentiment Analysis ===")
        print(results["sentiment_analysis"])
        
        # Save results
        filename = f"{brand_name}_analysis_{time.strftime('%Y%m%d_%H%M%S')}.json"
        save_results({
            "brand_name": brand_name,
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "brand_analysis": str(results["brand_analysis"]),
            "sentiment_analysis": str(results["sentiment_analysis"])
        }, filename)
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        print("Please check your API keys and try again.")

if __name__ == "__main__":
    main()