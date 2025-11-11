import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
       {
      title: 'DevOps Automation Suite',
      description: 'Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and Terraform. Reduced deployment time by 75%.',
      image: 'https://images.writeupcafe.com/PNEAqr8qhdqGlZD8EOfyVFOuXSJ7pv3fNHiyO3TEiUA/resize:fill:800:/aHR0cHM6Ly93cml0ZXVwY2FmZS5jb20vZGF0YS9wb3N0LzE0Njc4MDgvYWQ5OTA2NjJkMzg1OGRiZGFhYmQ2MDgwNDZlYmZkZGIuanBnLndlYnA',
      technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS'],
      liveUrl: 'https://deploy-cloud-tools.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/deploy-cloud-tools.git'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c9a83a51c69b0449b3f9d0_1758046311972_9d9a50a4.webp',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://ecommerce-web-five-sepia.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/Ecommerce-web.git'
    },
    
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices platform with API Gateway, service discovery, and distributed logging.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c9a83a51c69b0449b3f9d0_1758046317361_95ed4190.webp',
      technologies: ['Node.js', 'Docker', 'Kong', 'MongoDB', 'ELK Stack'],
      liveUrl: 'https://scalable-docker-logging.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/scalable-docker-logging.git'
    },
    {
      title: 'Mobile-First Web App',
      description: 'Progressive Web App with offline capabilities, push notifications, and responsive design.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c9a83a51c69b0449b3f9d0_1758046319262_3477b495.webp',
      technologies: ['Vue.js', 'PWA', 'Service Workers', 'Firebase'],
      liveUrl: 'https://celadon-chaja-e416dc.netlify.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/mobile-web-app.git'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Multi-region cloud infrastructure with auto-scaling, load balancing, and disaster recovery.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c9a83a51c69b0449b3f9d0_1758046321119_f33652ac.webp',
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'Lambda'],
      liveUrl: 'https://cloud-scale-aws.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/cloud-scale-aws.git'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization using React, D3.js, and WebSocket connections.',
      image: 'https://d64gsuwffb70l.cloudfront.net/68c9a83a51c69b0449b3f9d0_1758046315545_694ca339.webp',
      technologies: ['React', 'D3.js', 'WebSocket', 'Redis', 'Node.js'],
      liveUrl: 'https://realtime-analytics-opal.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/realtime-analytics.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development and DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="text-blue-600 hover:text-blue-800 font-semibold">
                    Live Demo →
                  </a>
                  <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 font-semibold">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;