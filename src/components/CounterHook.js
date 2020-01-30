import React, { useState } from "react";



function CounterHook() {
    const [count, setCount] = useState(10)

  return (
    <div>
      <h1>Function Based Counter: Using Hooks</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)} type="button">
        Plus
      </button>
      <button onClick={()=>setCount(count-1)} type="button">
        Minus
      </button>
    </div>
  );
}

export default CounterHook;
