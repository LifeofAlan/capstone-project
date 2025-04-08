import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStylePreferences } from '../contexts/StylePreferencesContext';

export default function Profile() {
  const { preferences, updatePreferences } = useStylePreferences();
  const [isEditing, setIsEditing] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(preferences);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePreferences(tempPreferences);
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Style Profile
      </motion.h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {!isEditing ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Preferred Style</h3>
              <p className="text-gray-600 capitalize">{preferences.style}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Favorite Colors</h3>
              <div className="flex gap-2">
                {preferences.colors.map(color => (
                  <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Size</h3>
              <p className="text-gray-600">{preferences.size}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Price Range</h3>
              <p className="text-gray-600">
                ${preferences.priceRange.min} - ${preferences.priceRange.max}
              </p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
            >
              Edit Preferences
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Style</label>
              <select
                value={tempPreferences.style}
                onChange={(e) => setTempPreferences({...tempPreferences, style: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="sporty">Sporty</option>
                <option value="vintage">Vintage</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select
                value={tempPreferences.size}
                onChange={(e) => setTempPreferences({...tempPreferences, size: e.target.value})}
                className="w-full p-2 border rounded"
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <div className="flex gap-4">
                <input
                  type="number"
                  value={tempPreferences.priceRange.min}
                  onChange={(e) => setTempPreferences({
                    ...tempPreferences,
                    priceRange: {...tempPreferences.priceRange, min: parseInt(e.target.value)}
                  })}
                  className="w-1/2 p-2 border rounded"
                  placeholder="Min"
                />
                <input
                  type="number"
                  value={tempPreferences.priceRange.max}
                  onChange={(e) => setTempPreferences({
                    ...tempPreferences,
                    priceRange: {...tempPreferences.priceRange, max: parseInt(e.target.value)}
                  })}
                  className="w-1/2 p-2 border rounded"
                  placeholder="Max"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => {
                  setTempPreferences(preferences);
                  setIsEditing(false);
                }}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}