import './App.css';
import './components/DisplayText';
import { useCallback, useEffect, useState } from 'react';
import DisplayPrice from './components/DisplayPrice';

import BitcoinPrice from './api/GetPrice';

function App() {

//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   const getAPIData = useCallback(async () => {

//     fetch('https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC')
//       .then(res => res.json())
//       .then((result) => {
//         setIsLoaded(true);
//         setItems(result)
//       },
//       (error) => {
//         setIsLoaded(true);
//         setError(error);
//       })
//   }, []);  

//   useEffect(() => {
    
//     getAPIData();

//     const interval = setInterval(() => {
//       getAPIData()
//     }, 180000);
//     return () => clearInterval(interval);
//   }, [getAPIData]);

  return (
    <div className="App">
      <h1>Sats Back</h1>
      {/* <DisplayPrice error={error} isLoaded={isLoaded} items={items} /> */}
      <BitcoinPrice />
    </div>
  );
}

export default App;