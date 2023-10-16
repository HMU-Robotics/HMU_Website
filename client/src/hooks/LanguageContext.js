import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem('language') || 'english';
  const [language, setLanguage] = useState(storedLanguage);
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => setLocation(data))
      .catch(error => console.error('Error fetching IP data:', error));
  }, [location]);


  useEffect(() => {
      if(location.country === "Greece") {
        setLanguage('greek')
      }
    localStorage.setItem('language', language);
  }, [language, location]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
} 

export default LanguageContext;
