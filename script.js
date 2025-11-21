// AI Mastery Academy - Enhanced Course Website
// Data storage using localStorage
const DATA_KEY = 'aiCourseData';
let userData = null;
let userProgress = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Load initial data
    loadData();

    // Set up navigation
    setupNavigation();

    // Set up mobile menu
    setupMobileMenu();

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

    // Set up courses page
    setupCoursesPage();

    // Set up start learning button
    setupStartLearningButton();

    // Check current authentication status
    checkAuthStatus();
});

// Data management - Initialize with empty courseData to be loaded from external files
let courseData = {
    modules: []
};

// Load course data from external JSON files
async function loadCourseData() {
    try {
        // Load all course files
        const courseFiles = [
            'course-content/introduction-to-ai.json',
            'course-content/machine-learning-fundamentals.json',
            'course-content/deep-learning-essentials.json',
            'course-content/natural-language-processing.json'
        ];
        
        // Clear existing modules
        courseData.modules = [];
        
        // Load each course file and convert chapters to modules structure for compatibility
        for (const file of courseFiles) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const course = await response.json();
                    
                    // Convert chapters to modules structure (for compatibility with existing code)
                    for (const chapter of course.chapters) {
                        // Create a new module based on the chapter
                        const module = {
                            id: (courseData.modules.length + 1),
                            title: `${course.title} - ${chapter.title}`,
                            description: `${course.description} - ${chapter.title}`,
                            duration: course.duration,
                            lessons: chapter.lessons.map(lesson => {
                                return {
                                    id: lesson.id,
                                    title: lesson.title,
                                    content: lesson.content,
                                    completed: lesson.completed
                                };
                            }),
                            quiz: chapter.quiz,
                            completed: chapter.completed
                        };
                        
                        courseData.modules.push(module);
                    }
                }
            } catch (error) {
                console.error(`Error loading course file ${file}:`, error);
            }
        }
        
        console.log('Course data loaded:', courseData);
        
        // Update UI if needed
        updateCourseDisplay();
        
    } catch (error) {
        console.error('Error loading course data:', error);
    }
}

// Function to update course display after loading data
function updateCourseDisplay() {
    // Refresh any displayed content if the page is already loaded
    if (typeof setupStudentDashboard === 'function') {
        setupStudentDashboard();
    }
    if (typeof setupModuleDetailView === 'function') {
        setupModuleDetailView();
    }
    if (typeof setupCoursesPage === 'function') {
        setupCoursesPage();
    }
}

// Update the loadData function to load course data
async function loadData() {
    // Load user data from localStorage
    const savedData = localStorage.getItem(DATA_KEY);
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            // Preserve user progress and other data
            if (parsedData.userData) {
                userData = parsedData.userData;
            }
            if (parsedData.userProgress) {
                userProgress = parsedData.userProgress;
            }
        } catch (e) {
            console.error('Error parsing saved data:', e);
        }
    }
    
    // Load course data from external files
    await loadCourseData();
}

// Continue with the rest of the original functionality...
// (The rest would be the original functions which we're assuming are still in the file)
// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show the target page
            showPage(targetPage);
        });
    });
    
    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Show page function
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update active navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// Authentication setup
function setupAuthentication() {
    const authBtn = document.getElementById('auth-btn');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    
    // Toggle between signup and login
    if (showSignup) {
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
            showPage('signup');
        });
    }
    
    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('login');
        });
    }
    
    // Signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Auth button functionality
    if (authBtn) {
        authBtn.addEventListener('click', () => {
            if (userData) {
                // Log out
                userData = null;
                localStorage.removeItem(DATA_KEY);
                updateAuthUI();
            } else {
                // Show login page
                showPage('login');
            }
        });
    }
}

function handleSignup(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Check if user already exists
    const existingData = JSON.parse(localStorage.getItem(DATA_KEY) || '{}');
    if (existingData.userData && existingData.userData.email === email) {
        alert('A user with this email already exists');
        return;
    }
    
    // Create new user
    userData = {
        id: Date.now(),
        name: fullName,
        email: email,
        password: password,
        joinDate: new Date().toISOString(),
        progress: {}
    };
    
    saveData();
    updateAuthUI();
    showPage('home');
    
    // Reset form
    document.getElementById('signup-form').reset();
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Check if it's admin login
    if (email === 'admin@aitutorials.com') {
        userData = {
            id: 'admin',
            name: 'Admin',
            email: email,
            isAdmin: true
        };
        saveData();
        updateAuthUI();
        showPage('admin');
        return;
    }
    
    // Check if user exists and password matches
    const existingData = JSON.parse(localStorage.getItem(DATA_KEY) || '{}');
    if (existingData.userData && 
        existingData.userData.email === email && 
        existingData.userData.password === password) {
        
        userData = existingData.userData;
        
        // Load user progress if available
        if (existingData.userProgress) {
            userProgress = existingData.userProgress;
        }
        
        updateAuthUI();
        showPage('student-dashboard');
    } else {
        alert('Invalid email or password');
    }
}

