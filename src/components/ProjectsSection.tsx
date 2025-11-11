import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
       {
      title: 'DevOps Automation Suite',
      description: 'Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and Terraform. Reduced deployment time by 75%.',
      image: 'https://i.pinimg.com/1200x/66/fe/df/66fedf761fde4bacd9488435af4c3a45.jpg',
      technologies: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS'],
      liveUrl: 'https://deploy-cloud-tools.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/deploy-cloud-tools.git'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://i.pinimg.com/1200x/eb/09/7a/eb097ad94bfe6075f3ba5c8a752fd56e.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: 'https://ecommerce-web-five-sepia.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/Ecommerce-web.git'
    },
    
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices platform with API Gateway, service discovery, and distributed logging.',
      image: 'https://i.pinimg.com/736x/92/da/32/92da32d2614ec736d735e0447902422e.jpg',
      technologies: ['Node.js', 'Docker', 'Kong', 'MongoDB', 'ELK Stack'],
      liveUrl: 'https://scalable-docker-logging.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/scalable-docker-logging.git'
    },
    {
      title: 'Mobile-First Web App',
      description: 'Progressive Web App with offline capabilities, push notifications, and responsive design.',
      image: 'https://i.pinimg.com/1200x/1c/9f/0a/1c9f0abc7722631214b31d807351b2bb.jpg',
      technologies: ['Vue.js', 'PWA', 'Service Workers', 'Firebase'],
      liveUrl: 'https://celadon-chaja-e416dc.netlify.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/mobile-web-app.git'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Multi-region cloud infrastructure with auto-scaling, load balancing, and disaster recovery.',
      image: 'https://i.pinimg.com/1200x/6e/13/3c/6e133c91e7643119369d7274866f74ae.jpg',
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'Lambda'],
      liveUrl: 'https://cloud-scale-aws.vercel.app/',
      githubUrl: 'https://github.com/hesbonangwenyi606/cloud-scale-aws.git'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization using React, D3.js, and WebSocket connections.',
      image: 'https://i.pinimg.com/736x/8a/fb/16/8afb16386ad7bd6ea4524a7da51a5c72.jpg',
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