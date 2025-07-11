import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin, Linkedin, Twitter, BookMarked, Menu, X, ChevronDown, FileUserIcon} from 'lucide-react';
import { personalInfo, projects, skills, experience, socialLinks } from './data/portfolio_const_data';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const themeClasses = 'bg-gray-900 text-white';
  const cardClasses = 'bg-gray-800 border-gray-700';
  const navClasses = 'bg-gray-900/95 border-gray-700';

  // Show first 3 projects initially, then all when expanded
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const navigationItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-all duration-300 ${navClasses}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.Head_name}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-auto">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-16">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-32 justify-center">
            <div className="lg:w-2/3">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold">{personalInfo.name}</h1>
                <h2 className="text-2xl text-gray-300">{personalInfo.title}</h2>
                <p className="text-xl leading-relaxed text-gray-200 font-serif">
                  Fresh graduate Software Engineer with a passion for innovation and technology. I specialize in machine learning, 
                  web development, and software testing, bringing a comprehensive approach to solving complex technical challenges. 
                  During my university journey, I've leveraged AI and machine learning to create innovative solutions that push the 
                  boundaries of what's possible in software development.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3 text-xl">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600">
                      {personalInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xl">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>{personalInfo.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xl">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{personalInfo.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <BookMarked className="w-5 h-5 text-blue-600" />
                    <span>{personalInfo.Studies}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={`https://${personalInfo.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
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
                  className="w-100 h-100 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8">
        <div className="max-w-6xl mx-auto rounded-2xl bg-gray-700 p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">~About Me~</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg leading-relaxed text-gray-200 font-serif">
              As a fresh graduate in Software Engineering, I'm passionate about exploring the intersection of technology and innovation. 
              My primary interests lie in Machine Learning, Web Development, and Software Testing, where I enjoy creating robust 
              solutions that make a real impact.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 font-serif">
              During my final year project and internship period, I had the opportunity to work extensively with AI and machine learning 
              technologies, developing innovative projects that showcase the potential of intelligent systems. These experiences have 
              strengthened my belief in technology's power to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-gray-200 font-serif">
              Beyond coding, I'm an avid badminton player who loves the strategic thinking the sport demands. I also enjoy natural 
              adventures that help me stay connected with the outdoors, and I've discovered a passion for creating new desserts at home - 
              it's my creative outlet that combines precision with experimentation, much like programming!
            </p>
            <p className="text-lg leading-relaxed text-gray-200 font-serif">
              In my free time, you'll find me learning new technologies and exploring different domains of knowledge. I believe that 
              continuous learning is essential in our rapidly evolving tech landscape, and I'm always excited to dive into emerging 
              trends and tools that can enhance my development skills.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-10">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
      <section id="projects" className="py-16 px-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedProjects.map((project) => (
              <div key={project.id} className={`rounded-xl border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${cardClasses}`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
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
                        className="flex items-center gap-2 text-blue-600 rounded-2xl border overflow-hidden px-4 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Link Refer
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 rounded-2xl border overflow-hidden px-4 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Button */}
          {projects.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showAllProjects ? 'Show Less' : 'View More Projects'}
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {/* Show message if no projects */}
          {displayedProjects.length === 0 && (
            <div className="text-center py-12 max-w-4xl mx-auto">
              <p className="text-gray-500">No projects to display yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experience.map((exp) => (
              <div key={exp.id} className={`p-6 rounded-xl border ${cardClasses}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>

            <a
              href={`https://${socialLinks.linkedin}`}
              target="_blank" //Opens the link in a new tab or window
              rel="noopener noreferrer" //Improves security by preventing the new page from accessing the original page's window object
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

             <a
              href={"/public/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <FileUserIcon className="w-5 h-5" />
              Resume
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-700">
        <div className="w-full text-center max-w-4xl mx-auto">
          <p className="text-gray-300">
            Copyright © 2025 {personalInfo.name}.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;