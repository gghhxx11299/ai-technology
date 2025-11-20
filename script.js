// AI Technologies Course Website - JavaScript
// Data storage using localStorage
const DATA_KEY = 'aiCourseData';
const ADMIN_KEY = 'aiCourseAdmin';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    loadData();
    
    // Set up navigation
    setupNavigation();
    
    // Set up authentication
    setupAuthentication();
    
    // Set up student dashboard
    setupStudentDashboard();
    
    // Set up admin dashboard
    setupAdminDashboard();
    
    // Set up module detail view
    setupModuleDetailView();
    
    // Set up certificate view
    setupCertificateView();
    
    // Check current authentication status
    checkAuthStatus();
});

// Data management
let courseData = {
    modules: [
        {
            id: 1,
            title: "Introduction to AI",
            description: "Learn the basics of Artificial Intelligence and its applications",
            lessons: [
                {
                    id: 1,
                    title: "What is AI?",
                    content: `
                        <h3>What is Artificial Intelligence?</h3>
                        <p>Artificial Intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.</p>
                        <p>AI research has been defined as the field of study of intelligent agents, which refers to any system that learns how to recognize its environment and takes actions that maximize its chance of success.</p>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "History of AI",
                    content: `
                        <h3>History of Artificial Intelligence</h3>
                        <p>The field of AI research was born at a Dartmouth College workshop in 1956. Attendees Allen Newell, Herbert Simon, John McCarthy, Marvin Minsky and Arthur Samuel became the founders and key contributors to the field.</p>
                        <p>Early AI research in the 1950s explored topics like problem solving and symbolic methods. In the 1960s, the US Department of Defense took interest in this work and began funding projects such as early speech recognition systems.</p>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "AI Applications",
                    content: `
                        <h3>Applications of AI</h3>
                        <p>AI is used in a wide range of applications today:</p>
                        <ul>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <li>Robotics</li>
                            <li>Expert Systems</li>
                            <li>Game Playing</li>
                            <li>Pattern Recognition</li>
                        </ul>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What does AI stand for?",
                        options: ["Automatic Intelligence", "Artificial Intelligence", "Advanced Interface", "Automated Internet"],
                        correct: 1
                    },
                    {
                        question: "When was the field of AI research born?",
                        options: ["1946", "1956", "1966", "1976"],
                        correct: 1
                    },
                    {
                        question: "Which of the following is NOT a common AI application?",
                        options: ["Natural Language Processing", "Computer Vision", "Data Storage", "Robotics"],
                        correct: 2
                    }
                ],
                completed: false
            },
            completed: false
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            description: "Understanding the core concepts of Machine Learning",
            lessons: [
                {
                    id: 1,
                    title: "What is Machine Learning?",
                    content: `
                        <h3>What is Machine Learning?</h3>
                        <p>Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data without being explicitly programmed. The algorithms learn from historical data and make predictions on new, unseen data.</p>
                        <p>ML algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.</p>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Types of Learning",
                    content: `
                        <h3>Types of Machine Learning</h3>
                        <p>There are three main types of machine learning:</p>
                        <ol>
                            <li><strong>Supervised Learning:</strong> The model learns from labeled training data</li>
                            <li><strong>Unsupervised Learning:</strong> The model learns from unlabeled data</li>
                            <li><strong>Reinforcement Learning:</strong> The model learns through rewards and penalties</li>
                        </ol>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What is Machine Learning?",
                        options: ["A type of robot", "A subset of AI that learns from data", "A programming language", "A database system"],
                        correct: 1
                    },
                    {
                        question: "Which type of learning uses labeled data?",
                        options: ["Unsupervised Learning", "Reinforcement Learning", "Supervised Learning", "None of the above"],
                        correct: 2
                    }
                ],
                completed: false
            },
            completed: false
        },
        {
            id: 3,
            title: "Neural Networks and Deep Learning",
            description: "Deep dive into neural networks and deep learning concepts",
            lessons: [
                {
                    id: 1,
                    title: "Neural Network Basics",
                    content: `
                        <h3>Neural Networks</h3>
                        <p>Artificial neural networks are computing systems vaguely inspired by the biological neural networks that constitute animal brains. They consist of interconnected nodes (neurons) that process information using dynamic state responses to external inputs.</p>
                        <p>Neural networks use connection weights that need to be learned during a training process to achieve desired results.</p>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What are artificial neural networks inspired by?",
                        options: ["Computer processors", "Biological neural networks", "Mathematical formulas", "Software algorithms"],
                        correct: 1
                    }
                ],
                completed: false
            },
            completed: false
        }
    ]
};

