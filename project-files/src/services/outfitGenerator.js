import { format } from 'date-fns';
import { CLOTHING_ITEMS } from '../data/sampleData';

const WEATHER_CATEGORIES = {
  hot: { min: 25, max: 40 },
  warm: { min: 20, max: 24 },
  mild: { min: 15, max: 19 },
  cool: { min: 10, max: 14 },
  cold: { min: -5, max: 9 }
};

export const generateOutfit = (preferences, temperature = 20) => {
  const weatherType = getWeatherCategory(temperature);
  const season = getCurrentSeason();
  
  // Filter items based on weather and season
  const suitableItems = CLOTHING_ITEMS.filter(item => {
    const isSeasonMatch = item.seasons.includes(season.toLowerCase());
    const isWeatherAppropriate = isItemSuitableForWeather(item, weatherType);
    return isSeasonMatch && isWeatherAppropriate;
  });

  // Group items by category
  const tops = suitableItems.filter(item => item.category === 'tops');
  const bottoms = suitableItems.filter(item => item.category === 'bottoms');
  const outerwear = suitableItems.filter(item => item.category === 'outerwear');
  const accessories = suitableItems.filter(item => item.category === 'accessories');

  // Generate outfit combination
  return {
    top: selectBestMatch(tops, preferences),
    bottom: selectBestMatch(bottoms, preferences),
    outerwear: weatherType === 'cold' || weatherType === 'cool' 
      ? selectBestMatch(outerwear, preferences) 
      : null,
    accessory: selectBestMatch(accessories, preferences),
    weather: {
      type: weatherType,
      temperature
    },
    season
  };
};

const getWeatherCategory = (temperature) => {
  for (const [category, range] of Object.entries(WEATHER_CATEGORIES)) {
    if (temperature >= range.min && temperature <= range.max) {
      return category;
    }
  }
  return 'mild'; // default
};

const getCurrentSeason = () => {
  const month = parseInt(format(new Date(), 'M'));
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  if (month >= 9 && month <= 11) return 'Fall';
  return 'Winter';
};

const isItemSuitableForWeather = (item, weatherType) => {
  const weatherSuitability = {
    hot: ['lightweight', 'breathable'],
    warm: ['light', 'casual'],
    mild: ['versatile', 'layerable'],
    cool: ['warm', 'layerable'],
    cold: ['heavy', 'warm']
  };

  return weatherSuitability[weatherType].some(trait => 
    item.attributes?.includes(trait)
  );
};

const selectBestMatch = (items, preferences) => {
  if (!items.length) return null;
  
  const scoredItems = items.map(item => ({
    ...item,
    score: calculateMatchScore(item, preferences)
  }));

  return scoredItems.sort((a, b) => b.score - a.score)[0];
};