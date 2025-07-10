// portfolio/src/data/portfolio_const_data.js
export const personalInfo = {
  name: 'Clement Wong Qin Yuan',
  title: 'Fresh Graduate Software Engineer',
  bio: 'Passionate software engineer with 2+ years of experience building scalable web applications and . I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
  email: 'clementwong02@icloud.com',
  phone: '+60 10-771-6607',
  location: 'Selangor, Malaysia',
  Studies: 'Bachelor of Engineering in Software Engineering (Honours), Xiamen University Malaysia',
  linkedin: 'www.linkedin.com/in/clement-wong-703552229',
  twitter: 'twitter.com/johndoe',
  github: 'https://github.com/Clement0803',
  profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
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
  }
];

export const skills = [
  'JavaScript', 'React', 'Python', 'MongoDB', 'MySQL', 'Git', 'HTML', 'CSS', 'Machine Learning'
];

export const experience = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.',
    current: true
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2019 - 2021',
    description: 'Built scalable web applications using React and Node.js, collaborated with cross-functional teams.',
    current: false
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'WebDev Corp',
    period: '2018 - 2019',
    description: 'Developed responsive websites and learned modern web development practices.',
    current: false
  }
];

export const socialLinks = {
  github: 'https://github.com/johndoe',
  linkedin: 'https://linkedin.com/in/johndoe',
  twitter: 'https://twitter.com/johndoe',
  email: 'mailto:john.doe@email.com'
};