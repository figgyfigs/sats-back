import './App.css';
import './components/DisplayText';
import { useCallback, useEffect, useState } from 'react';
import BitcoinPrice from './components/DisplayPrice';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setIsLoaded(true);
  //       setItems(result);
  //     },
  //     (error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //     }
  //   )
  // }, []);

  // function getPrice() {
  //   fetch("https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC")
  //     .then(res => res.json())
  //     .then((result) => {
  //       result.map(item => (
  //         console.log(item.price)
  //       ))
  //     })
  // }
  
  useEffect(() => {
    
    getAPIData();

    const interval = setInterval(() => {
      getAPIData()
    }, 60000);

    return () => clearInterval(interval);
  }, [getAPIData]);

  const getAPIData = useCallback(async () => {

  })


  return (
    <div className="App">
      <h1>Yooo</h1>
      <BitcoinPrice error={error} isLoaded={isLoaded} items={items} />
    </div>
  );
}

export default App;


// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Updates every minute.");
//   }, MINUTE_MS);

//   return () => clearInterval(interval);
// }, [])
