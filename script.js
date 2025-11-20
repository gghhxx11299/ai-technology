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
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/JN2t1a6U84Y?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>This video provides an excellent introduction to AI, explaining how machines can think and learn like humans.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Recommended Reading</h4>
                            <p>For a deeper understanding of AI concepts, read about the Turing Test and how it defines machine intelligence. The test, proposed by Alan Turing in 1950, evaluates a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.</p>
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
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/8rBh6JQYm80?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>This video covers the fascinating history of AI development, from early concepts to modern breakthroughs.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>The Dartmouth Conference of 1956 is often cited as the birth of AI as a field. The proposal for the conference stated: "Every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 3,
                    title: "AI Applications in Industry",
                    content: `
                        <h3>AI Applications in Industry</h3>
                        <p>AI technology is transforming industries by automating processes, providing insights from data, and enhancing user experiences.</p>
                        <h4>Industry Applications:</h4>
                        <ul>
                            <li><strong>Healthcare:</strong> Medical diagnosis, drug discovery, personalized treatment</li>
                            <li><strong>Finance:</strong> Fraud detection, algorithmic trading, risk assessment</li>
                            <li><strong>Transportation:</strong> Self-driving cars, route optimization, traffic prediction</li>
                            <li><strong>Retail:</strong> Recommendation systems, inventory management, customer service</li>
                            <li><strong>Manufacturing:</strong> Quality control, predictive maintenance, supply chain optimization</li>
                        </ul>
                        <h4>Future Impact:</h4>
                        <p>As AI continues to advance, it will play an increasingly important role in addressing global challenges such as climate change, healthcare accessibility, and resource optimization.</p>

                        <div class="video-section">
                            <h4>Recommended Video: AI in Industry</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0Yie4L0oC0Q?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>See real-world examples of how AI is being applied across different industries today.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Case Study: AI in Healthcare</h4>
                            <p>Google's DeepMind has developed AI systems that can diagnose eye diseases as accurately as world-leading experts. This system processes optical coherence tomography scans to detect over 50 eye diseases with 94% accuracy.</p>
                        </div>
                    `,
                    completed: false
                },
                {
                    id: 4,
                    title: "AI Ethics and Society",
                    content: `
                        <h3>AI Ethics and Society</h3>
                        <p>As AI systems become more powerful and pervasive, ethical considerations become increasingly important. These systems impact employment, privacy, fairness, and human autonomy.</p>
                        <h4>Key Ethical Issues:</h4>
                        <ul>
                            <li><strong>Bias and Fairness:</strong> Ensuring AI systems don't perpetuate discrimination</li>
                            <li><strong>Privacy:</strong> Protecting personal data used by AI systems</li>
                            <li><strong>Transparency:</strong> Making AI decision-making processes understandable</li>
                            <li><strong>Accountability:</strong> Determining responsibility for AI system actions</li>
                        </ul>
                        <h4>Responsible AI Development:</h4>
                        <p>Developing AI in a responsible way requires collaboration between technologists, ethicists, policymakers, and society to ensure these powerful tools benefit humanity.</p>

                        <div class="video-section">
                            <h4>Recommended Video: Ethics in AI</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/T4K3_8rmXeQ?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>Explore the ethical considerations and responsibilities in developing AI technologies.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Ethical Frameworks</h4>
                            <p>Organizations like the Partnership on AI and IEEE are developing ethical frameworks to guide the development of responsible AI systems. Principles include fairness, accountability, and transparency.</p>
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
                    title: "What is Machine Learning?",
                    content: `
                        <h3>What is Machine Learning?</h3>
                        <p>Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data without being explicitly programmed. The algorithms learn from historical data and make predictions on new, unseen data.</p>
                        <p>ML algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.</p>
                        <h4>Key Components:</h4>
                        <ul>
                            <li><strong>Training Data:</strong> Historical examples used to teach the model</li>
                            <li><strong>Features:</strong> Input variables used for prediction</li>
                            <li><strong>Target Variable:</strong> The outcome the model predicts</li>
                            <li><strong>Model:</strong> The mathematical representation of the pattern</li>
                        </ul>
                        <h4>ML vs Traditional Programming:</h4>
                        <p>In traditional programming, we input data and programs to get outputs. In ML, we input data and outputs to get programs (models).</p>

                        <div class="video-section">
                            <h4>Recommended Video: Introduction to Machine Learning</h4>
                            <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/HcqpanDadyQ?rel=0&showinfo=0&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <p>This video provides a comprehensive introduction to machine learning concepts and applications.</p>
                        </div>

                        <div class="reading-material">
                            <h4>Historical Context</h4>
                            <p>Arthur Samuel, a pioneer in the field, coined the term "Machine Learning" in 1959. He defined it as "the field of study that gives computers the ability to learn without being explicitly programmed."</p>
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
                    `,
                    completed: false
                },
                {
                    id: 4,
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
            { id: 3, name: "Ethics in AI Guidelines", type: "pdf", url: "#" }
        ],
        2: [
            { id: 4, name: "ML Algorithms Cheatsheet", type: "pdf", url: "#" },
            { id: 5, name: "Python ML Tutorial", type: "zip", url: "#" },
            { id: 6, name: "Dataset for Practice", type: "csv", url: "#" }
        ],
        3: [
            { id: 7, name: "Neural Network Architecture", type: "pdf", url: "#" },
            { id: 8, name: "TensorFlow Playground", type: "link", url: "#" },
            { id: 9, name: "CNN Implementation Guide", type: "pdf", url: "#" }
        ]
    },
    courseDiscussions: {
        1: [
            { id: 1, lessonId: 1, userId: 1, userName: "John Doe", content: "Great explanation of AI fundamentals!", timestamp: new Date().toISOString(), likes: 5 },
            { id: 2, lessonId: 1, userId: 2, userName: "Sarah Johnson", content: "I have a question about the Turing Test.", timestamp: new Date().toISOString(), likes: 2 }
        ],
        2: [
            { id: 3, lessonId: 1, userId: 3, userName: "Michael Chen", content: "How do we handle overfitting in practice?", timestamp: new Date().toISOString(), likes: 8 }
        ]
    },
    courseNotes: {},
    userWishlist: [],
    userBookmarks: []
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
    
    // Add to recent activity
    appData.recentActivity.push({
        id: Date.now(),
        userId: appData.currentUser.id,
        action: 'Certificate earned',
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
    return user.completedModules.length === courseData.modules.length;
}

// Show certificate page if user has completed the course
function checkShowCertificate() {
    if (appData.currentUser && hasUserCompletedCourse(appData.currentUser)) {
        // Show certificate page
        showPage('certificate');
    }
}