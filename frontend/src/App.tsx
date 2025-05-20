import React, { useState } from 'react';
import { Dashboard } from './components/layout/Dashboard';
import { BaseWidget } from './components/widgets/BaseWidget';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <header className="p-4 bg-white dark:bg-gray-800 shadow">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Modular Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </header>
      
      <main className="flex-grow overflow-hidden">
        <Dashboard>
          <BaseWidget id="widget1" title="Example Widget" width={2} height={2}>
            <p className="text-center mt-8">Widget Content</p>
          </BaseWidget>
          
          <BaseWidget id="widget2" title="Another Widget" width={2} height={1} x={2}>
            <p className="text-center">Widget Content</p>
          </BaseWidget>
          
          <BaseWidget id="widget3" title="Third Widget" width={4} height={2} y={2}>
            <p className="text-center">Widget Content</p>
          </BaseWidget>
        </Dashboard>
      </main>
    </div>
  );
}

export default App;