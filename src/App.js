import React, {useState, useEffect} from 'react';
import './App.css';
import SplashScreen from '../src/components//SplashScreen/SplashScreen.js';
import HomeScreen from './components/HomeScreen/HomeScreen';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 0);
  }, [])
  return (
    <>
    {isLoading === false ? (
        <div className="App">
          <HomeScreen />
        </div>
      ) : (
        <div className="App">
          <SplashScreen />
        </div>
          )}
    </>
  );
}

export default App;
