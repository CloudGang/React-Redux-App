import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const GoingDark = () => {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {

    e.preventDefault();

    setDarkMode(!darkMode);

  };
  return (

    <button className="DARK" onClick={toggleMode}><span role="img" aria-label="Dark-Mode">🌞</span></button>

  );
  
};

export default GoingDark;