import { Instagram } from "lucide-react";

// portfolio/src/data/portfolio_const_data.js
export const personalInfo = {
  Head_name: 'Portfolio',
  name: 'Clement Wong Qin Yuan',
  title: 'Fresh Graduate Software Engineer',
  email: 'clementwong02@icloud.com',
  phone: '+60 10-771-6607',
  location: 'Selangor, Malaysia',
  Studies: 'Bachelor of Engineering in Software Engineering (Honours), Xiamen University Malaysia',
  linkedin: 'www.linkedin.com/in/clementwong0803',
  github: 'github.com/Clement0803',
  profileImage: 'src/assets/WAN_8840.jpeg'
};

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/johndoe/ecommerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    techStack: ['Vue.js', 'Firebase', 'Vuetify'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/johndoe/taskapp',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Modern weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
    techStack: ['React', 'TypeScript', 'OpenWeather API'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/johndoe/weather',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    featured: true
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and experience. Built with React and styled-components.',
    techStack: ['React', 'JavaScript', 'Styled-components'],
    liveDemo: 'https://example.com',
    github: 'https://github.com/Clement0803/Portfilio_Dev',
    image: '/src/assets/web_portfolio.jpg',
    featured: true
  }
];

export const skills = [
  'JavaScript', 'React', 'Python', 'MongoDB', 'MySQL', 'Git', 'HTML', 'CSS', 'Machine Learning'
];

export const experience = [
  {
    id: 1,
    title: 'Intern Software Engineer',
    company: 'Continental Tyres',
    period: '2025 - Present',
    description: 'Focus on developing machine learning models for predictive maintenance, enhancing system performance and reliability. And collaborate with cross-functional teams to integrate AI solutions into existing systems. Also include software testing and debugging to ensure high-quality deliverables and SAP integration for data management.',
    current: true
  },
  {
    id: 2,
    title: 'AI-Based Left-Behind Child Presence Detection System (Final Year Project)',
    company: 'Xiamen University Malaysia',
    period: '03/2024 - 12/2024',
    description: ' Developed a real-time object detection system using computer vision to identify children or adults left inside vehicles. Used Python and YOLO-based object detection models integrated with a camera system for automatic safety alerts. Implemented image processing, detection logic, and alert notifications to prevent critical incidents. Integrated hardware (IoT camera) and backend system with a mobile notification app to demonstrate real-world use cases.', 
    current: true
  },
   {
    id: 3,
    title: ' Full-Stack Developer for Web Application and Mobile Application',
    company: 'Xiamen University Malaysia',
    period: ' 04/2023 - 02/2024',
    description: 'Designed and developed a full-stack web application using HTML, CSS, JavaScript, and SQL. Built and connected a backend database for managing user profiles, feedback, and content posting. Gained hands-on experience in frontend-backend integration and database management. Developed a mobile travel application for Android using Java and XML, enabling users to create personalized travel itineraries.Integrated map features, location-based suggestions, and a clean navigation UI for optimal user experience. Worked with local storage and structured data handling to save and retrieve user preferences',
    current: false
  },
  {
    id: 4,
    title: 'Volunteer Medical Vaccination Assistant',
    company: 'KPJ Healthcare Sibu',
    period: '2021/07 - 2021/09',
    description: 'Vaccination assistant, responsible for managing patient flow, preparing vaccination materials, and ensuring a smooth vaccination process. Assisted healthcare professionals in administering vaccines and provided post-vaccination care and monitoring. Also help in data entry and record keeping to maintain accurate vaccination records.',
    current: false
  },
  {
    id: 5,
    title: 'Junior Developer',
    company: 'WebDev Corp',
    period: '2018 - 2019',
    description: 'Developed responsive websites and learned modern web development practices.',
    current: false
  },
  
];

export const socialLinks = {
  github: 'https://github.com/Clement0803',
  linkedin: 'www.linkedin.com/in/clementwong0803',
  Instagram: 'https://twitter.com/johndoe',
  email: 'clementwong02@icloud.com'
};