// ITIL Practice Platform - Timer Management

// ==================== //
// Timer Variables
// ==================== //
let examTimer = null;
let remainingTime = 0;
let timerPaused = false;
let warningShown = false;
let dangerShown = false;

// ==================== //
// Timer Functions
// ==================== //
function startTimer(minutes) {
    // Reset timer state
    remainingTime = minutes * 60; // Convert to seconds
    timerPaused = false;
    warningShown = false;
    dangerShown = false;
    
    // Clear any existing timer
    if (examTimer) {
        clearInterval(examTimer);
    }
    
    // Update display immediately
    updateTimerDisplay();
    
    // Start countdown
    examTimer = setInterval(() => {
        if (!timerPaused) {
            remainingTime--;
            updateTimerDisplay();
            
            // Check for warnings
            checkTimeWarnings();
            
            // Auto-submit when time expires
            if (remainingTime <= 0) {
                stopTimer();
                autoSubmitExam();
            }
        }
    }, 1000);
}

function stopTimer() {
    if (examTimer) {
        clearInterval(examTimer);
        examTimer = null;
    }
}

function pauseTimer() {
    timerPaused = true;
    updatePauseButton();
}

function resumeTimer() {
    timerPaused = false;
    updatePauseButton();
}

function toggleTimer() {
    if (timerPaused) {
        resumeTimer();
    } else {
        pauseTimer();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerText').textContent = display;
    
    // Update timer appearance based on remaining time
    const timerElement = document.getElementById('timerDisplay');
    timerElement.classList.remove('warning', 'danger');
    
    if (remainingTime <= 60) { // 1 minute
        timerElement.classList.add('danger');
    } else if (remainingTime <= 600) { // 10 minutes
        timerElement.classList.add('warning');
    }
}

function updatePauseButton() {
    const pauseBtn = document.getElementById('pauseBtn');
    if (timerPaused) {
        pauseBtn.textContent = '▶️ Resume';
        pauseBtn.classList.add('btn-success');
    } else {
        pauseBtn.textContent = '⏸️ Pause';
        pauseBtn.classList.remove('btn-success');
    }
}

function checkTimeWarnings() {
    // 10 minute warning
    if (!warningShown && remainingTime === 600) {
        warningShown = true;
        showTimeWarning('10 minutes remaining!', 'warning');
    }
    
    // 5 minute warning
    if (remainingTime === 300) {
        showTimeWarning('5 minutes remaining!', 'warning');
    }
    
    // 1 minute warning
    if (!dangerShown && remainingTime === 60) {
        dangerShown = true;
        showTimeWarning('Only 1 minute remaining!', 'danger');
    }
}

function showTimeWarning(message, type) {
    // Create warning notification
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 1000;
        animation: slideIn 0.3s ease-in-out;
        max-width: 300px;
    `;
    notification.innerHTML = `
        <strong>⏱️ Time Warning!</strong><br>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Play sound if available
    playWarningSound();
}

function autoSubmitExam() {
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger';
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2000;
        font-size: 1.2em;
        padding: 20px;
        text-align: center;
    `;
    notification.innerHTML = `
        <strong>⏱️ Time's Up!</strong><br>
        Your exam is being submitted automatically...
    `;
    
    document.body.appendChild(notification);
    
    // Submit after brief delay
    setTimeout(() => {
        notification.remove();
        submitExam();
    }, 2000);
}

// ==================== //
// Sound Effects (Optional)
// ==================== //
function playWarningSound() {
    // Create audio element for warning beep
    try {
        const audio = new Audio();
        // Create a simple beep using data URI (no external file needed)
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZijYIG2i57OScTgwOUKzn4blmFgU7k9n1 0IItBSF1yO7eizEIHWq+8+OWT' +
                     'QwGRqHg86NWCgUyiNDwx34tBSl+zPDSdjEIHWm98+OUTgwNUKvj57xmFAU7lNT1ynkpBSR5x+zdjjQIHGm98+OVTw0OUKLA45M';
        audio.volume = 0.3;
        audio.play().catch(() => {
            // Silently fail if audio can't play
        });
    } catch (e) {
        // No audio support
    }
}

// ==================== //
// Timer Persistence
// ==================== //
function saveTimerState() {
    if (examTimer) {
        sessionStorage.setItem('timerState', JSON.stringify({
            remainingTime: remainingTime,
            paused: timerPaused,
            timestamp: Date.now()
        }));
    }
}

function restoreTimerState() {
    const saved = sessionStorage.getItem('timerState');
    if (saved) {
        const state = JSON.parse(saved);
        const elapsed = Math.floor((Date.now() - state.timestamp) / 1000);
        
        // Only restore if less than 5 minutes have passed
        if (elapsed < 300) {
            remainingTime = Math.max(0, state.remainingTime - (state.paused ? 0 : elapsed));
            timerPaused = state.paused;
            
            // Restart timer
            if (remainingTime > 0) {
                updateTimerDisplay();
                examTimer = setInterval(() => {
                    if (!timerPaused) {
                        remainingTime--;
                        updateTimerDisplay();
                        checkTimeWarnings();
                        
                        if (remainingTime <= 0) {
                            stopTimer();
                            autoSubmitExam();
                        }
                    }
                }, 1000);
            }
        }
        
        sessionStorage.removeItem('timerState');
    }
}

// ==================== //
// Visibility API Handler
// ==================== //
document.addEventListener('visibilitychange', function() {
    if (examTimer) {
        if (document.hidden) {
            // Page is hidden - save timer state
            saveTimerState();
        } else {
            // Page is visible - could restore timer if needed
        }
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        startTimer,
        stopTimer,
        pauseTimer,
        resumeTimer,
        toggleTimer
    };
}