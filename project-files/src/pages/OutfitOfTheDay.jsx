import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStylePreferences } from '../contexts/StylePreferencesContext';
import { generateOutfit } from '../services/outfitGenerator';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

export default function OutfitOfTheDay() {
  const { preferences } = useStylePreferences();
  const [outfit, setOutfit] = useState(null);
  const [temperature, setTemperature] = useState(20);

  useEffect(() => {
    generateDailyOutfit();
  }, [preferences, temperature]);

  const generateDailyOutfit = () => {
    const newOutfit = generateOutfit(preferences, temperature);
    setOutfit(newOutfit);
  };

  const WeatherIcon = () => {
    switch(outfit?.weather.type) {
      case 'hot': return <WiDaySunny className="text-4xl text-yellow-500" />;
      case 'warm': return <WiDaySunny className="text-4xl text-orange-400" />;
      case 'mild': return <WiCloudy className="text-4xl text-gray-400" />;
      case 'cool': return <WiRain className="text-4xl text-blue-400" />;
      case 'cold': return <WiSnow className="text-4xl text-blue-300" />;
      default: return <WiCloudy className="text-4xl text-gray-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Outfit of the Day</h1>
          <div className="flex items-center space-x-4">
            <WeatherIcon />
            <div className="text-right">
              <p className="text-lg font-semibold">{outfit?.weather.temperature}°C</p>
              <p className="text-sm text-gray-500 capitalize">{outfit?.weather.type}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adjust Temperature (°C)
          </label>
          <input
            type="range"
            min="-5"
            max="40"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>-5°C</span>
            <span>40°C</span>
          </div>
        </div>

        {outfit && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outfit.top && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">Top</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={outfit.top.image}
                    alt={outfit.top.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{outfit.top.name}</p>
                    <p className="text-sm text-gray-500">{outfit.top.brand}</p>
                    <p className="text-sm font-medium text-secondary">${outfit.top.price}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {outfit.bottom && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">Bottom</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={outfit.bottom.image}
                    alt={outfit.bottom.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{outfit.bottom.name}</p>
                    <p className="text-sm text-gray-500">{outfit.bottom.brand}</p>
                    <p className="text-sm font-medium text-secondary">${outfit.bottom.price}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {outfit.outerwear && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">Outerwear</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={outfit.outerwear.image}
                    alt={outfit.outerwear.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{outfit.outerwear.name}</p>
                    <p className="text-sm text-gray-500">{outfit.outerwear.brand}</p>
                    <p className="text-sm font-medium text-secondary">${outfit.outerwear.price}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {outfit.accessory && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="font-semibold mb-2">Accessory</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={outfit.accessory.image}
                    alt={outfit.accessory.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{outfit.accessory.name}</p>
                    <p className="text-sm text-gray-500">{outfit.accessory.brand}</p>
                    <p className="text-sm font-medium text-secondary">${outfit.accessory.price}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}

        <button
          onClick={generateDailyOutfit}
          className="mt-6 w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Generate New Outfit
        </button>
      </motion.div>
    </div>
  );
}