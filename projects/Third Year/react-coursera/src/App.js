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

  function handleNumberClick(num) {
    // Append the clicked number to the current input value
    const currentVal = inputRef.current.value || "";
    inputRef.current.value = currentVal + num;
  }


  return (
      <div className="App">
        <div className="calculator">
          <h1>Simple Calculator</h1>

          <div className="result-display">
            <p className="result">{result}</p>
          </div>

          <form>
            <input
                ref={inputRef}
                type="number"
                placeholder="Type a number"
                step="any"
                className="input-field"
            />

            <div className="number-pad">
              {[1,2,3,4,5,6,7,8,9,0].map((num) => (
                  <button
                      type="button"
                      key={num}
                      onClick={() => handleNumberClick(num)}
                  >
                    {num}
                  </button>
              ))}
            </div>


            <div className="buttons-grid">
              <button onClick={plus}>Add</button>
              <button onClick={minus}>Subtract</button>
              <button onClick={times}>Multiply</button>
              <button onClick={divide}>Divide</button>
              <button onClick={resetInput}>Reset Input</button>
              <button onClick={resetResult}>Reset Result</button>
            </div>
          </form>
        </div>
      </div>

  );
}

export default App;