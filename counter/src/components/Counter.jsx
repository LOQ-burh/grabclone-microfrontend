import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrement = () => setCount(count + 1);
    const onDecrement = () => setCount(count - 1);
    return (
      <div>
        <h1>Counter App</h1>
        <p>Current count: <strong>{count}</strong></p>
        <button className="px-2 py-2 mr-1 bg-orange-600" onClick={onIncrement}>+</button>
        <button className="px-2 py-2  bg-orange-600" onClick={onDecrement}>-</button>
      </div>
    );
}