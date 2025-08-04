from flask import Flask, request, jsonify, render_template
from flask_cors import CORS 
import json
import os

app = Flask(
    __name__,
    static_folder='../frontend/static',
    template_folder='../frontend/templates'
)
CORS(app)

def load_interns():
    path = os.path.join(os.path.dirname(__file__), "interns.json")
    with open(path, "r", encoding="utf-8") as f:  # <-- fix here
        return json.load(f)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/api/intern')
def get_intern_data():
    interns = load_interns()
    name = request.args.get('name', '').strip().lower()
    print(f"[API] Checking intern: '{name}'")  # Debug log
    if name in interns:
        return jsonify(interns[name])
    else:
        print(f"[API] Intern '{name}' not found")  # Debug log
        return jsonify({"error": "Invalid name"}), 401

if __name__ == '__main__':
    app.run(debug=True)
