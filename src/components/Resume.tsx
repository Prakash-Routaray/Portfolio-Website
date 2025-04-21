
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Timeline = ({ children, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="border-l-2 border-blue-500 pl-6 ml-3">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, subtitle, date, details, delay = 0 }) => {
  return (
    <motion.div 
      className="mb-8 relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute -left-9 mt-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between mb-2">
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
          <span className="text-blue-600 font-medium">{date}</span>
        </div>
        <div className="text-gray-600 font-medium mb-2">{subtitle}</div>
        {details && Array.isArray(details) ? (
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-700">{details}</div>
        )}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section id="resume" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume</h2>
          
          <Timeline title="EDUCATION">
            <TimelineItem
              title="Bachelor of Technology - B.Tech"
              subtitle="Computer Science and Engineering"
              date="AUG 2022-MAY 2026"
              details={[
                "College Of Engineering Bhubaneswar (COEB) - Bhubaneswar, India",
                "Koustuv Group of Institutions (KGI)",
                "CGPA: 8.1",
                "Passionate in Mobile App and Web Development",
                "Relevant courses: Problem Solving Using C, Software Engineering, Design and Analysis of Algorithms"
              ]}
              delay={0.1}
            />
          </Timeline>
          
          <Timeline title="EXPERIENCE">
            <TimelineItem
              title="JUNIOR SOFTWARE DEVELOPER INTERN"
              subtitle="Nextcare.life - Hospitals and HealthCare"
              date="JUL 2024-NOV 2024"
              details={[
                "Job Roles: Frontend Development, Software Testing, Communication"
              ]}
              delay={0.2}
            />
          </Timeline>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Skills</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Programming Languages</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Frameworks and Libraries</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">React JS</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Databases</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Communication</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>English (fluent)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Hindi (native)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Odia (native)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
