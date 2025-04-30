import React, { useState, useEffect } from 'react'
import HeaderTitle from '../../components/common/HeaderTitle/HeaderTitle'
import ProjectLinks from '../../components/common/ProjectLinks/ProjectLinks'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Blogify from "../../assets/Blogify.png"
// Project data array with 10+ projects and image URLs
const projectsData = [
  {
    id: 6,
    title:"Blogify",
    description:"Developed Blogify, a full-stack blogging web application, inspired by leading platforms like Medium. Implemented secure authentication with JWT, ensured data integrity with TypeScript and Zod, and deployed the app using Vercel (frontend) and Cloudflare Workers (backend) for scalability and availability.",
    technologies:["React", "PostgreSQL", "Prisma", "Hono", "JWT", "TypeScript", "Zod", "Tailwind CSS", "Vercel", "Cloudflare Workers"],
    demoLink:"https://blogify-plum-psi.vercel.app/",
    githubLink:"https://github.com/NikhilBhagoria/blogify",
    featured:false,
    imageUrl:Blogify
  },
  {
    id: 5,
    title: "Youtube Clone",
    description: "Platform for buying, selling, and renting properties with virtual tours and mortgage calculators.",
    technologies: ["Next.js", "MongoDB", "Mapbox", "Tailwind CSS"],
    demoLink: "https://clinquant-chebakia-d8a963.netlify.app/",
    githubLink: "https://github.com/yourusername/real-estate-marketplace",
    featured: false,
    imageUrl: "/project4.png"
  },
  {
    id: 1,
    title: "Interview Scheduler",
    description: "Search and discover recipes based on ingredients, dietary restrictions, and cuisine preferences.",
    technologies: ["React.js", "Spoonacular API", "Styled Components", "Firebase"],
    demoLink: "https://clinquant-donut-876ecc.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/Interview-Scheduler",
    featured: false,
    imageUrl: "/interview-scheduler.png"
  },
  {
    id: 2,
    title: "Weather",
    description: "Track workouts, set goals, and monitor progress with detailed analytics and visualizations.",
    technologies: ["React Native", "Redux", "Firebase", "D3.js"],
    demoLink: "https://bejewelled-jalebi-b4c135.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/react-weather-dashboard",
    featured: false,
    imageUrl: "/Weather.png"
  },
  {
    id: 3,
    title: "Dinemetrics - Restaurant Analytics Dashboard",
    description: "Personal finance application for budget planning, expense tracking, and financial goal setting.",
    technologies: ["Vue.js", "Vuex", "MongoDB", "Express.js"],
    demoLink: "https://lucky-bavarois-9360c2.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/Sales-Analytics-Dashboard",
    featured: false,
    imageUrl: "/Dinemetrics.png"
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "AI-powered movie recommendation engine based on user preferences and viewing history.",
    technologies: ["Python", "TensorFlow", "Flask", "React.js"],
    demoLink: "https://stalwart-brigadeiros-e290e3.netlify.app",
    githubLink: "https://github.com/NikhilBhagoria/Soar_Frontend_Task",
    featured: false,
    imageUrl: "/Financial.png"
  },
  {
    id: 6,
    title: "Virtualr",
    description: "Interactive language learning platform with speech recognition and progress tracking.",
    technologies: ["React.js", "Node.js", "Web Speech API", "MongoDB"],
    demoLink: "https://dulcet-chebakia-a1b7f1.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/virtualr",
    featured: false,
    imageUrl: "/project3.png"
  },
  {
    id: 7,
    title: "Spotify",
    description: "Job listing and application platform with resume builder and company profiles.",
    technologies: ["React.js", "Express.js", "PostgreSQL", "AWS S3"],
    demoLink: "https://guileless-cat-c5f272.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/spotify-clone",
    featured: false,
    imageUrl: "/project2.png"
  },
  {
    id: 8,
    title: "Fitness Website",
    description: "Real-time cryptocurrency tracking with price alerts, portfolio management, and market analysis.",
    technologies: ["React.js", "CoinGecko API", "Socket.io", "Chart.js"],
    demoLink: "https://kpfitness.netlify.app/",
    githubLink: "https://github.com/NikhilBhagoria/fitness-Website",
    featured: false,
    imageUrl: "/project1.png"
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all'); // 'all', 'featured', or specific technology
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsPerPage = 4; // Reduced for larger cards

  // Filter projects based on selected filter
  useEffect(() => {
    let result = projectsData;

    if (filter === 'featured') {
      result = projectsData.filter(project => project.featured);
    } else if (filter !== 'all') {
      // Filter by technology
      result = projectsData.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }

    setFilteredProjects(result);
    setCurrentPage(1); // Reset to first page when filter changes
  }, [filter]);

  // Get current projects for pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get unique technologies for filter dropdown
  const allTechnologies = [...new Set(projectsData.flatMap(project => project.technologies))];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderTitle title="My Works" />

        {/* Pagination Controls - Top */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-[var(--color-text-primary)] text-xl font-serif">
            <span className="font-light">Projects</span>
            {/* <span className="mx-2 opacity-50">/</span> */}
            {/* <span className="font-medium">{filter === 'all' ? 'All' : filter === 'featured' ? 'Featured' : filter}</span> */}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 md:p-3 rounded-full border border-[var(--color-text-secondary)] ${currentPage === 1 ? 'text-[var(--color-text-secondary)] cursor-not-allowed' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-card-hover)]'}`}
              aria-label="Previous page"
            >
              <FiArrowLeft size={24} />
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-3 h-3 rounded-full transition-all ${currentPage === i + 1
                    ? 'bg-[var(--color-accent-primary)]'
                    : 'bg-[var(--color-text-secondary)] opacity-50 hover:opacity-100'}`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 md:p-3 rounded-full border border-[var(--color-text-secondary)] ${currentPage === totalPages ? 'text-[var(--color-text-secondary)] cursor-not-allowed' : 'text-[var(--color-text-primary)] hover:bg-[var(--color-card-hover)]'}`}
              aria-label="Next page"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        {/* <div className="mb-12 flex flex-wrap justify-start gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'all'
              ? 'bg-[var(--color-light)] text-[var(--color-dark)] font-medium'
              : 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full transition-all ${filter === 'featured'
              ? 'bg-[var(--color-light)] text-[var(--color-dark)] font-medium'
              : 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]'}`}
          >
            Featured
          </button> */}

          {/* Technology filters */}
          {/* {allTechnologies.slice(0, 5).map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full transition-all ${filter === tech
                ? 'bg-[var(--color-light)] text-[var(--color-dark)] font-medium'
                : 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]'}`}
            >
              {tech}
            </button>
          ))} */}

          {/* More filters dropdown if needed */}
          {/* {allTechnologies.length > 5 && (
            <div className="relative">
              <select
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none bg-transparent text-[var(--color-text-primary)] border border-[var(--color-text-secondary)] px-6 py-2 pr-8 rounded-full hover:border-[var(--color-text-primary)] focus:outline-none"
              >
                <option value="" disabled selected>More...</option>
                {allTechnologies.slice(5).map((tech, index) => (
                  <option key={index} value={tech} className="bg-[var(--color-dark)]">
                    {tech}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text-primary)]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
        </div> */}

        {/* Projects Grid - Modern Image-focused Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[300px] rounded-xl overflow-hidden group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark-accent)]/70 to-transparent opacity-90"></div>
              </div>

              {/* Project Info */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* <h3 className="text-3xl font-serif font-bold text-[var(--color-project-text)] mb-3">{project.title}</h3>
                <p className="text-[var(--color-project-desc)] mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p> */}

                {/* Technologies */}
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--color-light)]/10 backdrop-blur-sm text-[var(--color-text-primary)] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-[var(--color-light)]/10 backdrop-blur-sm text-[var(--color-text-primary)] rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div> */}

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--color-project-btn-text)] bg-[var(--color-project-btn)] px-4 py-2 rounded-full hover:bg-[var(--color-light)]/20 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[var(--color-project-btn-text)] bg-[var(--color-project-btn)] backdrop-blur-sm px-4 py-2 rounded-full hover:bg-[var(--color-light)]/20 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* View Details Button - Appears on Hover */}
              <div
                className={`absolute top-4 right-4 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--color-light)]/20 backdrop-blur-sm rounded-full hover:bg-[var(--color-light)]/30 transition-colors"
                >
                  <svg className="w-6 h-6 text-[var(--color-text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/NikhilBhagoria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 md:px-8 md:py-3 text-sm md:text-lg font-semibold md:font-medium rounded-full shadow-sm  text-[var(--color-button-text)] bg-[var(--color-button-bg)] border-2 border-[var(--color-button-border)] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View All Projects on GitHub
            <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects