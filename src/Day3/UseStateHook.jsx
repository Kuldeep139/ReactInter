import React , { useState } from "react";

const States = () => {
    const[counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };
    return(
        <div>
            <h1>counter : {counter}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
export default States;