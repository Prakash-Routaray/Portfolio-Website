
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ProjectCard = ({ title, description, details, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {details && details.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const projects = [
    {
      title: "Educational Website for School Students",
      description: "Developed new features for the school website to enhance user experience and engagement. Increased website traffic by 30% by launching the new features.",
      details: [
        "Received positive feedback from students, faculty, and administration on the enhanced functionality.",
        "On Demand Development: Dedicated Course Section and user login Interface."
      ]
    },
    {
      title: "Portfolio Website",
      description: "Created a portfolio website to showcase my work as a web designer.",
      details: [
        "The website includes a blog, a portfolio of my work, and a contact page.",
        "Collaborative Learning: Friendly User Interface with Academic Achievement and Career Graph."
      ]
    }
  ];
  
  return (
    <section id="projects" className="section bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                details={project.details}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
