# Social Media Tools API

This is the backend API for the Shadow Mind social media tools application. It provides endpoints for brand analysis and content calendar generation.

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Create a `.env` file with the following variables:
   ```
   SERPER_API_KEY=your_serper_api_key
   GROQ_API_KEY=your_groq_api_key
   MODEL_NAME=llama3-70b-8192
   PORT=5000
   ```

## Running the Server

### Development Mode
```
python api.py
```

### Production Mode
```
gunicorn api:app
```

## API Endpoints

### Brand Analysis
- **URL**: `/api/analyze-brand`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "brand_name": "Brand Name"
  }
  ```
- **Response**:
  ```json
  {
    "brand_analysis": "Detailed brand analysis...",
    "sentiment_analysis": "Sentiment analysis results..."
  }
  ```

### Content Calendar Generation
- **URL**: `/api/generate-calendar`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "industry": "Industry/Niche",
    "target_audience": "Target Audience",
    "content_goals": "Content Goals"
  }
  ```
- **Response**:
  ```json
  {
    "trend_analysis": "Trend analysis results...",
    "calendar": "Content calendar...",
    "briefs": "Content briefs..."
  }
  ```

### Health Check
- **URL**: `/api/health`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "status": "ok"
  }
  ```

## Integration with Frontend

The frontend application is configured to make requests to these API endpoints. Make sure the frontend is configured to use the correct API URL. 