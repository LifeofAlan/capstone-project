import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-primary mb-6"
        >
          Discover Your Perfect Style
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-8"
        >
          Personalized fashion recommendations tailored just for you
        </motion.p>
        <Link 
          to="/recommendations" 
          className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
        >
          Get Started
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Personal Style Profile</h3>
          <p className="text-gray-600">Create your unique style profile and get recommendations that match your preferences.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Trending Styles</h3>
          <p className="text-gray-600">Stay up to date with the latest fashion trends and style inspirations.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
          <p className="text-gray-600">Our AI-powered system learns your preferences to suggest the perfect outfits.</p>
        </motion.div>
      </section>
    </div>
  );
}