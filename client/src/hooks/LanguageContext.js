import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem('language') || 'english';
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
