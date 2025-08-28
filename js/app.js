// ITIL Practice Platform - Main Application Logic

// ==================== //
// Global Variables
// ==================== //
let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let examMode = 'practice'; // 'practice', 'exam', 'review'
let examStartTime = null;
let examEndTime = null;
let currentQuestions = [];

// ==================== //
// Initialization
// ==================== //
document.addEventListener('DOMContentLoaded', function() {
    // Load saved progress
    loadUserProgress();
    
    // Update statistics on home page
    updateUserStatistics();
    
    // Initialize event listeners
    initializeEventListeners();
    
    console.log('ITIL Practice Platform initialized');
});

// ==================== //
// Event Listeners
// ==================== //
function initializeEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (document.getElementById('quizInterface').classList.contains('hidden')) {
            return;
        }
        
        switch(e.key) {
            case 'ArrowLeft':
                previousQuestion();
                break;
            case 'ArrowRight':
                nextQuestion();
                break;
            case 'f':
            case 'F':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    flagQuestion();
                }
                break;
            case 'Enter':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    submitExam();
                }
                break;
        }
    });
    
    // Prevent accidental navigation
    window.addEventListener('beforeunload', function(e) {
        if (currentExam && !document.getElementById('quizInterface').classList.contains('hidden')) {
            e.preventDefault();
            e.returnValue = 'You have an exam in progress. Are you sure you want to leave?';
        }
    });
}

// ==================== //
// Exam Start Functions
// ==================== //
function startExam(examType) {
    // Set exam mode
    examMode = 'exam';
    currentExam = examType;
    
    // Load questions
    if (examType === 'sample1') {
        currentQuestions = itilQuestions.exams.sample1.questions;
    } else if (examType === 'sample2') {
        currentQuestions = itilQuestions.exams.sample2.questions;
    }
    
    // Initialize exam state
    initializeExam();
    
    // Show quiz interface
    showQuizInterface();
    
    // Start timer
    startTimer(60); // 60 minutes
}

function startQuickPractice(numberOfQuestions) {
    // Set exam mode
    examMode = 'practice';
    currentExam = 'quick';
    
    // Get random questions
    currentQuestions = itilQuestions.getRandomQuestions(numberOfQuestions);
    
    // Initialize exam state
    initializeExam();
    
    // Show quiz interface
    showQuizInterface();
    
    // No timer for practice mode
    document.getElementById('timerDisplay').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
}

function startReviewMode() {
    // Set exam mode
    examMode = 'review';
    currentExam = 'review';
    
    // Load all questions
    currentQuestions = itilQuestions.getAllQuestions();
    
    // Initialize exam state
    initializeExam();
    
    // Show quiz interface with modifications for review mode
    showQuizInterface();
    
    // Hide timer and submit button for review mode
    document.getElementById('timerDisplay').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'none';
    document.querySelector('.btn-danger').style.display = 'none';
}

function initializeExam() {
    // Reset state
    currentQuestionIndex = 0;
    userAnswers = {};
    flaggedQuestions = new Set();
    examStartTime = new Date();
    examEndTime = null;
    
    // Update UI
    document.getElementById('examTitle').textContent = getExamTitle();
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    
    // Generate question navigation
    generateQuestionNav();
    
    // Load first question
    loadQuestion(0);
}

function getExamTitle() {
    switch(currentExam) {
        case 'sample1':
            return 'ITIL Foundation Sample Paper 1';
        case 'sample2':
            return 'ITIL Foundation Sample Paper 2';
        case 'quick':
            return 'Quick Practice Session';
        case 'review':
            return 'Review Mode - All Questions';
        default:
            return 'ITIL Practice Exam';
    }
}

// ==================== //
// Question Management
// ==================== //
function loadQuestion(index) {
    if (index < 0 || index >= currentQuestions.length) {
        return;
    }
    
    currentQuestionIndex = index;
    const question = currentQuestions[index];
    
    // Update question number
    document.getElementById('currentQuestionNumber').textContent = index + 1;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Generate answer options
    generateAnswerOptions(question);
    
    // Restore previous answer if exists
    if (userAnswers[question.id]) {
        selectAnswer(userAnswers[question.id]);
    }
    
    // Update flag button
    updateFlagButton(question.id);
    
    // Update navigation
    updateQuestionNav();
    updateNavigationButtons();
    
    // Show answer in review mode
    if (examMode === 'review') {
        showCorrectAnswer(question);
    }
}

function generateAnswerOptions(question) {
    const container = document.getElementById('answerOptions');
    container.innerHTML = '';
    
    for (let option in question.options) {
        const div = document.createElement('div');
        div.className = 'radio-option';
        div.onclick = () => selectAnswer(option);
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option;
        input.id = `option${option}`;
        
        const label = document.createElement('label');
        label.htmlFor = `option${option}`;
        label.innerHTML = `<strong>${option}.</strong> ${question.options[option]}`;
        label.style.cursor = 'pointer';
        label.style.marginLeft = '8px';
        
        div.appendChild(input);
        div.appendChild(label);
        container.appendChild(div);
    }
}

