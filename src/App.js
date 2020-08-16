import React, {useState, useEffect} from 'react';
import './App.css';
import SplashScreen from '../src/components//SplashScreen/SplashScreen.js';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, [])
  return (
    <>
    {isLoading === false ? (
        <div className="App">

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