function saveData() {
    const dataToSave = {
        userData: userData,
        userProgress: userProgress
    };
    localStorage.setItem(DATA_KEY, JSON.stringify(dataToSave));
}

function updateAuthUI() {
    const authBtn = document.getElementById('auth-btn');
    const dashboardLink = document.getElementById('dashboard-link');
    const adminLink = document.getElementById('admin-link');
    
    if (authBtn) {
        if (userData) {
            authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span>Logout</span>';
            if (userData.isAdmin) {
                if (adminLink) adminLink.style.display = 'flex';
            } else {
                if (dashboardLink) dashboardLink.style.display = 'flex';
            }
        } else {
            authBtn.innerHTML = '<i class="fas fa-user"></i> <span>Login</span>';
            if (dashboardLink) dashboardLink.style.display = 'none';
            if (adminLink) adminLink.style.display = 'none';
        }
    }
}

function checkAuthStatus() {
    const savedData = localStorage.getItem(DATA_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        if (parsedData.userData) {
            userData = parsedData.userData;
            if (parsedData.userProgress) {
                userProgress = parsedData.userProgress;
            }
        }
    }
    updateAuthUI();
}

// Student dashboard setup
function setupStudentDashboard() {
    // Dashboard setup code here
    if (userData && !userData.isAdmin) {
        const userGreeting = document.querySelector('.user-greeting h2');
        if (userGreeting) {
            userGreeting.innerHTML = `Welcome back, <span>${userData.name}</span>`;
        }
        
        updateProgressOverview();
        updateCourseSections();
        updateRecentActivity();
    }
}

function updateProgressOverview() {
    // Update progress overview elements
    const totalModules = courseData.modules.length;
    const completedModules = courseData.modules.filter(module => 
        userProgress[module.id] && userProgress[module.id].completed
    ).length;
    
    const completionPercentage = totalModules > 0 ? 
        Math.round((completedModules / totalModules) * 100) : 0;
    
    // Update progress bar
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) progressFill.style.width = `${completionPercentage}%`;
    if (progressText) progressText.textContent = `${completionPercentage}% Complete`;
    
    // Update stat cards
    const totalLessons = courseData.modules.reduce((total, module) => {
        return total + module.lessons.length;
    }, 0);
    
    const completedLessons = Object.keys(userProgress).filter(key => {
        return userProgress[key].completed;
    }).length;
    
    const totalQuizzes = courseData.modules.length;
    const completedQuizzes = courseData.modules.filter(module => 
        userProgress[`${module.id}-quiz`] && userProgress[`${module.id}-quiz`].completed
    ).length;
    
    // Update stat card values (would need to implement UI updates)
    console.log(`Total Modules: ${totalModules}, Completed: ${completedModules}`);
    console.log(`Total Lessons: ${totalLessons}, Completed: ${completedLessons}`);
    console.log(`Total Quizzes: ${totalQuizzes}, Completed: ${completedQuizzes}`);
}

