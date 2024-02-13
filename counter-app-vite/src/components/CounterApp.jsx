import PropTypes from "prop-types"; 
import { useState } from "react";


export const CounterApp = ({ value }) => {

    const  [ counter, setCounter ] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleReduce = () => {
        if(counter > 0 ){
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <h1>Counter app</h1>
            <p> { counter } </p>
            <button onClick={handleAdd}>+ 1</button>
            <button onClick={handleReduce}>- 1</button>
            <button onClick={() => setCounter(value)}>Reset</button>
        </>
    );    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}