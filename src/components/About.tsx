import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Settings, Zap } from 'lucide-react';
import cvDownload from '../docs/CV-Jgavilo-Webdeveloper.pdf';
import 'animate.css';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Web Developer','Wordpress Developer', 'Software Engineer', 'React Specialist', 'UI/UX Enthusiast'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentText.substring(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deletingInterval);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="about" className="py-20 bg-gray-800/50">
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
            className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__flipInX"
          >
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <div className="mb-8 text-xl md:text-2xl text-blue-200 h-8 flex items-center justify-center">
            <span className="border-r-2 border-blue-400 animate-pulse pr-1">
              {displayText}
            </span>
          </div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-8xl mx-auto mb-12"
          >
          I’m a front-end and back-end web developer based in Manila, Philippines, with over a decade of experience building efficient, scalable, and user-centric digital solutions. My work spans across diverse tech environments, combining practical development strategies with innovative approaches to problem-solving.
          <br /><br />
          I specialize in crafting robust web architectures and seamless user experiences using WordPress, Laravel, Python, ReactJS, and Flutter—now enhanced by the power and flexibility of AI tools and integrations. Whether it’s automating workflows, optimizing data handling, or delivering smarter interfaces, I focus on solutions that are modern, intelligent, and built for growth.
          <br /><br />
          Let’s build systems that are not only functional, but adaptive—transforming your ideas into forward-thinking platforms powered by technology and insight.
  </motion.p>
        </motion.div>

     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {[
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks and best practices.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Ensuring fast, responsive applications that deliver exceptional user experiences.",
    },
    {
      icon: <Settings className="w-8 h-8" />, // Assuming you have a Settings icon component
      title: "Website Maintenance",
      description: "Providing ongoing support, updates, and improvements to keep your website running smoothly.",
    },
     {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces that enhance user experience.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="text-cyan-400 mb-4">{item.icon}</div>
      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-400">{item.description}</p>
    </motion.div>
  ))}
</div>
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex items-center justify-center">
         <motion.a
                    href={cvDownload}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-gray-300 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200"
                  >
                    Download CV
            </motion.a>
   </div>
      </div>
    </section>
  );
};

export default About;