function updateCourseSections() {
    const courseSections = document.querySelector('.course-sections');
    if (!courseSections || !courseData.modules) return;
    
    courseSections.innerHTML = '';
    
    courseData.modules.forEach(module => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-card';
        
        const completedLessons = module.lessons.filter(lesson => 
            userProgress[`${module.id}-${lesson.id}`] 
        ).length;
        
        const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100);
        
        moduleCard.innerHTML = `
            <div class="module-header" onclick="toggleModule(${module.id})">
                <h3 class="module-title">${module.title}</h3>
                <span class="module-expand"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="module-body" id="module-body-${module.id}">
                <div class="lesson-list">
                    ${module.lessons.map(lesson => {
                        const lessonStatus = userProgress[`${module.id}-${lesson.id}`] ? 
                            (userProgress[`${module.id}-${lesson.id}`].completed ? 'completed' : 'in-progress') : 
                            'incomplete';
                        
                        return `
                            <div class="lesson-item">
                                <h4 class="lesson-title">${lesson.title}</h4>
                                <span class="lesson-status ${lessonStatus}">${getStatusText(lessonStatus)}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="module-actions">
                    <button class="cta-button secondary" onclick="viewModule(${module.id})">
                        ${completedLessons === module.lessons.length ? 'Review Module' : 'Continue Learning'}
                    </button>
                    
                    ${module.quiz ? `
                        <button class="cta-button ${userProgress[`${module.id}-quiz`] ? 'secondary' : 'primary'}" 
                                onclick="takeQuiz(${module.id})">
                            ${userProgress[`${module.id}-quiz`] ? 'Review Quiz' : 'Take Quiz'}
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        courseSections.appendChild(moduleCard);
    });
}

function getStatusText(status) {
    switch(status) {
        case 'completed': return 'Completed';
        case 'in-progress': return 'In Progress';
        case 'incomplete': return 'Not Started';
        default: return 'Not Started';
    }
}

function toggleModule(moduleId) {
    const moduleBody = document.getElementById(`module-body-${moduleId}`);
    if (moduleBody) {
        moduleBody.classList.toggle('active');
    }
}

function viewModule(moduleId) {
    // Find the module in courseData
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module) return;
    
    // Update module detail view (this would normally show the module content)
    showPage('module-detail');
    
    // Update module detail content
    const moduleTitle = document.getElementById('module-title');
    const lessonList = document.getElementById('lesson-list');
    
    if (moduleTitle) {
        moduleTitle.textContent = module.title;
    }
    
    if (lessonList) {
        lessonList.innerHTML = module.lessons.map((lesson, index) => {
            const lessonStatus = userProgress[`${moduleId}-${lesson.id}`] ? 
                (userProgress[`${moduleId}-${lesson.id}`].completed ? 'completed' : 'in-progress') : 
                'incomplete';
            
            return `
                <div class="lesson-item">
                    <h4 class="lesson-title">${lesson.title}</h4>
                    <span class="lesson-status ${lessonStatus}">${getStatusText(lessonStatus)}</span>
                    <button class="cta-button secondary" onclick="viewLesson(${moduleId}, ${lesson.id})">
                        ${lessonStatus === 'completed' ? 'Review' : 'Start'}
                    </button>
                </div>
            `;
        }).join('');
    }
}

function viewLesson(moduleId, lessonId) {
    // Would normally navigate to the lesson view
    showPage('lesson-view');
    
    // Find the lesson in course data
    const module = courseData.modules.find(m => m.id === moduleId);
    const lesson = module ? module.lessons.find(l => l.id === lessonId) : null;
    
    if (lesson) {
        // Update lesson content
        const lessonContentDiv = document.getElementById('lesson-content');
        if (lessonContentDiv) {
            lessonContentDiv.innerHTML = lesson.content;
            
            // Ensure video containers are properly positioned
            ensureVideoContainersPositioned();
        }
    }
}

function takeQuiz(moduleId) {
    // Find the module in courseData
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module || !module.quiz) return;
    
    // Show quiz page
    showPage('quiz');
    
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        quizContainer.innerHTML = `
            <h2>${module.title} Quiz</h2>
            <div id="quiz-questions">
                ${module.quiz.questions.map((question, index) => `
                    <div class="quiz-question">
                        <p>${index + 1}. ${question.question}</p>
                        <div class="quiz-options">
                            ${question.options.map((option, optIndex) => `
                                <div class="quiz-option">
                                    <input type="radio" name="question-${index}" value="${optIndex}" id="q${index}-opt${optIndex}">
                                    <label for="q${index}-opt${optIndex}">${option}</label>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="cta-button primary" onclick="submitQuiz(${moduleId})">Submit Quiz</button>
        `;
    }
}

function submitQuiz(moduleId) {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module || !module.quiz) return;
    
    // Collect answers
    const answers = [];
    module.quiz.questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption) {
            answers.push(parseInt(selectedOption.value));
        } else {
            answers.push(null); // No answer selected
        }
    });
    
    // Calculate score
    let correctCount = 0;
    answers.forEach((answer, index) => {
        if (answer !== null) {
            if (module.quiz.questions[index].correct === "any" || 
                module.quiz.questions[index].correct === answer) {
                correctCount++;
            }
        }
    });
    
    const score = Math.round((correctCount / module.quiz.questions.length) * 100);
    
    // Save quiz progress
    userProgress[`${moduleId}-quiz`] = {
        completed: true,
        score: score,
        date: new Date().toISOString()
    };
    
    saveData();
    
    alert(`Quiz completed! You scored ${score}% (${correctCount}/${module.quiz.questions.length}) correct.`);
    
    // Update the course sections to reflect quiz completion
    updateCourseSections();
    
    // Check if this completes the module
    const allLessonsCompleted = module.lessons.every(lesson => 
        userProgress[`${moduleId}-${lesson.id}`] && 
        userProgress[`${moduleId}-${lesson.id}`].completed
    );
    
    if (allLessonsCompleted && userProgress[`${moduleId}-quiz`].completed) {
        userProgress[moduleId] = {
            completed: true,
            date: new Date().toISOString()
        };
        
        // Check if all modules are completed for certificate
        const allModulesCompleted = courseData.modules.every(m => 
            userProgress[m.id] && userProgress[m.id].completed
        );
        
        if (allModulesCompleted) {
            showCertificate();
        }
    }
    
    saveData();
}

function showCertificate() {
    // Would normally show the certificate page
    showPage('certificate');
    
    if (userData) {
        const certificateName = document.getElementById('certificate-name');
        const certificateDate = document.getElementById('certificate-date');
        
        if (certificateName) certificateName.textContent = userData.name;
        if (certificateDate) certificateDate.textContent = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Module detail view setup (simplified)
function setupModuleDetailView() {
    // Setup for module detail page would go here
}

// Admin dashboard setup (simplified)
function setupAdminDashboard() {
    // Admin dashboard setup would go here
    if (userData && userData.isAdmin) {
        document.getElementById('admin-link').style.display = 'flex';
    }
}

// Certificate view setup
function setupCertificateView() {
    // Certificate view setup would go here
}

// Set up the "Start Learning" button
function setupStartLearningButton() {
    const getStartedBtn = document.getElementById('get-started-btn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            if (userData) {
                // If user is logged in, go to dashboard
                showPage('student-dashboard');
            } else {
                // If not logged in, go to signup
                showPage('signup');
            }
        });
    }
}

// Setup FAQ functionality
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');

            // Toggle the answer visibility
            answer.classList.toggle('active');

            // Rotate the chevron icon
            if (answer.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// Setup navigation for the home page
function setupHomeNavigation() {
    // Set up pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-card .cta-button');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!userData) {
                showPage('signup');
            } else {
                // If user is already logged in, go to dashboard
                showPage('student-dashboard');
            }
        });
    });
}

// Courses page setup
function setupCoursesPage() {
    if (courseData && courseData.modules) {
        updateCoursesDisplay();
    }

    // Setup FAQ for home page if we're on that page
    setupFAQ();
    setupHomeNavigation();
}

function updateCoursesDisplay() {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid || !courseData.modules) return;

    // Group modules by unique courses (since we have multiple modules per course)
    const uniqueCourses = {};
    courseData.modules.forEach(module => {
        // Extract course title from module title (first part before the dash)
        const courseTitle = module.title.split(' - ')[0];

        if (!uniqueCourses[courseTitle]) {
            uniqueCourses[courseTitle] = {
                title: courseTitle,
                description: module.description.split(' - ')[0], // Get course description
                duration: module.duration,
                modules: [],
                allModules: []
            };
        }

        uniqueCourses[courseTitle].allModules.push(module);
    });

    // Process to get 2 modules per course as "chapters"
    Object.keys(uniqueCourses).forEach(courseTitle => {
        const course = uniqueCourses[courseTitle];
        // Take first 2 modules as the main chapters for the course display
        course.modules = course.allModules.slice(0, 2);
    });

    coursesGrid.innerHTML = '';

    Object.keys(uniqueCourses).forEach(courseTitle => {
        const course = uniqueCourses[courseTitle];

        // Use the first module's lesson as the preview
        const firstLesson = course.allModules[0] && course.allModules[0].lessons[0];
        let previewVideoId = 'ad79nYk2keg'; // Default video

        // Extract YouTube video ID from first lesson if it exists
        if (firstLesson && firstLesson.content.includes('youtube.com/embed/')) {
            const match = firstLesson.content.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                previewVideoId = match[1];
            }
        }

        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="${courseTitle}">
            </div>
            <div class="course-info">
                <h3>${courseTitle}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-book"></i> ${course.modules.length} Chapters</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <div class="course-preview">
                    <iframe width="100%" height="150" src="https://www.youtube.com/embed/${previewVideoId}?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="course-actions">
                    <button class="cta-button primary" onclick="viewCourse('${courseTitle}')">Start Learning</button>
                </div>
            </div>
        `;

        coursesGrid.appendChild(courseCard);
    });
}

// Function to view a specific course
function viewCourse(courseTitle) {
    if (!userData) {
        // If not logged in, go to signup
        showPage('signup');
        return;
    }

    // Find all modules related to this course
    const courseModules = courseData.modules.filter(module =>
        module.title.startsWith(courseTitle)
    );

    if (courseModules.length > 0) {
        // Set up the course detail page
        setupCourseDetailPage(courseModules, courseTitle);
        showPage('course-detail');
    } else {
        // Fallback to dashboard if modules not found
        showPage('student-dashboard');
    }
}

// Setup course detail page
function setupCourseDetailPage(modules, courseTitle) {
    // Update course header
    document.getElementById('course-title').textContent = courseTitle;
    document.getElementById('course-description').textContent = modules[0].description;
    document.getElementById('course-duration').textContent = modules[0].duration;

    // Calculate course stats
    let totalLessons = 0;
    modules.forEach(module => {
        totalLessons += module.lessons.length;
    });

    document.getElementById('course-lessons').textContent = totalLessons;
    document.getElementById('course-quizzes').textContent = modules.length;
    document.getElementById('course-level').textContent = courseTitle.includes('Fundamentals') ? 'Beginner' :
                                                         courseTitle.includes('Advanced') ? 'Advanced' : 'Intermediate';

    // Generate course outline
    const outlineContainer = document.getElementById('course-outline-content');
    outlineContainer.innerHTML = '';

    modules.forEach((module, moduleIndex) => {
        const chapterDiv = document.createElement('div');
        chapterDiv.className = 'chapter-item';

        // Determine if this chapter/lesson is completed
        const isModuleCompleted = userProgress[module.id] && userProgress[module.id].completed;
        const chapterIcon = isModuleCompleted ? 'fas fa-check-circle' : 'fas fa-book';

        chapterDiv.innerHTML = `
            <div class="chapter-title" onclick="selectChapter(${module.id}, ${moduleIndex})">
                <i class="${chapterIcon}"></i>
                <span>${module.title}</span>
            </div>
            <div class="lesson-list">
                ${module.lessons.map((lesson, lessonIndex) => {
                    const isLessonCompleted = userProgress[`${module.id}-${lesson.id}`] &&
                                              userProgress[`${module.id}-${lesson.id}`].completed;
                    const lessonIcon = isLessonCompleted ? 'fas fa-check-circle' : 'far fa-circle';
                    return `
                        <div class="lesson-item ${isLessonCompleted ? 'completed' : ''}"
                             onclick="selectLesson(${module.id}, ${lesson.id}, ${moduleIndex}, ${lessonIndex})">
                            <i class="${lessonIcon}"></i>
                            <span>${lesson.title}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        outlineContainer.appendChild(chapterDiv);
    });

    // Set up instructor info (for demo purposes, using static data)
    document.getElementById('instructor-name').textContent = "Dr. Alex Johnson";
    document.getElementById('instructor-bio').textContent = "PhD in Computer Science with 15+ years of experience in AI research and development. Former lead researcher at Google AI.";

    // Update progress
    updateCourseProgress(modules);

    // Show the first lesson by default
    if (modules.length > 0 && modules[0].lessons.length > 0) {
        displayLesson(modules[0].id, modules[0].lessons[0].id);
        markCurrentLessonActive(modules[0].id, modules[0].lessons[0].id);
    }
}

// Update course progress
function updateCourseProgress(modules) {
    let totalLessons = 0;
    let completedLessons = 0;

    modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (userProgress[`${module.id}-${lesson.id}`] && userProgress[`${module.id}-${lesson.id}`].completed) {
                completedLessons++;
            }
        });
    });

    const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    document.getElementById('course-progress-bar').style.width = `${progressPercentage}%`;
    document.getElementById('course-progress-text').textContent = `${progressPercentage}% Complete`;
}

