import React, { useEffect, useState } from 'react';

function BitcoinPrice() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.nomics.com/v1/currencies/ticker?key={your-key-here}&ids=BTC")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        {item.price}
                    </div>
                ))}
            </div>
        );
    }
}

export default BitcoinPrice;