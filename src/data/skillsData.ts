export const skillsData = [
  { 
    name: 'AI/ML', 
    color: '#8B5CF6', 
    skills: [
      { name: 'PyTorch', description: 'Deep learning framework for neural networks' },
      { name: 'Scikit-learn', description: 'Classic ML library for models and pipelines' },
      { name: 'LangChain', description: 'Framework for building RAG-based intelligent LLM applications' },
      { name: 'NLP', description: 'Natural Language Processing techniques and tools' },
      { name: 'Deep Learning', description: 'Neural networks and representation learning' },
      { name: 'OpenCV', description: 'Computer vision library for image processing' },
      { name: 'CNN', description: 'Convolutional Neural Networks for image recognition' },
      { name: 'YOLO', description: 'Real-time object detection algorithm' }
    ]
  },
  { 
    name: 'IoT & Hardware', 
    color: '#F59E0B', 
    skills: [
      { name: 'Raspberry Pi', description: 'Single-board computer for IoT projects' },
      { name: 'Sensors', description: 'Environmental and motion sensing devices' },
      { name: 'Arduino', description: 'Microcontroller platform for hardware projects' },
      { name: 'Embedded Systems', description: 'Specialized computing systems in devices' }
    ]
  },
  { 
    name: 'Programming Languages', 
    color: '#3B82F6', 
    skills: [
      { name: 'Python', description: 'Versatile language for AI, data science, and automation' },
      { name: 'C', description: 'System programming and embedded development' },
      { name: 'Java', description: 'Enterprise applications and cross-platform development' },
      { name: 'R', description: 'Statistical computing and data analysis' },
      { name: 'SQL', description: 'Database query language for data management' }
    ]
  },
  { 
    name: 'Tools & Platforms', 
    color: '#10B981', 
    skills: [
      { name: 'FastAPI', description: 'Modern Python web framework for APIs' },
      { name: 'GitHub', description: 'Version control and collaboration platform' },
      { name: 'Docling', description: 'Document processing and analysis tool' },
      { name: 'LanceDB', description: 'Vector database for AI applications' },
      { name: 'Blender', description: '3D modeling and animation software' }
    ]
  }
];

export type SkillCategory = typeof skillsData[number];
