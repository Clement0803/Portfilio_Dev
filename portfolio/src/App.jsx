import React, { useState } from 'react';
import { Edit3, Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Twitter, Plus, Save, X, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    techStack: '',
    liveDemo: '',
    github: '',
    image: ''
  });

  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    title: 'Full Stack Software Engineer',
    bio: 'Passionate software engineer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndoe',
    twitter: 'twitter.com/johndoe',
    github: 'github.com/johndoe',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/johndoe/ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      techStack: ['Vue.js', 'Firebase', 'Vuetify'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/johndoe/taskapp',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Modern weather application with location-based forecasts, interactive maps, and personalized weather alerts.',
      techStack: ['React', 'TypeScript', 'OpenWeather API'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/johndoe/weather',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop'
    }
  ]);

  const [skills] = useState([
    'JavaScript', 'React', 'Python', 'Java',
    'MongoDB', 'MySQL', 'AWS', 'Git', 'REST APIs'
  ]);

  const [experience] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Led development of microservices architecture, mentored junior developers, and improved system performance by 40%.'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      description: 'Built scalable web applications using React and Node.js, collaborated with cross-functional teams.'
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'WebDev Corp',
      period: '2018 - 2019',
      description: 'Developed responsive websites and learned modern web development practices.'
    }
  ]);

  const handlePersonalInfoEdit = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectEdit = (projectId, field, value) => {
    if (field === 'techStack') {
      value = value.split(',').map(tech => tech.trim());
    }
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, [field]: value } : p
    ));
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        ...newProject,
        id: Date.now(),
        techStack: newProject.techStack.split(',').map(tech => tech.trim()),
        image: newProject.image || 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop'
      };
      setProjects(prev => [...prev, project]);
      setNewProject({
        title: '',
        description: '',
        techStack: '',
        liveDemo: '',
        github: '',
        image: ''
      });
    }
  };

  const handleDeleteProject = (projectId) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
  };

  const themeClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const cardClasses = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-opacity-90 border-b border-gray-200 dark:border-gray-700">
        <div className={`${themeClasses} bg-opacity-90`}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  editMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {editMode ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                {editMode ? 'Save Changes' : 'Edit Portfolio'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <div className="space-y-6">
                {editMode ? (
                  <input
                    type="text"
                    value={personalInfo.name}
                    onChange={(e) => handlePersonalInfoEdit('name', e.target.value)}
                    className={`text-5xl font-bold w-full bg-transparent border-b-2 border-blue-600 focus:outline-none ${themeClasses}`}
                  />
                ) : (
                  <h1 className="text-5xl font-bold">{personalInfo.name}</h1>
                )}
                
                {editMode ? (
                  <input
                    type="text"
                    value={personalInfo.title}
                    onChange={(e) => handlePersonalInfoEdit('title', e.target.value)}
                    className={`text-2xl text-gray-600 dark:text-gray-300 w-full bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                  />
                ) : (
                  <h2 className="text-2xl text-gray-600 dark:text-gray-300">{personalInfo.title}</h2>
                )}
                
                {editMode ? (
                  <textarea
                    value={personalInfo.bio}
                    onChange={(e) => handlePersonalInfoEdit('bio', e.target.value)}
                    className={`text-lg leading-relaxed w-full h-32 bg-transparent border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 ${themeClasses}`}
                  />
                ) : (
                  <p className="text-lg leading-relaxed">{personalInfo.bio}</p>
                )}
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="email"
                        value={personalInfo.email}
                        onChange={(e) => handlePersonalInfoEdit('email', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{personalInfo.email}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="tel"
                        value={personalInfo.phone}
                        onChange={(e) => handlePersonalInfoEdit('phone', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{personalInfo.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="text"
                        value={personalInfo.location}
                        onChange={(e) => handlePersonalInfoEdit('location', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{personalInfo.location}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href={`https://${personalInfo.github}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={`https://${personalInfo.linkedin}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={`https://${personalInfo.twitter}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                {editMode && (
                  <div className="mt-4">
                    <input
                      type="url"
                      placeholder="Profile image URL"
                      value={personalInfo.profileImage}
                      onChange={(e) => handlePersonalInfoEdit('profileImage', e.target.value)}
                      className={`w-full bg-transparent border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-600 ${themeClasses}`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${cardClasses}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            {editMode && (
              <button
                onClick={() => setEditingProject('new')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            )}
          </div>
          
          {/* Add New Project Form */}
          {editMode && editingProject === 'new' && (
            <div className={`mb-8 p-6 rounded-xl border ${cardClasses}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Add New Project</h3>
                <button
                  onClick={() => setEditingProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={newProject.title}
                  onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses}`}
                />
                <input
                  type="text"
                  placeholder="Tech Stack (comma separated)"
                  value={newProject.techStack}
                  onChange={(e) => setNewProject(prev => ({ ...prev, techStack: e.target.value }))}
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses}`}
                />
                <input
                  type="url"
                  placeholder="Live Demo URL"
                  value={newProject.liveDemo}
                  onChange={(e) => setNewProject(prev => ({ ...prev, liveDemo: e.target.value }))}
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses}`}
                />
                <input
                  type="url"
                  placeholder="GitHub URL"
                  value={newProject.github}
                  onChange={(e) => setNewProject(prev => ({ ...prev, github: e.target.value }))}
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses}`}
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={newProject.image}
                  onChange={(e) => setNewProject(prev => ({ ...prev, image: e.target.value }))}
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses}`}
                />
              </div>
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                className={`mt-4 w-full p-3 border rounded-lg h-24 focus:outline-none focus:border-blue-600 ${themeClasses}`}
              />
              <button
                onClick={handleAddProject}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Add Project
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${cardClasses}`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {editMode && (
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="p-6">
                  {editMode ? (
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectEdit(project.id, 'title', e.target.value)}
                      className={`text-xl font-semibold mb-3 w-full bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                    />
                  ) : (
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  )}
                  
                  {editMode ? (
                    <textarea
                      value={project.description}
                      onChange={(e) => handleProjectEdit(project.id, 'description', e.target.value)}
                      className={`text-gray-600 dark:text-gray-300 mb-4 w-full h-20 bg-transparent border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-600 ${themeClasses}`}
                    />
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className={`p-6 rounded-xl border ${cardClasses}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 {personalInfo.name}. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;