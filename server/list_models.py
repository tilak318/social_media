import os
from dotenv import load_dotenv
import requests

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def list_groq_models():
    url = "https://api.groq.com/openai/v1/models"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}"
    }
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            models = response.json()
            print("\nAvailable Groq Models:")
            print("-" * 40)
            for model in models.get("data", []):
                print(f"ID: {model.get('id')}")
                print(f"Name: {model.get('name', 'N/A')}")
                print("-" * 40)
        else:
            print(f"Error: {response.status_code}")
            print(response.json())
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    print("Groq API Key:", GROQ_API_KEY)
    list_groq_models() 