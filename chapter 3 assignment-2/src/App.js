import './App.css';
import Resume from './Resume';
import React,{useState} from 'react';




function App() {
  

  // Example of limiting the number of items in 'experience' to 3
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <div
    style={{
      backgroundColor: isDark ? 'black' : 'white', // Change these colors as needed
      color: isDark ? 'white' : 'black', // Change text color accordingly
    }} 
    >
    
    <h1> Resume </h1>
    <h3>Shreyash Dawake</h3>
    <hr />
    <Resume></Resume>
    {/* Theme switcher button */}
    
    <button onClick={toggleTheme}>
        {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
}



export default App;
