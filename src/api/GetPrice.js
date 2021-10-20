import { useCallback, useEffect, useState } from "react";

function BitcoinPrice() {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const getPrice = useCallback(async () => {
        
        fetch('https://api.nomics.com/v1/currencies/ticker?key=1af87dc3693112bbd1b6ec94baafb018820fdce3&ids=BTC')
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
            <h1>Yooo</h1>
            <BitcoinPrice error={error} isLoaded={isLoaded} items={items} />
        </div>
    );
}
  

export default BitcoinPrice;