// Select and display a chapter
function selectChapter(moduleId, moduleIndex) {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (module && module.lessons.length > 0) {
        displayLesson(moduleId, module.lessons[0].id);
        markCurrentLessonActive(moduleId, module.lessons[0].id);
    }
}

// Select and display a specific lesson
function selectLesson(moduleId, lessonId, moduleIndex, lessonIndex) {
    displayLesson(moduleId, lessonId);
    markCurrentLessonActive(moduleId, lessonId);
}

// Mark the current lesson as active in the outline
function markCurrentLessonActive(moduleId, lessonId) {
    // Remove active class from all lessons
    document.querySelectorAll('.lesson-item').forEach(lesson => {
        lesson.classList.remove('active');
    });

    // Add active class to the current lesson
    const activeLesson = document.querySelector(`.lesson-item[onclick="selectLesson(${moduleId}, ${lessonId}, *, *)"]`);
    if (activeLesson) {
        activeLesson.classList.add('active');
    }
}

// Display lesson content
function displayLesson(moduleId, lessonId) {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module) return;

    const lesson = module.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const contentDisplay = document.getElementById('course-content-display');
    if (contentDisplay) {
        contentDisplay.innerHTML = lesson.content;

        // Ensure video containers are properly positioned
        ensureVideoContainersPositioned();
    }

    // Set up lesson navigation
    setupLessonNavigation(moduleId, lessonId);
}

