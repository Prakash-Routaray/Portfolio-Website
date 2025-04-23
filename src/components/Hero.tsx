
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20 pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg text-blue-600 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Prakash Routaray
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-600 mb-6">Front End Developer</h3>
            <p className="text-gray-700 mb-8 max-w-lg">
              Creative and detail-oriented Front End Developer with a passion for building responsive, user-friendly web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#resume"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl"></div>
              <motion.div
                className="profile-glow relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <img 
                  src="/gallery/me2.png" 
                  alt="Prakash Routaray" 
                  className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover relative z-10"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
