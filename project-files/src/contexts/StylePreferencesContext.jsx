import { createContext, useContext, useState } from 'react';

const StylePreferencesContext = createContext();

export function StylePreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    style: 'casual',
    colors: ['black', 'white', 'blue'],
    brands: [],
    size: 'M',
    priceRange: {
      min: 0,
      max: 1000
    },
    seasons: ['spring', 'summer', 'fall', 'winter']
  });

  const updatePreferences = (newPreferences) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  };

  return (
    <StylePreferencesContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </StylePreferencesContext.Provider>
  );
}

export const useStylePreferences = () => useContext(StylePreferencesContext);