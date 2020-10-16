import React, {useState, useEffect} from 'react';
import './App.css';
import SplashScreen from '../src/components//SplashScreen/SplashScreen.js';
import TopAppBar from './components/TopAppBar/TopAppBar.js';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 6000);
  //   console.log('timeout')
  // }, []);

  return (
    <>
    {/* {isLoading === false ? (
        <div className="App">
          <TopAppBar />
        </div>
      ) : (
        <div className="App">
          <SplashScreen />
        </div>
          )} */}
    </>
  );
}

export default App;