let appData = {
    students: [],
    currentUser: null,
    currentAdmin: null,
    certificates: []
};

// Load data from localStorage
function loadData() {
    const savedData = localStorage.getItem(DATA_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        appData = {...appData, ...parsedData};
    }
    
    // Also load the course content if it exists
    const savedCourse = localStorage.getItem('aiCourseContent');
    if (savedCourse) {
        courseData = JSON.parse(savedCourse);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem(DATA_KEY, JSON.stringify(appData));
    localStorage.setItem('aiCourseContent', JSON.stringify(courseData));
}

// Navigation setup
function setupNavigation() {
    // Page navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    
    // CTA button on home page
    document.getElementById('get-started-btn')?.addEventListener('click', function() {
        showPage('signup');
    });
}

// Show specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show requested page
    document.getElementById(pageId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find the nav link that corresponds to this page and activate it
    const navLink = document.querySelector(`[data-page="${pageId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
    
    // Special handling for certain pages
    if (pageId === 'student-dashboard' && appData.currentUser) {
        loadStudentDashboard();
    } else if (pageId === 'admin' && appData.currentAdmin) {
        loadAdminDashboard();
    }
}

// Authentication setup
function setupAuthentication() {
    // Signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Check if user already exists
            const existingUser = appData.students.find(student => student.email === email);
            if (existingUser) {
                alert('A user with this email already exists!');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now(),
                email: email,
                password: password, // In a real app, this would be hashed
                name: email.split('@')[0], // Use part of email as name
                progress: 0,
                modulesProgress: {},
                completedModules: [],
                registrationDate: new Date().toISOString(),
                lastAccess: new Date().toISOString()
            };
            
            appData.students.push(newUser);
            appData.currentUser = newUser;
            saveData();
            
            // Update UI
            updateAuthUI();
            showPage('student-dashboard');
            
            // Reset form
            signupForm.reset();
        });
    }
    
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Find user
            const user = appData.students.find(student => 
                student.email === email && student.password === password
            );
            
            if (user) {
                appData.currentUser = user;
                user.lastAccess = new Date().toISOString();
                saveData();
                
                // Update UI
                updateAuthUI();
                
                // Check if it's admin login
                if (email === 'admin@aitutorials.com') {
                    appData.currentAdmin = { email: email };
                    showPage('admin');
                    document.getElementById('admin-link').style.display = 'inline';
                } else {
                    showPage('student-dashboard');
                }
            } else {
                alert('Invalid email or password!');
            }
            
            // Reset form
            loginForm.reset();
        });
    }
    
    // Auth button (login/signup toggle)
    document.getElementById('auth-btn')?.addEventListener('click', function() {
        if (appData.currentUser) {
            // If current user is admin, show admin dashboard
            if (appData.currentAdmin) {
                showPage('admin');
            } else {
                showPage('student-dashboard');
            }
        } else {
            showPage('login');
        }
    });
    
    // Switch between login and signup
    document.getElementById('show-login')?.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('login');
    });
    
    document.getElementById('show-signup')?.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('signup');
    });
    
    // Logout buttons
    document.getElementById('logout-btn')?.addEventListener('click', logout);
    document.getElementById('admin-logout-btn')?.addEventListener('click', adminLogout);
}

// Update UI based on authentication status
function updateAuthUI() {
    const authBtn = document.getElementById('auth-btn');
    const dashboardLink = document.getElementById('dashboard-link');
    const adminLink = document.getElementById('admin-link');
    
    if (authBtn) {
        if (appData.currentUser) {
            authBtn.textContent = 'Dashboard';
            dashboardLink.style.display = 'inline';
            
            // Show admin link if user is admin
            if (appData.currentUser.email === 'admin@aitutorials.com') {
                adminLink.style.display = 'inline';
            }
        } else {
            authBtn.textContent = 'Login';
            dashboardLink.style.display = 'none';
            adminLink.style.display = 'none';
        }
    }
}

// Check authentication status on page load
function checkAuthStatus() {
    // Check if we have a current user
    if (appData.currentUser) {
        updateAuthUI();
        
        // Check if user is on a protected page
        const currentPage = document.querySelector('.page.active');
        if (currentPage && currentPage.id === 'home') {
            // If user is logged in, redirect to dashboard instead of home
            if (appData.currentUser.email === 'admin@aitutorials.com') {
                showPage('admin');
            } else {
                showPage('student-dashboard');
            }
        }
    }
}

// Logout function
function logout() {
    appData.currentUser = null;
    updateAuthUI();
    showPage('home');
}

// Admin logout function
function adminLogout() {
    appData.currentAdmin = null;
    if (appData.currentUser && appData.currentUser.email !== 'admin@aitutorials.com') {
        showPage('student-dashboard');
    } else {
        appData.currentUser = null;
        updateAuthUI();
        showPage('home');
    }
}

// Student dashboard setup
function setupStudentDashboard() {
    // Back to dashboard button in module view
    document.getElementById('back-to-dashboard')?.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('student-dashboard');
    });
}

// Load student dashboard
function loadStudentDashboard() {
    if (!appData.currentUser) return;
    
    // Update user name
    document.getElementById('user-name').textContent = appData.currentUser.name;
    
    // Calculate overall progress
    calculateAndDisplayProgress();
    
    // Load modules
    loadModules();
}

// Calculate and display progress
function calculateAndDisplayProgress() {
    if (!appData.currentUser) return;
    
    const user = appData.currentUser;
    
    // Count total lessons and completed lessons
    let totalLessons = 0;
    let completedLessons = 0;
    
    courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (user.modulesProgress[`${module.id}-${lesson.id}`]) {
                completedLessons++;
            }
        });
        
        // Count quiz if exists
        if (module.quiz) {
            totalLessons++;
            if (user.modulesProgress[`quiz-${module.id}`]) {
                completedLessons++;
            }
        }
    });
    
    const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    user.progress = progressPercentage;
    
    // Update progress bar
    const progressFill = document.getElementById('overall-progress');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) progressFill.style.width = `${progressPercentage}%`;
    if (progressText) progressText.textContent = `${progressPercentage}% Complete`;
    
    saveData();
}

// Load modules in dashboard
function loadModules() {
    const modulesContainer = document.getElementById('modules-container');
    if (!modulesContainer || !appData.currentUser) return;
    
    modulesContainer.innerHTML = '';
    
    courseData.modules.forEach(module => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-card';
        
        // Calculate module progress
        let totalItems = module.lessons.length;
        let completedItems = 0;
        
        module.lessons.forEach(lesson => {
            if (appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
                completedItems++;
            }
        });
        
        // Count quiz if exists
        if (module.quiz) {
            totalItems++;
            if (appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
                completedItems++;
            }
        }
        
        const moduleProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
        
        moduleCard.innerHTML = `
            <div class="module-header" data-module-id="${module.id}">
                <h3 class="module-title">${module.title}</h3>
                <span>${moduleProgress}%</span>
                <span class="module-expand">▼</span>
            </div>
            <div class="module-body">
                <p>${module.description}</p>
                <div class="lessons-list">
                    ${module.lessons.map(lesson => {
                        const isCompleted = appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`];
                        return `
                            <div class="lesson-item">
                                <h4 class="lesson-title">${lesson.title}</h4>
                                <span class="lesson-status ${isCompleted ? 'completed' : 'incomplete'}">
                                    ${isCompleted ? 'Completed' : 'Not Started'}
                                </span>
                            </div>
                        `;
                    }).join('')}
                    
                    ${module.quiz ? `
                        <div class="lesson-item">
                            <h4 class="lesson-title">Module Quiz</h4>
                            <span class="lesson-status ${appData.currentUser.modulesProgress[`quiz-${module.id}`] ? 'completed' : 'incomplete'}">
                                ${appData.currentUser.modulesProgress[`quiz-${module.id}`] ? 'Completed' : 'Not Started'}
                            </span>
                        </div>
                    ` : ''}
                </div>
                <button class="cta-button start-module-btn" data-module-id="${module.id}">Start Module</button>
            </div>
        `;
        
        modulesContainer.appendChild(moduleCard);
    });
    
    // Add event listeners for expanding modules
    document.querySelectorAll('.module-header').forEach(header => {
        header.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module-id');
            const moduleBody = this.nextElementSibling;
            
            if (moduleBody.classList.contains('active')) {
                moduleBody.classList.remove('active');
                this.querySelector('.module-expand').textContent = '▼';
            } else {
                moduleBody.classList.add('active');
                this.querySelector('.module-expand').textContent = '▲';
            }
        });
    });
    
    // Add event listeners for start module buttons
    document.querySelectorAll('.start-module-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module-id');
            showModuleDetail(moduleId);
        });
    });
}

