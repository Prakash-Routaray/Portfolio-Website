
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <section id="about" className="section bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Objectives</h3>
            <p className="text-gray-700 leading-relaxed">
              Creative and detail-oriented Front End Developer with a passion for building responsive, user-friendly web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks like React. Seeking to contribute innovative UI/UX solutions and clean code to a dynamic team, while continuously growing and adapting to the latest frontend technologies.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Contact Information</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:routarayprakash870@gmail.com" className="hover:text-blue-600">routarayprakash870@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href="tel:+919777133887" className="hover:text-blue-600">+91 9777133887</a>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Location:</span>
                    <span>Bhubaneswar, Odisha</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-blue-600 mb-2">Connect With Me</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="https://www.linkedin.com/in/prakashroutaray" 
                       className="flex items-center hover:text-blue-600" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      <span className="font-medium mr-2">LinkedIn:</span>
                      <span>linkedin.com/in/prakashroutaray</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Prakash-Routaray" 
                       className="flex items-center hover:text-blue-600" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      <span className="font-medium mr-2">GitHub:</span>
                      <span>github.com/Prakash-Routaray</span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="font-medium mr-2">Address:</span>
                    <span>Lingaraj Nagar, Oldtown, Bhubaneswar, Odisha, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
