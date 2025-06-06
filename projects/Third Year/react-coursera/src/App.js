import React, { useState, useRef } from "react";
import "./App.css";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        // const inputVal = inputRef.current.value;
        // const newResult = result + Number(inputVal);
        // setResult(newResult);
        setResult((result) => result + Number(inputRef.current.value));
    }

    function minus(e) {
        e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result - Number(inputVal);
        setResult(newResult);
    }

    function times(e) {
        e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result * Number(inputVal);
        setResult(newResult);
    }

    function divide(e) {
        e.preventDefault();
        const inputVal = inputRef.current.value;
        const newResult = result / Number(inputVal);
        setResult(newResult);
    }

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    }



    return (
        <div className="App text-center container">
            <div className="heading">
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>{result}</p>
                <div className="d-flex justify-content-center mb-3">
                    <input
                        pattern="[0-9]"
                        ref={inputRef}
                        type="number"
                        placeholder="Type a number"
                        className="form-control w-25 text-center"
                    />
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                    <button className="btn btn-dark" onClick={plus}>Add</button>
                    <button className="btn btn-dark" onClick={minus}>Subtract</button>
                    <button className="btn btn-dark" onClick={times}>Multiply</button>
                    <button className="btn btn-dark" onClick={divide}>Divide</button>
                    <button className="btn btn-warning" onClick={resetInput}>Reset Input</button>
                    <button className="btn btn-warning" onClick={resetResult}>Reset Result</button>
                </div>
            </form>
        </div>
    );
}

export default App;