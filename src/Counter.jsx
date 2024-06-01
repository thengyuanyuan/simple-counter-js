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
        <div className='counter-container'>
            <row>
                <h1 className='counter-title'>Simple Counter</h1>
                <p className='counter-display'>{count}</p>
                <column>
                    <button className='counter-button' onClick={decrement}>Decrease</button>
                    <button className='counter-button' onClick={reset}>Reset</button>
                    <button className='counter-button' onClick={increasement}>Increase</button>
                </column>
            </row>
        </div>
    )
}

export default Counter;