// Show module detail view
function showModuleDetail(moduleId) {
    const module = courseData.modules.find(m => m.id == moduleId);
    if (!module || !appData.currentUser) return;
    
    // Update module title
    document.getElementById('module-title').textContent = module.title;
    
    // Show current lesson (start with first incomplete, or first if none completed)
    let currentLessonIndex = 0;
    
    // Find first incomplete lesson
    for (let i = 0; i < module.lessons.length; i++) {
        if (!appData.currentUser.modulesProgress[`${module.id}-${module.lessons[i].id}`]) {
            currentLessonIndex = i;
            break;
        }
    }
    
    // Show lesson content
    showLessonContent(module, currentLessonIndex);
    
    // Update module progress display
    updateModuleProgressDisplay(module);
    
    // Show the module detail page
    showPage('module-detail');
}

// Show lesson content
function showLessonContent(module, lessonIndex) {
    const lesson = module.lessons[lessonIndex];
    const lessonContent = document.getElementById('lesson-content');
    const quizSection = document.getElementById('quiz-section');
    
    if (lessonContent) {
        lessonContent.innerHTML = lesson.content;
        quizSection.style.display = 'none';
        lessonContent.style.display = 'block';
    }
    
    // Update navigation buttons
    updateLessonNavigation(module, lessonIndex);
}

