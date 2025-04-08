import { format } from 'date-fns';

// Simulated AI scoring and matching logic
export const calculateStyleMatch = (userPreferences, item) => {
  let score = 0;
  
  // Style match
  if (item.category === userPreferences.style) score += 30;
  
  // Color preferences
  const colorMatch = userPreferences.colors.some(color => 
    item.colors.includes(color.toLowerCase())
  );
  if (colorMatch) score += 25;
  
  // Price range match
  if (item.price >= userPreferences.priceRange.min && 
      item.price <= userPreferences.priceRange.max) {
    score += 20;
  }
  
  // Season relevance
  const currentMonth = parseInt(format(new Date(), 'M'));
  if ((currentMonth >= 3 && currentMonth <= 5 && item.seasons.includes('spring')) ||
      (currentMonth >= 6 && currentMonth <= 8 && item.seasons.includes('summer')) ||
      (currentMonth >= 9 && currentMonth <= 11 && item.seasons.includes('fall')) ||
      ([12, 1, 2].includes(currentMonth) && item.seasons.includes('winter'))) {
    score += 15;
  }

  return {
    score,
    confidence: score / 100,
    matchReason: generateMatchReason(score, userPreferences, item)
  };
};

const generateMatchReason = (score, preferences, item) => {
  const reasons = [];
  
  if (score >= 80) {
    reasons.push("Perfect match for your style preferences");
  } else if (score >= 60) {
    reasons.push("Strong alignment with your preferred style");
  } else if (score >= 40) {
    reasons.push("Good match with some of your preferences");
  }
  
  if (item.category === preferences.style) {
    reasons.push(`Matches your ${preferences.style} style preference`);
  }
  
  return reasons.join(". ");
};