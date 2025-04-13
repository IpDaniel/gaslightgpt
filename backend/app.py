from flask import Flask, request, jsonify, Response, stream_with_context
from flask_cors import CORS
import os
from dotenv import load_dotenv
import requests
import json
import traceback

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Get API key
api_key = os.getenv("OPENAI_API_KEY")

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        messages = data.get('messages', [])
        
        if not messages:
            return jsonify({"error": "No messages provided"}), 400
        
        print(f"Received messages: {messages}")
        print(f"API Key configured: {'Yes' if api_key else 'No'}")
        
        # Call OpenAI API directly with requests
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
        
        payload = {
            "model": "gpt-3.5-turbo",
            "messages": messages,
            "temperature": 0.7,
            "stream": True
        }
        
        # Make streaming request to OpenAI
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=payload,
            stream=True
        )
        
        def generate():
            for line in response.iter_lines():
                if line:
                    line = line.decode('utf-8')
                    if line.startswith('data: ') and not line.startswith('data: [DONE]'):
                        json_str = line[6:]  # Remove 'data: ' prefix
                        try:
                            chunk = json.loads(json_str)
                            content = chunk['choices'][0]['delta'].get('content')
                            if content:
                                yield content
                        except json.JSONDecodeError:
                            print(f"Failed to decode JSON: {json_str}")
        
        return Response(stream_with_context(generate()), mimetype='text/event-stream')
    
    except Exception as e:
        print(f"Error in /api/chat: {str(e)}")
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)