function selectAnswer(option) {
    // Don't allow selection in review mode after showing answer
    if (examMode === 'review' && document.querySelector('.correct-answer')) {
        return;
    }
    
    // Clear previous selection
    document.querySelectorAll('.radio-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Select new answer
    const selectedOption = document.querySelector(`input[value="${option}"]`);
    if (selectedOption) {
        selectedOption.checked = true;
        selectedOption.parentElement.classList.add('selected');
        
        // Save answer
        const question = currentQuestions[currentQuestionIndex];
        userAnswers[question.id] = option;
        
        // Update navigation
        updateQuestionNav();
        
        // Save progress
        saveProgress();
    }
}

function clearAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    delete userAnswers[question.id];
    
    document.querySelectorAll('.radio-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        input.checked = false;
    });
    
    updateQuestionNav();
    saveProgress();
}

function flagQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    if (flaggedQuestions.has(question.id)) {
        flaggedQuestions.delete(question.id);
    } else {
        flaggedQuestions.add(question.id);
    }
    
    updateFlagButton(question.id);
    updateQuestionNav();
    saveProgress();
}

function updateFlagButton(questionId) {
    const flagBtn = document.getElementById('flagBtn');
    if (flaggedQuestions.has(questionId)) {
        flagBtn.textContent = '🚩 Unflag';
        flagBtn.classList.add('btn-warning');
    } else {
        flagBtn.textContent = '🚩 Flag for Review';
        flagBtn.classList.remove('btn-warning');
    }
}

function showCorrectAnswer(question) {
    // Only show in review mode
    if (examMode !== 'review') return;
    
    // Highlight correct answer
    document.querySelectorAll('.radio-option').forEach(opt => {
        const input = opt.querySelector('input');
        if (input.value === question.correctAnswer) {
            opt.classList.add('correct-answer');
            opt.style.backgroundColor = 'rgba(39, 174, 96, 0.2)';
            opt.style.borderColor = 'var(--success-color)';
        }
    });
    
    // Show explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'alert alert-info mt-3';
    explanationDiv.innerHTML = `
        <strong>Correct Answer: ${question.correctAnswer}</strong><br>
        <strong>Explanation:</strong> ${question.explanation}<br>
        <small><strong>Reference:</strong> ${question.syllabusRef}</small>
    `;
    document.getElementById('answerOptions').appendChild(explanationDiv);
}

// ==================== //
// Navigation Functions
// ==================== //
function generateQuestionNav() {
    const container = document.getElementById('questionNav');
    container.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const button = document.createElement('button');
        button.className = 'question-nav-item';
        button.textContent = index + 1;
        button.onclick = () => loadQuestion(index);
        container.appendChild(button);
    });
}

