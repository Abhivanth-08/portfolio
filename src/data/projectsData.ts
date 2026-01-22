export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  gradient: string;
  demo: string;
  github: string;
  videoDemo: string;
  videoId?: string; // YouTube video ID or Google Drive file ID
  demoType?: 'live' | 'simulation' | 'repository' | 'interactive'; // Type of demo
  architecture?: string; // System architecture flow
  challenges?: string[]; // What makes this project technically challenging
}

export const projects: Project[] = [
  {
    id: 'versatile-mini-robot',
    title: 'Versatile Mini Robot',
    category: 'Robotics & IoT',
    description:
      'Designed a multifunctional robot with object recognition, color detection, QR/text scanning, translation, and virtual assistance.',
    fullDescription: 
      'A comprehensive robotics project featuring a multifunctional mini robot equipped with advanced capabilities. The robot integrates computer vision for object recognition and color detection, OCR technology for QR code and text scanning, natural language processing for translation services, and virtual assistance features. Built using Raspberry Pi as the central processing unit with multiple sensors for environmental interaction.',
    tech: ['Python', 'OpenCV', 'Raspberry Pi', 'Sensors'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://drive.google.com/drive/folders/17Tsc5v9g0u-DJGQ5VVJw4F3BlIyOnl7W?usp=sharing', 
    github: 'https://github.com/Abhivanth-08/Mini_Robot',
    videoDemo: 'https://youtu.be/i9UhpPylS8M',
    demoType: 'repository',
    architecture: 'Camera/Sensors → Raspberry Pi → Image Processing (OpenCV) → Feature Detection → AI Models (Object/Text Recognition) → NLP Processing (Translation) → Motor Control/Audio Output → User Interface',
    challenges: [
      'Real-time multi-modal processing on resource-constrained Raspberry Pi hardware',
      'Synchronizing multiple sensor inputs with computer vision pipelines without frame drops',
      'Integrating heterogeneous AI models (OCR, object detection, NLP) into a unified system',
      'Managing power consumption while maintaining performance across vision, motors, and compute',
      'Building robust error handling for unpredictable real-world environments'
    ],
  },
  {
    id: 'ndt-robot',
    title: 'NDT Robot',
    category: 'Industrial Automation',
    description:
      'Autonomous mini robot using ultrasonic, infrared, and eddy current sensors for real-time crack and defect detection with ML.',
    fullDescription:
      'An autonomous Non-Destructive Testing (NDT) robot designed for industrial applications. This advanced system combines multiple sensor technologies including ultrasonic, infrared, and eddy current sensors to detect cracks and defects in materials in real-time. The robot employs machine learning algorithms to analyze sensor data and accurately identify structural anomalies, making it ideal for preventive maintenance in industrial settings.',
    tech: ['Python', 'OpenCV', 'Sensors', 'ML', 'Raspberry Pi'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://drive.google.com/drive/folders/1UBrKCh7Dp9HvPaqHzBxQhZXCg3emEnlA?usp=sharing',
    github: 'https://github.com/Abhivanth-08/NDT',
    videoDemo: 'https://youtu.be/ZaZC1xjsAsI',
    demoType: 'repository',
    architecture: 'Sensors (Ultrasonic/IR/Eddy Current) → Signal Preprocessing → Feature Extraction → ML Inference Engine → Defect Classification → Alert System / Visualization Dashboard',
    challenges: [
      'Fusing multi-modal sensor data (ultrasonic, infrared, eddy current) with different sampling rates and noise profiles',
      'Training ML models with limited industrial defect datasets and class imbalance',
      'Achieving real-time inference on edge hardware while maintaining detection accuracy',
      'Calibrating sensors for varying material properties and environmental conditions',
      'Implementing autonomous navigation while maintaining sensor alignment precision'
    ],
  },
  {
    id: 'info-redaction-agent',
    title: 'Info Redaction Agent',
    category: 'AI & NLP',
    description:
      'AI system to automatically detect and redact PII from PDFs, text, and structured data ensuring privacy compliance.',
    fullDescription:
      'An intelligent AI-powered system designed to automatically detect and redact Personally Identifiable Information (PII) from various document formats. The system processes PDFs, text documents, and structured data to identify sensitive information such as names, addresses, social security numbers, and other personal details. Built with compliance in mind, it ensures adherence to privacy regulations like GDPR and CCPA. The solution uses advanced NLP techniques and is deployed with a FastAPI backend and TypeScript frontend.',
    tech: ['Python', 'LangChain', 'PyMuPDF', 'Docling', 'FastAPI','TypeScript'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://0207abhi-info-redaction.hf.space',
    github: 'https://github.com/Abhivanth-08/info_redaction_main',
    videoDemo: 'https://youtu.be/lrfmWWnmnu0',
    demoType: 'live',
    architecture: 'Document Upload → Document Parsing (PyMuPDF/Docling) → Text Extraction → NER Models (LangChain) → PII Pattern Matching → Redaction Engine → GDPR/CCPA Compliance Validation → Redacted Output (PDF/Text)',
    challenges: [
      'Handling complex PDF layouts with tables, images, and multi-column text while preserving structure',
      'Achieving high precision/recall on diverse PII types (names, SSN, addresses, emails, phone numbers)',
      'Context-aware redaction to avoid false positives (e.g., "Apple" as company vs. fruit)',
      'Maintaining document formatting and readability after redaction',
      'Ensuring GDPR/CCPA compliance with audit trails and reversible redaction options'
    ],
  },
  {
    id: 'ai-foley-studio',
    title: 'AI Foley Studio',
    category: 'AI / Audio-Tech',
    description:
      'Developed an AI-powered web tool that automatically generates and syncs realistic Foley sound effects for video clips, enhancing audio quality and immersion using machine learning and audio processing.',
    fullDescription:
      'An innovative AI-powered platform for automatic Foley sound effect generation and synchronization. The system analyzes video content using computer vision techniques (MediaPipe and YOLO) to detect actions, movements, and events that require sound effects. It then automatically generates and syncs realistic Foley sounds to enhance the audio quality and immersion of video content. Built with LangChain for intelligent decision-making, the application features a TypeScript frontend and FastAPI backend, making professional-grade audio production accessible to content creators.',
    tech: ['Langchain', 'Computer Vision','Mediapipe','YOLO','TypeScript','FastAPI'],
    gradient: 'from-secondary/20 to-accent/20',
    demo: 'https://ai-foley-studio.vercel.app/',
    github: 'https://github.com/Abhivanth-08/AI-Foley-Studio',
    videoDemo: ' https://youtu.be/p_SFvmGrAnE',
    demoType: 'live',
    architecture: 'Video Input → Frame Extraction → Computer Vision (YOLO/MediaPipe) → Action/Event Detection → LangChain Decision Engine → Sound Effect Selection/Generation → Audio Timing Synchronization → Mixed Audio Output',
    challenges: [
      'Frame-accurate synchronization between detected visual events and audio effects',
      'Training/fine-tuning CV models to recognize subtle actions requiring sound (footsteps, object handling, cloth movement)',
      'Building an intelligent sound effect selection system that understands context and scene aesthetics',
      'Managing latency for near-real-time processing on web platform',
      'Creating natural-sounding audio transitions and avoiding repetitive/robotic sound patterns'
    ],
  },
  {
    id: 'e-commerce-website',
    title: 'E Commerce Website',
    category: 'Web Development',
    description:
      "J.V.Enterprise's e-commerce platform designed to provide a seamless online shopping experience. It features user-friendly navigation, and a robust product management system, catering to both customers and sellers.",
    fullDescription:
      "A full-featured e-commerce platform built for J.V.Enterprise, providing a comprehensive online shopping solution. The platform offers an intuitive user interface with seamless navigation, secure payment processing, and a robust product management system. Built with TypeScript for type safety and Supabase for backend services, it includes features such as user authentication, product catalog management, shopping cart functionality, order tracking, and an admin dashboard. The platform is designed to serve both customers and sellers with dedicated interfaces for each user type.",
    tech: ['TypeScript','Supabase'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://jvenerprise.vercel.app', 
    github: 'https://github.com/Abhivanth-08/JV_web',
    videoDemo: 'https://jvenerprise.vercel.app',
    demoType: 'live',
    architecture: 'Client (TypeScript/React) → API Layer → Authentication (Supabase Auth) → Database (PostgreSQL) → Storage (Product Images) → Payment Gateway → Order Management → Admin Dashboard',
    challenges: [
      'Implementing real-time inventory management with optimistic UI updates and conflict resolution',
      'Securing multi-tenant architecture with role-based access control (customer/seller/admin)',
      'Building a performant product search with filtering, sorting, and pagination at scale',
      'Handling concurrent transactions and preventing race conditions in cart/checkout flow',
      'Designing a responsive UI that works seamlessly across mobile, tablet, and desktop'
    ],
  },
  {
    id: 'pr-review-agent',
    title: 'Pull Request Review Agent',
    category: 'AI Tools',
    description:
      "An AI-powered Pull Request Review Agent that automatically analyzes PRs, summarizes changes, identifies issues, and provides actionable feedback. Built to speed up code reviews and improve developer productivity with intelligent insights.",
    fullDescription:
      'An intelligent AI-powered tool designed to streamline the code review process. This automated PR review agent analyzes pull requests comprehensively, providing detailed summaries of code changes, identifying potential issues, security vulnerabilities, and code quality concerns. Using LangChain for natural language processing and the GitHub API for repository integration, the agent delivers actionable feedback to developers. The TypeScript and FastAPI-based system integrates seamlessly into existing development workflows, significantly reducing review time while maintaining high code quality standards.',
    tech: ['TypeScript','Langchain','FastAPI','Github API'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://pr-review-phi.vercel.app', 
    github: 'https://github.com/Abhivanth-08/PR_review',
    videoDemo: 'https://youtu.be/fddj0gHc6f0',
    demoType: 'live',
    architecture: 'GitHub Webhook/API → PR Diff Parsing → Code AST Analysis → LangChain Reasoning Engine → Security Scanner → Code Quality Checker → Comment Generator → GitHub Integration (Auto-comment on PR)',
    challenges: [
      'Parsing and understanding code changes across multiple languages and frameworks',
      'Providing contextual feedback that considers project-specific patterns and coding standards',
      'Balancing automated analysis speed with depth of insights (avoiding superficial comments)',
      'Integrating with GitHub API rate limits and webhook reliability',
      'Training the LangChain agent to give actionable, non-noisy feedback (avoiding comment fatigue)'
    ],
  },
  {
    id: 'college-chatbot',
    title: 'College Chatbot',
    category: 'AI Assistant',
    description:
      'AI-powered chatbot automating admissions, events, food orders, and exam prep with real-time data access for the college.',
    fullDescription:
      'A comprehensive AI-powered chatbot solution designed specifically for college operations. This intelligent assistant automates multiple aspects of campus life including admissions inquiries, event management, food ordering services, and exam preparation support. The chatbot leverages LangChain for natural language understanding, Docling for document processing, and LanceDB for efficient vector storage and retrieval. It provides real-time access to college data and can handle multiple concurrent user requests through its FastAPI backend.',
    tech: ['Python', 'LangChain', 'Docling', 'LanceDB', 'FastAPI','TypeScript'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://github.com/Abhivanth-08/College_chatbot',
    github: 'https://github.com/Abhivanth-08/College_chatbot',
    videoDemo: '',
    demoType: 'repository',
    architecture: 'User Query → Intent Classification → Document Retrieval (LanceDB Vector Store) → Context Extraction (Docling) → LangChain RAG Pipeline → Multi-Service Integration (Admissions/Events/Food/Exam APIs) → Response Generation → User Interface',
    challenges: [
      'Building a unified conversational interface for diverse domains (admissions, food, exams, events)',
      'Implementing accurate intent classification with limited training data',
      'Maintaining conversation context across multi-turn dialogues and service switches',
      'Ensuring real-time data freshness from multiple backend systems',
      'Handling ambiguous queries and graceful fallback when confidence is low'
    ],
  },
  {
    id: 'resume-reformer-agent',
    title: 'Resume Reformer Agent',
    category: 'AI Tools',
    description:
      'AI agent that reformats and optimizes resumes based on job descriptions to improve ATS compatibility and keyword alignment.',
    fullDescription:
      'An intelligent AI agent designed to optimize resumes for Applicant Tracking Systems (ATS). The system analyzes job descriptions and automatically reformats resumes to improve keyword alignment and ATS compatibility. Using advanced prompt engineering techniques and LangChain, the agent extracts key requirements from job postings and restructures resume content to highlight relevant skills and experiences. It processes PDF documents using PyMuPDF and Docling, ensuring that the output maintains professional formatting while maximizing job match scores.',
    tech: ['Python', 'LangChain', 'Prompt Engineering', 'PyMuPDF', 'Docling'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://github.com/Abhivanth-08/Resume-Reformer',
    github: 'https://github.com/Abhivanth-08/Resume-Reformer',
    videoDemo: '',
    demoType: 'repository',
    architecture: 'Resume PDF Upload → Document Parsing (PyMuPDF/Docling) → Job Description Analysis → Keyword Extraction → LangChain Optimization Agent → Content Restructuring → ATS Compatibility Scoring → Formatted Output Generation',
    challenges: [
      'Extracting semantic meaning from varied resume formats and structures',
      'Balancing keyword optimization with natural language flow (avoiding keyword stuffing)',
      'Preserving user authenticity while adapting content to job requirements',
      'Maintaining PDF formatting and visual hierarchy after text modifications',
      'Handling edge cases like career gaps, job transitions, and non-traditional backgrounds'
    ],
  },
  {
    id: 'exhibit-defect-detection',
    title: 'Exhibit Defect Detection',
    category: 'Computer Vision',
    description:
      'AI-CNN-based system integrated with IoT for detecting defects in museum exhibits and enabling predictive maintenance.',
    fullDescription:
      'A sophisticated computer vision system designed for museum exhibit preservation. This AI-powered solution uses Convolutional Neural Networks (CNN) to detect defects and deterioration in museum exhibits. Integrated with IoT devices through Raspberry Pi, the system continuously monitors exhibit conditions and can predict maintenance needs before visible damage occurs. Built with PyTorch for deep learning capabilities, it provides real-time alerts and detailed analysis reports to help preserve valuable artifacts and exhibits.',
    tech: ['Python', 'PyTorch', 'CNN', 'Raspberry Pi'],
    gradient: 'from-accent/20 to-primary/20',
    demo: 'https://github.com/Abhivanth-08/Exhibit_defect_detection_system',
    github: 'https://github.com/Abhivanth-08/Exhibit_defect_detection_system',
    videoDemo: '',
    demoType: 'repository',
    architecture: 'IoT Cameras (Raspberry Pi) → Image Capture → Preprocessing → CNN Model (PyTorch) → Defect Detection → Temporal Analysis (Change Detection) → Predictive Maintenance Engine → Alert System / Dashboard',
    challenges: [
      'Training CNN models with limited labeled defect data from museum artifacts',
      'Detecting subtle deterioration (cracks, discoloration, structural changes) against complex backgrounds',
      'Handling varying lighting conditions and camera angles in museum environments',
      'Implementing predictive maintenance without historical failure data',
      'Deploying edge inference on resource-constrained Raspberry Pi for continuous monitoring'
    ],
  },
  {
    id: 'llm-internals-explorer',
    title: 'LLM Internals Explorer',
    category: 'AI / ML Education',
    description:
      'See what\'s actually happening inside GPT-2 and BERT. Most LLM tutorials show you APIs—this shows you the math, the attention, the embeddings using real models, not simulations.',
    fullDescription:
      'An innovative educational platform that demystifies Large Language Models by exposing their internal mechanics. Unlike typical LLM tutorials that only show API usage, this tool provides deep insights into transformer architecture through real GPT-2 and BERT inference. The platform features an Attention Head Personality Profiler that reveals how GPT-2\'s 144 attention heads have specialized into distinct roles: Syntax Trackers, Semantic Linkers, Positional Encoders, Rare Pattern Detectors, and Context Aggregators. Users can explore actual attention weights across all 12 layers × 12 heads, perform semantic vector arithmetic (King - Man + Woman = Queen) in 3D space, analyze BPE tokenization in real-time, and visualize the "Lost in the Middle" phenomenon in context windows. Built with real transformer forward passes, it includes AI security analysis with prompt injection detection, LLM cost routing across providers, and interactive mathematical formulas showing attention equations and softmax operations.',
    tech: ['Python', 'React', 'FastAPI', 'PyTorch', 'Transformers', 'scikit-learn', 'TypeScript', 'Vite', 'TailwindCSS', 'React Three Fiber', 'Plotly'],
    gradient: 'from-primary/20 to-accent/20',
    demo: 'https://llm-workflow-five.vercel.app/',
    github: 'https://github.com/Abhivanth-08/LLM_WORKFLOW',
    videoDemo: '',
    demoType: 'live',
    architecture: 'Frontend (React + TypeScript + Three.js) → API Gateway (FastAPI) → Model Loading (GPT-2 124M / all-MiniLM-L6-v2) → Inference Engine (PyTorch + Transformers) → Feature Extraction → t-SNE Clustering → Visualization Pipeline (Plotly + 3D Canvas) → Interactive UI Components',
    challenges: [
      'Running GPT-2 inference server-side while maintaining low latency for interactive visualizations',
      'Clustering 144 attention heads by behavior using t-SNE on high-dimensional attention pattern features',
      'Creating intuitive 3D visualizations that accurately represent complex mathematical concepts (attention, embeddings)',
      'Balancing educational depth with user experience—showing real math without overwhelming beginners',
      'Extracting and displaying meaningful attention patterns from 12 layers × 12 heads × variable sequence lengths',
      'Building a performant React frontend that handles real-time 3D rendering of neural network components',
      'Designing canonical sentence sets that reveal distinct head personalities without manual labeling',
      'Implementing AI security analysis (prompt injection detection) with graceful fallback to heuristics'
    ],
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
