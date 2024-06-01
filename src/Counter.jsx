import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increasement = () =>{
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }

    const reset = () =>{
        setCount(0);
    }

    return(
        <div>
            <h1>Simple Counter</h1>
            <p>{count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increasement}>Increase</button>
        </div>
    )
}

export default Counter;