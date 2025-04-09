import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from social_media_tools import (
    analyze_brand,
    analyze_trends,
    create_content_calendar,
    create_content_briefs
)

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/analyze-brand', methods=['POST'])
def api_analyze_brand():
    """API endpoint for brand analysis"""
    try:
        data = request.json
        brand_name = data.get('brand_name')
        
        if not brand_name:
            return jsonify({"error": "Brand name is required"}), 400
        
        # Call the brand analysis function
        results = analyze_brand(brand_name)
        
        # Convert AIMessage objects to strings
        serializable_results = {
            "brand_analysis": str(results["brand_analysis"]),
            "sentiment_analysis": str(results["sentiment_analysis"])
        }
        
        return jsonify(serializable_results)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/generate-calendar', methods=['POST'])
def api_generate_calendar():
    """API endpoint for content calendar generation"""
    try:
        data = request.json
        industry = data.get('industry')
        target_audience = data.get('target_audience')
        content_goals = data.get('content_goals')
        
        if not all([industry, target_audience, content_goals]):
            return jsonify({"error": "Industry, target audience, and content goals are required"}), 400
        
        # Step 1: Analyze trends
        trend_analysis = analyze_trends(industry, target_audience)
        
        # Step 2: Create content calendar
        calendar = create_content_calendar(industry, target_audience, content_goals, trend_analysis)
        
        # Step 3: Create content briefs
        briefs = create_content_briefs(calendar)
        
        # Convert AIMessage objects to strings
        serializable_results = {
            "trend_analysis": str(trend_analysis),
            "calendar": str(calendar),
            "briefs": str(briefs)
        }
        
        return jsonify(serializable_results)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True) 