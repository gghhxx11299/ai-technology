# AI Technologies Course Website

This is a comprehensive e-learning platform built for students to learn about AI technologies. The website includes course materials, quizzes, progress tracking, and an admin dashboard - all deployable on GitHub Pages.

## Features

- **Student Registration & Login** - Students can sign up with email and password
- **Course Content** - Multiple modules with lessons on AI technologies
- **Interactive Quizzes** - Graded quizzes at the end of each module
- **Progress Tracking** - Students can track their learning progress
- **Certificate Generation** - Digital certificates upon course completion
- **Admin Dashboard** - For monitoring student progress and course statistics
- **Responsive Design** - Works on desktop and mobile devices

## Course Content

The course is divided into several modules covering AI technologies:

1. Introduction to AI
2. Machine Learning Fundamentals
3. Neural Networks and Deep Learning

Each module includes multiple lessons and a quiz to test understanding.

## How to Deploy on GitHub Pages

1. Create a new GitHub repository for your course
2. Upload all files from this project to your repository:
   - index.html
   - styles.css
   - script.js
   - test.html
   - README.md
3. Go to your repository on GitHub
4. Navigate to Settings > Pages
5. Under "Source", select "Deploy from a branch"
6. Select "main" branch and "/" folder
7. Click "Save"
8. Your website will be accessible at: `https://<username>.github.io/<repository-name>`

## How to Use the Website

### For Students:
1. Visit the deployed website
2. Click "Get Started" to create an account
3. Complete the registration form with your email and password
4. Login to access the course content
5. Navigate through modules and complete lessons
6. Take quizzes at the end of each module
7. Track your progress on the dashboard
8. Receive a certificate after completing all modules

### For Admin:
1. Go to Login page
2. Use the email `admin@aitutorials.com` with any password to access admin features
3. View statistics about student progress
4. Monitor user activity
5. Manage course content (in a full implementation)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- localStorage for data storage
- Responsive design principles

## Data Storage

The application uses browser's localStorage to save:
- Student accounts and progress
- Course completion status
- Quiz scores
- Certificates

Note: This is suitable for demonstration purposes. A production system would require a backend server.

## Testing

A test suite is included in `test.html` to verify all functionality works properly:

1. Open `test.html` to run tests
2. Verify each component functions as expected
3. Test all user flows manually

## Customization

### Adding New Modules
To add new modules, modify the `courseData` object in `script.js`:
- Add a new module object with `id`, `title`, `description`, `lessons`, and `quiz`
- Each lesson should have `id`, `title`, and `content`
- Each quiz should have `questions` with multiple choice options

### Changing Course Content
Modify the content in the `courseData` object in `script.js` to change lesson content or quiz questions.

### Styling Changes
Modify `styles.css` to adjust colors, fonts, spacing, and other visual elements.

## License

This project is open source and available under the MIT License.