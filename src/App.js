import './App.css';
import './components/DisplayText';
import { useEffect, useState } from 'react';
import Example from './components/DisplayText';
import BitcoinPrice from './components/DisplayPrice';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const MINUTE_MS = 60000;

  useEffect(() => {
    fetch("https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC")
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []),

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Updates every minute.");
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <h1>Yooo</h1>
      <BitcoinPrice error={error} isLoaded={isLoaded} items={items} />
    </div>
  );
}

export default App;
