from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
import os
import json
from datetime import datetime
import secrets

# Initialize Flask app
app = Flask(__name__,
            static_folder='static',
            template_folder='templates')
CORS(app)

# Set secret key for sessions
app.secret_key = os.environ.get('SECRET_KEY', secrets.token_hex(16))

# Educational content data
educational_content = {
    "literacy": [
        {
            "id": 1,
            "title": "Dari Alphabet - حروف الفبا دری",
            "content": "Learn the Dari alphabet with pronunciation guides and examples.",
            "lessons": [
                {"letter": "ا", "name": "Alif", "example": "آب (water)"},
                {"letter": "ب", "name": "Be", "example": "باران (rain)"},
                {"letter": "پ", "name": "Pe", "example": "پدر (father)"},
                {"letter": "ت", "name": "Te", "example": "تاجیک (Tajik)"}
            ]
        },
        {
            "id": 2,
            "title": "Numbers - اعداد",
            "content": "Learn numbers 1-100 in Dari and Pashto.",
            "lessons": [
                {"number": 1, "dari": "یک (yak)", "pashto": "یو (yaw)"},
                {"number": 2, "dari": "دو (du)", "pashto": "دوه (dwa)"},
                {"number": 3, "dari": "سه (se)", "pashto": "درې (dre)"},
                {"number": 4, "dari": "چهار (chahar)", "pashto": "څلور (tsalor)"}
            ]
        }
    ],
    "skills": [
        {
            "id": 3,
            "title": "Embroidery - سوزندوزی",
            "content": "Traditional Afghan embroidery techniques",
            "video_url": "/static/videos/embroidery.mp4"
        },
        {
            "id": 4,
            "title": "Small Business - کسب و کار کوچک",
            "content": "Start and manage a small home-based business"
        }
    ]
}

# Health content data
health_content = {
    "maternal": [
        {
            "title": "Prenatal Care - مراقبت‌های دوران بارداری",
            "content": "Essential care during pregnancy",
            "tips": [
                "Visit a healthcare provider monthly",
                "Take iron and folic acid supplements",
                "Eat nutritious foods",
                "Get adequate rest"
            ]
        }
    ],
    "nutrition": [
        {
            "title": "Healthy Eating - تغذیه سالم",
            "content": "Affordable and nutritious meal ideas",
            "recipes": [
                {"name": "Afghan Kichiri", "ingredients": ["Rice", "Lentils", "Onions", "Spices"]},
                {"name": "Vegetable Soup", "ingredients": ["Vegetables", "Beans", "Herbs"]}
            ]
        }
    ]
}

# Emergency resources
emergency_resources = {
    "helplines": [
        {"name": "Women's Protection Center - Kabul", "number": "+93 20 123 4567", "hours": "24/7"},
        {"name": "National Emergency", "number": "112", "hours": "24/7"},
        {"name": "Women's Health Hotline", "number": "+93 78 987 6543", "hours": "24/7"},
        {"name": "Legal Aid", "number": "+93 79 456 7890", "hours": "9AM-5PM"}
    ],
    "shelters": [
        {"name": "Safe Haven - Kabul", "city": "Kabul", "phone": "+93 20 222 3333"},
        {"name": "Women's Support Center - Herat", "city": "Herat", "phone": "+93 40 444 5555"}
    ]
}


# Routes
@app.route('/')
def index():
    """Home page"""
    return render_template('index.html')


@app.route('/education')
def education():
    """Education page"""
    return render_template('education.html', content=educational_content)


@app.route('/health')
def health():
    """Health page"""
    return render_template('health.html', content=health_content)


@app.route('/resources')
def resources():
    """Resources page"""
    return render_template('resources.html', resources=emergency_resources)


@app.route('/rights')
def rights():
    """Rights page - using resources.html which contains legal rights content"""
    return render_template('resources.html', resources=emergency_resources)


@app.route('/support')
def support():
    """Support page"""
    return render_template('support.html')


@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('contact.html')


@app.route('/about')
def about():
    """About Us page"""
    return render_template('about.html')


@app.route('/safety')
def safety():
    """Safety page"""
    return render_template('safety.html')


# API endpoints
@app.route('/api/ask', methods=['POST'])
def ask_question():
    """Handle anonymous questions"""
    try:
        data = request.get_json()
        question = data.get('question', '')

        # Save question to file
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open('questions_log.txt', 'a', encoding='utf-8') as f:
            f.write(f"[{timestamp}]\nQuestion: {question}\n---\n")

        return jsonify({
            "status": "success",
            "message": "Your question has been received. We'll answer soon."
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": "Sorry, please try again."
        }), 500


@app.route('/api/emergency', methods=['GET'])
def get_emergency():
    """Get emergency contacts"""
    return jsonify(emergency_resources)


# Error handlers
@app.errorhandler(404)
def not_found(e):
    return render_template('index.html'), 404


if __name__ == '__main__':
    # Get port from environment variable (Render sets this)
    port = int(os.environ.get('PORT', 5000))

    # Create log file if it doesn't exist
    if not os.path.exists('questions_log.txt'):
        with open('questions_log.txt', 'w', encoding='utf-8') as f:
            f.write("ZAN App - Anonymous Questions Log\n")
            f.write("=" * 50 + "\n")

    print("\n" + "=" * 50)
    print("✅ ZAN App is starting...")
    print(f"📍 Running on port {port}")
    print("=" * 50 + "\n")

    # Use production settings (debug=False)
    app.run(debug=False, host='0.0.0.0', port=port)