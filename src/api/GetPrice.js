import { useCallback, useEffect, useState } from "react";
// import DisplayPrice from './components/DisplayPrice';

import DisplayPrice from "../components/DisplayPrice";

function BitcoinPrice() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getPrice = useCallback(async () => {
        
        fetch('https://api.nomics.com/v1/currencies/ticker?key=&ids=BTC')
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);  
  
    useEffect(() => {
      
        getPrice();
  
        const interval = setInterval(() => {
            getPrice()
        }, 180000);
        return () => clearInterval(interval);
    }, [getPrice]);
  
    return (
        <div className="App">
            <DisplayPrice error={error} isLoaded={isLoaded} items={items} />
        </div>
    );
}
  

export default BitcoinPrice;