import React, { useState } from 'react';
import BitcoinPrice from './DisplayPrice';

function Example() {
    
    const [text, setText] = useState("???");

    return (
        <div>
            <p>Bitcoin would have to be {text} for your item to be paid off.</p>
            <button onClick={() => setText("60,000")}>
                Click me
            </button>
        </div>
    );
}

export default Example;

