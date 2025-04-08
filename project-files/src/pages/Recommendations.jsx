import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStylePreferences } from '../contexts/StylePreferencesContext';
import { calculateStyleMatch } from '../services/styleMatchingEngine';
import { CLOTHING_ITEMS } from '../data/sampleData';
import StyleMatch from '../components/StyleMatch';

export default function Recommendations() {
  const { preferences } = useStylePreferences();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Apply AI matching engine to filter and sort recommendations
    const matchedItems = CLOTHING_ITEMS.map(item => {
      const match = calculateStyleMatch(preferences, item);
      return {
        ...item,
        match
      };
    })
    .filter(item => item.match.score >= 40) // Only show items with decent match
    .sort((a, b) => b.match.score - a.match.score);

    setRecommendations(matchedItems);
  }, [preferences]);

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Your Personalized Recommendations
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2">
                <StyleMatch matchScore={item.match.score} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.brand}</p>
              <p className="text-sm text-gray-500 mb-3">{item.match.matchReason}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-secondary">
                  ${item.price}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {recommendations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            No recommendations found for your current preferences.
            Try adjusting your style profile for more options.
          </p>
        </div>
      )}
    </div>
  );
}