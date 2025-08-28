# ITIL Foundation Practice Platform 📚

An interactive web-based practice platform for ITIL Foundation certification preparation. Features 80 official sample questions with detailed explanations, timer functionality, and comprehensive progress tracking.

## 🌟 Features

### Practice Modes
- **Full Exam Mode** - Complete 40-question timed exams (60 minutes)
- **Quick Practice** - Random 10 or 20 question sessions
- **Review Mode** - Study all questions with answers revealed

### Core Functionality
- ⏱️ **Countdown Timer** with pause/resume capability
- 🚩 **Flag Questions** for review
- 📊 **Progress Tracking** across sessions
- 📈 **Performance Analytics** with detailed statistics
- 💾 **Auto-save Progress** using browser storage
- 📱 **Fully Responsive** design for all devices

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or backend required!

### Quick Start
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start practicing!

```bash
# Clone the repository
git clone https://github.com/yourusername/itil-practice-platform.git

# Navigate to the directory
cd itil-practice-platform

# Open in browser (macOS)
open index.html

# Open in browser (Windows)
start index.html

# Open in browser (Linux)
xdg-open index.html
```

## 📂 Project Structure

```
itil-practice-platform/
│
├── index.html           # Main application file
├── css/
│   └── styles.css      # Styling and responsive design
├── js/
│   ├── questions.js    # Question database (80 questions)
│   ├── app.js          # Main application logic
│   ├── timer.js        # Timer functionality
│   └── storage.js      # Local storage management
├── todo.md             # Development roadmap
└── README.md           # This file
```

## 💻 Usage

### Taking an Exam
1. Select your practice mode from the home screen
2. Answer questions by clicking on the options
3. Navigate using Previous/Next buttons or question grid
4. Flag questions for review if needed
5. Submit when ready or let timer auto-submit

### Keyboard Shortcuts
- `←` / `→` - Navigate between questions
- `Ctrl+F` - Flag/unflag current question
- `Ctrl+Enter` - Submit exam

### Review Mode
- See correct answers immediately
- Read detailed explanations
- Study ITIL syllabus references
- No time pressure

## 📊 Scoring

- **Pass Mark**: 26/40 (65%)
- **Question Value**: 1 mark each
- **Total Questions**: 40 per exam
- **Time Limit**: 60 minutes

## 🔧 Configuration

The platform stores data locally in your browser:
- Progress and statistics
- Exam history (last 10 attempts)
- User preferences
- Current session state

### Clear Data
Click "Clear Progress" on the home screen to reset all data.

### Export/Import Data
- Use browser developer tools to export localStorage
- Data is stored with `itil_` prefix keys

## 🌐 Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers supported

## 📝 Development

### Technologies Used
- Vanilla JavaScript (ES6+)
- CSS3 with CSS Variables
- HTML5 Semantic Elements
- LocalStorage/SessionStorage API

### Adding Questions
Edit `js/questions.js` to add or modify questions:

```javascript
{
  id: 81,
  question: "Your question text here",
  options: {
    A: "Option A text",
    B: "Option B text",
    C: "Option C text",
    D: "Option D text"
  },
  correctAnswer: "A",
  explanation: "Detailed explanation",
  syllabusRef: "Reference number"
}
```

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select source branch
4. Access at: `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop project folder to Netlify
2. Automatic deployment complete!

### Local Server (Optional)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

## 📄 License

This project is for educational purposes only. ITIL® is a registered trademark of AXELOS Limited.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Timer may not persist correctly if browser is force-closed
- Some mobile browsers may not support audio warnings
- Storage limits vary by browser (typically 5-10MB)

## 📮 Support

For issues or questions, please open an issue on GitHub.

## 🙏 Acknowledgments

- ITIL® Foundation Sample Papers
- AXELOS Limited for ITIL framework
- All contributors and users

---

**Note**: This is an unofficial practice platform created for educational purposes. Always refer to official AXELOS materials for certification preparation.