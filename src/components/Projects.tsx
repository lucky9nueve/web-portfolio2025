import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X } from 'lucide-react';
import gameHubImage from '../images/game-hub.webp';
import tptImage from '../images/tpt.webp';
import filigreeImage from '../images/filigree.webp';
import botanikaImage from '../images/botanika.webp';
import golfridgeImage from '../images/golfridge.webp';
import prImage from '../images/pr.webp';
import pccImage from '../images/pcc.webp';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
     {
      id: 1,
      title: "The Poor Traveler",
      description: "A travel blog website.",
      image: tptImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://www.thepoortraveler.net/",
      details: "is a popular travel blog created by Filipino bloggers Yosh Dimen and Vins Carlos. Despite what the name might suggest, it’s not about traveling as cheaply as possible—it’s about traveling smart, planning well, and making the most of your budget."
    },
    {
      id: 2,
      title: "React Game Hub",
      description: "A game hub website.",
      image: gameHubImage,
      technologies: ["ReactJS","NodeJS", "HTML/CSS","Tailwind CSS"],
      github: "https://github.com",
      demo: "https://game-hub-wee.vercel.app/",
      details: "A Game hub website."
    },
    {
      id: 3,
      title: "Filigree Crafted Communities",
      description: "A real state website.",
      image: filigreeImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://filigree.com.ph/",
      details: "A luxury real estate brand in the Philippines known for developing high-end residential properties that blend architectural elegance, thoughtful amenities, and lifestyle continuity."
    },
    {
      id: 4,
      title: "Two Botanika Nature Residence",
      description: "A real state website.",
      image: botanikaImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://botanika.com.ph/",
      details: "The second tower of the prestigious Botanika development by Filigree, located in the exclusive garden district of Filinvest City, Alabang. It’s a luxury mid-rise condominium that blends eco-conscious design with upscale living—perfect for those who value space, serenity, and sophistication."
    },
    {
      id: 5,
      title: "Golf Ridge Private Estate",
      description: "A real state website.",
      image: golfridgeImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://golfridge.com.ph/",
      details: "Is a luxury residential development by Filigree, nestled within the lush 3.3-hectare expanse of Filinvest Mimosa+ in Clark, Pampanga. It’s designed for those who crave tranquility, exclusivity, and a country club lifestyle—all framed by the scenic backdrop of a world-class golf course."
    },
    {
      id: 6,
      title: "1001 Parkway Residence",
      description: "A real state website.",
      image: prImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://1001parkwayresidences.com/",
      details: "1001 Parkway Residences is an upscale two-tower condominium development by Filigree, located in the heart of Filinvest City, Alabang—often referred to as the “Millionaire’s Row” due to its prime location."
    },
        {
      id: 7,
      title: "Parkway Corporate Center",
      description: "A real state website.",
      image: pccImage,
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://www.parkwaycorporate.com/",
      details: "Parkway Corporate Center is a premium office condominium developed by Filinvest, located at the gateway of Filinvest City, Alabang—one of Metro Manila’s most vibrant central business districts."
    },
    {
      id: 8,
      title: "Metro Middle Park",
      description: "A shopping mall website in Queensland, Australia.",
      image: "https://lucky9nueve.github.io/images/port-latest1.jpg",
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://www.metromiddlepark.com.au/",
      details: "A shopping mall website in Queensland, Australia."
    },
    {
      id: 9,
      title: "Leaders Sports & Spine Physiotherapy",
      description: "Brisbane CBD's premier Sports & Spinal injury centre website.",
      image: "https://lucky9nueve.github.io/images/port4.jpg",
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://leadershealth.com.au/",
      details: "Brisbane CBD's premier Sports & Spinal injury centre website."
    },
    {
      id: 10,
      title: "M.E.A.T Inc.",
      description: "Mindoros's meatshop website.",
      image: "https://themeatempiremdo.com/wp-content/uploads/2025/04/MeatInc_Banner1.webp",
      technologies: ["Wordpress","PHP", "HTML/CSS","Gutenberg Blocks", "MySQL"],
      github: "https://github.com",
      demo: "https://themeatempiremdo.com/",
      details: "Mindoros's meatshop website."
    },
    {
      id: 11,
      title: "0917 Lifestyle",
      description: "Globe's E-commerce website that sells apparels, accessories, etc.",
      image: "https://lucky9nueve.github.io/images/port2.jpg",
      technologies: ["Shopify","PHP", "HTML/CSS","Ruby" ],
      github: "https://github.com",
      demo: "https://0917lifestyle.com/",
      details: "Globe's E-commerce website that sells apparels, accessories, etc."
    },
    {
      id: 12,
      title: "Globe Online Shop",
      description: "Globe Telecom - Ecommerce website for Phone, Plans, Broadband, etc.",
      image: "https://lucky9nueve.github.io/images/port7.jpg",
      technologies: ["Code Igniter","PHP", "HTML/CSS","MySQL" ],
      demo: "https://shop.globe.com.ph/",
      details: "Globe Telecom - Ecommerce website for Phone, Plans, Broadband, etc."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of my recent work and creative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                
                  <a
                    target='_blank'
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.details}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                 
                  <a
                    target='_blank'
                    href={selectedProject.demo}
                    className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;