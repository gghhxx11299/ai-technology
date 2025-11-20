// AI Mastery Academy - Enhanced Course Website
// Data storage using localStorage
const DATA_KEY = 'aiCourseData';

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

    // Set up courses page
    setupCoursesPage();

    // Check current authentication status
    checkAuthStatus();
});

// Data management
let courseData = {
    modules: [
        {
            id: 1,
            title: "Introduction to AI",
            description: "Learn the fundamentals of Artificial Intelligence and its applications",
            duration: "2 weeks",
            lessons: [
                {
                    id: 1,
                    title: "What is Artificial Intelligence?",
                    content: `
                        <h3>What is Artificial Intelligence?</h3>
                        <p>Artificial Intelligence (AI) is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals. Leading AI textbooks define the field as the study of "intelligent agents": any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.</p>
                        <p>AI research has been defined as the field of study of intelligent agents, which refers to any system that learns how to recognize its environment and takes actions that maximize its chance of success.</p>
                        <h4>Key Concepts:</h4>
                        <ul>
                            <li>Perception and reasoning</li>
                            <li>Learning from experience</li>
                            <li>Problem solving and decision making</li>
                            <li>Adaptation to new situations</li>
                        </ul>
                        <h4>Applications:</h4>
                        <p>AI is applied across numerous fields including healthcare, finance, transportation, and entertainment to solve complex problems and automate tasks.</p>

                        <div class="video-section">
                            <h4>Recommended Video: What is AI?</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ad79nYk2keg?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>This video provides an excellent introduction to AI, explaining how machines can think and learn like humans.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Recommended Reading</h4>
                            <p>For a deeper understanding of AI concepts, read about the Turing Test and how it defines machine intelligence. The test, proposed by Alan Turing in 1950, evaluates a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Thought Exercise</h4>
                            <p>Think about the AI systems you encounter in daily life. Create a list of these systems and identify which of the key concepts mentioned above they demonstrate. Consider how they perceive their environment, make decisions, and adapt.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "History and Evolution of AI",
                    content: `
                        <h3>History and Evolution of AI</h3>
                        <p>The field of AI research was born at a Dartmouth College workshop in 1956. Attendees Allen Newell, Herbert Simon, John McCarthy, Marvin Minsky and Arthur Samuel became the founders and key contributors to the field.</p>
                        <h4>Key Milestones:</h4>
                        <ol>
                            <li><strong>1950s:</strong> Birth of AI research</li>
                            <li><strong>1960s-70s:</strong> Early optimism and the first AI "winter"</li>
                            <li><strong>1980s:</strong> Expert systems and revival</li>
                            <li><strong>1990s-2000s:</strong> Machine learning growth</li>
                            <li><strong>2010s-Present:</strong> Deep learning revolution</li>
                        </ol>
                        <h4>Modern Developments:</h4>
                        <p>Today's AI systems can recognize speech, images, and text with remarkable accuracy, play complex games at superhuman levels, and assist in scientific research across multiple domains.</p>

                        <div class="video-section">
                            <h4>Recommended Video: History of AI</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/yaL5ZMvRRqE?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>This video covers the fascinating history of AI development, from early concepts to modern breakthroughs.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>The Dartmouth Conference of 1956 is often cited as the birth of AI as a field. The proposal for the conference stated: "Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Research Activity</h4>
                            <p>Research one of the early AI projects (like ELIZA, Shakey the Robot, or the Logic Theorist) and write a brief summary of what it accomplished and why it was significant. How does this early work relate to modern AI systems?</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Branches and Applications of AI",
                    content: `
                        <h3>Branches of AI</h3>
                        <p>Artificial Intelligence encompasses several specialized areas, each focusing on different aspects of intelligent behavior.</p>
                        <h4>Main Branches:</h4>
                        <ul>
                            <li><strong>Machine Learning:</strong> Systems that learn from data without explicit programming</li>
                            <li><strong>Natural Language Processing:</strong> Enabling computers to understand and process human language</li>
                            <li><strong>Computer Vision:</strong> Giving computers the ability to interpret and understand visual information</li>
                            <li><strong>Robotics:</strong> Combining AI with physical machines to perform tasks</li>
                            <li><strong>Expert Systems:</strong> Knowledge-based systems that mimic human decision-making</li>
                        </ul>
                        <h4>Interconnected Fields:</h4>
                        <p>These branches often overlap and work together to create more sophisticated AI solutions.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Branches of AI</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GlGUTBWaDfc?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Learn about the different branches and subfields of Artificial Intelligence.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Case Study: AI in Healthcare</h4>
                            <p>Google's DeepMind has developed AI systems that can diagnose eye diseases as accurately as world-leading experts. This system processes optical coherence tomography scans to detect over 50 eye diseases with 94% accuracy.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Application Analysis</h4>
                            <p>Choose one of the AI branches above and find a real-world application in an industry of your choice. Research how it works, what problem it solves, and what benefits it provides. Prepare a short presentation (2-3 minutes) on your findings.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "AI in the Real World",
                    content: `
                        <h3>Modern AI Applications</h3>
                        <p>Today's AI technologies are transforming every aspect of our lives, from how we work to how we interact with technology.</p>
                        <h4>Real-World Applications:</h4>
                        <ul>
                            <li><strong>Healthcare:</strong> Medical diagnosis, drug discovery, personalized treatment</li>
                            <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
                            <li><strong>Transportation:</strong> Self-driving cars, route optimization, traffic prediction</li>
                            <li><strong>Retail:</strong> Recommendation systems, inventory management, customer service</li>
                            <li><strong>Manufacturing:</strong> Quality control, predictive maintenance, supply chain optimization</li>
                        </ul>
                        <h4>Future Impact:</h4>
                        <p>Modern AI applications continue to expand, addressing global challenges such as climate change, healthcare accessibility, and resource optimization.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Modern Applications</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/CiSaY2xl9V4?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>See real-world examples of how AI is being applied across different industries today.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Ethical Frameworks</h4>
                            <p>Organizations like the Partnership on AI and IEEE are developing ethical frameworks to guide the development of responsible AI systems. Principles include fairness, accountability, and transparency.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Industry Exploration</h4>
                            <p>Identify three AI applications in industries that interest you. For each application, describe the problem it solves, the technology behind it, and any potential ethical considerations. Consider both benefits and risks.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "AI Ethics and Societal Impact",
                    content: `
                        <h3>AI Ethics and Societal Impact</h3>
                        <p>As AI systems become more powerful and pervasive, it's crucial to consider their ethical implications and societal impact.</p>
                        <h4>Key Ethical Issues:</h4>
                        <ul>
                            <li><strong>Bias and Fairness:</strong> Ensuring AI systems don't perpetuate discrimination</li>
                            <li><strong>Privacy:</strong> Protecting personal data used by AI systems</li>
                            <li><strong>Transparency:</strong> Making AI decisions understandable to users</li>
                            <li><strong>Accountability:</strong> Determining responsibility for AI system actions</li>
                            <li><strong>Job Displacement:</strong> Managing the impact on employment</li>
                        </ul>
                        <h4>Responsible AI Development:</h4>
                        <p>Organizations are increasingly focusing on developing AI that is beneficial, fair, and safe for humanity.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Ethics in AI</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/J2twG6W2TGo?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Explore the key ethical challenges in AI development and deployment.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Regulatory Landscape</h4>
                            <p>Many countries are developing regulations for AI use. Examples include the EU's proposed AI Act and various national AI strategies. These frameworks aim to promote innovation while protecting citizens' rights.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Ethical Analysis</h4>
                            <p>Choose an AI application you've encountered recently (e.g., social media algorithm, recommendation system, voice assistant). Analyze potential ethical implications and propose ways to address them while maintaining the system's benefits. Consider multiple perspectives in your analysis.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What does AI stand for?",
                        options: ["Automatic Intelligence", "Artificial Intelligence", "Advanced Interface", "Automated Internet"],
                        correct: 1,
                        explanation: "AI stands for Artificial Intelligence, which refers to systems that perform tasks typically requiring human intelligence."
                    },
                    {
                        question: "When was the field of AI research formally born?",
                        options: ["1946", "1956", "1966", "1976"],
                        correct: 1,
                        explanation: "The Dartmouth College workshop in 1956 is commonly considered the birth of AI research as an academic discipline."
                    },
                    {
                        question: "Which of the following is NOT a common AI application?",
                        options: ["Natural Language Processing", "Computer Vision", "Data Storage", "Robotics"],
                        correct: 2,
                        explanation: "While AI systems often process stored data, data storage itself is not an AI application."
                    },
                    {
                        question: "What is a key ethical concern regarding AI systems?",
                        options: ["Speed of computation", "Energy consumption", "Bias and fairness", "Hardware cost"],
                        correct: 2,
                        explanation: "Ensuring AI systems are fair and don't perpetuate discrimination is a major ethical concern in AI development."
                    },
                    {
                        question: "True or False: The Dartmouth Conference of 1956 is considered the birth of AI as a field.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "The Dartmouth Conference of 1956 is widely recognized as the birth of AI as a field of study."
                    },
                    {
                        question: "What was significant about Google's DeepMind in healthcare?",
                        options: ["Created the first medical AI", "Diagnosed eye diseases with 94% accuracy", "Developed new drugs", "Improved surgery robots"],
                        correct: 1,
                        explanation: "Google's DeepMind developed AI that can diagnose over 50 eye diseases with 94% accuracy from OCT scans."
                    },
                    {
                        question: "Personal Reflection: How do you think AI will impact your chosen career field?",
                        options: ["Will replace many jobs", "Will create new opportunities", "Will require new skills", "All of the above"],
                        correct: "any", // This indicates there's no wrong answer
                        explanation: "This is a personal reflection question about your perspective on AI's impact on your career."
                    },
                    {
                        question: "True or False: Ethics in AI primarily concerns the speed of computation.",
                        options: ["True", "False"],
                        correct: 1,
                        explanation: "AI ethics focuses on fairness, privacy, transparency, and accountability, not computational speed."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 2,
            title: "Machine Learning Fundamentals",
            description: "Understanding the core concepts of Machine Learning and its applications",
            duration: "3 weeks",
            lessons: [
                {
                    id: 1,
                    title: "How the Field Evolves",
                    content: `
                        <h3>How the Field Evolves</h3>
                        <p>The field of Artificial Intelligence and Machine Learning has undergone dramatic changes since its inception, with breakthroughs occurring regularly.</p>
                        <h4>Key Evolution Points:</h4>
                        <ul>
                            <li><strong>1950s-60s:</strong> Foundational concepts and early optimism</li>
                            <li><strong>1970s-80s:</strong> First AI winter and expert systems era</li>
                            <li><strong>1990s-2000s:</strong> Machine learning growth and statistical approaches</li>
                            <li><strong>2010s-Present:</strong> Deep learning revolution and widespread adoption</li>
                        </ul>
                        <h4>Current Trends:</h4>
                        <p>Today's AI landscape is characterized by large language models, generative AI, automated machine learning, and edge AI deployment.</p>

                        <div class="video-section">
                            <h4>Recommended Video: How the Field Evolves</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3EgYAZxnaP0?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Learn how the field of AI and Machine Learning has evolved over the decades.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>Arthur Samuel, a pioneer in the field, coined the term "Machine Learning" in 1959. He defined it as "the field of study that gives computers the ability to learn without being explicitly programmed."</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Timeline Activity</h4>
                            <p>Create a visual timeline showing the major milestones in ML development, including the key people, innovations, and their impact. Highlight any interesting patterns or recurring themes in the evolution.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Types of Learning",
                    content: `
                        <h3>Types of Machine Learning</h3>
                        <p>There are three main types of machine learning, each with its own approach and use cases:</p>
                        <h4>Supervised Learning:</h4>
                        <ul>
                            <li>Uses labeled training data</li>
                            <li>Predicts outputs from input data</li>
                            <li>Examples: Classification, Regression</li>
                        </ul>
                        <h4>Unsupervised Learning:</h4>
                        <ul>
                            <li>Uses unlabeled data</li>
                            <li>Finds patterns in data</li>
                            <li>Examples: Clustering, Association rule learning</li>
                        </ul>
                        <h4>Reinforcement Learning:</h4>
                        <ul>
                            <li>Learns through rewards and penalties</li>
                            <li>Interacts with environment</li>
                            <li>Examples: Game playing, Robotics, Recommendation systems</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Types of Machine Learning</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/5WcZeO4dwLA?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Understand the differences between supervised, unsupervised, and reinforcement learning.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Real-World Examples</h4>
                            <p>Netflix uses supervised learning to predict what movies you might enjoy based on your viewing history. Google uses unsupervised learning to group similar search results. Game-playing AIs like AlphaGo use reinforcement learning to improve their gameplay through trial and error.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Categorization Exercise</h4>
                            <p>Find three different real-world applications of ML and categorize each as supervised, unsupervised, or reinforcement learning. Justify your categorization and research the specific algorithms typically used in each application.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Common ML Algorithms",
                    content: `
                        <h3>Common Machine Learning Algorithms</h3>
                        <p>Different algorithms are suited for different types of problems. Here are some of the most commonly used algorithms:</p>
                        <h4>Linear Regression:</h4>
                        <p>Used for predicting continuous values. Finds the best linear relationship between input features and target variable.</p>
                        <h4>Logistic Regression:</h4>
                        <p>Used for binary classification problems. Predicts probability of belonging to a class.</p>
                        <h4>Decision Trees:</h4>
                        <p>Creates a tree-like model of decisions. Easy to interpret and visualize.</p>
                        <h4>K-Means Clustering:</h4>
                        <p>Groups similar data points together. Used for market segmentation, image compression.</p>
                        <h4>Neural Networks:</h4>
                        <p>Computational models inspired by biological neural networks. Foundation of deep learning.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Common ML Algorithms Explained</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/162rPcGg76c?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Visual explanations of the most important machine learning algorithms.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Algorithm Selection</h4>
                            <p>The choice of algorithm depends on several factors: the size of the dataset, the type of data, the business requirements, and interpretability needs. Linear regression is simple and interpretable, while neural networks can model complex relationships but are harder to interpret.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Algorithm Comparison</h4>
                            <p>Create a decision matrix comparing different ML algorithms based on criteria like interpretability, performance on small datasets, ability to handle non-linear patterns, and computational requirements. Identify use cases for each algorithm.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Feature Engineering and Data Preprocessing",
                    content: `
                        <h3>Feature Engineering and Data Preprocessing</h3>
                        <p>Data preprocessing and feature engineering are crucial steps in the machine learning pipeline that often determine the success of a model.</p>
                        <h4>Data Preprocessing Steps:</h4>
                        <ul>
                            <li><strong>Data Cleaning:</strong> Handling missing values, removing duplicates, identifying outliers</li>
                            <li><strong>Data Transformation:</strong> Normalization, scaling, encoding categorical variables</li>
                            <li><strong>Data Splitting:</strong> Dividing data into training, validation, and test sets</li>
                        </ul>
                        <h4>Feature Engineering:</h4>
                        <ul>
                            <li><strong>Feature Extraction:</strong> Creating new features from raw data</li>
                            <li><strong>Feature Selection:</strong> Choosing the most relevant features</li>
                            <li><strong>Feature Scaling:</strong> Normalizing features to similar ranges</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Data Preprocessing for ML</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/hI5TJY2hC8s?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Learn the importance of data preprocessing in machine learning projects.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Best Practices</h4>
                            <p>Always preprocess your data before training. Consider using techniques like cross-validation to ensure your model generalizes well. Pay special attention to data leakage which can lead to overly optimistic performance estimates.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Data Preprocessing Challenge</h4>
                            <p>Download a dataset from Kaggle or UCI Machine Learning Repository. Apply the preprocessing techniques mentioned in this lesson to prepare the data for machine learning. Document each preprocessing step and explain why you chose it.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "Model Evaluation",
                    content: `
                        <h3>Evaluating Machine Learning Models</h3>
                        <p>Evaluation is crucial to ensure models perform well on new, unseen data. Different metrics are used for different types of problems.</p>
                        <h4>Classification Metrics:</h4>
                        <ul>
                            <li><strong>Accuracy:</strong> Percentage of correct predictions</li>
                            <li><strong>Precision:</strong> Proportion of positive predictions that were correct</li>
                            <li><strong>Recall:</strong> Proportion of actual positives that were identified</li>
                            <li><strong>F1-Score:</strong> Harmonic mean of precision and recall</li>
                        </ul>
                        <h4>Regression Metrics:</h4>
                        <ul>
                            <li><strong>Mean Absolute Error (MAE):</strong> Average absolute difference between predicted and actual values</li>
                            <li><strong>Mean Squared Error (MSE):</strong> Average squared difference between predicted and actual values</li>
                            <li><strong>R² Score:</strong> Proportion of variance explained by the model</li>
                        </ul>
                        <h4>Overfitting and Underfitting:</h4>
                        <p>Overfitting occurs when a model learns too much from training data and fails to generalize. Underfitting occurs when a model is too simple to capture the underlying pattern.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Model Evaluation Techniques</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lGySjH2pY6E?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Learn how to properly evaluate machine learning models and avoid common pitfalls.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Cross-Validation</h4>
                            <p>Cross-validation is a technique to evaluate model performance by splitting data into multiple training and validation sets. K-fold cross-validation is a popular approach where the data is divided into k subsets, and the model is trained and validated k times, each time using a different subset as the validation set.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Model Evaluation Lab</h4>
                            <p>Train a simple model (like a decision tree) on a dataset. Evaluate it using multiple metrics and compare the results. Create a confusion matrix for classification tasks. Analyze whether your model is overfitting or underfitting.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What is Machine Learning?",
                        options: ["A type of robot", "A subset of AI that learns from data", "A programming language", "A database system"],
                        correct: 1,
                        explanation: "Machine Learning is a subset of AI that focuses on building systems that learn from data without being explicitly programmed."
                    },
                    {
                        question: "Which type of learning uses labeled training data?",
                        options: ["Unsupervised Learning", "Reinforcement Learning", "Supervised Learning", "None of the above"],
                        correct: 2,
                        explanation: "Supervised learning uses labeled training data to make predictions on new data."
                    },
                    {
                        question: "What is overfitting in ML?",
                        options: ["Model is too simple", "Model learns too much from training data", "Model has no training data", "Model is too fast"],
                        correct: 1,
                        explanation: "Overfitting occurs when a model learns the training data too well, including noise and outliers, and fails to generalize to new data."
                    },
                    {
                        question: "True or False: In traditional programming, we input data and outputs to get programs.",
                        options: ["True", "False"],
                        correct: 1,
                        explanation: "In traditional programming, we input data and programs to get outputs. In ML, we input data and outputs to get programs (models)."
                    },
                    {
                        question: "Which algorithm would be best for grouping customers with similar purchasing habits?",
                        options: ["Linear Regression", "Logistic Regression", "K-Means Clustering", "Decision Tree"],
                        correct: 2,
                        explanation: "K-Means Clustering is used for grouping similar data points together without labels."
                    },
                    {
                        question: "Personal Reflection: How might machine learning impact your daily life in the next 5 years?",
                        options: ["More personalized recommendations", "Improved healthcare", "Increased automation", "All of the above"],
                        correct: "any",
                        explanation: "This is a personal reflection question about how ML might affect your life."
                    },
                    {
                        question: "What does the R² Score measure in regression?",
                        options: ["Error rate", "Variance explained by the model", "Prediction accuracy", "Processing speed"],
                        correct: 1,
                        explanation: "R² Score measures the proportion of variance in the target variable that is explained by the model."
                    },
                    {
                        question: "True or False: Cross-validation helps prevent overfitting.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "Cross-validation helps evaluate model performance and can indicate if a model is overfitting to the training data."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 3,
            title: "Neural Networks and Deep Learning",
            description: "Deep dive into neural networks and deep learning concepts and applications",
            duration: "3 weeks",
            lessons: [
                {
                    id: 1,
                    title: "Neural Network Basics",
                    content: `
                        <h3>Neural Networks</h3>
                        <p>Artificial neural networks are computing systems vaguely inspired by the biological neural networks that constitute animal brains. They consist of interconnected nodes (neurons) that process information using dynamic state responses to external inputs.</p>
                        <h4>Structure of Neural Networks:</h4>
                        <ul>
                            <li><strong>Input Layer:</strong> Receives data from the external environment</li>
                            <li><strong>Hidden Layers:</strong> Process the data through weighted connections</li>
                            <li><strong>Output Layer:</strong> Produces the final result</li>
                        </ul>
                        <h4>Learning Process:</h4>
                        <p>Neural networks learn by adjusting connection weights through a process called backpropagation, minimizing the difference between predicted and actual outputs.</p>
                        <h4>Activation Functions:</h4>
                        <p>Functions that determine whether a neuron should be activated. Common ones include ReLU, Sigmoid, and Tanh.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Neural Networks Explained</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/aircAruvnKk?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Visual introduction to neural networks and how they work, with excellent animations.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Biological Inspiration</h4>
                            <p>The concept of artificial neural networks was inspired by the structure and function of biological neurons in the brain. A biological neuron receives signals through dendrites, processes them in the cell body, and transmits them through the axon to other neurons.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Neural Network Visualization</h4>
                            <p>Use an online neural network visualization tool (like TensorFlow Playground) to experiment with different network architectures. Observe how changing the number of layers, neurons, and activation functions affects learning. Document your observations.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Deep Learning Architectures",
                    content: `
                        <h3>Deep Learning Architectures</h3>
                        <p>Deep learning involves neural networks with multiple hidden layers. Various architectures have been developed for different tasks:</p>
                        <h4>Convolutional Neural Networks (CNNs):</h4>
                        <p>Specialized for processing grid-like data such as images. Uses convolutional layers to detect features at different levels of abstraction.</p>
                        <h4>Recurrent Neural Networks (RNNs):</h4>
                        <p>Designed for sequential data like text or time series. Has connections that form directed cycles, allowing for memory of previous inputs.</p>
                        <h4>Long Short-Term Memory (LSTM):</h4>
                        <p>A special type of RNN that can learn long-term dependencies. Addresses the vanishing gradient problem in traditional RNNs.</p>
                        <h4>Transformers:</h4>
                        <p>Architecture based on attention mechanisms, particularly successful in natural language processing tasks.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Deep Learning Architectures</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/IX9M9V7W_5s?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Overview of different deep learning architectures and their applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Real-World Applications</h4>
                            <p>CNNs power image recognition systems like those used by Google Photos and Facebook. RNNs and LSTMs are used in language modeling and speech recognition. Transformers power models like GPT and BERT for natural language processing.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Architecture Comparison</h4>
                            <p>Research and compare the performance of different deep learning architectures on a specific task (e.g., image classification, language modeling). Create a comparison table showing the advantages and disadvantages of each architecture for that task.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Training Deep Networks",
                    content: `
                        <h3>Training Deep Neural Networks</h3>
                        <p>Training deep networks involves several challenges and techniques to achieve good performance:</p>
                        <h4>Gradient Descent:</h4>
                        <p>Optimization algorithm that minimizes the loss function by iteratively moving in the direction of steepest descent.</p>
                        <h4>Backpropagation:</h4>
                        <p>Algorithm for calculating gradients in neural networks. Propagates the error gradient from the output layer back to the input layer.</p>
                        <h4>Regularization Techniques:</h4>
                        <ul>
                            <li><strong>Dropout:</strong> Randomly setting some neurons to zero during training</li>
                            <li><strong>L1/L2 Regularization:</strong> Adding penalty terms to prevent overfitting</li>
                            <li><strong>Batch Normalization:</strong> Normalizing inputs to each layer</li>
                        </ul>
                        <h4>Hyperparameter Tuning:</h4>
                        <p>Adjusting parameters like learning rate, batch size, and network architecture to optimize performance.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Backpropagation Explained</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ilg3gGewQ1U?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Detailed explanation of the backpropagation algorithm used to train neural networks.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Training Challenges</h4>
                            <p>Training deep networks requires significant computational resources and can be sensitive to hyperparameter choices. Techniques like batch normalization and residual connections have helped make deeper networks more trainable.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Training Experiment</h4>
                            <p>Use a simple neural network framework (like TensorFlow.js in the browser) to train a small network on a simple dataset. Experiment with different hyperparameters (learning rate, batch size, number of epochs) and observe the effect on training performance.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Applications and Future",
                    content: `
                        <h3>Applications and Future of Deep Learning</h3>
                        <p>Deep learning has enabled breakthroughs in many fields and continues to evolve:</p>
                        <h4>Current Applications:</h4>
                        <ul>
                            <li>Computer Vision: Image recognition, object detection</li>
                            <li>Natural Language Processing: Translation, text generation, question answering</li>
                            <li>Speech Recognition: Virtual assistants, transcription services</li>
                            <li>Autonomous Systems: Self-driving cars, robotics</li>
                            <li>Healthcare: Medical imaging analysis, drug discovery</li>
                        </ul>
                        <h4>Future Directions:</h4>
                        <ul>
                            <li>Federated Learning: Training on distributed data</li>
                            <li>Neuromorphic Computing: Hardware designed for neural networks</li>
                            <li>Explainable AI: Making neural networks more interpretable</li>
                            <li>Continual Learning: Networks that learn without forgetting</li>
                        </ul>
                        <h4>Challenges:</h4>
                        <p>Despite successes, deep learning faces challenges including data requirements, interpretability, and robustness to adversarial examples.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Future of Deep Learning</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Pb7-6yEpV8Q?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Discussion of the future possibilities and challenges in deep learning research.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Ethical Considerations</h4>
                            <p>As deep learning systems become more pervasive, considerations around bias, privacy, and fairness become increasingly important. Researchers are working on developing more robust and interpretable models.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Research Project</h4>
                            <p>Research a recent breakthrough in deep learning (published in the last 2 years). Prepare a presentation explaining the innovation, how it works, what problem it solves, and its potential impact. Include visual aids if possible.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What are artificial neural networks inspired by?",
                        options: ["Computer processors", "Biological neural networks", "Mathematical formulas", "Software algorithms"],
                        correct: 1,
                        explanation: "Artificial neural networks are computing systems inspired by the biological neural networks that constitute animal brains."
                    },
                    {
                        question: "What does CNN stand for in deep learning?",
                        options: ["Computer Neural Network", "Convolutional Neural Network", "Central Neural Network", "Core Neural Network"],
                        correct: 1,
                        explanation: "CNN stands for Convolutional Neural Network, which is specialized for processing grid-like data such as images."
                    },
                    {
                        question: "What is the main advantage of LSTM over traditional RNNs?",
                        options: ["Faster training", "Better handling of long-term dependencies", "Less memory usage", "Simpler architecture"],
                        correct: 1,
                        explanation: "Long Short-Term Memory (LSTM) networks address the vanishing gradient problem in traditional RNNs and are better at handling long-term dependencies."
                    },
                    {
                        question: "True or False: The backpropagation algorithm propagates error gradients from the output layer back to the input layer.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "Backpropagation calculates gradients by propagating the error backwards from the output layer to the input layer."
                    },
                    {
                        question: "Which architecture is particularly effective for image recognition?",
                        options: ["RNN", "LSTM", "CNN", "Transformer"],
                        correct: 2,
                        explanation: "CNNs (Convolutional Neural Networks) are specialized for processing grid-like data such as images."
                    },
                    {
                        question: "Personal Reflection: How comfortable do you feel about the pace of advancement in AI technologies?",
                        options: ["Excited and optimistic", "Cautious but hopeful", "Concerned about implications", "All of the above are valid"],
                        correct: "any",
                        explanation: "This is a personal reflection on your feelings about AI advancement."
                    },
                    {
                        question: "What does dropout regularization do?",
                        options: ["Makes the network faster", "Reduces overfitting by randomly setting neurons to zero", "Increases network capacity", "Improves accuracy"],
                        correct: 1,
                        explanation: "Dropout randomly sets some neurons to zero during training to prevent overfitting."
                    },
                    {
                        question: "True or False: Transformers have been very successful in natural language processing tasks.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "Transformers have powered breakthrough models like GPT and BERT in natural language processing."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 4,
            title: "Natural Language Processing",
            description: "Techniques and applications for processing and understanding human language with AI",
            duration: "3 weeks",
            lessons: [
                {
                    id: 1,
                    title: "Introduction to NLP",
                    content: `
                        <h3>Introduction to Natural Language Processing</h3>
                        <p>Natural Language Processing (NLP) is a subfield of AI that focuses on the interaction between computers and humans through natural language. The goal is to enable computers to understand, interpret, and generate human language in a valuable way.</p>
                        <h4>Key Challenges in NLP:</h4>
                        <ul>
                            <li><strong>Ambiguity:</strong> Human language is inherently ambiguous, with words having multiple meanings</li>
                            <li><strong>Context:</strong> Meaning often depends on context and prior knowledge</li>
                            <li><strong>Structure:</strong> Language has complex grammatical structures</li>
                            <li><strong>Variability:</strong> Language varies across regions, individuals, and contexts</li>
                        </ul>
                        <h4>Common NLP Tasks:</h4>
                        <ul>
                            <li>Text classification</li>
                            <li>Sentiment analysis</li>
                            <li>Named entity recognition</li>
                            <li>Machine translation</li>
                            <li>Question answering</li>
                            <li>Text summarization</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Introduction to NLP</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8rDhX0zHq4o?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Overview of Natural Language Processing and its applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>NLP began in the 1950s with simple rule-based systems. The field has evolved through statistical approaches in the 1990s and 2000s to modern deep learning approaches that have achieved human-level performance on many tasks.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Text Analysis</h4>
                            <p>Choose a short text (like a news article or social media post) and identify linguistic elements like named entities, sentiment, and potential ambiguities. Consider how these might be challenging for an NLP system.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Text Preprocessing and Feature Extraction",
                    content: `
                        <h3>Text Preprocessing and Feature Extraction</h3>
                        <p>Before NLP models can process text, it needs to be preprocessed and converted into a format suitable for machine learning algorithms.</p>
                        <h4>Text Preprocessing Steps:</h4>
                        <ul>
                            <li><strong>Tokenization:</strong> Breaking text into individual words or subwords</li>
                            <li><strong>Normalization:</strong> Converting text to lowercase, handling contractions</li>
                            <li><strong>Stop Word Removal:</strong> Removing common words that don't carry much meaning</li>
                            <li><strong>Stemming/Lemmatization:</strong> Reducing words to their root form</li>
                            <li><strong>Handling Rare Words:</strong> Dealing with infrequent terms</li>
                        </ul>
                        <h4>Feature Extraction Methods:</h4>
                        <ul>
                            <li><strong>Bag of Words (BoW):</strong> Simple frequency counts</li>
                            <li><strong>TF-IDF:</strong> Term frequency-inverse document frequency</li>
                            <li><strong>Word Embeddings:</strong> Dense vector representations (Word2Vec, GloVe)</li>
                            <li><strong>Contextual Embeddings:</strong> Dynamic representations like BERT</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Text Preprocessing Techniques</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3OQNZ4xWU8E?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Learn about preprocessing text data for NLP applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Modern Approaches</h4>
                            <p>Contemporary NLP has shifted towards contextual embeddings and transformer models that can generate rich representations of text that capture meaning, context, and relationships between words.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Text Preprocessing Lab</h4>
                            <p>Take a paragraph of text and apply various preprocessing steps (tokenization, stop word removal, stemming). Compare the original text with the processed version. Consider what information is preserved and what is lost at each step.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Classical NLP Models",
                    content: `
                        <h3>Classical NLP Models</h3>
                        <p>Before the deep learning era, NLP relied on statistical models and rule-based approaches that were highly effective for many tasks.</p>
                        <h4>Key Classical Models:</h4>
                        <ul>
                            <li><strong>N-grams:</strong> Models that predict the next word based on the previous n-1 words</li>
                            <li><strong>Hidden Markov Models (HMMs):</strong> Used for sequence labeling tasks like part-of-speech tagging</li>
                            <li><strong>Naive Bayes:</strong> Simple yet effective for text classification tasks</li>
                            <li><strong>Maximum Entropy Models:</strong> More sophisticated models for classification</li>
                            <li><strong>Support Vector Machines (SVMs):</strong> Powerful classifiers for text categorization</li>
                        </ul>
                        <h4>Applications:</h4>
                        <p>These models were successfully applied to tasks like spam detection, sentiment analysis, and language modeling before being largely replaced by neural approaches.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Classical NLP Models</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8d92fyywNkQ?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Understanding the foundations of NLP before deep learning.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Legacy and Integration</h4>
                            <p>While neural models dominate modern NLP, classical models still have their place, especially when training data is limited or computational resources are constrained. They're also valuable for understanding the fundamentals of language modeling.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Model Comparison</h4>
                            <p>Research and compare the performance of a classical NLP model (like Naive Bayes) with a modern neural approach on a simple text classification task. Consider trade-offs like accuracy, computational requirements, and interpretability.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Modern Neural Language Models",
                    content: `
                        <h3>Modern Neural Language Models</h3>
                        <p>Neural language models have revolutionized NLP, enabling systems to understand and generate human language with unprecedented quality.</p>
                        <h4>Evolution of Neural Models:</h4>
                        <ul>
                            <li><strong>Word Embeddings:</strong> Word2Vec, GloVe (2013-2014)</li>
                            <li><strong>Recurrent Models:</strong> LSTMs, GRUs for sequence processing</li>
                            <li><strong>Attention Mechanisms:</strong> Allowing models to focus on relevant parts of input</li>
                            <li><strong>Transformer Architecture:</strong> Revolutionizing sequence modeling (2017)</li>
                            <li><strong>Pretrained Models:</strong> BERT, GPT, T5 enabling transfer learning</li>
                            <li><strong>Large Language Models:</strong> GPT-3, ChatGPT, and similar models</li>
                        </ul>
                        <h4>Key Innovations:</h4>
                        <p>The transformer architecture and self-attention mechanism have been particularly transformative, enabling parallel processing and better handling of long-range dependencies in text.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Neural Language Models</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/TQQlZfK8eSg?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>How neural networks transformed natural language processing.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Pretraining and Fine-tuning</h4>
                            <p>Modern NLP relies heavily on pretraining large models on massive text corpora and then fine-tuning them for specific tasks, enabling state-of-the-art performance with less task-specific data.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Language Model Exploration</h4>
                            <p>Experiment with a freely available language model API (like OpenAI's API or Hugging Face's transformers) to explore how modern neural language models work. Try tasks like text completion, translation, or question answering.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "NLP Applications and Ethics",
                    content: `
                        <h3>NLP Applications and Ethics</h3>
                        <p>Natural Language Processing has enabled numerous applications that impact our daily lives, while also raising important ethical considerations.</p>
                        <h4>Major Applications:</h4>
                        <ul>
                            <li><strong>Chatbots and Virtual Assistants:</strong> Siri, Alexa, customer service bots</li>
                            <li><strong>Machine Translation:</strong> Google Translate, DeepL</li>
                            <li><strong>Content Moderation:</strong> Detecting harmful content online</li>
                            <li><strong>Information Extraction:</strong> Mining insights from large text collections</li>
                            <li><strong>Text-to-Speech and Speech-to-Text:</strong> Accessibility and voice interfaces</li>
                            <li><strong>Legal and Medical Document Analysis:</strong> Processing complex documents</li>
                        </ul>
                        <h4>Ethical Considerations:</h4>
                        <ul>
                            <li><strong>Bias in Language Models:</strong> Models may perpetuate societal biases</li>
                            <li><strong>Privacy:</strong> Processing personal communications</li>
                            <li><strong>Disinformation:</strong> Potential for generating false information</li>
                            <li><strong>Job Impact:</strong> Effect on translation, customer service, writing jobs</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Ethical NLP</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8wK5C8tJ39c?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Ethical implications of Natural Language Processing technologies.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Responsible NLP Development</h4>
                            <p>Researchers and developers are working on techniques to mitigate bias, improve transparency, and ensure that NLP technologies benefit society while minimizing harm. This includes data curation, model debiasing, and inclusive design practices.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Ethical Analysis</h4>
                            <p>Choose an NLP application (like automated hiring tools, content moderation, or social media analysis) and analyze its potential ethical implications. Propose strategies to address these concerns while maintaining the technology's benefits.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What does NLP stand for?",
                        options: ["Neural Language Processing", "Natural Language Processing", "New Language Patterns", "Network Linguistics Platform"],
                        correct: 1,
                        explanation: "NLP stands for Natural Language Processing, which is a field of AI focused on enabling computers to understand, interpret, and generate human language."
                    },
                    {
                        question: "What is the primary purpose of tokenization in NLP?",
                        options: ["To translate text", "To break text into individual words or subwords", "To compress text", "To encrypt text"],
                        correct: 1,
                        explanation: "Tokenization is the process of breaking text into individual meaningful units (tokens) such as words, subwords, or characters."
                    },
                    {
                        question: "Which architecture revolutionized neural NLP in 2017?",
                        options: ["LSTM", "CNN", "Transformer", "Feedforward Network"],
                        correct: 2,
                        explanation: "The Transformer architecture introduced attention mechanisms and revolutionized NLP in 2017, leading to state-of-the-art models like BERT and GPT."
                    },
                    {
                        question: "True or False: Neural language models can only process text in a sequential manner.",
                        options: ["True", "False"],
                        correct: 1,
                        explanation: "False - Transformer models can process text in parallel using attention mechanisms, unlike traditional recurrent models that process text sequentially."
                    },
                    {
                        question: "What does TF-IDF stand for?",
                        options: ["Text Frequency - Inverse Document Frequency", "Term Frequency - Inverse Document Frequency", "Total Frequency - Integrated Document Frequency", "Text Format - Intelligent Document Framework"],
                        correct: 1,
                        explanation: "TF-IDF stands for Term Frequency-Inverse Document Frequency, a statistical measure used to evaluate how important a word is to a document in a collection."
                    },
                    {
                        question: "Personal Reflection: How do you think NLP will change human-computer interaction in the next decade?",
                        options: ["More natural conversations", "Better accessibility", "Advanced automation", "All of the above"],
                        correct: "any",
                        explanation: "This is a personal reflection question about the future impact of NLP."
                    },
                    {
                        question: "Which model uses self-attention mechanisms?",
                        options: ["LSTM", "CNN", "Transformer", "Naive Bayes"],
                        correct: 2,
                        explanation: "The Transformer model introduced self-attention mechanisms that allow it to weigh the importance of different words in a sentence."
                    },
                    {
                        question: "True or False: Classical NLP models are completely obsolete in modern applications.",
                        options: ["True", "False"],
                        correct: 1,
                        explanation: "False - While neural models dominate, classical models are still used in specific scenarios and remain valuable for understanding NLP fundamentals."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 5,
            title: "Computer Vision",
            description: "Techniques and applications for enabling computers to interpret and understand visual information",
            duration: "3 weeks",
            lessons: [
                {
                    id: 1,
                    title: "Introduction to Computer Vision",
                    content: `
                        <h3>Introduction to Computer Vision</h3>
                        <p>Computer vision is an interdisciplinary field that deals with how computers can gain high-level understanding from digital images or videos. From a machine learning perspective, it seeks to automate tasks that the human visual system can do.</p>
                        <h4>Core Problems in Computer Vision:</h4>
                        <ul>
                            <li><strong>Image Classification:</strong> Identifying what object is in an image</li>
                            <li><strong>Object Detection:</strong> Locating objects within an image</li>
                            <li><strong>Image Segmentation:</strong> Partitioning an image into multiple segments</li>
                            <li><strong>Image Generation:</strong> Creating new images from text or other images</li>
                            <li><strong>Image Enhancement:</strong> Improving image quality or appearance</li>
                        </ul>
                        <h4>Applications:</h4>
                        <p>Computer vision is used in facial recognition, autonomous vehicles, medical imaging, industrial automation, and many other fields.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Introduction to Computer Vision</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/oYJ_7MvGRtM?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Overview of computer vision and its practical applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Development</h4>
                            <p>Computer vision began in the 1960s with simple geometric shape recognition. The field evolved through feature-based approaches until the 2010s when deep learning revolutionized the field with convolutional neural networks achieving human-level performance on image recognition tasks.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Image Analysis</h4>
                            <p>Look at several images and consider what makes them easy or difficult for computer vision systems to interpret. Identify potential challenges like lighting conditions, occlusion, or complex backgrounds.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Image Processing Fundamentals",
                    content: `
                        <h3>Image Processing Fundamentals</h3>
                        <p>Before complex vision tasks can be performed, images often need to be processed to enhance quality and extract useful information.</p>
                        <h4>Basic Image Operations:</h4>
                        <ul>
                            <li><strong>Filtering:</strong> Smoothing, sharpening, edge detection</li>
                            <li><strong>Geometric Transformations:</strong> Scaling, rotation, translation</li>
                            <li><strong>Color Space Conversion:</strong> RGB, HSV, grayscale</li>
                            <li><strong>Thresholding:</strong> Binarizing images</li>
                            <li><strong>Morphological Operations:</strong> Erosion, dilation for shape manipulation</li>
                        </ul>
                        <h4>Feature Detection:</h4>
                        <p>Techniques to identify distinctive points of interest in images, such as corners, edges, and blobs. These features are invariant to scale, rotation, and illumination changes.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Image Processing Basics</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/19ZPwxH5Gnc?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Introduction to fundamental image processing techniques.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Mathematical Foundation</h4>
                            <p>Image processing operations are based on mathematical concepts like convolution (for filtering), linear algebra (for transformations), and statistics (for enhancement). Understanding these fundamentals helps in selecting appropriate techniques for specific tasks.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Image Processing Lab</h4>
                            <p>Use an image processing library (like OpenCV or an online tool) to apply different filters and transformations to an image. Document the effects of each operation and consider how they might be useful for different computer vision tasks.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Convolutional Neural Networks",
                    content: `
                        <h3>Convolutional Neural Networks (CNNs)</h3>
                        <p>Convolutional Neural Networks are the backbone of modern computer vision. They are specifically designed to process data with a grid-like topology, such as images.</p>
                        <h4>Key CNN Components:</h4>
                        <ul>
                            <li><strong>Convolutional Layers:</strong> Extract features from input images using learnable filters</li>
                            <li><strong>Pooling Layers:</strong> Reduce spatial dimensions and computational complexity</li>
                            <li><strong>Activation Functions:</strong> Introduce non-linearity (typically ReLU)</li>
                            <li><strong>Fully Connected Layers:</strong> Perform final classification based on extracted features</li>
                        </ul>
                        <h4>Advantages of CNNs:</h4>
                        <ul>
                            <li>Parameter sharing reduces the number of parameters</li>
                            <li>Translation invariance allows recognition of objects regardless of position</li>
                            <li>Automatic feature learning eliminates manual feature engineering</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: CNN Architecture Explained</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/FmpDIaiMIeA?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Deep dive into how convolutional neural networks work.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Impact</h4>
                            <p>CNNs first gained prominence when AlexNet won the ImageNet competition in 2012. This achievement triggered the deep learning revolution and established CNNs as the standard approach for image recognition tasks.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>CNN Visualization</h4>
                            <p>Use an online CNN visualization tool to see how different layers of a network process images. Observe how early layers detect basic features (edges, corners) while deeper layers detect more complex patterns (shapes, objects).</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Advanced Computer Vision Techniques",
                    content: `
                        <h3>Advanced Computer Vision Techniques</h3>
                        <p>Modern computer vision systems use sophisticated techniques that go beyond simple image classification to understand and interact with visual content.</p>
                        <h4>Object Detection:</h4>
                        <p>Algorithms like YOLO (You Only Look Once), R-CNN, and SSD can identify and locate multiple objects within a single image, outputting bounding boxes around them.</p>
                        <h4>Image Segmentation:</h4>
                        <ul>
                            <li><strong>Semantic Segmentation:</strong> Classifying each pixel according to its object class</li>
                            <li><strong>Instance Segmentation:</strong> Identifying each object instance separately</li>
                            <li><strong>Panoptic Segmentation:</strong> Combining semantic and instance segmentation</li>
                        </ul>
                        <h4>Recent Developments:</h4>
                        <p>Transformers have been adapted for computer vision tasks (Vision Transformers) and diffusion models have enabled high-quality image generation from text descriptions.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Advanced Vision Techniques</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/nnM25bPdLAo?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Modern advanced techniques in computer vision.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Real-World Applications</h4>
                            <p>Advanced vision techniques are used in autonomous vehicles for scene understanding, in medical imaging for diagnosis, in retail for inventory management, and in security for surveillance. Each application has specific requirements and constraints.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Application Analysis</h4>
                            <p>Research a computer vision application that interests you (e.g., medical image analysis, autonomous driving, or facial recognition). Analyze the specific technical challenges and how advanced techniques address them.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "Computer Vision Ethics and Future",
                    content: `
                        <h3>Computer Vision Ethics and Future Trends</h3>
                        <p>As computer vision technology becomes more powerful and ubiquitous, important ethical considerations and future directions emerge.</p>
                        <h4>Ethical Concerns:</h4>
                        <ul>
                            <li><strong>Privacy:</strong> Surveillance and facial recognition systems</li>
                            <li><strong>Bias:</strong> Systems that perform differently across demographic groups</li>
                            <li><strong>Security:</strong> Vulnerabilities to adversarial attacks</li>
                            <li><strong>Consent:</strong> Use of images without permission</li>
                        </ul>
                        <h4>Future Directions:</h4>
                        <ul>
                            <li><strong>3D Vision:</strong> Understanding and reconstructing 3D scenes from 2D images</li>
                            <li><strong>Video Understanding:</strong> Analyzing temporal sequences and actions</li>
                            <li><strong>Efficient Vision:</strong> Developing lightweight models for edge devices</li>
                            <li><strong>Explainable Vision:</strong> Creating models that can explain their decisions</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Ethics in Computer Vision</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/cFfCJqqf33o?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Ethical considerations in computer vision development and deployment.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Responsible Development</h4>
                            <p>Developers and researchers are working on techniques to audit and mitigate bias, enhance privacy protection, and ensure that computer vision technologies benefit society while respecting individual rights.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Ethical Framework Design</h4>
                            <p>Design an ethical framework for a computer vision application of your choice (e.g., facial recognition in public spaces). Consider privacy, bias, accuracy, and consent issues, and propose mechanisms to address them.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What does CNN stand for in computer vision?",
                        options: ["Computerized Neural Network", "Convolutional Neural Network", "Convolutional Network Node", "Computational Neural Network"],
                        correct: 1,
                        explanation: "CNN stands for Convolutional Neural Network, which is the standard architecture for image processing in deep learning."
                    },
                    {
                        question: "Which task involves identifying what objects are present in an image?",
                        options: ["Object Detection", "Image Classification", "Image Segmentation", "Image Generation"],
                        correct: 1,
                        explanation: "Image Classification identifies what object is present in an image, while object detection also localizes where the object is."
                    },
                    {
                        question: "What is the purpose of pooling layers in CNNs?",
                        options: ["To increase image resolution", "To reduce spatial dimensions and computational complexity", "To add more convolutional filters", "To improve color accuracy"],
                        correct: 1,
                        explanation: "Pooling layers reduce spatial dimensions and computational complexity while retaining important features."
                    },
                    {
                        question: "True or False: CNNs can process images regardless of where objects appear in the image.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "True - CNNs have translation invariance, meaning they can recognize objects regardless of their position in the image."
                    },
                    {
                        question: "What is the difference between semantic and instance segmentation?",
                        options: ["There is no difference", "Semantic segmentation classifies pixels, instance segmentation identifies individual objects", "Semantic segmentation is for color images only", "Instance segmentation is faster than semantic segmentation"],
                        correct: 1,
                        explanation: "Semantic segmentation classifies each pixel by object class, while instance segmentation identifies each individual object instance separately."
                    },
                    {
                        question: "Personal Reflection: How do you feel about the expansion of computer vision and facial recognition technology in public spaces?",
                        options: ["Concerned about privacy", "Supportive of security", "Interested in convenience", "All of these perspectives have merit"],
                        correct: "any",
                        explanation: "This is a personal reflection about the ethical implications of computer vision technology."
                    },
                    {
                        question: "Which of these is NOT an ethical concern in computer vision?",
                        options: ["Privacy", "Bias in recognition systems", "Energy consumption of training", "Consent for image use"],
                        correct: 2,
                        explanation: "While energy consumption is an environmental concern, it's not typically classified as a primary ethical concern compared to privacy, bias, and consent."
                    },
                    {
                        question: "True or False: Traditional computer vision relied heavily on manual feature engineering.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "True - Before deep learning, computer vision required manual design of features like edges, corners, and textures."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 6,
            title: "Robotics and AI Integration",
            description: "Practical applications of AI in robotics and autonomous systems",
            duration: "4 weeks",
            lessons: [
                {
                    id: 1,
                    title: "Introduction to Robotics",
                    content: `
                        <h3>Introduction to Robotics</h3>
                        <p>Robotics is an interdisciplinary branch of engineering and science that involves the design, construction, operation, and use of robots. When combined with AI, robots can perform complex tasks requiring perception, decision-making, and learning.</p>
                        <h4>Key Components of a Robot:</h4>
                        <ul>
                            <li><strong>Sensors:</strong> Cameras, lidar, ultrasonic sensors, tactile sensors</li>
                            <li><strong>Actuators:</strong> Motors, servos, hydraulic systems for movement</li>
                            <li><strong>Controller:</strong> Processing unit running control algorithms</li>
                            <li><strong>Power System:</strong> Batteries or external power source</li>
                            <li><strong>Software:</strong> Algorithms for perception, planning, and control</li>
                        </ul>
                        <h4>Types of Robots:</h4>
                        <ul>
                            <li>Industrial robots (manufacturing, assembly)</li>
                            <li>Service robots (cleaning, companionship)</li>
                            <li>Medical robots (surgery, rehabilitation)</li>
                            <li>Exploration robots (space, underwater, military)</li>
                            <li>Domestic robots (vacuuming, cooking)</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Introduction to Robotics</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RdXw7H_6oko?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Overview of robotics and its applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>The term "robot" was coined by Czech writer Karel Čapek in 1920. Modern robotics began in the 1960s with industrial robots like Unimate. The field has evolved to incorporate AI techniques, leading to more autonomous and adaptive robotic systems.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Robot Analysis</h4>
                            <p>Research a specific robot application (like Tesla's Optimus, Boston Dynamics' robots, or robotic vacuum cleaners) and analyze how it integrates AI technologies for perception, decision-making, and control.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Sensing and Perception in Robotics",
                    content: `
                        <h3>Sensing and Perception in Robotics</h3>
                        <p>For robots to operate effectively in the real world, they must perceive and understand their environment through various sensors and AI-powered interpretation systems.</p>
                        <h4>Common Robot Sensors:</h4>
                        <ul>
                            <li><strong>Cameras:</strong> RGB, stereo, thermal cameras for vision</li>
                            <li><strong>Lidar:</strong> Light Detection and Ranging for 3D mapping</li>
                            <li><strong>Radar:</strong> Radio Detection and Ranging for distance measurement</li>
                            <li><strong>IMU (Inertial Measurement Unit):</strong> Accelerometers and gyroscopes for motion</li>
                            <li><strong>Ultrasonic Sensors:</strong> Sound-based distance measurement</li>
                            <li><strong>Tactile Sensors:</strong> Pressure, force, and texture sensing</li>
                        </ul>
                        <h4>Perception Tasks:</h4>
                        <p>Robots use AI to perform tasks like object recognition, scene understanding, localization, mapping, and navigation based on sensor data.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Robot Perception Systems</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/5Vq54nKqT44?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Understanding how robots perceive their environments.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Sensor Fusion</h4>
                            <p>Modern robots often use multiple sensor types simultaneously, and AI algorithms are needed to combine (fuse) this diverse sensory information into a coherent understanding of the environment.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Sensor Comparison</h4>
                            <p>Compare the advantages and limitations of different types of sensors for robotic applications. Consider factors like range, accuracy, cost, and environmental conditions where they work best.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "Motion Planning and Control",
                    content: `
                        <h3>Motion Planning and Control</h3>
                        <p>For robots to execute tasks, they must plan their movements in space while avoiding obstacles and controlling their actuators to achieve precise motions.</p>
                        <h4>Planning Approaches:</h4>
                        <ul>
                            <li><strong>Path Planning:</strong> Finding a route from start to goal</li>
                            <li><strong>Motion Planning:</strong> Planning with robot dynamics and constraints</li>
                            <li><strong>Task Planning:</strong> High-level sequence of actions to achieve goals</li>
                        </ul>
                        <h4>Control Systems:</h4>
                        <ul>
                            <li><strong>Feedback Control:</strong> Adjusting based on sensor measurements</li>
                            <li><strong>Model Predictive Control:</strong> Optimizing control actions over a time horizon</li>
                            <li><strong>Adaptive Control:</strong> Adjusting control parameters for changing conditions</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Robot Motion Planning</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/748t46s06nM?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>How robots plan and execute movements.</p>
                        </div>

                        <div class="reading-material">
                            <h4>AI in Planning</h4>
                            <p>Recent advances have integrated AI techniques like reinforcement learning and deep learning into motion planning, enabling robots to learn complex behaviors and adapt to new environments.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Planning Simulation</h4>
                            <p>Use an online robotics simulator or visualization tool to explore path planning algorithms. Observe how different algorithms handle obstacles and find optimal routes.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Learning and Adaptation in Robotics",
                    content: `
                        <h3>Learning and Adaptation in Robotics</h3>
                        <p>Modern robots increasingly incorporate machine learning to improve their performance and adapt to new situations without explicit reprogramming.</p>
                        <h4>Learning Approaches:</h4>
                        <ul>
                            <li><strong>Supervised Learning:</strong> Learning from demonstrations or labeled data</li>
                            <li><strong>Reinforcement Learning:</strong> Learning through trial and error with rewards</li>
                            <li><strong>Imitation Learning:</strong> Learning by observing human behavior</li>
                            <li><strong>Transfer Learning:</strong> Applying learned knowledge to new but related tasks</li>
                        </ul>
                        <h4>Applications:</h4>
                        <p>Robots can learn manipulation skills, navigation behaviors, human interaction patterns, and task-specific strategies through these learning approaches.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Robot Learning</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/qv12bYn74gs?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>How robots learn and adapt over time.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Sim-to-Real Transfer</h4>
                            <p>A major challenge in robot learning is transferring skills learned in simulation to real-world robots. Researchers are developing techniques to close this "reality gap" while making learning more efficient.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Learning Case Study</h4>
                            <p>Research a specific example of robot learning (like a robot learning to grasp objects or navigate) and analyze the learning approach used, the challenges faced, and the results achieved.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "Human-Robot Interaction",
                    content: `
                        <h3>Human-Robot Interaction</h3>
                        <p>As robots become more prevalent in human environments, the interaction between humans and robots becomes crucial for successful deployment and acceptance.</p>
                        <h4>Key Aspects of HRI:</h4>
                        <ul>
                            <li><strong>Communication:</strong> Natural language, gestures, and visual interfaces</li>
                            <li><strong>Safety:</strong> Ensuring physical and psychological safety</li>
                            <li><strong>Trust:</strong> Building appropriate levels of trust between humans and robots</li>
                            <li><strong>Acceptance:</strong> Ensuring robots are socially acceptable</li>
                        </ul>
                        <h4>Applications:</h4>
                        <p>Human-robot interaction is critical in assistive robots, collaborative manufacturing, educational robots, and service robots working in human environments.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Human-Robot Interaction</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0FQ1ZQ3Xq1g?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Designing effective interactions between humans and robots.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Design Principles</h4>
                            <p>Effective human-robot interaction requires understanding human psychology, designing intuitive interfaces, and ensuring robots behave predictably and appropriately in social contexts.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Interaction Design</h4>
                            <p>Design an interaction scenario for a specific robot application (e.g., a personal assistant robot or an eldercare robot). Consider how the robot should communicate, what behaviors would be appropriate, and how to ensure safety and trust.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What does LIDAR stand for?",
                        options: ["Light Imaging Detection and Ranging", "Light Detection and Ranging", "Laser Imaging Distance and Ranging", "Linear Imaging Detection and Recognition"],
                        correct: 1,
                        explanation: "LIDAR stands for Light Detection and Ranging, a remote sensing method that uses light in the form of a pulsed laser to measure distances."
                    },
                    {
                        question: "What is the primary difference between path planning and motion planning?",
                        options: ["Path planning is 2D, motion planning is 3D", "Motion planning considers robot dynamics and constraints", "They are the same thing", "Path planning is only for mobile robots"],
                        correct: 1,
                        explanation: "Motion planning considers robot dynamics and constraints, while path planning focuses only on geometric routing from start to goal."
                    },
                    {
                        question: "Which learning approach involves learning from human demonstrations?",
                        options: ["Reinforcement Learning", "Supervised Learning", "Imitation Learning", "Unsupervised Learning"],
                        correct: 2,
                        explanation: "Imitation Learning involves learning by observing and imitating human behavior."
                    },
                    {
                        question: "True or False: Sensor fusion involves using multiple sensor types to improve environmental understanding.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "True - Sensor fusion combines data from multiple sensor types to create a more accurate and robust understanding of the environment."
                    },
                    {
                        question: "What is a major challenge in robot learning when using simulation?",
                        options: ["Simulation is too expensive", "The reality gap", "Humans can't be simulated", "Robots prefer learning in the real world"],
                        correct: 1,
                        explanation: "The 'reality gap' refers to the challenge of transferring skills learned in simulation to real robots due to differences between simulated and real environments."
                    },
                    {
                        question: "Personal Reflection: How comfortable would you be with robots performing tasks in your home?",
                        options: ["Very comfortable", "Somewhat comfortable", "Concerned about safety", "All of these responses are valid depending on the application"],
                        correct: "any",
                        explanation: "This is a personal reflection question about the human-robot interaction scenario."
                    },
                    {
                        question: "Which component is NOT typically part of a robot's architecture?",
                        options: ["Actuators", "Sensors", "Controller", "Neural implants"],
                        correct: 3,
                        explanation: "Neural implants are not a standard component of robot architecture, while actuators, sensors, and controllers are essential components."
                    },
                    {
                        question: "True or False: Human-robot interaction does not need to consider psychological factors.",
                        options: ["True", "False"],
                        correct: 1,
                        explanation: "False - Effective human-robot interaction must consider psychological factors including trust, acceptance, and safety perception."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        },
        {
            id: 7,
            title: "AI in Business and Industry",
            description: "Real-world applications of AI in business operations and industry 4.0",
            duration: "2 weeks",
            lessons: [
                {
                    id: 1,
                    title: "AI Strategy and Business Cases",
                    content: `
                        <h3>AI Strategy and Business Cases</h3>
                        <p>Successfully implementing AI in business requires understanding the strategic value, identifying appropriate use cases, and developing a comprehensive implementation plan.</p>
                        <h4>Key Considerations for AI Strategy:</h4>
                        <ul>
                            <li><strong>Business Value Assessment:</strong> Identifying areas where AI can create measurable impact</li>
                            <li><strong>Data Readiness:</strong> Ensuring quality, quantity, and accessibility of data</li>
                            <li><strong>Technical Infrastructure:</strong> Having appropriate computing and storage resources</li>
                            <li><strong>Regulatory Compliance:</strong> Meeting industry-specific requirements and standards</li>
                            <li><strong>Change Management:</strong> Preparing the organization for transformation</li>
                        </ul>
                        <h4>Common Business Applications:</h4>
                        <ul>
                            <li>Customer service automation</li>
                            <li>Supply chain optimization</li>
                            <li>Financial risk assessment</li>
                            <li>Healthcare diagnostics</li>
                            <li>Manufacturing quality control</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: AI in Business Strategy</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3hX02MrX2rY?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Strategic implementation of AI in business environments.</p>
                        </div>

                        <div class="reading-material">
                            <h4>ROI Considerations</h4>
                            <p>Successful AI implementations are those that deliver measurable improvements to key business metrics. This requires careful planning, pilot testing, and continuous optimization to ensure value realization.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Business Case Development</h4>
                            <p>Pick an industry you're interested in and develop a business case for an AI application. Include problem identification, proposed solution, expected benefits, implementation challenges, and success metrics.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 2,
                    title: "Data-Driven Decision Making",
                    content: `
                        <h3>Data-Driven Decision Making</h3>
                        <p>AI enables organizations to make better decisions by extracting insights from large volumes of data that would be impossible to analyze manually.</p>
                        <h4>Key Components:</h4>
                        <ul>
                            <li><strong>Data Collection:</strong> Systematic gathering of relevant data from multiple sources</li>
                            <li><strong>Data Processing:</strong> Cleaning, transforming, and preparing data for analysis</li>
                            <li><strong>Analysis and Modeling:</strong> Applying AI/ML techniques to extract insights</li>
                            <li><strong>Visualization:</strong> Presenting insights in accessible formats</li>
                            <li><strong>Action and Monitoring:</strong> Implementing decisions and tracking outcomes</li>
                        </ul>
                        <h4>Benefits:</h4>
                        <p>Data-driven decision making reduces bias, identifies patterns humans might miss, enables predictive capabilities, and supports evidence-based strategies.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Data Science in Business</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZP1dLJa4w44?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>How businesses use data and AI for decision making.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Challenges and Solutions</h4>
                            <p>Common challenges include data silos, quality issues, and organizational resistance. Solutions involve establishing data governance, investing in infrastructure, and building data literacy across the organization.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Decision Analysis</h4>
                            <p>Identify a decision you make regularly (personal or professional) and design a data-driven approach to improve it. What data would you collect, how would you analyze it, and how would you measure improvement?</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "AI Ethics in Business",
                    content: `
                        <h3>AI Ethics in Business</h3>
                        <p>As AI becomes more prevalent in business operations, ethical considerations become critical for sustainable and responsible implementation.</p>
                        <h4>Ethical Principles for Business AI:</h4>
                        <ul>
                            <li><strong>Fairness and Non-Discrimination:</strong> Ensuring AI systems treat all individuals equitably</li>
                            <li><strong>Transparency and Explainability:</strong> Understanding how AI systems make decisions</li>
                            <li><strong>Privacy and Data Protection:</strong> Safeguarding customer and employee information</li>
                            <li><strong>Accountability:</strong> Clear responsibility for AI system outcomes</li>
                            <li><strong>Reliability and Safety:</strong> Ensuring AI systems operate safely under expected conditions</li>
                        </ul>
                        <h4>Implementation Strategies:</h4>
                        <p>Companies implement ethical AI through governance frameworks, bias auditing, stakeholder engagement, and continuous monitoring and evaluation of AI systems.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Ethical AI in Business</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/84q2V_614pY?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Implementing responsible AI practices in business.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Regulatory Landscape</h4>
                            <p>Various jurisdictions are developing AI regulations (like the EU AI Act) that businesses must consider when deploying AI systems. Compliance with these regulations is becoming a key business requirement.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Ethics Framework Creation</h4>
                            <p>Create an ethical framework for an AI application in a specific business context. Include guidelines for data use, fairness testing, transparency requirements, and accountability mechanisms.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "Industry Applications and Case Studies",
                    content: `
                        <h3>Industry Applications and Case Studies</h3>
                        <p>AI has been successfully deployed across numerous industries, delivering significant value and transformation.</p>
                        <h4>Healthcare Applications:</h4>
                        <ul>
                            <li>Medical imaging analysis (radiology, pathology)</li>
                            <li>Drug discovery and development</li>
                            <li>Personalized treatment plans</li>
                            <li>Predictive health analytics</li>
                        </ul>
                        <h4>Financial Services:</h4>
                        <ul>
                            <li>Fraud detection and prevention</li>
                            <li>Algorithmic trading</li>
                            <li>Credit scoring and risk assessment</li>
                            <li>Customer service chatbots</li>
                        </ul>
                        <h4>Manufacturing:</h4>
                        <ul>
                            <li>Predictive maintenance</li>
                            <li>Quality control and defect detection</li>
                            <li>Supply chain optimization</li>
                            <li>Robotics and automation</li>
                        </ul>

                        <div class="video-section">
                            <h4>Recommended Video: Real-World AI Applications</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6l1g_38Vc3w?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Success stories of AI implementation across industries.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Measuring Success</h4>
                            <p>Successful AI implementations in business typically measure ROI through specific metrics like cost reduction, efficiency improvement, revenue increase, or error rate reduction. These metrics help justify continued investment and expansion.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Case Study Analysis</h4>
                            <p>Analyze a specific AI case study from an industry of interest. Evaluate the problem, solution, implementation, results, and lessons learned. Consider both the technical and business aspects of the deployment.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 5,
                    title: "Future of AI in Business",
                    content: `
                        <h3>Future of AI in Business</h3>
                        <p>The role of AI in business continues to evolve rapidly, with several trends shaping how organizations will operate in the future.</p>
                        <h4>Emerging Trends:</h4>
                        <ul>
                            <li><strong>Generative AI:</strong> Creating content, designs, and solutions automatically</li>
                            <li><strong>Edge AI:</strong> Processing AI tasks on local devices for real-time decisions</li>
                            <li><strong>AI Governance:</strong> Formal frameworks for managing AI risks and benefits</li>
                            <li><strong>Human-AI Collaboration:</strong> Augmenting human capabilities rather than replacing them</li>
                            <li><strong>AutoML:</strong> Automating the machine learning model development process</li>
                        </ul>
                        <h4>Organizational Changes:</h4>
                        <p>Businesses will need to adapt their structures, processes, and cultures to fully leverage AI capabilities while maintaining human oversight and control.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Future of AI in Business</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/AzamYjWUc3s?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Looking ahead at AI's impact on business operations.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Skills for the Future</h4>
                            <p>As AI becomes more integrated into business operations, the workforce will need new skills in AI literacy, data analysis, and human-AI collaboration. Organizations must invest in training and development to prepare their employees.</p>
                        </div>

                        <div class="practice-exercise">
                            <h4>Future Scenario Planning</h4>
                            <p>Imagine how your chosen industry might look in 5-10 years with advanced AI integration. Describe the changes, new opportunities, challenges, and required adaptations for businesses and workers.</p>
                        </div>
                    `,
                    completed: false
                }
            ],
            quiz: {
                questions: [
                    {
                        question: "What is a key consideration for developing an AI strategy?",
                        options: ["Technical infrastructure", "Data readiness", "Business value assessment", "All of the above"],
                        correct: 3,
                        explanation: "All of these are key considerations: technical infrastructure, data readiness, and business value assessment are all essential for successful AI implementation."
                    },
                    {
                        question: "What does AutoML stand for?",
                        options: ["Automated Machine Learning", "Autonomous Machine Learning", "Advanced Machine Learning", "Augmented Machine Learning"],
                        correct: 0,
                        explanation: "AutoML stands for Automated Machine Learning, which automates the process of applying machine learning techniques."
                    },
                    {
                        question: "Which ethical principle is NOT mentioned in business AI?",
                        options: ["Fairness and Non-Discrimination", "Transparency and Explainability", "Perfect Accuracy", "Privacy and Data Protection"],
                        correct: 2,
                        explanation: "Perfect Accuracy is not an ethical principle. Ethical AI focuses on fairness, transparency, privacy, and accountability rather than achieving perfect results."
                    },
                    {
                        question: "True or False: Edge AI processes data on local devices rather than centralized servers.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "True - Edge AI performs AI tasks on local devices, enabling real-time processing and reducing latency."
                    },
                    {
                        question: "What is Generative AI primarily used for?",
                        options: ["Classification tasks", "Creating new content", "Data cleaning", "Performance optimization"],
                        correct: 1,
                        explanation: "Generative AI is primarily used for creating new content like text, images, or code based on learned patterns."
                    },
                    {
                        question: "Personal Reflection: What is your biggest concern about AI implementation in businesses?",
                        options: ["Job displacement", "Privacy", "Bias and fairness", "All of these are important concerns"],
                        correct: "any",
                        explanation: "This is a personal reflection about potential concerns with business AI implementation."
                    },
                    {
                        question: "Which industry application is NOT mentioned in the lesson?",
                        options: ["Healthcare", "Financial Services", "Agriculture", "Manufacturing"],
                        correct: 2,
                        explanation: "While agriculture does use AI, it was not specifically mentioned in this lesson's industry applications section."
                    },
                    {
                        question: "True or False: Ethical AI implementation requires ongoing monitoring and evaluation.",
                        options: ["True", "False"],
                        correct: 0,
                        explanation: "True - Ethical AI requires continuous monitoring, auditing, and evaluation to ensure systems remain fair, safe, and transparent."
                    }
                ],
                completed: false,
                score: 0
            },
            completed: false
        }
    ]
};

let appData = {
    students: [],
    instructors: [
        {
            id: 1,
            name: "Dr. Jane Smith",
            email: "jane.smith@aitutorials.com",
            bio: "PhD in Computer Science, specializing in AI and Machine Learning",
            expertise: ["AI", "Machine Learning", "Deep Learning"],
            rating: 4.8,
            courses: [1, 2, 3]
        }
    ],
    currentUser: null,
    currentAdmin: null,
    currentInstructor: null,
    certificates: [],
    recentActivity: [],
    courseResources: {
        1: [
            { id: 1, name: "AI Fundamentals Slides", type: "pdf", url: "#" },
            { id: 2, name: "Turing Test Paper", type: "pdf", url: "#" },
            { id: 3, name: "Ethics in AI Guidelines", type: "pdf", url: "#" },
            { id: 4, name: "AI Timeline Infographic", type: "pdf", url: "#" },
            { id: 5, name: "AI Applications in Industry Report", type: "pdf", url: "#" },
            { id: 6, name: "Ethical AI Case Studies", type: "pdf", url: "#" }
        ],
        2: [
            { id: 7, name: "ML Algorithms Cheatsheet", type: "pdf", url: "#" },
            { id: 8, name: "Python ML Tutorial", type: "zip", url: "#" },
            { id: 9, name: "Dataset for Practice", type: "csv", url: "#" },
            { id: 10, name: "Feature Engineering Guide", type: "pdf", url: "#" },
            { id: 11, name: "Model Evaluation Metrics Reference", type: "pdf", url: "#" },
            { id: 12, name: "Scikit-learn Examples", type: "zip", url: "#" }
        ],
        3: [
            { id: 13, name: "Neural Network Architecture", type: "pdf", url: "#" },
            { id: 14, name: "TensorFlow Playground", type: "link", url: "#" },
            { id: 15, name: "CNN Implementation Guide", type: "pdf", url: "#" },
            { id: 16, name: "Deep Learning Best Practices", type: "pdf", url: "#" },
            { id: 17, name: "PyTorch Tutorials Collection", type: "zip", url: "#" },
            { id: 18, name: "Backpropagation Derivation", type: "pdf", url: "#" }
        ],
        4: [
            { id: 19, name: "NLP Preprocessing Guide", type: "pdf", url: "#" },
            { id: 20, name: "BERT Explained", type: "pdf", url: "#" },
            { id: 21, name: "Hugging Face Transformers Tutorial", type: "zip", url: "#" },
            { id: 22, name: "Sentiment Analysis Example", type: "zip", url: "#" },
            { id: 23, name: "Text Preprocessing Toolkit", type: "zip", url: "#" },
            { id: 24, name: "Language Models Comparison", type: "pdf", url: "#" }
        ],
        5: [
            { id: 25, name: "Computer Vision Fundamentals", type: "pdf", url: "#" },
            { id: 26, name: "OpenCV Python Tutorial", type: "zip", url: "#" },
            { id: 27, name: "CNN for Computer Vision", type: "pdf", url: "#" },
            { id: 28, name: "YOLO Object Detection Guide", type: "pdf", url: "#" },
            { id: 29, name: "Image Segmentation Examples", type: "zip", url: "#" },
            { id: 30, name: "Computer Vision Ethics", type: "pdf", url: "#" }
        ],
        6: [
            { id: 31, name: "Robotics Programming Guide", type: "pdf", url: "#" },
            { id: 32, name: "ROS (Robot Operating System) Tutorial", type: "zip", url: "#" },
            { id: 33, name: "Motion Planning Algorithms", type: "pdf", url: "#" },
            { id: 34, name: "Sensor Integration in Robotics", type: "pdf", url: "#" },
            { id: 35, name: "Robot Learning Case Studies", type: "pdf", url: "#" },
            { id: 36, name: "Human-Robot Interaction Research Papers", type: "zip", url: "#" }
        ],
        7: [
            { id: 37, name: "AI Business Strategy Framework", type: "pdf", url: "#" },
            { id: 38, name: "AI Ethics Guidelines for Business", type: "pdf", url: "#" },
            { id: 39, name: "Data Strategy for AI Implementation", type: "pdf", url: "#" },
            { id: 40, name: "ROI Calculator for AI Projects", type: "xls", url: "#" },
            { id: 41, name: "AI Risk Assessment Template", type: "pdf", url: "#" },
            { id: 42, name: "Industry AI Use Cases", type: "pdf", url: "#" }
        ]
    },
    courseDiscussions: {
        1: [
            { id: 1, lessonId: 1, userId: 1, userName: "John Doe", content: "Great explanation of AI fundamentals! I'm curious about the difference between strong and weak AI. Could you elaborate?", timestamp: new Date().toISOString(), likes: 5 },
            { id: 2, lessonId: 1, userId: 2, userName: "Sarah Johnson", content: "I have a question about the Turing Test. Are there other ways to measure machine intelligence?", timestamp: new Date().toISOString(), likes: 2 },
            { id: 3, lessonId: 2, userId: 3, userName: "Michael Chen", content: "The history section was really informative! I never knew about the first AI winter. What caused it?", timestamp: new Date().toISOString(), likes: 8 },
            { id: 4, lessonId: 3, userId: 4, userName: "Emily Davis", content: "The NLP and computer vision branches are fascinating. Can someone explain the difference between them in simpler terms?", timestamp: new Date().toISOString(), likes: 3 },
            { id: 5, lessonId: 5, userId: 5, userName: "Robert Kim", content: "The ethical considerations section was eye-opening. How do companies actually implement ethical AI practices?", timestamp: new Date().toISOString(), likes: 6 }
        ],
        2: [
            { id: 6, lessonId: 1, userId: 6, userName: "David Wilson", content: "How has the field evolved since the early days? Are there similarities to other technological revolutions?", timestamp: new Date().toISOString(), likes: 9 },
            { id: 7, lessonId: 2, userId: 7, userName: "Lisa Thompson", content: "I'm having trouble understanding the difference between supervised and unsupervised learning. Could someone provide more examples?", timestamp: new Date().toISOString(), likes: 4 },
            { id: 8, lessonId: 3, userId: 8, userName: "Carlos Rodriguez", content: "What industries are currently using these ML algorithms the most? Are there any success stories you'd recommend?", timestamp: new Date().toISOString(), likes: 7 }
        ],
        3: [
            { id: 9, lessonId: 1, userId: 9, userName: "Priya Patel", content: "The biological inspiration was interesting. How close are we to replicating actual brain function?", timestamp: new Date().toISOString(), likes: 5 },
            { id: 10, lessonId: 2, userId: 10, userName: "James Liu", content: "I've heard about GANs. Are they covered in this course? How do they differ from regular neural networks?", timestamp: new Date().toISOString(), likes: 3 }
        ],
        4: [
            { id: 11, lessonId: 1, userId: 11, userName: "Amanda Green", content: "What's the difference between NLP and computational linguistics? Are they the same field?", timestamp: new Date().toISOString(), likes: 4 },
            { id: 12, lessonId: 3, userId: 12, userName: "Thomas Chen", content: "I'm curious about the classical vs neural models. When would you choose one over the other?", timestamp: new Date().toISOString(), likes: 2 }
        ],
        5: [
            { id: 13, lessonId: 1, userId: 13, userName: "Monica Johnson", content: "Computer vision is amazing! How difficult is it to set up a simple image recognition system?", timestamp: new Date().toISOString(), likes: 6 },
            { id: 14, lessonId: 2, userId: 14, userName: "Daniel Smith", content: "What preprocessing steps are most important for computer vision tasks?", timestamp: new Date().toISOString(), likes: 3 }
        ],
        6: [
            { id: 15, lessonId: 1, userId: 15, userName: "Olivia Brown", content: "This is so cool! Are there any beginner-friendly robotics platforms to experiment with?", timestamp: new Date().toISOString(), likes: 8 },
            { id: 16, lessonId: 2, userId: 16, userName: "Samuel Lee", content: "How do robots handle sensor failures? What redundancy measures are used?", timestamp: new Date().toISOString(), likes: 2 }
        ],
        7: [
            { id: 17, lessonId: 1, userId: 17, userName: "Jennifer Garcia", content: "What are the most common failure points in AI business implementations?", timestamp: new Date().toISOString(), likes: 5 },
            { id: 18, lessonId: 3, userId: 18, userName: "Richard Taylor", content: "How can small businesses without large datasets implement AI ethically?", timestamp: new Date().toISOString(), likes: 4 }
        ]
    },
    courseNotes: {},
    userWishlist: [],
    userBookmarks: [],
    userProjects: []
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
    } else if (pageId === 'certificate' && appData.currentUser) {
        checkCertificateAvailability();
    }
}

// Setup courses page
function setupCoursesPage() {
    // This page is static in this implementation
}

// Authentication setup
function setupAuthentication() {
    // Signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
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
                name: fullName,
                email: email,
                password: password, // In a real app, this would be hashed
                progress: 0,
                modulesProgress: {},
                completedModules: [],
                quizScores: {},
                registrationDate: new Date().toISOString(),
                lastAccess: new Date().toISOString(),
                enrolledCourses: [1, 2, 3] // All courses initially
            };

            appData.students.push(newUser);
            appData.currentUser = newUser;

            // Add to recent activity
            appData.recentActivity.push({
                id: Date.now(),
                userId: newUser.id,
                action: 'Account created',
                timestamp: new Date().toISOString()
            });

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

                // Add to recent activity
                appData.recentActivity.push({
                    id: Date.now(),
                    userId: user.id,
                    action: 'Login',
                    timestamp: new Date().toISOString()
                });

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
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');

    if (appData.currentUser) {
        if (authBtn) {
            authBtn.innerHTML = '<i class="fas fa-user"></i> <span>Dashboard</span>';
        }

        if (dashboardLink) {
            dashboardLink.style.display = 'inline-flex';
        }

        if (userName) {
            userName.textContent = appData.currentUser.name.split(' ')[0];
        }

        if (userEmail) {
            userEmail.textContent = appData.currentUser.email;
        }

        // Show admin link if user is admin
        if (appData.currentUser.email === 'admin@aitutorials.com') {
            if (adminLink) {
                adminLink.style.display = 'inline-flex';
            }
        }
    } else {
        if (authBtn) {
            authBtn.innerHTML = '<i class="fas fa-user"></i> <span>Login</span>';
        }

        if (dashboardLink) {
            dashboardLink.style.display = 'none';
        }

        if (adminLink) {
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

        // If on certificate page, check if user can access it
        if (currentPage && currentPage.id === 'certificate') {
            checkCertificateAvailability();
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

    // Update user name and email
    document.getElementById('user-name').textContent = appData.currentUser.name;
    document.getElementById('user-email').textContent = appData.currentUser.email;

    // Calculate overall progress
    calculateAndDisplayProgress();

    // Load modules
    loadModules();

    // Load wishlist
    loadWishlist();

    // Load stats
    loadDashboardStats();

    // Load recent activity
    loadRecentActivity();
}

// Calculate and display progress
function calculateAndDisplayProgress() {
    if (!appData.currentUser) return;

    const user = appData.currentUser;

    // Count total lessons, assignments and completed lessons/assignments
    let totalLessons = 0;
    let completedLessons = 0;
    let totalQuizzes = 0;
    let completedQuizzes = 0;
    let totalAssignments = 0;
    let completedAssignments = 0;

    courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (user.modulesProgress[`${module.id}-${lesson.id}`]) {
                completedLessons++;
            }
        });

        // Count quiz if exists
        if (module.quiz) {
            totalQuizzes++;
            if (user.modulesProgress[`quiz-${module.id}`]) {
                completedQuizzes++;
            }
        }
    });

    // Count assignments if user has any
    if (user.assignments) {
        totalAssignments = user.assignments.length;
        completedAssignments = user.assignments.length; // All assignments are considered completed once submitted
    }

    const totalItems = totalLessons + totalQuizzes + totalAssignments;
    const completedItems = completedLessons + completedQuizzes + completedAssignments;

    const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    user.progress = progressPercentage;

    // Update progress bar
    const progressFill = document.getElementById('overall-progress');
    const progressText = document.getElementById('progress-text');

    if (progressFill) progressFill.style.width = `${progressPercentage}%`;
    if (progressText) progressText.textContent = `${progressPercentage}% Complete`;

    // Also update module-specific progress
    updateModuleProgressDisplay();

    saveData();
}

// Update module progress display
function updateModuleProgressDisplay(module) {
    if (!appData.currentUser) return;

    // If module is provided, update the specific module's progress display
    if (module) {
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
        return; // If updating specific module, return after updating that specific one
    }

    // If no module specified, update all module progress displays
    courseData.modules.forEach(mod => {
        let totalItems = mod.lessons.length;
        let completedItems = 0;

        mod.lessons.forEach(lesson => {
            if (appData.currentUser.modulesProgress[`${mod.id}-${lesson.id}`]) {
                completedItems++;
            }
        });

        // Count quiz if exists
        if (mod.quiz) {
            totalItems++;
            if (appData.currentUser.modulesProgress[`quiz-${mod.id}`]) {
                completedItems++;
            }
        }

        const moduleProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

        // Update module card progress if it exists in the DOM
        const moduleCard = document.querySelector(`.module-card[data-module-id="${mod.id}"]`);
        if (moduleCard) {
            const progressElement = moduleCard.querySelector('.progress-text');
            if (progressElement) {
                progressElement.textContent = `${moduleProgress}%`;
            }
        }
    });
}

// Load dashboard stats
function loadDashboardStats() {
    if (!appData.currentUser) return;

    const user = appData.currentUser;

    // Calculate completed modules
    const completedModules = user.completedModules.length;
    const totalModules = courseData.modules.length;

    document.getElementById('completed-modules').textContent = `${completedModules}/${totalModules}`;

    // Calculate completed lessons
    let totalLessons = 0;
    let completedLessons = 0;

    courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (user.modulesProgress[`${module.id}-${lesson.id}`]) {
                completedLessons++;
            }
        });
    });

    document.getElementById('completed-lessons').textContent = `${completedLessons}/${totalLessons}`;

    // Calculate average quiz score
    if (user.quizScores && Object.keys(user.quizScores).length > 0) {
        const scores = Object.values(user.quizScores);
        const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        document.getElementById('quizzes-score').textContent = `${avgScore}%`;
    } else {
        document.getElementById('quizzes-score').textContent = `0%`;
    }
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

        // Get instructor info
        const instructor = appData.instructors.find(inst => module.id === inst.courses[0]);

        moduleCard.innerHTML = `
            <div class="module-header" data-module-id="${module.id}">
                <div>
                    <h3 class="module-title">${module.title}</h3>
                    <p>${module.description}</p>
                    ${instructor ? `<p class="instructor">Instructor: ${instructor.name}</p>` : ''}
                </div>
                <div class="module-meta">
                    <span>${module.duration}</span>
                    <span>${moduleProgress}%</span>
                    <span class="rating">${instructor ? instructor.rating : '4.8'} <i class="fas fa-star"></i></span>
                </div>
                <span class="module-expand">▼</span>
            </div>
            <div class="module-body">
                <div class="lessons-list">
                    ${module.lessons.map(lesson => {
                        const isCompleted = appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`];
                        const isCurrent = (
                            appData.currentUser.currentModule === module.id &&
                            appData.currentUser.currentLesson === lesson.id
                        );

                        return `
                            <div class="lesson-item ${isCurrent ? 'current' : ''}">
                                <h4 class="lesson-title">${lesson.title}</h4>
                                <span class="lesson-status ${isCompleted ? 'completed' : isCurrent ? 'in-progress' : 'incomplete'}">
                                    ${isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Not Started'}
                                </span>
                            </div>
                        `;
                    }).join('')}

                    ${module.quiz ? `
                        <div class="lesson-item">
                            <h4 class="lesson-title">Module Quiz</h4>
                            <span class="lesson-status ${appData.currentUser.modulesProgress[`quiz-${module.id}`] ? 'completed' : 'incomplete'}">
                                ${appData.currentUser.modulesProgress[`quiz-${module.id}`] ?
                                    `Score: ${appData.currentUser.quizScores?.[`quiz-${module.id}`] || 0}%` :
                                    'Not Started'}
                            </span>
                        </div>
                    ` : ''}
                </div>
                <button class="cta-button primary" data-module-id="${module.id}">Start Module</button>
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
    document.querySelectorAll('.module-card .cta-button').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = this.getAttribute('data-module-id');
            showModuleDetail(moduleId);
        });
    });
}

// Load wishlist content
function loadWishlist() {
    const wishlistContainer = document.getElementById('wishlist-container');
    if (!wishlistContainer || !appData.currentUser) return;

    // In this implementation, we'll show all modules as potential wishlist items
    // since we're using a simplified model
    let wishlistHtml = '<div class="wishlist-items">';

    courseData.modules.forEach(module => {
        // Check if this module is in the user's wishlist
        const isInWishlist = appData.userWishlist.some(item =>
            item.userId === appData.currentUser.id && item.moduleId === module.id
        );

        wishlistHtml += `
            <div class="wishlist-item">
                <h4>${module.title}</h4>
                <p>${module.description}</p>
                <div class="wishlist-actions">
                    <span class="duration">${module.duration}</span>
                    ${isInWishlist ?
                        `<button class="remove-from-wishlist" data-module-id="${module.id}">Remove</button>` :
                        `<button class="add-to-wishlist-btn" data-module-id="${module.id}">Add to Wishlist</button>`
                    }
                    <button class="cta-button primary start-course-btn" data-module-id="${module.id}">Start Course</button>
                </div>
            </div>
        `;
    });

    wishlistHtml += '</div>';
    wishlistContainer.innerHTML = wishlistHtml;

    // Add event listeners for wishlist buttons
    document.querySelectorAll('.add-to-wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = parseInt(this.getAttribute('data-module-id'));
            addToWishlist(moduleId);
        });
    });

    document.querySelectorAll('.remove-from-wishlist').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = parseInt(this.getAttribute('data-module-id'));
            removeFromWishlist(moduleId);
        });
    });

    // Add event listeners for start course buttons
    document.querySelectorAll('.start-course-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const moduleId = parseInt(this.getAttribute('data-module-id'));
            showModuleDetail(moduleId);
        });
    });
}

// Add item to user's wishlist
function addToWishlist(moduleId) {
    const exists = appData.userWishlist.some(item =>
        item.userId === appData.currentUser.id && item.moduleId === moduleId
    );

    if (!exists) {
        appData.userWishlist.push({
            userId: appData.currentUser.id,
            moduleId: moduleId,
            addedDate: new Date().toISOString()
        });

        saveData();
        loadWishlist(); // Refresh the wishlist display
        alert('Course added to your wishlist!');
    }
}

// Remove item from user's wishlist
function removeFromWishlist(moduleId) {
    appData.userWishlist = appData.userWishlist.filter(item =>
        !(item.userId === appData.currentUser.id && item.moduleId === moduleId)
    );

    saveData();
    loadWishlist(); // Refresh the wishlist display
}

// Load recent activity
function loadRecentActivity() {
    const activityContainer = document.getElementById('recent-activity');
    if (!activityContainer || !appData.currentUser) return;

    // Get recent activity for this user
    const userActivities = appData.recentActivity
        .filter(activity => activity.userId === appData.currentUser.id)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);

    activityContainer.innerHTML = '';

    userActivities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';

        const timeAgo = timeAgoString(activity.timestamp);

        activityItem.innerHTML = `
            <i class="fas fa-${getActivityIcon(activity.action)}"></i>
            <div>
                <p>${activity.action}</p>
                <span>${timeAgo}</span>
            </div>
        `;

        activityContainer.appendChild(activityItem);
    });

    if (userActivities.length === 0) {
        activityContainer.innerHTML = '<p>No recent activity</p>';
    }
}

// Helper function to get icon for activity
function getActivityIcon(action) {
    switch(action) {
        case 'Account created':
            return 'user-plus';
        case 'Login':
            return 'sign-in-alt';
        case 'Lesson completed':
            return 'check-circle';
        case 'Quiz completed':
            return 'tasks';
        case 'Module completed':
            return 'trophy';
        default:
            return 'clock';
    }
}

// Helper function to format time ago
function timeAgoString(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
}

// Show module detail view
function showModuleDetail(moduleId) {
    const module = courseData.modules.find(m => m.id == moduleId);
    if (!module || !appData.currentUser) return;

    // Update module title
    document.getElementById('module-title').textContent = module.title;

    // Update module outline
    updateModuleOutline(module);

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

// Update module outline
function updateModuleOutline(module) {
    const outlineContainer = document.getElementById('module-outline-content');
    if (!outlineContainer) return;

    let outlineHtml = '<ul>';

    module.lessons.forEach((lesson, index) => {
        const isCompleted = appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`];
        const isActive = (
            appData.currentUser.currentModule === module.id &&
            appData.currentUser.currentLesson === lesson.id
        );

        outlineHtml += `
            <li>
                <a href="#" class="${isCompleted ? 'completed' : isActive ? 'active' : ''}"
                   data-lesson-index="${index}">
                    <i class="fas fa-${isCompleted ? 'check-circle' : isActive ? 'play-circle' : 'circle'}"></i>
                    ${lesson.title}
                </a>
            </li>
        `;
    });

    if (module.quiz) {
        const quizCompleted = appData.currentUser.modulesProgress[`quiz-${module.id}`];
        outlineHtml += `
            <li>
                <a href="#" class="${quizCompleted ? 'completed' : ''}" data-quiz>
                    <i class="fas fa-${quizCompleted ? 'check-circle' : 'question-circle'}"></i>
                    Module Quiz
                </a>
            </li>
        `;
    }

    outlineHtml += '</ul>';
    outlineContainer.innerHTML = outlineHtml;

    // Add event listeners for lesson navigation
    document.querySelectorAll('#module-outline-content a[data-lesson-index]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lessonIndex = parseInt(this.getAttribute('data-lesson-index'));
            showLessonContent(module, lessonIndex);
        });
    });

    // Add event listener for quiz
    document.querySelectorAll('#module-outline-content a[data-quiz]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showModuleQuiz(module);
        });
    });
}

// Show lesson content
function showLessonContent(module, lessonIndex) {
    const lesson = module.lessons[lessonIndex];
    const lessonContent = document.getElementById('lesson-content');
    const quizSection = document.getElementById('quiz-section');
    const resourcesSection = document.getElementById('resources-section');
    const discussionSection = document.getElementById('discussion-section');
    const notesSection = document.getElementById('notes-section');

    if (lessonContent) {
        lessonContent.innerHTML = lesson.content;

        // After inserting the content, ensure video containers are properly positioned
        ensureVideoContainersPositioned();

        // Add event listeners for any new interactive elements
        setupInteractiveElements();

        quizSection.style.display = 'none';
        resourcesSection.style.display = 'none';
        discussionSection.style.display = 'none';
        notesSection.style.display = 'none';
        lessonContent.style.display = 'block';
    }

    // Update navigation buttons
    updateLessonNavigation(module, lessonIndex);

    // Update resource section
    loadResources(module.id);

    // Update discussion section
    loadDiscussion(module.id, lesson.id);

    // Load notes for this lesson
    loadLessonNotes(module.id, lesson.id);

    // Update current lesson tracking
    if (appData.currentUser) {
        appData.currentUser.currentModule = module.id;
        appData.currentUser.currentLesson = lesson.id;
    }
}

// Setup interactive elements like code examples, assignments, etc.
function setupInteractiveElements() {
    // Add functionality to code examples
    setupCodeExamples();

    // Add functionality to assignment submissions
    setupAssignmentSubmissions();
}

// Setup code example functionality
function setupCodeExamples() {
    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('.code-example pre');
    codeBlocks.forEach(block => {
        // Create a copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #4a6cf7;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
        `;

        // Insert copy button
        const container = block.parentElement;
        container.style.position = 'relative';
        container.appendChild(copyButton);

        // Add event listener to copy button
        copyButton.addEventListener('click', function() {
            const textArea = document.createElement('textarea');
            textArea.value = block.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            // Show feedback
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyButton.innerHTML = originalText;
            }, 2000);
        });
    });
}

// Setup assignment submission functionality
function setupAssignmentSubmissions() {
    const assignmentSubmissions = document.querySelectorAll('.assignment-submission button');
    assignmentSubmissions.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.assignment-section');
            const input = container.querySelector('input[type="text"], textarea');
            const title = container.querySelector('h4').textContent;

            if (input && input.value.trim()) {
                // Save assignment submission
                if (!appData.currentUser.assignments) {
                    appData.currentUser.assignments = [];
                }

                appData.currentUser.assignments.push({
                    id: Date.now(),
                    title: title,
                    content: input.value,
                    timestamp: new Date().toISOString(),
                    moduleId: appData.currentUser.currentModule,
                    lessonId: appData.currentUser.currentLesson
                });

                // Add to recent activity
                appData.recentActivity.push({
                    id: Date.now(),
                    userId: appData.currentUser.id,
                    action: `Submitted assignment: ${title}`,
                    timestamp: new Date().toISOString()
                });

                saveData();

                // Clear the input
                input.value = '';

                // Show feedback
                alert('Assignment submitted successfully!');

                // Update dashboard if on dashboard
                if (document.querySelector('#student-dashboard').classList.contains('active')) {
                    loadDashboardStats();
                    loadRecentActivity();
                }
            } else {
                alert('Please complete the assignment before submitting.');
            }
        });
    });
}

// Load and display course resources
function loadResources(moduleId) {
    const resourcesSection = document.getElementById('resources-section');
    const resourcesList = document.getElementById('resources-list');

    if (!resourcesList || !appData.courseResources[moduleId]) return;

    const resources = appData.courseResources[moduleId];
    let resourcesHtml = '<ul class="resources-list">';

    resources.forEach(resource => {
        let icon = 'file-alt';
        if (resource.type === 'pdf') icon = 'file-pdf';
        else if (resource.type === 'zip') icon = 'file-archive';
        else if (resource.type === 'csv') icon = 'file-csv';
        else if (resource.type === 'link') icon = 'link';

        resourcesHtml += `
            <li class="resource-item">
                <i class="fas fa-${icon}"></i>
                <a href="${resource.url}" target="_blank">${resource.name}</a>
            </li>
        `;
    });

    resourcesHtml += '</ul>';
    resourcesList.innerHTML = resourcesHtml;
}

// Load and display discussion thread
function loadDiscussion(moduleId, lessonId) {
    const discussionThread = document.getElementById('discussion-thread');
    const newComment = document.getElementById('new-comment');

    if (!discussionThread || !appData.courseDiscussions[moduleId]) return;

    const comments = appData.courseDiscussions[moduleId].filter(comment => comment.lessonId === lessonId);
    let commentsHtml = '<div class="comments-list">';

    comments.forEach(comment => {
        commentsHtml += `
            <div class="comment-item">
                <div class="comment-header">
                    <strong>${comment.userName}</strong>
                    <span class="comment-time">${timeAgoString(comment.timestamp)}</span>
                    <span class="comment-likes"><i class="fas fa-thumbs-up"></i> ${comment.likes}</span>
                </div>
                <p class="comment-content">${comment.content}</p>
            </div>
        `;
    });

    commentsHtml += '</div>';
    discussionThread.innerHTML = commentsHtml;

    // Set up post comment functionality
    if (newComment && appData.currentUser) {
        document.getElementById('post-comment').onclick = () => postComment(moduleId, lessonId);
    }
}

// Post a new comment
function postComment(moduleId, lessonId) {
    const newComment = document.getElementById('new-comment');
    const content = newComment.value.trim();

    if (!content || !appData.currentUser) return;

    const comment = {
        id: Date.now(),
        lessonId: lessonId,
        userId: appData.currentUser.id,
        userName: appData.currentUser.name,
        content: content,
        timestamp: new Date().toISOString(),
        likes: 0
    };

    if (!appData.courseDiscussions[moduleId]) {
        appData.courseDiscussions[moduleId] = [];
    }

    appData.courseDiscussions[moduleId].push(comment);
    saveData();

    // Clear the input and reload the discussion
    newComment.value = '';
    loadDiscussion(moduleId, lessonId);
}

// Load lesson notes
function loadLessonNotes(moduleId, lessonId) {
    const notesTextarea = document.getElementById('lesson-notes');
    const key = `notes-${moduleId}-${lessonId}`;

    if (notesTextarea && appData.currentUser) {
        const savedNotes = appData.currentUser.notes ? appData.currentUser.notes[key] : '';
        notesTextarea.value = savedNotes || '';

        // Set up save functionality
        document.getElementById('save-notes').onclick = () => saveLessonNotes(moduleId, lessonId);
    }
}

// Save lesson notes
function saveLessonNotes(moduleId, lessonId) {
    const notesTextarea = document.getElementById('lesson-notes');
    const key = `notes-${moduleId}-${lessonId}`;

    if (notesTextarea && appData.currentUser) {
        if (!appData.currentUser.notes) {
            appData.currentUser.notes = {};
        }

        appData.currentUser.notes[key] = notesTextarea.value;
        saveData();

        alert('Notes saved successfully!');
    }
}

// Show resources section
function showResourcesSection() {
    const lessonContent = document.getElementById('lesson-content');
    const quizSection = document.getElementById('quiz-section');
    const resourcesSection = document.getElementById('resources-section');
    const discussionSection = document.getElementById('discussion-section');
    const notesSection = document.getElementById('notes-section');

    lessonContent.style.display = 'none';
    quizSection.style.display = 'none';
    discussionSection.style.display = 'none';
    notesSection.style.display = 'none';
    resourcesSection.style.display = 'block';
}

// Show discussion section
function showDiscussionSection() {
    const lessonContent = document.getElementById('lesson-content');
    const quizSection = document.getElementById('quiz-section');
    const resourcesSection = document.getElementById('resources-section');
    const discussionSection = document.getElementById('discussion-section');
    const notesSection = document.getElementById('notes-section');

    lessonContent.style.display = 'none';
    quizSection.style.display = 'none';
    resourcesSection.style.display = 'none';
    notesSection.style.display = 'none';
    discussionSection.style.display = 'block';
}

// Show notes section
function showNotesSection() {
    const lessonContent = document.getElementById('lesson-content');
    const quizSection = document.getElementById('quiz-section');
    const resourcesSection = document.getElementById('resources-section');
    const discussionSection = document.getElementById('discussion-section');
    const notesSection = document.getElementById('notes-section');

    lessonContent.style.display = 'none';
    quizSection.style.display = 'none';
    resourcesSection.style.display = 'none';
    discussionSection.style.display = 'none';
    notesSection.style.display = 'block';
}

// Update lesson navigation buttons
function updateLessonNavigation(module, lessonIndex) {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    const completeBtn = document.getElementById('complete-lesson');
    const quizSection = document.getElementById('quiz-section');

    // Resources, discussion, and notes buttons
    const showResourcesBtn = document.getElementById('show-resources');
    const showDiscussionBtn = document.getElementById('show-discussion');
    const showNotesBtn = document.getElementById('show-notes');

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
            nextBtn.style.display = 'inline-block';
            nextBtn.textContent = 'Next';
            nextBtn.onclick = () => {
                // Move to next module if available, otherwise back to dashboard
                const currentModuleIndex = courseData.modules.findIndex(m => m.id == module.id);
                if (currentModuleIndex < courseData.modules.length - 1) {
                    showModuleDetail(courseData.modules[currentModuleIndex + 1].id);
                } else {
                    showPage('student-dashboard');
                }
            };
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

    // Set up additional section buttons
    if (showResourcesBtn) {
        showResourcesBtn.onclick = showResourcesSection;
    }

    if (showDiscussionBtn) {
        showDiscussionBtn.onclick = showDiscussionSection;
    }

    if (showNotesBtn) {
        showNotesBtn.onclick = showNotesSection;
    }
}

// Mark lesson as complete
function markLessonComplete(module, lessonIndex) {
    if (!appData.currentUser) return;

    const lesson = module.lessons[lessonIndex];
    appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`] = true;

    // Add to recent activity
    appData.recentActivity.push({
        id: Date.now(),
        userId: appData.currentUser.id,
        action: `Lesson completed: ${lesson.title}`,
        timestamp: new Date().toISOString()
    });

    // Check if all lessons in module are complete
    let allLessonsComplete = true;
    module.lessons.forEach(lesson => {
        if (!appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
            allLessonsComplete = false;
        }
    });

    // If all lessons complete and no quiz or quiz already taken, mark module as complete
    if (allLessonsComplete && (!module.quiz || appData.currentUser.modulesProgress[`quiz-${module.id}`])) {
        if (!appData.currentUser.completedModules.includes(module.id)) {
            appData.currentUser.completedModules.push(module.id);

            // Add to recent activity
            appData.recentActivity.push({
                id: Date.now(),
                userId: appData.currentUser.id,
                action: `Module completed: ${module.title}`,
                timestamp: new Date().toISOString()
            });
        }
    }

    // Update progress
    calculateAndDisplayProgress();
    loadDashboardStats();
    updateModuleProgressDisplay(module);
    updateModuleOutline(module);
    loadRecentActivity();

    // Move to next lesson if available
    if (lessonIndex < module.lessons.length - 1) {
        showLessonContent(module, lessonIndex + 1);
    } else if (module.quiz && !appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
        // Show quiz after completing all lessons
        showModuleQuiz(module);
    } else {
        // All done with this module
        alert(`Congratulations! You've completed the "${module.title}" module.`);
        showPage('student-dashboard');
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

    if (answers.some(ans => ans === null)) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Grade quiz
    let correctCount = 0;
    module.quiz.questions.forEach((question, index) => {
        if (question.correct === "any" || answers[index] === question.correct) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / module.quiz.questions.length) * 100);

    // Show results
    alert(`Quiz completed! You scored ${score}% (${correctCount}/${module.quiz.questions.length}) correct.`);

    // Mark quiz as completed
    appData.currentUser.modulesProgress[`quiz-${module.id}`] = true;
    appData.currentUser.quizScores[`quiz-${module.id}`] = score;

    // Add to recent activity
    appData.recentActivity.push({
        id: Date.now(),
        userId: appData.currentUser.id,
        action: `Quiz completed: ${module.title} (Score: ${score}%)`,
        timestamp: new Date().toISOString()
    });

    // Check if all lessons and quiz are complete
    let allLessonsComplete = true;
    module.lessons.forEach(lesson => {
        if (!appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
            allLessonsComplete = false;
        }
    });

    if (allLessonsComplete) {
        if (!appData.currentUser.completedModules.includes(module.id)) {
            appData.currentUser.completedModules.push(module.id);

            // Add to recent activity
            appData.recentActivity.push({
                id: Date.now(),
                userId: appData.currentUser.id,
                action: `Module completed: ${module.title}`,
                timestamp: new Date().toISOString()
            });
        }

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
    loadDashboardStats();
    updateModuleProgressDisplay(module);
    updateModuleOutline(module);
    loadRecentActivity();

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

    // Calculate total course statistics for the certificate
    let totalLessons = 0;
    let completedLessons = 0;
    let totalQuizzes = 0;
    let completedQuizzes = 0;
    let totalAssignments = 0;
    let completedAssignments = 0;

    courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            totalLessons++;
            if (appData.currentUser.modulesProgress[`${module.id}-${lesson.id}`]) {
                completedLessons++;
            }
        });

        if (module.quiz) {
            totalQuizzes++;
            if (appData.currentUser.modulesProgress[`quiz-${module.id}`]) {
                completedQuizzes++;
            }
        }
    });

    if (appData.currentUser.assignments) {
        totalAssignments = appData.currentUser.assignments.length;
        completedAssignments = appData.currentUser.assignments.length;
    }

    // Calculate final grade
    let courseScore = 0;
    let totalScore = 0;
    let possibleScore = 0;

    courseData.modules.forEach(module => {
        if (appData.currentUser.quizScores && appData.currentUser.quizScores[`quiz-${module.id}`]) {
            totalScore += appData.currentUser.quizScores[`quiz-${module.id}`];
            possibleScore += 100; // Assuming 100% max per quiz
        }
    });

    if (possibleScore > 0) {
        courseScore = Math.round((totalScore / possibleScore) * 100);
    }

    const certificate = {
        id: 'CERT-' + Date.now(),
        studentId: appData.currentUser.id,
        studentName: appData.currentUser.name,
        studentEmail: appData.currentUser.email,
        courseId: 'AI-TECH-101',
        courseName: 'AI Technologies Course',
        issueDate: new Date().toISOString().split('T')[0],
        completionDate: new Date().toISOString(),
        completionPercentage: 100, // Since user completed the course
        courseScore: courseScore,
        totalLessons: totalLessons,
        completedLessons: completedLessons,
        totalQuizzes: totalQuizzes,
        totalAssignments: totalAssignments,
        specialization: 'Artificial Intelligence',
        grade: courseScore >= 90 ? 'A' : courseScore >= 80 ? 'B' : courseScore >= 70 ? 'C' : 'Pass'
    };

    appData.certificates.push(certificate);

    // Update UI to show certificate
    document.getElementById('certificate-name').textContent = certificate.studentName;
    document.getElementById('completion-date').textContent = certificate.issueDate;
    document.getElementById('certificate-id').textContent = certificate.id;

    // Add detailed information to the certificate view
    document.getElementById('course-score').textContent = `${certificate.courseScore}%`;
    document.getElementById('course-grade').textContent = certificate.grade;
    document.getElementById('completion-percent').textContent = `${certificate.completionPercentage}%`;

    // Add to recent activity
    appData.recentActivity.push({
        id: Date.now(),
        userId: appData.currentUser.id,
        action: `Certificate earned with grade ${certificate.grade} (${certificate.courseScore}%)`,
        timestamp: new Date().toISOString()
    });

    saveData();
}

// Check if certificate is available
function checkCertificateAvailability() {
    if (appData.currentUser && hasUserCompletedCourse(appData.currentUser)) {
        // Show certificate page
        showPage('certificate');
    } else {
        // Redirect to dashboard
        showPage('student-dashboard');
    }
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

    document.getElementById('share-certificate')?.addEventListener('click', function() {
        alert('Certificate sharing functionality would be implemented in a full application.');
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

    // Search users
    document.getElementById('search-users')?.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterUsers(searchTerm);
    });

    // Add to wishlist button in dashboard
    document.getElementById('add-to-wishlist')?.addEventListener('click', function() {
        // In a real implementation, this would add a selected course to the wishlist
        alert('In a real implementation, this would open a dialog to select a course to add to your wishlist.');
    });
}

// Load admin dashboard
function loadAdminDashboard() {
    // Update student statistics
    document.getElementById('total-students').textContent = appData.students.length;

    // Calculate active students (accessed in last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activeStudents = appData.students.filter(student =>
        new Date(student.lastAccess) > thirtyDaysAgo
    ).length;

    document.getElementById('active-students').textContent = activeStudents;

    // Calculate completion rate
    if (appData.students.length > 0) {
        const completedStudents = appData.students.filter(student =>
            courseData.modules.length > 0 &&
            student.completedModules.length === courseData.modules.length
        ).length;

        const completionRate = Math.round((completedStudents / appData.students.length) * 100);
        document.getElementById('completion-rate').textContent = `${completionRate}%`;

        // Update certificates issued
        document.getElementById('certificates-issued').textContent = appData.certificates.length;
    }

    // Show recent activity
    loadRecentActivityAdmin();

    // Load modules editor
    loadModulesEditor();

    // Load users list
    loadUsersList();
}

// Load recent activity for admin
function loadRecentActivityAdmin() {
    const activityContainer = document.getElementById('recent-activity');
    if (!activityContainer) return;

    // Get last 10 activities
    const recentActivities = [...appData.recentActivity]
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 10);

    let activityHtml = '';

    if (recentActivities.length > 0) {
        recentActivities.forEach(activity => {
            const student = appData.students.find(s => s.id === activity.userId);
            const timeAgo = timeAgoString(activity.timestamp);

            activityHtml += `
                <div class="activity-item">
                    <i class="fas fa-${getActivityIcon(activity.action)}"></i>
                    <div>
                        <p><strong>${student ? student.name : 'Unknown'}</strong> - ${activity.action}</p>
                        <span>${timeAgo}</span>
                    </div>
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
        // Calculate statistics for this module
        let totalLessons = 0;
        let completedLessons = 0;
        let totalQuizzes = 0;
        let completedQuizzes = 0;

        appData.students.forEach(student => {
            module.lessons.forEach(lesson => {
                totalLessons++;
                if (student.modulesProgress[`${module.id}-${lesson.id}`]) {
                    completedLessons++;
                }
            });

            if (module.quiz) {
                totalQuizzes++;
                if (student.modulesProgress[`quiz-${module.id}`]) {
                    completedQuizzes++;
                }
            }
        });

        const lessonCompletionRate = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
        const quizCompletionRate = totalQuizzes > 0 ? Math.round((completedQuizzes / totalQuizzes) * 100) : 0;

        editorHtml += `
            <div class="module-editor">
                <div class="module-header">
                    <h4>${module.title}</h4>
                    <div class="module-meta">
                        <span>${module.duration}</span>
                    </div>
                </div>
                <p>${module.description}</p>
                <div class="module-stats">
                    <div class="stat">
                        <span><strong>Lessons:</strong> ${module.lessons.length}</span>
                    </div>
                    <div class="stat">
                        <span><strong>Lesson Completion:</strong> ${lessonCompletionRate}%</span>
                    </div>
                    <div class="stat">
                        <span><strong>Quiz Completion:</strong> ${quizCompletionRate}%</span>
                    </div>
                </div>
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
    renderUsersList(appData.students);
}

// Render users list with optional filter
function renderUsersList(users) {
    const usersContainer = document.getElementById('users-list');
    if (!usersContainer) return;

    if (users.length > 0) {
        let usersHtml = '';

        users.forEach(student => {
            // Calculate student stats
            const totalLessons = courseData.modules.reduce((sum, mod) => sum + mod.lessons.length, 0);
            const completedLessons = Object.keys(student.modulesProgress).filter(key => !key.startsWith('quiz-')).length;
            const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

            const completedModules = student.completedModules.length;
            const totalModules = courseData.modules.length;

            usersHtml += `
                <div class="user-card">
                    <div class="user-header">
                        <h4>${student.name}</h4>
                        <span class="user-status">${student.email}</span>
                    </div>
                    <p><strong>Progress:</strong> ${progressPercentage}%</p>
                    <p><strong>Modules Completed:</strong> ${completedModules}/${totalModules}</p>
                    <p><strong>Registration:</strong> ${new Date(student.registrationDate).toLocaleDateString()}</p>
                    <p><strong>Last Access:</strong> ${new Date(student.lastAccess).toLocaleDateString()}</p>
                </div>
            `;
        });

        usersContainer.innerHTML = usersHtml;
    } else {
        usersContainer.innerHTML = '<p>No students found</p>';
    }
}

// Filter users by search term
function filterUsers(searchTerm) {
    const filteredUsers = appData.students.filter(student =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm)
    );

    renderUsersList(filteredUsers);
}

// Additional utility functions

// Check if user has completed all modules
function hasUserCompletedCourse(user) {
    // Check if all modules are completed
    const allModulesCompleted = user.completedModules.length === courseData.modules.length;

    // Also check if all quizzes are completed
    let allQuizzesCompleted = true;
    courseData.modules.forEach(module => {
        if (module.quiz && !user.modulesProgress[`quiz-${module.id}`]) {
            allQuizzesCompleted = false;
        }
    });

    return allModulesCompleted && allQuizzesCompleted;
}

// Check if certificate is available with full requirements
function checkCertificateAvailability() {
    if (appData.currentUser && hasUserCompletedCourse(appData.currentUser)) {
        // Generate certificate details if not already done
        issueCertificate();
        // Show certificate page
        showPage('certificate');
    } else {
        // Redirect to dashboard
        showPage('student-dashboard');
    }
}

// Show certificate page if user has completed the course
function checkShowCertificate() {
    if (appData.currentUser && hasUserCompletedCourse(appData.currentUser)) {
        // Show certificate page
        showPage('certificate');
    } else {
        // Redirect to dashboard
        showPage('student-dashboard');
    }
}

// Get course analytics for admin dashboard
function getCourseAnalytics() {
    if (!appData.students || appData.students.length === 0) {
        return {
            totalStudents: 0,
            activeStudents: 0,
            completionRate: 0,
            certificatesIssued: 0,
            averageScore: 0,
            moduleCompletions: {}
        };
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    let totalStudents = appData.students.length;
    let activeStudents = appData.students.filter(student =>
        new Date(student.lastAccess) > thirtyDaysAgo
    ).length;

    // Calculate completion rate
    let completedStudents = 0;
    appData.students.forEach(student => {
        if (hasUserCompletedCourse(student)) {
            completedStudents++;
        }
    });

    let completionRate = totalStudents > 0 ? Math.round((completedStudents / totalStudents) * 100) : 0;

    // Calculate average course score
    let totalScore = 0;
    let scoreCount = 0;
    appData.students.forEach(student => {
        if (student.quizScores) {
            Object.values(student.quizScores).forEach(score => {
                totalScore += score;
                scoreCount++;
            });
        }
    });

    let averageScore = scoreCount > 0 ? Math.round(totalScore / scoreCount) : 0;

    // Calculate module completion rates
    let moduleCompletions = {};
    courseData.modules.forEach(module => {
        let completedCount = 0;
        appData.students.forEach(student => {
            module.lessons.forEach(lesson => {
                if (student.modulesProgress[`${module.id}-${lesson.id}`]) {
                    completedCount++;
                }
            });
        });
        moduleCompletions[module.id] = {
            title: module.title,
            total: module.lessons.length * appData.students.length,
            completed: completedCount,
            rate: appData.students.length > 0 ? Math.round((completedCount / (module.lessons.length * appData.students.length)) * 100) : 0
        };
    });

    return {
        totalStudents: totalStudents,
        activeStudents: activeStudents,
        completionRate: completionRate,
        certificatesIssued: appData.certificates.length,
        averageScore: averageScore,
        moduleCompletions: moduleCompletions
    };
}

// Ensure video containers are properly positioned after content is loaded
// This is particularly important for responsive YouTube embeds that use the padding-top hack
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
    }, 100); // Small delay to allow DOM rendering before positioning
}