// Set up navigation between lessons
function setupLessonNavigation(moduleId, lessonId) {
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module) return;

    // Find current lesson index
    const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
    if (lessonIndex === -1) return;

    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    const completeBtn = document.getElementById('complete-lesson-btn');

    // Enable/disable prev button
    if (prevBtn) {
        prevBtn.disabled = (lessonIndex === 0);
        prevBtn.onclick = () => {
            if (lessonIndex > 0) {
                displayLesson(moduleId, module.lessons[lessonIndex - 1].id);
                markCurrentLessonActive(moduleId, module.lessons[lessonIndex - 1].id);
            }
        };
    }

    // Enable/disable next button
    if (nextBtn) {
        nextBtn.disabled = (lessonIndex === module.lessons.length - 1);
        nextBtn.onclick = () => {
            if (lessonIndex < module.lessons.length - 1) {
                displayLesson(moduleId, module.lessons[lessonIndex + 1].id);
                markCurrentLessonActive(moduleId, module.lessons[lessonIndex + 1].id);
            }
        };
    }

    // Set up complete button
    if (completeBtn) {
        const isCompleted = userProgress[`${moduleId}-${lessonId}`] &&
                           userProgress[`${moduleId}-${lessonId}`].completed;

        completeBtn.textContent = isCompleted ? 'Completed' : 'Mark Complete';
        completeBtn.disabled = isCompleted;

        completeBtn.onclick = () => {
            // Mark lesson as completed
            userProgress[`${moduleId}-${lessonId}`] = {
                completed: true,
                date: new Date().toISOString()
            };

            saveData();

            // Update UI
            completeBtn.textContent = 'Completed';
            completeBtn.disabled = true;

            // Update progress display
            const modules = courseData.modules.filter(m => m.title.startsWith(module.title.split(' - ')[0]));
            updateCourseProgress(modules);

            // Check if this completes the module
            const module = courseData.modules.find(m => m.id === moduleId);
            if (module) {
                const allLessonsCompleted = module.lessons.every(lesson =>
                    userProgress[`${moduleId}-${lesson.id}`] &&
                    userProgress[`${moduleId}-${lesson.id}`].completed
                );

                if (allLessonsCompleted) {
                    userProgress[moduleId] = {
                        completed: true,
                        date: new Date().toISOString()
                    };

                    // Check if all modules are completed for certificate
                    const courseTitle = module.title.split(' - ')[0];
                    const courseModules = courseData.modules.filter(m =>
                        m.title.startsWith(courseTitle)
                    );

                    const allModulesCompleted = courseModules.every(m =>
                        userProgress[m.id] && userProgress[m.id].completed
                    );

                    if (allModulesCompleted) {
                        showCertificate();
                    }

                    saveData();

                    // Refresh the outline to show completion
                    const modules = courseData.modules.filter(m =>
                        m.title.startsWith(module.title.split(' - ')[0])
                    );
                    setupCourseDetailPage(modules, courseTitle);
                }
            }
        };
    }
}