function updateQuestionNav() {
    const navItems = document.querySelectorAll('.question-nav-item');
    
    navItems.forEach((item, index) => {
        const question = currentQuestions[index];
        
        // Reset classes
        item.className = 'question-nav-item';
        
        // Current question
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
        // Answered question
        else if (userAnswers[question.id]) {
            item.classList.add('answered');
        }
        
        // Flagged question
        if (flaggedQuestions.has(question.id)) {
            item.classList.add('flagged');
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = 'Finish →';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        loadQuestion(currentQuestionIndex + 1);
    } else if (examMode === 'exam' || examMode === 'practice') {
        // Last question - prompt to submit
        if (confirm('You have reached the last question. Do you want to submit your exam?')) {
            submitExam();
        }
    }
}

// ==================== //
// Exam Submission
// ==================== //
function submitExam() {
    // Don't submit in review mode
    if (examMode === 'review') {
        return backToHome();
    }
    
    // Check for unanswered questions
    const unansweredCount = currentQuestions.length - Object.keys(userAnswers).length;
    if (unansweredCount > 0) {
        if (!confirm(`You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`)) {
            return;
        }
    }
    
    // Stop timer
    if (window.examTimer) {
        stopTimer();
    }
    
    // Record end time
    examEndTime = new Date();
    
    // Calculate results
    calculateResults();
    
    // Show results page
    showResultsPage();
    
    // Save exam history
    saveExamHistory();
}

function calculateResults() {
    let correctCount = 0;
    let incorrectCount = 0;
    
    currentQuestions.forEach(question => {
        if (userAnswers[question.id] === question.correctAnswer) {
            correctCount++;
        } else if (userAnswers[question.id]) {
            incorrectCount++;
        }
    });
    
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const passed = percentage >= 65;
    
    // Update results display
    document.getElementById('scoreDisplay').textContent = `${correctCount}/${totalQuestions}`;
    document.getElementById('percentageDisplay').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    
    // Calculate time taken
    if (examStartTime && examEndTime) {
        const timeTaken = Math.floor((examEndTime - examStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        document.getElementById('timeTaken').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update pass/fail badge
    const badge = document.getElementById('passFailBadge');
    if (passed) {
        badge.textContent = 'PASSED';
        badge.className = 'badge badge-success badge-large';
    } else {
        badge.textContent = 'FAILED';
        badge.className = 'badge badge-danger badge-large';
    }
    
    return { correctCount, incorrectCount, percentage, passed };
}

// ==================== //
// Review Functions
// ==================== //
function reviewAnswers() {
    const reviewContainer = document.getElementById('detailedReview');
    reviewContainer.innerHTML = '<h2 class="text-center mb-3">Detailed Answer Review</h2>';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[question.id];
        const isCorrect = userAnswer === question.correctAnswer;
        
        const questionCard = document.createElement('div');
        questionCard.className = 'card mb-3';
        
        const statusClass = isCorrect ? 'success' : (userAnswer ? 'danger' : 'warning');
        const statusText = isCorrect ? 'Correct' : (userAnswer ? 'Incorrect' : 'Unanswered');
        
        questionCard.innerHTML = `
            <div class="card-header">
                <div class="flex flex-between">
                    <h4>Question ${index + 1}</h4>
                    <span class="badge badge-${statusClass}">${statusText}</span>
                </div>
            </div>
            <div class="card-body">
                <p><strong>${question.question}</strong></p>
                
                <div class="mt-2">
                    ${Object.entries(question.options).map(([key, value]) => {
                        let optionClass = '';
                        let optionIcon = '';
                        
                        if (key === question.correctAnswer) {
                            optionClass = 'text-success';
                            optionIcon = '✓';
                        }
                        if (key === userAnswer && key !== question.correctAnswer) {
                            optionClass = 'text-danger';
                            optionIcon = '✗';
                        }
                        
                        return `
                            <div class="${optionClass}">
                                ${optionIcon} <strong>${key}.</strong> ${value}
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="alert alert-info mt-3">
                    <strong>Correct Answer:</strong> ${question.correctAnswer}<br>
                    <strong>Your Answer:</strong> ${userAnswer || 'Not answered'}<br>
                    <strong>Explanation:</strong> ${question.explanation}<br>
                    <small><strong>Reference:</strong> ${question.syllabusRef}</small>
                </div>
            </div>
        `;
        
        reviewContainer.appendChild(questionCard);
    });
    
    reviewContainer.classList.remove('hidden');
    
    // Scroll to review section
    reviewContainer.scrollIntoView({ behavior: 'smooth' });
}

// ==================== //
// UI Navigation
// ==================== //
function showQuizInterface() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('quizInterface').classList.remove('hidden');
    document.getElementById('resultsPage').classList.add('hidden');
}

function showResultsPage() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('quizInterface').classList.add('hidden');
    document.getElementById('resultsPage').classList.remove('hidden');
}

function showLandingPage() {
    document.getElementById('landingPage').classList.remove('hidden');
    document.getElementById('quizInterface').classList.add('hidden');
    document.getElementById('resultsPage').classList.add('hidden');
}

function backToHome() {
    // Reset exam state
    currentExam = null;
    currentQuestions = [];
    userAnswers = {};
    flaggedQuestions.clear();
    
    // Show landing page
    showLandingPage();
    
    // Update statistics
    updateUserStatistics();
}

function retakeExam() {
    if (currentExam === 'sample1' || currentExam === 'sample2') {
        startExam(currentExam);
    } else if (currentExam === 'quick') {
        startQuickPractice(currentQuestions.length);
    }
}

// ==================== //
// Modal Functions
// ==================== //
function showInstructions() {
    document.getElementById('instructionsModal').classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Click outside modal to close
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}

// ==================== //
// Statistics Functions
// ==================== //
function updateUserStatistics() {
    const stats = getUserStatistics();
    
    if (stats.totalAnswered > 0) {
        document.getElementById('userStats').classList.remove('hidden');
        document.getElementById('questionsAnswered').textContent = stats.uniqueQuestionsAnswered;
        
        const percentage = Math.round((stats.uniqueQuestionsAnswered / 80) * 100);
        document.getElementById('progressBar').style.width = percentage + '%';
        document.getElementById('progressBar').textContent = percentage + '%';
    }
}

// ==================== //
// Utility Functions
// ==================== //
function clearProgress() {
    if (confirm('Are you sure you want to clear all your progress? This action cannot be undone.')) {
        clearAllData();
        updateUserStatistics();
        alert('All progress has been cleared.');
    }
}