// Update lesson navigation buttons
function updateLessonNavigation(module, lessonIndex) {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    const completeBtn = document.getElementById('complete-lesson');
    const quizSection = document.getElementById('quiz-section');
    
    if (prevBtn) {
        prevBtn.style.display = lessonIndex > 0 ? 'inline-block' : 'none';
        prevBtn.onclick = () => showLessonContent(module, lessonIndex - 1);
    }
    
    if (nextBtn) {
        // If this is the last lesson, next button should show quiz (if exists) or nothing
        if (lessonIndex < module.lessons.length - 1) {
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'Next Lesson';
            nextBtn.onclick = () => showLessonContent(module, lessonIndex + 1);
        } else if (module.quiz && !appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
            // Show quiz after last lesson
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'Take Quiz';
            nextBtn.onclick = () => showModuleQuiz(module);
        } else {
            nextBtn.style.display = 'none';
        }
    }
    
    if (completeBtn) {
        if (quizSection && quizSection.style.display !== 'none') {
            completeBtn.textContent = 'Submit Quiz';
            completeBtn.onclick = () => submitQuiz(module);
        } else {
            completeBtn.textContent = 'Complete Lesson';
            completeBtn.onclick = () => markLessonComplete(module, lessonIndex);
        }
    }
}

// Mark lesson as complete
function markLessonComplete(module, lessonIndex) {
    if (!appData.currentUser) return;
    
    const lesson = module.lessons[lessonIndex];
    appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`] = true;
    
    // Check if all lessons in module are complete
    let allLessonsComplete = true;
    module.lessons.forEach(lesson => {
        if (!appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
            allLessonsComplete = false;
        }
    });
    
    // If all lessons complete and no quiz or quiz already taken, mark module as complete
    if (allLessonsComplete && (!module.quiz || appData.currentUser.modulesProgress[`quiz-${module.id}`])) {
        appData.currentUser.completedModules.push(module.id);
    }
    
    // Update progress
    calculateAndDisplayProgress();
    updateModuleProgressDisplay(module);
    
    // Move to next lesson if available
    if (lessonIndex < module.lessons.length - 1) {
        showLessonContent(module, lessonIndex + 1);
    } else if (module.quiz && !appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
        // Show quiz after completing all lessons
        showModuleQuiz(module);
    } else {
        // All done with this module
        alert('Module completed! Check your dashboard for next steps.');
    }
    
    saveData();
}

// Show module quiz
function showModuleQuiz(module) {
    if (!appData.currentUser) return;
    
    const quizSection = document.getElementById('quiz-section');
    const lessonContent = document.getElementById('lesson-content');
    
    if (!quizSection) return;
    
    let quizHtml = `
        <h3>Module Quiz: ${module.title}</h3>
        <div id="quiz-form">
    `;
    
    module.quiz.questions.forEach((question, index) => {
        quizHtml += `
            <div class="quiz-question">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <div class="quiz-options">
        `;
        
        question.options.forEach((option, optIndex) => {
            quizHtml += `
                <div class="quiz-option">
                    <input type="radio" name="question-${index}" id="q${index}-opt${optIndex}" value="${optIndex}">
                    <label for="q${index}-opt${optIndex}">${option}</label>
                </div>
            `;
        });
        
        quizHtml += `
                </div>
            </div>
        `;
    });
    
    quizHtml += `</div>`;
    
    quizSection.innerHTML = quizHtml;
    lessonContent.style.display = 'none';
    quizSection.style.display = 'block';
    
    // Update navigation buttons
    updateLessonNavigation(module, module.lessons.length - 1);
}

// Submit quiz
function submitQuiz(module) {
    if (!appData.currentUser) return;
    
    // Collect answers
    const answers = [];
    module.quiz.questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            answers.push(parseInt(selectedOption.value));
        } else {
            answers.push(null);
        }
    });
    
    // Grade quiz
    let correctCount = 0;
    module.quiz.questions.forEach((question, index) => {
        if (answers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / module.quiz.questions.length) * 100);
    
    // Show results
    alert(`Quiz completed! You scored ${score}% (${correctCount}/${module.quiz.questions.length}) correct.`);
    
    // Mark quiz as completed
    appData.currentUser.modulesProgress[`quiz-${module.id}`] = true;
    
    // Check if all lessons and quiz are complete
    let allLessonsComplete = true;
    module.lessons.forEach(lesson => {
        if (!appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
            allLessonsComplete = false;
        }
    });
    
    if (allLessonsComplete) {
        appData.currentUser.completedModules.push(module.id);
        
        // Check if all modules are completed for certificate
        const allModulesComplete = courseData.modules.every(mod => 
            appData.currentUser.completedModules.includes(mod.id)
        );
        
        if (allModulesComplete) {
            // Issue certificate
            issueCertificate();
        }
    }
    
    // Update progress
    calculateAndDisplayProgress();
    updateModuleProgressDisplay(module);
    
    saveData();
    
    // Return to dashboard
    showPage('student-dashboard');
}

// Update module progress display
function updateModuleProgressDisplay(module) {
    if (!appData.currentUser) return;
    
    // Calculate module progress
    let totalItems = module.lessons.length;
    let completedItems = 0;
    
    module.lessons.forEach(lesson => {
        if (appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
            completedItems++;
        }
    });
    
    // Count quiz if exists
    if (module.quiz) {
        totalItems++;
        if (appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
            completedItems++;
        }
    }
    
    const moduleProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const progressText = document.getElementById('module-progress-text');
    if (progressText) {
        progressText.textContent = `${moduleProgress}% Complete`;
    }
}

// Issue certificate
function issueCertificate() {
    if (!appData.currentUser) return;
    
    const certificate = {
        id: 'CERT-' + Date.now(),
        studentId: appData.currentUser.id,
        studentName: appData.currentUser.name,
        courseId: 'AI-TECH-101',
        courseName: 'AI Technologies Course',
        issueDate: new Date().toISOString().split('T')[0],
        completionDate: new Date().toISOString()
    };
    
    appData.certificates.push(certificate);
    
    // Update UI to show certificate
    document.getElementById('certificate-name').textContent = certificate.studentName;
    document.getElementById('completion-date').textContent = certificate.issueDate;
    document.getElementById('certificate-id').textContent = certificate.id;
    
    saveData();
}

// Setup module detail view
function setupModuleDetailView() {
    // Already handled in showModuleDetail function
}

// Setup certificate view
function setupCertificateView() {
    document.getElementById('download-certificate')?.addEventListener('click', function() {
        // In a real implementation, this would generate a PDF
        alert('Certificate would be downloaded in a real implementation. For now, you can take a screenshot.');
    });
}

// Admin dashboard setup
function setupAdminDashboard() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show selected tab content
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Add module button
    document.getElementById('add-module-btn')?.addEventListener('click', function() {
        alert('In a real implementation, this would open a form to add a new module.');
    });
}

// Load admin dashboard
function loadAdminDashboard() {
    // Update student statistics
    document.getElementById('total-students').textContent = appData.students.length;
    
    // Calculate completion rate
    if (appData.students.length > 0) {
        const completedStudents = appData.students.filter(student => 
            courseData.modules.length > 0 && 
            student.completedModules.length === courseData.modules.length
        ).length;
        
        const completionRate = Math.round((completedStudents / appData.students.length) * 100);
        document.getElementById('completion-rate').textContent = `${completionRate}%`;
        
        // Calculate average progress
        const totalProgress = appData.students.reduce((sum, student) => sum + student.progress, 0);
        const averageProgress = Math.round(totalProgress / appData.students.length);
        document.getElementById('average-progress').textContent = `${averageProgress}%`;
    }
    
    // Show recent activity
    loadRecentActivity();
    
    // Load modules editor
    loadModulesEditor();
    
    // Load users list
    loadUsersList();
}

// Load recent activity
function loadRecentActivity() {
    const activityContainer = document.getElementById('recent-activity');
    if (!activityContainer) return;
    
    // Show last 5 student activities
    const recentStudents = [...appData.students]
        .sort((a, b) => new Date(b.lastAccess) - new Date(a.lastAccess))
        .slice(0, 5);
    
    let activityHtml = '';
    
    if (recentStudents.length > 0) {
        recentStudents.forEach(student => {
            activityHtml += `
                <div class="activity-item">
                    <p><strong>${student.name}</strong> accessed the course on ${new Date(student.lastAccess).toLocaleString()}</p>
                    <p>Progress: ${student.progress}%</p>
                </div>
            `;
        });
    } else {
        activityHtml = '<p>No recent activity</p>';
    }
    
    activityContainer.innerHTML = activityHtml;
}

// Load modules editor
function loadModulesEditor() {
    const editorContainer = document.getElementById('modules-editor');
    if (!editorContainer) return;
    
    let editorHtml = '';
    
    courseData.modules.forEach(module => {
        editorHtml += `
            <div class="module-editor">
                <h4>${module.title}</h4>
                <p>${module.description}</p>
                <p>Lessons: ${module.lessons.length} | Quiz: ${module.quiz ? 'Yes' : 'No'}</p>
                <button class="edit-module-btn" data-module-id="${module.id}">Edit Module</button>
            </div>
        `;
    });
    
    editorContainer.innerHTML = editorHtml;
    
    // Add event listeners for edit buttons
    document.querySelectorAll('.edit-module-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module-id');
            alert(`In a real implementation, this would open an editor for module ${moduleId}`);
        });
    });
}

// Load users list
function loadUsersList() {
    const usersContainer = document.getElementById('users-list');
    if (!usersContainer) return;
    
    if (appData.students.length > 0) {
        let usersHtml = '<div class="users-list">';
        
        appData.students.forEach(student => {
            usersHtml += `
                <div class="user-card">
                    <h4>${student.name}</h4>
                    <p><strong>Email:</strong> ${student.email}</p>
                    <p><strong>Progress:</strong> ${student.progress}%</p>
                    <p><strong>Modules Completed:</strong> ${student.completedModules.length}/${courseData.modules.length}</p>
                    <p><strong>Registered:</strong> ${new Date(student.registrationDate).toLocaleDateString()}</p>
                </div>
            `;
        });
        
        usersHtml += '</div>';
        usersContainer.innerHTML = usersHtml;
    } else {
        usersContainer.innerHTML = '<p>No students enrolled yet</p>';
    }
}

// Additional utility functions

// Check if user has completed all modules
function hasUserCompletedCourse(user) {
    return user.completedModules.length === courseData.modules.length;
}

// Show certificate page if user has completed the course
function checkShowCertificate() {
    if (appData.currentUser && hasUserCompletedCourse(appData.currentUser)) {
        // Show certificate page
        showPage('certificate');
    }
}