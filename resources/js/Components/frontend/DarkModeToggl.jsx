import React,{ useEffect } from 'react'

const DarkModeToggl = () => {
  const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.toggle('whiteMode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
  }
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.body.classList.add('whiteMode');
      document.getElementById('checkbox').checked = true;
    }
  }, []);
  return (
    <div>
        <input type="checkbox" className="checkbox" onChange={toggleDarkMode} id="checkbox" />
        <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <span className="ball"></span>
        </label>
    </div>
  )
}

export default DarkModeToggl