// Recent activity (placeholder)
function updateRecentActivity() {
    // Update recent activity section on dashboard
}

// Update the module detail view function to be more comprehensive
function setupModuleDetailView() {
    // Set up back to dashboard button
    const backBtn = document.getElementById('back-to-dashboard');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('student-dashboard');
        });
    }

    // Set up navigation buttons
    const prevLessonBtn = document.getElementById('prev-lesson');
    const nextLessonBtn = document.getElementById('next-lesson');
    const completeLessonBtn = document.getElementById('complete-lesson');

    if (prevLessonBtn) {
        prevLessonBtn.addEventListener('click', function() {
            // Logic to go to previous lesson
            console.log('Previous lesson clicked');
        });
    }

    if (nextLessonBtn) {
        nextLessonBtn.addEventListener('click', function() {
            // Logic to go to next lesson
            console.log('Next lesson clicked');
        });
    }

    if (completeLessonBtn) {
        completeLessonBtn.addEventListener('click', function() {
            // Logic to mark lesson as complete
            console.log('Complete lesson clicked');
        });
    }

    // Set up section buttons
    const resourcesBtn = document.getElementById('show-resources');
    const discussionBtn = document.getElementById('show-discussion');
    const notesBtn = document.getElementById('show-notes');
    const bookmarksBtn = document.getElementById('show-bookmarks');

    if (resourcesBtn) {
        resourcesBtn.addEventListener('click', function() {
            document.querySelectorAll('#resources-section, #discussion-section, #notes-section, #bookmarks-section, #lesson-content').forEach(el => {
                if (el) el.style.display = 'none';
            });
            const resourcesSection = document.getElementById('resources-section');
            if (resourcesSection) resourcesSection.style.display = 'block';
        });
    }

    if (discussionBtn) {
        discussionBtn.addEventListener('click', function() {
            document.querySelectorAll('#resources-section, #discussion-section, #notes-section, #bookmarks-section, #lesson-content').forEach(el => {
                if (el) el.style.display = 'none';
            });
            const discussionSection = document.getElementById('discussion-section');
            if (discussionSection) discussionSection.style.display = 'block';
        });
    }

    if (notesBtn) {
        notesBtn.addEventListener('click', function() {
            document.querySelectorAll('#resources-section, #discussion-section, #notes-section, #bookmarks-section, #lesson-content').forEach(el => {
                if (el) el.style.display = 'none';
            });
            const notesSection = document.getElementById('notes-section');
            if (notesSection) notesSection.style.display = 'block';
        });
    }

    if (bookmarksBtn) {
        bookmarksBtn.addEventListener('click', function() {
            document.querySelectorAll('#resources-section, #discussion-section, #notes-section, #bookmarks-section, #lesson-content').forEach(el => {
                if (el) el.style.display = 'none';
            });
            const bookmarksSection = document.getElementById('bookmarks-section');
            if (bookmarksSection) bookmarksSection.style.display = 'block';
        });
    }
}

