// ITIL Practice Platform - Local Storage Management

// ==================== //
// Storage Keys
// ==================== //
const STORAGE_KEYS = {
    USER_PROGRESS: 'itil_user_progress',
    EXAM_HISTORY: 'itil_exam_history',
    USER_PREFERENCES: 'itil_user_preferences',
    BOOKMARKED_QUESTIONS: 'itil_bookmarked_questions',
    QUESTION_NOTES: 'itil_question_notes',
    CURRENT_SESSION: 'itil_current_session'
};

// ==================== //
// Progress Management
// ==================== //
function saveProgress() {
    if (!currentExam) return;
    
    const progressData = {
        exam: currentExam,
        currentQuestion: currentQuestionIndex,
        answers: userAnswers,
        flagged: Array.from(flaggedQuestions),
        timestamp: Date.now(),
        mode: examMode
    };
    
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(progressData));
}

function loadProgress() {
    const saved = sessionStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);
    if (saved) {
        try {
            const data = JSON.parse(saved);
            
            // Check if session is recent (within last hour)
            if (Date.now() - data.timestamp < 3600000) {
                return data;
            }
        } catch (e) {
            console.error('Failed to load progress:', e);
        }
    }
    return null;
}

function clearCurrentSession() {
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
}

// ==================== //
// User Statistics
// ==================== //
function loadUserProgress() {
    const saved = localStorage.getItem(STORAGE_KEYS.USER_PROGRESS);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load user progress:', e);
        }
    }
    return {
        questionsAttempted: {},
        questionsCorrect: {},
        totalExams: 0,
        totalPassed: 0,
        lastActivity: null
    };
}

function saveUserProgress(progress) {
    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(progress));
}

function updateUserProgress(results) {
    const progress = loadUserProgress();
    
    // Update attempted questions
    currentQuestions.forEach(question => {
        if (userAnswers[question.id]) {
            if (!progress.questionsAttempted[question.id]) {
                progress.questionsAttempted[question.id] = 0;
            }
            progress.questionsAttempted[question.id]++;
            
            // Track correct answers
            if (userAnswers[question.id] === question.correctAnswer) {
                if (!progress.questionsCorrect[question.id]) {
                    progress.questionsCorrect[question.id] = 0;
                }
                progress.questionsCorrect[question.id]++;
            }
        }
    });
    
    // Update exam stats
    if (examMode === 'exam') {
        progress.totalExams++;
        if (results.passed) {
            progress.totalPassed++;
        }
    }
    
    progress.lastActivity = Date.now();
    
    saveUserProgress(progress);
}

function getUserStatistics() {
    const progress = loadUserProgress();
    
    const uniqueQuestionsAnswered = Object.keys(progress.questionsAttempted).length;
    const totalAnswered = Object.values(progress.questionsAttempted).reduce((a, b) => a + b, 0);
    const totalCorrect = Object.values(progress.questionsCorrect).reduce((a, b) => a + b, 0);
    
    return {
        uniqueQuestionsAnswered,
        totalAnswered,
        totalCorrect,
        accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
        totalExams: progress.totalExams,
        totalPassed: progress.totalPassed,
        passRate: progress.totalExams > 0 ? Math.round((progress.totalPassed / progress.totalExams) * 100) : 0
    };
}

// ==================== //
// Exam History
// ==================== //
function saveExamHistory() {
    if (examMode !== 'exam' && examMode !== 'practice') return;
    
    const history = loadExamHistory();
    
    const examRecord = {
        id: Date.now(),
        exam: currentExam,
        mode: examMode,
        date: new Date().toISOString(),
        score: calculateResults(),
        duration: examEndTime - examStartTime,
        answers: { ...userAnswers },
        flagged: Array.from(flaggedQuestions)
    };
    
    // Keep only last 10 exams
    history.unshift(examRecord);
    if (history.length > 10) {
        history.pop();
    }
    
    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history));
    
    // Update user progress
    updateUserProgress(examRecord.score);
}

function loadExamHistory() {
    const saved = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load exam history:', e);
        }
    }
    return [];
}

