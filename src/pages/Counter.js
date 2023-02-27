import React, {useState} from 'react';

function Counter() {
    const [num, setNumber] = useState(0); //const num=0
    const increase = () => {
        setNumber(num + 1)
    }
    const decrease = () => {
        setNumber(num - 1)
    }
    return(
        <div>
            <button onClick={increase} style={{margin:'5px'}}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;