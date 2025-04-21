
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
          <span className="font-bold text-blue-700">{index + 1}</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-2">{achievement.title}</h3>
          <p className="text-blue-600 font-medium mb-2">{achievement.date}</p>
          {achievement.details && achievement.details.map((detail, idx) => (
            <p key={idx} className="text-gray-700 mt-1">{detail}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const achievements = [
    {
      title: "Finalists in Trojan (13.0) held on COEB sponsored by Silan Software.",
      date: "MAR 2023",
      details: [
        "Qualifying in Technical Round System by Solving DSA"
      ]
    },
    {
      title: "Finalists - Trithon 2025 Hackathon held at Trident Institute of Technology",
      date: "MAR 2025",
      details: [
        "Shortlisted among the top 15 teams out of 400+ team in 24 hours of Hackathon"
      ]
    },
    {
      title: "2nd runner up in Ideation held on Tech-xuberance 2025 held on COEB",
      date: "FEB 2025",
      details: [
        "Presenting the solution on 'Environmental Sustainable Future' through the Mobile Application"
      ]
    }
  ];
  
  const certifications = [
    "Microsoft Learn AI Skills Challenge (Microsoft Issued Aug 2023)",
    "Certification Program in Web Development With jQuery, Ajax and JSON (The Digital Adda)",
    "Certificate of completion of Cybersecurity Essentials (The Linux Foundation)"
  ];
  
  return (
    <section id="achievements" className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-10">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} index={index} />
            ))}
          </div>
          
          <motion.div
            className="bg-white rounded-xl shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="font-bold text-blue-700 text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
