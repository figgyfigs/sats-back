import React from 'react';

function BitcoinPrice() {
    const response = fetch('https://api.nomics.com/v1/currencies/ticker?key={your key here}3&ids=BTC');
    const myJson = response.json;
    console.log(myJson);

    return (
        <div>
            <h2>Bitcoin price is {myJson}</h2>
        </div>
    )
}

export default BitcoinPrice;

// fetch("https://api.nomics.com/v1/currencies/ticker?key=your-key-here&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
//   .then(response => response.json())
//   .then(data => console.log(data))