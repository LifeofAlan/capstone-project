import { motion } from 'framer-motion';

export default function StyleMatch({ matchScore }) {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    return 'text-gray-600';
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.div 
        className="h-2 bg-gray-200 rounded-full w-24"
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${matchScore}%` }}
          transition={{ duration: 0.5 }}
          className={`h-full rounded-full ${
            matchScore >= 80 ? 'bg-green-500' :
            matchScore >= 60 ? 'bg-blue-500' :
            'bg-gray-500'
          }`}
        />
      </motion.div>
      <span className={`font-medium ${getScoreColor(matchScore)}`}>
        {matchScore}% Match
      </span>
    </div>
  );
}