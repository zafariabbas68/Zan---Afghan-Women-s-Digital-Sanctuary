
# زَن
an - Afghan Women's Digital Sanctuary

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://zan-afghan-women-s-digital-sanctuary.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.13.5-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/flask-3.1.3-red)](https://flask.palletsprojects.com/)

## 🌸 Mission

**Zan** (meaning "woman" in Dari) is a protected digital sanctuary for Afghan women, providing free access to education, health resources, legal rights information, and completely anonymous support.

In response to the unprecedented restrictions on women's rights since August 2021, Zan was created as a safe space where women can access vital information without fear of surveillance or persecution.

## ✨ Features

### 🎓 Education
- Literacy programs in Dari and Pashto
- Basic numeracy and math skills
- Vocational training (embroidery, small business)
- Downloadable learning materials (offline access)

### 🏥 Health & Wellness
- Maternal and child health information
- Nutrition guides for low-resource settings
- Mental health support and coping strategies
- Mobile health clinic locator

### ⚖️ Legal Rights
- Know your rights under international law
- Emergency legal support contacts
- Information on safe shelters
- Legal aid directory

### 🤝 Anonymous Support
- 24/7 emergency helpline (410 - Awaaz)
- Anonymous question submission
- No tracking or data collection
- Quick exit button (ESC key)

### 🔒 Safety Features
- **Quick Exit** - Immediate redirect to Google (ESC key or button)
- **Safe Mode** - Disguises the site as household tips
- **No Data Collection** - 100% anonymous browsing
- **Offline Resources** - Downloadable PDFs and guides

## 🚀 Live Demo

**URL:** https://zan-afghan-women-s-digital-sanctuary.onrender.com

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with overview of services |
| Education | `/education` | Literacy programs and vocational training |
| Health | `/health` | Maternal health, nutrition, and wellness |
| Rights | `/rights` | Legal rights and emergency resources |
| Support | `/support` | Anonymous support and helplines |
| About | `/about` | Mission, team, and partners |
| Contact | `/contact` | Get in touch anonymously |

## 🛠️ Technology Stack

### Backend
- **Python 3.13.5** - Core programming language
- **Flask 3.1.3** - Web framework
- **Gunicorn 21.2.0** - WSGI HTTP server (production)

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with custom properties
- **JavaScript** - Interactive features (Quick Exit, Safe Mode)
- **Font Awesome 6** - Icons and visual elements
- **Google Fonts** - Playfair Display & Montserrat

### Deployment
- **Render** - Cloud hosting (free tier)
- **GitHub** - Version control and CI/CD

## 📦 Installation (Local Development)

### Prerequisites
- Python 3.13 or higher
- pip package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/zafariabbas68/Zan---Afghan-Women-s-Digital-Sanctuary.git
cd Zan---Afghan-Women-s-Digital-Sanctuary
```

2. **Create a virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run the application**
```bash
python app.py
```

5. **Open your browser**
```
http://localhost:5000
```

## 🚢 Deployment to Render

### Automatic Deployment (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Render](https://render.com)
3. Render automatically detects `render.yaml` and deploys

### Manual Deployment
1. On Render dashboard → **New +** → **Web Service**
2. Connect your GitHub repository
3. Configure:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
   - **Python Version:** 3.13.5

## 📁 Project Structure

```
zan_app/
├── app.py                 # Flask application entry point
├── requirements.txt       # Python dependencies
├── render.yaml           # Render deployment configuration
├── runtime.txt           # Python version specification
├── .python-version       # Python version for Render
├── .gitignore           # Git ignore rules
├── README.md            # Project documentation
├── static/              # Static assets
│   ├── css/            # Stylesheets
│   └── images/         # Images and icons
└── templates/           # HTML templates
    ├── index.html       # Homepage
    ├── education.html   # Education page
    ├── health.html      # Health page
    ├── resources.html   # Rights & resources page
    ├── support.html     # Support page
    ├── about.html       # About page
    ├── contact.html     # Contact page
    └── safety.html      # Safety guide
```

## 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `SECRET_KEY` | Flask session encryption | Auto-generated |
| `FLASK_ENV` | Environment mode | production |

## 🛡️ Safety & Privacy

- **No tracking cookies** - We don't use analytics or tracking
- **No data storage** - Questions are stored locally but no personal data
- **Quick Exit** - Instant redirect to Google.com (press ESC)
- **Safe Mode** - Disguises the site as cooking tips
- **Incognito recommended** - Use private browsing mode

## 🤝 Support & Contact

- **Emergency Helpline:** 410 (Awaaz Afghanistan, toll-free, 24/7)
- **Email:** support@zan.org
- **Signal/Telegram:** +93 78 123 4567

## 🙏 Acknowledgments

### Inspired By
- Digital Citizen Fund
- Awaaz Hotline (410)
- UN Women Afghanistan
- UNFPA Afghanistan
- UNICEF Afghanistan

### Data Sources
- UN Women reports
- World Health Organization (WHO)
- UNESCO education statistics
- UNHCR refugee data

## 👥 Team

| Name | Role |
|------|------|
| Ghulam Abbas Zafari | GeoInformatics Engineer |
| Najibeh Movahedi | Interior & Spatial Designer |
| Asadullah Zafari | Corporate Communications |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

The information provided on this platform is based on publicly available data from UN agencies, WHO, and other international organizations. While we strive for accuracy, users should verify critical information with local authorities when possible. This platform is for informational purposes and does not constitute professional legal or medical advice.

## 🌟 Dedication

**Dedicated to the strength, resilience, and future of every Afghan woman.**

---

*"Education cannot be stopped - it will always find a way."*

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---

**Made with ❤️ for Afghan women everywhere**
