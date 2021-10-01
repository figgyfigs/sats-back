import React, { useState } from 'react';

function Example() {
    const text = "Bitcoin would have to be at ______."
    const [text, setCount] = useState(text);

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;

