import React, { useState } from 'react';
import { Edit3, Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Twitter, Plus, Save, X, Moon, Sun, BookMarked } from 'lucide-react';
import { personalInfo, projects, skills, experience, socialLinks } from './data/portfolio_const_data';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  
  // Local state for editing (changes won't persist on refresh)
  const [localPersonalInfo, setLocalPersonalInfo] = useState(personalInfo);
  const [localProjects, setLocalProjects] = useState(projects);
  const [localSkills] = useState(skills);
  const [localExperience] = useState(experience);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    techStack: '',
    liveDemo: '',
    github: '',
    image: ''
  });

  const handlePersonalInfoEdit = (field, value) => {
    setLocalPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleProjectEdit = (projectId, field, value) => {
    if (field === 'techStack') {
      value = value.split(',').map(tech => tech.trim());
    }
    setLocalProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, [field]: value } : p
    ));
  };

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        ...newProject,
        id: Date.now(),
        techStack: newProject.techStack.split(',').map(tech => tech.trim()),
        image: newProject.image || 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop',
        featured: true
      };
      setLocalProjects(prev => [project, ...prev]);
      setNewProject({
        title: '',
        description: '',
        techStack: '',
        liveDemo: '',
        github: '',
        image: ''
      });
      setEditingProject(null);
    }
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setLocalProjects(prev => prev.filter(p => p.id !== projectId));
    }
  };

  const themeClasses = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const cardClasses = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

  // Get featured projects - show all if none are specifically marked as featured
  const featuredProjects = localProjects.filter(project => project.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : localProjects;

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-opacity-90 border-b border-gray-200 dark:border-gray-700">
        <div className={`${themeClasses} bg-opacity-90`}>
          <div className="w-full px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {localPersonalInfo.name}
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
                {editMode ? 'Demo Mode' : 'Edit Demo'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Notice */}
      {editMode && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg shadow-lg z-40">
          <p className="text-sm">🎨 Demo Mode: Changes won't be saved (refresh to reset)</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
            <div className="lg:w-2/3">
              <div className="space-y-6">
                {editMode ? (
                  <input
                    type="text"
                    value={localPersonalInfo.name}
                    onChange={(e) => handlePersonalInfoEdit('name', e.target.value)}
                    className={`text-5xl font-bold w-full bg-transparent border-b-2 border-blue-600 focus:outline-none ${themeClasses}`}
                  />
                ) : (
                  <h1 className="text-5xl font-bold">{localPersonalInfo.name}</h1>
                )}
                
                {editMode ? (
                  <input
                    type="text"
                    value={localPersonalInfo.title}
                    onChange={(e) => handlePersonalInfoEdit('title', e.target.value)}
                    className={`text-2xl text-gray-600 dark:text-gray-300 w-full bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                  />
                ) : (
                  <h2 className="text-2xl text-gray-600 dark:text-gray-300">{localPersonalInfo.title}</h2>
                )}
                
                {editMode ? (
                  <textarea
                    value={localPersonalInfo.bio}
                    onChange={(e) => handlePersonalInfoEdit('bio', e.target.value)}
                    className={`text-lg leading-relaxed w-full h-32 bg-transparent border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 ${themeClasses}`}
                  />
                ) : (
                  <p className="text-lg leading-relaxed">{localPersonalInfo.bio}</p>
                )}
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="email"
                        value={localPersonalInfo.email}
                        onChange={(e) => handlePersonalInfoEdit('email', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <a href={`mailto:${localPersonalInfo.email}`} className="hover:text-blue-600">
                        {localPersonalInfo.email}
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="tel"
                        value={localPersonalInfo.phone}
                        onChange={(e) => handlePersonalInfoEdit('phone', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{localPersonalInfo.phone}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="text"
                        value={localPersonalInfo.location}
                        onChange={(e) => handlePersonalInfoEdit('location', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{localPersonalInfo.location}</span>
                    )}
                  </div>

                   <div className="flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-blue-600" />
                    {editMode ? (
                      <input
                        type="text"
                        value={localPersonalInfo.Studies}
                        onChange={(e) => handlePersonalInfoEdit('Studies', e.target.value)}
                        className={`bg-transparent border-b border-gray-300 focus:outline-none ${themeClasses}`}
                      />
                    ) : (
                      <span>{localPersonalInfo.Studies}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="relative">
                <img
                  src={localPersonalInfo.profileImage}
                  alt={localPersonalInfo.name}
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                {editMode && (
                  <div className="mt-4">
                    <input
                      type="url"
                      placeholder="Profile image URL"
                      value={localPersonalInfo.profileImage}
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
      <section className="py-16 px-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {localSkills.map((skill, index) => (
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
      <section className="py-16 px-8">
        <div className="w-full">
          <div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
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
            <div className={`mb-8 p-6 rounded-xl border ${cardClasses} max-w-4xl mx-auto`}>
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
                  className={`p-3 border rounded-lg focus:outline-none focus:border-blue-600 ${themeClasses} md:col-span-2`}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {displayProjects.map((project) => (
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
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show message if no projects */}
          {displayProjects.length === 0 && (
            <div className="text-center py-12 max-w-4xl mx-auto">
              <p className="text-gray-500 dark:text-gray-400">No projects to display yet.</p>
              {editMode && (
                <button
                  onClick={() => setEditingProject('new')}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Your First Project
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {localExperience.map((exp) => (
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
      <footer className={`py-8 px-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="w-full text-center max-w-4xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300">
            Copyright © 2025 {localPersonalInfo.name}.
          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;