from flask import Flask, request, jsonify
from pymongo import MongoClient
import google.generativeai as genai
from rapidfuzz import fuzz
from flask_cors import CORS

MONGO_URI = "mongodb://localhost:27017"
genai.configure(api_key="AIzaSyAl5n3e9L29D0tazuWpts0-Le-CsYJBan0")
model = genai.GenerativeModel('gemini-1.5-flash')

client = MongoClient(MONGO_URI)
db = client["walmart_assistant"]
collection = db["products"]


app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)  # Allow requests from React

def extract_keywords(prompt):
    msg = f"Extract shopping-related keywords from this: '{prompt}'. Return comma-separated keywords only."
    response = model.generate_content(msg)
    return [kw.strip() for kw in response.text.strip().split(",")]

def search_products_fuzzy(keywords, threshold=80):
    all_products = list(collection.find())
    matched = []
    seen_ids = set()
    for product in all_products:
        tags = product.get("tags", [])
        for kw in keywords:
            for tag in tags:
                score = fuzz.partial_ratio(kw.lower(), tag.lower())
                if score >= threshold and product["_id"] not in seen_ids:
                    matched.append(product)
                    seen_ids.add(product["_id"])
                    break
            else:
                continue
            break
    return matched
@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.json
    user_input = data.get("message", "")
    try:
        keywords = extract_keywords(user_input)
        results = search_products_fuzzy(keywords)
        if results:
            response = "Great! For your first day at school, here are some essential products to make your day smoother:\n\n"
            response += "\n".join(
                [f"- {item['name']} (Rs. {item.get('price', 'N/A')})" for item in results]
            )
        else:
            response = "Sorry, I couldn't find any items that match your needs."
    except Exception as e:
        response = f"Error: {e}"
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