// Enhanced dashboard setup
function setupStudentDashboard() {
    if (userData && !userData.isAdmin) {
        const userGreeting = document.querySelector('.user-greeting h2');
        if (userGreeting) {
            userGreeting.innerHTML = `Welcome back, <span>${userData.name}</span>`;
        }

        updateProgressOverview();
        updateCourseSections();
        updateRecentActivity();
    }
}

// Enhanced progress overview
function updateProgressOverview() {
    // Calculate overall progress
    const totalModules = courseData.modules.length;
    const totalLessons = courseData.modules.reduce((total, module) => {
        return total + module.lessons.length;
    }, 0);

    const completedModules = courseData.modules.filter(module =>
        userProgress[module.id] && userProgress[module.id].completed
    ).length;

    const completedLessons = Object.keys(userProgress).filter(key => {
        return userProgress[key].completed && !key.includes('-quiz');
    }).length;

    const completionPercentage = totalLessons > 0 ?
        Math.round((completedLessons / totalLessons) * 100) : 0;

    // Update progress bar
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (progressFill) progressFill.style.width = `${completionPercentage}%`;
    if (progressText) progressText.textContent = `${completionPercentage}% Complete`;

    // Update stat cards
    const statElements = document.querySelectorAll('.stat-card');
    if (statElements[0]) {
        statElements[0].querySelector('.stat-info h4').textContent = `${completedModules}`;
        statElements[0].querySelector('.stat-info p').textContent = 'Modules Completed';
    }

    if (statElements[1]) {
        statElements[1].querySelector('.stat-info h4').textContent = `${completedLessons}`;
        statElements[1].querySelector('.stat-info p').textContent = 'Lessons Completed';
    }

    if (statElements[2]) {
        const completedQuizzes = Object.keys(userProgress).filter(key =>
            key.includes('-quiz') && userProgress[key].completed
        ).length;
        statElements[2].querySelector('.stat-info h4').textContent = `${completedQuizzes}`;
        statElements[2].querySelector('.stat-info p').textContent = 'Quizzes Passed';
    }
}