// ==================== //
// Bookmarks & Notes
// ==================== //
function saveBookmark(questionId) {
    const bookmarks = loadBookmarks();
    if (!bookmarks.includes(questionId)) {
        bookmarks.push(questionId);
        localStorage.setItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS, JSON.stringify(bookmarks));
    }
}

function removeBookmark(questionId) {
    const bookmarks = loadBookmarks();
    const index = bookmarks.indexOf(questionId);
    if (index > -1) {
        bookmarks.splice(index, 1);
        localStorage.setItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS, JSON.stringify(bookmarks));
    }
}

function loadBookmarks() {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load bookmarks:', e);
        }
    }
    return [];
}

function saveQuestionNote(questionId, note) {
    const notes = loadQuestionNotes();
    notes[questionId] = note;
    localStorage.setItem(STORAGE_KEYS.QUESTION_NOTES, JSON.stringify(notes));
}

function loadQuestionNotes() {
    const saved = localStorage.getItem(STORAGE_KEYS.QUESTION_NOTES);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load notes:', e);
        }
    }
    return {};
}

// ==================== //
// User Preferences
// ==================== //
function savePreferences(preferences) {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
}

function loadPreferences() {
    const saved = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Failed to load preferences:', e);
        }
    }
    return {
        theme: 'light',
        fontSize: 'medium',
        soundEnabled: true,
        autoAdvance: false,
        showTimer: true,
        confirmSubmit: true
    };
}

// ==================== //
// Data Export/Import
// ==================== //
function exportUserData() {
    const data = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        progress: loadUserProgress(),
        history: loadExamHistory(),
        bookmarks: loadBookmarks(),
        notes: loadQuestionNotes(),
        preferences: loadPreferences()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `itil-practice-data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importUserData(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                
                // Validate data structure
                if (!data.version || !data.progress) {
                    throw new Error('Invalid data format');
                }
                
                // Import data
                if (data.progress) {
                    localStorage.setItem(STORAGE_KEYS.USER_PROGRESS, JSON.stringify(data.progress));
                }
                if (data.history) {
                    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(data.history));
                }
                if (data.bookmarks) {
                    localStorage.setItem(STORAGE_KEYS.BOOKMARKED_QUESTIONS, JSON.stringify(data.bookmarks));
                }
                if (data.notes) {
                    localStorage.setItem(STORAGE_KEYS.QUESTION_NOTES, JSON.stringify(data.notes));
                }
                if (data.preferences) {
                    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(data.preferences));
                }
                
                resolve('Data imported successfully');
            } catch (error) {
                reject('Failed to import data: ' + error.message);
            }
        };
        
        reader.onerror = function() {
            reject('Failed to read file');
        };
        
        reader.readAsText(file);
    });
}

// ==================== //
// Storage Management
// ==================== //
function getStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (key.startsWith('itil_')) {
            total += localStorage[key].length + key.length;
        }
    }
    return Math.round(total / 1024); // Return size in KB
}

function clearAllData() {
    // Clear localStorage
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('itil_')) {
            localStorage.removeItem(key);
        }
    });
    
    // Clear sessionStorage
    Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('itil_')) {
            sessionStorage.removeItem(key);
        }
    });
}

function clearOldData() {
    // Clear data older than 30 days
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    
    // Clean old exam history
    const history = loadExamHistory();
    const recentHistory = history.filter(exam => {
        return new Date(exam.date).getTime() > thirtyDaysAgo;
    });
    
    if (recentHistory.length < history.length) {
        localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(recentHistory));
    }
}

// ==================== //
// Initialize Storage
// ==================== //
(function initializeStorage() {
    // Clean old data on startup
    clearOldData();
    
    // Check storage size and warn if too large
    const size = getStorageSize();
    if (size > 4096) { // Warn if over 4MB
        console.warn(`Storage size is ${size}KB. Consider clearing old data.`);
    }
})();

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        saveProgress,
        loadProgress,
        saveExamHistory,
        loadExamHistory,
        getUserStatistics,
        exportUserData,
        importUserData,
        clearAllData
    };
}