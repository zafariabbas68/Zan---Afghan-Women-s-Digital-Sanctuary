// ZAN App - Main JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    addQuickExit();
    checkNetworkStatus();
});

// Initialize app
function initializeApp() {
    console.log('🌸 ZAN App initialized');
    loadEmergencyContacts();
}

// Quick Exit functionality
function addQuickExit() {
    // Create quick exit button
    const exitDiv = document.createElement('div');
    exitDiv.className = 'quick-exit';
    exitDiv.innerHTML = `
        <button onclick="quickExit()" class="quick-exit-btn">
            ⚡ Quick Exit
        </button>
    `;
    document.body.insertBefore(exitDiv, document.body.firstChild);

    // Add keyboard shortcut (ESC key)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            quickExit();
        }
    });
}

// Quick exit function
function quickExit() {
    // Clear any sensitive data
    sessionStorage.clear();
    localStorage.clear();

    // Redirect to Google
    window.location.href = 'https://www.google.com';
}

// Load emergency contacts
async function loadEmergencyContacts() {
    try {
        const response = await fetch('/api/emergency');
        const data = await response.json();
        window.emergencyData = data;
    } catch (error) {
        console.error('Error loading emergency contacts:', error);
    }
}

// Show emergency contacts
function showEmergencyContacts() {
    const contactsDiv = document.getElementById('emergency-contacts');
    const loadingDiv = document.getElementById('loading');

    if (contactsDiv.classList.contains('hidden')) {
        // Show loading
        loadingDiv.classList.add('show');

        // Simulate loading (remove in production)
        setTimeout(() => {
            if (window.emergencyData) {
                displayContacts(window.emergencyData);
            } else {
                displaySampleContacts();
            }
            loadingDiv.classList.remove('show');
            contactsDiv.classList.remove('hidden');
        }, 500);
    } else {
        contactsDiv.classList.add('hidden');
    }
}

// Display emergency contacts
function displayContacts(data) {
    const contactsDiv = document.getElementById('emergency-contacts');
    let html = '<h3>📞 Emergency Helplines</h3>';

    // Add helplines
    data.helplines.forEach(contact => {
        html += `
            <div class="contact-item">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-number">${contact.number}</div>
                <div class="contact-hours">${contact.hours}</div>
            </div>
        `;
    });

    // Add shelters
    html += '<h3 style="margin-top:15px;">🏠 Safe Shelters</h3>';
    data.shelters.forEach(shelter => {
        html += `
            <div class="contact-item">
                <div class="contact-name">${shelter.name}</div>
                <div class="contact-number">${shelter.phone}</div>
                <div class="contact-hours">${shelter.city}</div>
            </div>
        `;
    });

    // Add privacy note
    html += `
        <div class="privacy-note">
            🔒 For your safety: Clear call logs after contacting.
            <br>
            <span onclick="clearHistory()" class="clear-history">Clear history</span>
        </div>
    `;

    contactsDiv.innerHTML = html;
}

// Display sample contacts (fallback)
function displaySampleContacts() {
    const contactsDiv = document.getElementById('emergency-contacts');
    contactsDiv.innerHTML = `
        <div class="contact-item">
            <div class="contact-name">Women's Helpline</div>
            <div class="contact-number">+93 20 123 4567</div>
            <div class="contact-hours">24/7</div>
        </div>
        <div class="contact-item">
            <div class="contact-name">National Emergency</div>
            <div class="contact-number">112</div>
            <div class="contact-hours">24/7</div>
        </div>
        <div class="privacy-note">
            🔒 These are sample contacts. Please verify locally.
        </div>
    `;
}

// Submit anonymous question
async function submitQuestion() {
    const question = document.getElementById('question').value;
    const loadingDiv = document.getElementById('loading');
    const submitBtn = document.querySelector('.submit-btn');

    if (!question.trim()) {
        alert('Please write your question.');
        return;
    }

    // Disable button and show loading
    submitBtn.disabled = true;
    loadingDiv.classList.add('show');

    try {
        const response = await fetch('/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: question })
        });

        const data = await response.json();

        if (data.status === 'success') {
            alert('✅ ' + data.message);
            document.getElementById('question').value = '';
        } else {
            alert('❌ ' + data.message);
        }
    } catch (error) {
        alert('❌ Network error. Please try again.');
        console.error('Error:', error);
    } finally {
        // Re-enable button and hide loading
        submitBtn.disabled = false;
        loadingDiv.classList.remove('show');
    }
}

// Clear browser history
function clearHistory() {
    if (confirm('Clear all browsing history for this session?')) {
        sessionStorage.clear();
        alert('History cleared for this session.');
    }
}

// Check network status
function checkNetworkStatus() {
    if (!navigator.onLine) {
        showOfflineWarning();
    }

    window.addEventListener('online', () => {
        hideOfflineWarning();
    });

    window.addEventListener('offline', () => {
        showOfflineWarning();
    });
}

// Show offline warning
function showOfflineWarning() {
    const warning = document.createElement('div');
    warning.id = 'offline-warning';
    warning.style.cssText = `
        position: fixed;
        bottom: 60px;
        left: 10px;
        right: 10px;
        background: #ffc107;
        color: #000;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        z-index: 9998;
    `;
    warning.innerHTML = '⚠️ You are offline. Some features may not work.';
    document.body.appendChild(warning);
}

// Hide offline warning
function hideOfflineWarning() {
    const warning = document.getElementById('offline-warning');
    if (warning) {
        warning.remove();
    }
}

// Prevent screenshots (basic protection)
document.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
        alert('📸 Screenshots are blocked for privacy.');
    }
});

// Disable right-click on sensitive pages
document.addEventListener('contextmenu', (e) => {
    if (window.location.pathname.includes('resources') ||
        window.location.pathname.includes('support')) {
        e.preventDefault();
        return false;
    }
});