// Enhanced course sections
function updateCourseSections() {
    const courseSections = document.querySelector('.course-sections');
    if (!courseSections || !courseData.modules) return;

    courseSections.innerHTML = '';

    // Group modules by course
    const uniqueCourses = {};
    courseData.modules.forEach(module => {
        const courseTitle = module.title.split(' - ')[0];

        if (!uniqueCourses[courseTitle]) {
            uniqueCourses[courseTitle] = {
                title: courseTitle,
                modules: []
            };
        }

        uniqueCourses[courseTitle].modules.push(module);
    });

    // Create course groupings
    Object.keys(uniqueCourses).forEach(courseTitle => {
        const courseGroup = uniqueCourses[courseTitle];

        const courseGroupDiv = document.createElement('div');
        courseGroupDiv.className = 'course-group';
        courseGroupDiv.innerHTML = `<h3 class="section-header">${courseTitle}</h3>`;

        const modulesContainer = document.createElement('div');

        courseGroup.modules.forEach(module => {
            const completedLessons = module.lessons.filter(lesson =>
                userProgress[`${module.id}-${lesson.id}`]
            ).length;

            const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100);

            const moduleCard = document.createElement('div');
            moduleCard.className = 'module-card';

            // Check if module has quiz and if it's completed
            const quizCompleted = userProgress[`${module.id}-quiz`] && userProgress[`${module.id}-quiz`].completed;

            moduleCard.innerHTML = `
                <div class="module-header" onclick="toggleModule(${module.id})">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <h3 class="module-title">${module.title.split(' - ')[1] || module.title}</h3>
                        ${quizCompleted ? '<i class="fas fa-check-circle" style="color: #27ae60;"></i>' : ''}
                    </div>
                    <span class="module-expand"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="module-body" id="module-body-${module.id}">
                    <div class="lesson-list">
                        ${module.lessons.map(lesson => {
                            const lessonStatus = userProgress[`${module.id}-${lesson.id}`] ?
                                (userProgress[`${module.id}-${lesson.id}`].completed ? 'completed' : 'in-progress') :
                                'incomplete';

                            return `
                                <div class="lesson-item">
                                    <h4 class="lesson-title">${lesson.title}</h4>
                                    <span class="lesson-status ${lessonStatus}">${getStatusText(lessonStatus)}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="module-actions">
                        <button class="cta-button secondary" onclick="viewModule(${module.id})">
                            ${completedLessons === module.lessons.length ? 'Review Module' : 'Continue Learning'}
                        </button>

                        ${module.quiz ? `
                            <button class="cta-button ${userProgress[`${module.id}-quiz`] ? 'secondary' : 'primary'}"
                                    onclick="takeQuiz(${module.id})">
                                ${userProgress[`${module.id}-quiz`] ? 'Review Quiz' : 'Take Quiz'}
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;

            modulesContainer.appendChild(moduleCard);
        });

        courseGroupDiv.appendChild(modulesContainer);
        courseSections.appendChild(courseGroupDiv);
    });
}

// Enhanced view module function
function viewModule(moduleId) {
    // Find the module in courseData
    const module = courseData.modules.find(m => m.id === moduleId);
    if (!module) return;

    // Update module detail view
    showPage('module-detail');

    // Update module detail content
    const moduleTitle = document.getElementById('module-title');
    const lessonList = document.getElementById('lesson-list');

    if (moduleTitle) {
        moduleTitle.textContent = module.title;
    }

    if (lessonList) {
        lessonList.innerHTML = module.lessons.map((lesson, index) => {
            const lessonStatus = userProgress[`${moduleId}-${lesson.id}`] ?
                (userProgress[`${moduleId}-${lesson.id}`].completed ? 'completed' : 'in-progress') :
                'incomplete';

            return `
                <div class="lesson-item">
                    <h4 class="lesson-title">${lesson.title}</h4>
                    <span class="lesson-status ${lessonStatus}">${getStatusText(lessonStatus)}</span>
                    <button class="cta-button secondary" onclick="viewLesson(${moduleId}, ${lesson.id})">
                        ${lessonStatus === 'completed' ? 'Review' : 'Start'}
                    </button>
                </div>
            `;
        }).join('');
    }
}

// Enhanced view lesson function
function viewLesson(moduleId, lessonId) {
    // Find the lesson in course data
    const module = courseData.modules.find(m => m.id === moduleId);
    const lesson = module ? module.lessons.find(l => l.id === lessonId) : null;

    if (lesson) {
        // Use the course detail page instead of module detail for better UX
        setupCourseDetailPage([module], module.title.split(' - ')[0]);
        showPage('course-detail');

        // Display the specific lesson
        displayLesson(moduleId, lessonId);
        markCurrentLessonActive(moduleId, lessonId);
    }
}

// Enhanced admin dashboard
function setupAdminDashboard() {
    if (userData && userData.isAdmin) {
        document.getElementById('admin-link').style.display = 'flex';

        // Set up admin tabs
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');

                // Update active tab button
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');

                // Show the selected tab content
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                const targetPane = document.getElementById(`${tabId}-tab`);
                if (targetPane) targetPane.classList.add('active');
            });
        });
    }
}

// Enhanced certificate view
function setupCertificateView() {
    const downloadBtn = document.getElementById('download-certificate');
    const shareBtn = document.getElementById('share-certificate');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // In a real implementation, this would generate a PDF
            alert('Certificate download would start in a real implementation. For now, you can take a screenshot.');
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            // In a real implementation, this would share to social media
            if (navigator.share) {
                navigator.share({
                    title: 'My AI Course Certificate',
                    text: 'I just completed an AI course at AI Mastery Academy!',
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert('Web Share API not supported in your browser. Certificate URL copied to clipboard.');
                navigator.clipboard.writeText(window.location.href);
            }
        });
    }
}

// Ensure video containers are properly positioned after content is loaded
function ensureVideoContainersPositioned() {
    // Wait a brief moment to ensure the DOM is updated
    setTimeout(function() {
        const videoContainers = document.querySelectorAll('.video-container');
        videoContainers.forEach(function(container) {
            // The CSS should handle this, but let's make sure the iframe is properly positioned
            const iframe = container.querySelector('iframe');
            if (iframe) {
                // Make sure the iframe is positioned absolutely within its container
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
            }
        });
    }, 100); // Small delay to ensure DOM is rendered
}
        const videoContainers = document.querySelectorAll('.video-container');
        videoContainers.forEach(function(container) {
            // The CSS should handle this, but let's make sure the iframe is properly positioned
            const iframe = container.querySelector('iframe');
            if (iframe) {
                // Make sure the iframe is positioned absolutely within its container
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
            }
        });
    }, 100); // Small delay to ensure DOM is rendered
}