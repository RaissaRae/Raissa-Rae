
import React, { useState, useRef } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const inputRef = useRef(null);
  // const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
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
    const currentVal = inputRef.current.value || "";
    inputRef.current.value = currentVal + num;
  }

  // Additional helper functions for iOS features
  function clearAll() {
    setResult(0);
    inputRef.current.value = '';
  }

  function toggleSign() {
    const currentVal = inputRef.current.value || '';
    if (currentVal !== '') {
      inputRef.current.value = currentVal.startsWith('-') ?
          currentVal.slice(1) :
          '-' + currentVal;
    }
  }

  function percent() {
    const currentVal = inputRef.current.value || '';
    if (currentVal !== '') {
      inputRef.current.value = (parseFloat(currentVal) / 100).toString();
    }
  }

  function addDecimal() {
    const currentVal = inputRef.current.value || '';
    if (currentVal.indexOf('.') === -1) {
      inputRef.current.value = currentVal + '.';
    }
  }

  const formatNumber = (num) => {
    if (num % 1 === 0 && num.toString().length <= 9) {
      return num.toLocaleString();
    }
    return parseFloat(num).toString();
  };

  return (
      <div className="app-container">
        <div className="calculator">
          <div className="display">
            <div className="result">
              {formatNumber(result)}
            </div>
          </div>

          <input
              ref={inputRef}
              type="number"
              placeholder="0"
              step="any"
              className="input-field"
          />

          <div className="buttons-grid">
            {/* First Row */}
            <button
                type="button"
                onClick={clearAll}
                className="btn btn-gray"
            >
              C
            </button>
            <button
                type="button"
                onClick={toggleSign}
                className="btn btn-gray"
            >
              +/−
            </button>
            <button
                type="button"
                onClick={percent}
                className="btn btn-gray"
            >
              %
            </button>
            <button
                onClick={divide}
                className="btn btn-blue"
            >
              ÷
            </button>

            {/* Number pad */}
            {[7,8,9].map((num) => (
                <button
                    key={num}
                    type="button"
                    onClick={() => handleNumberClick(num)}
                    className="btn btn-dark"
                >
                  {num}
                </button>
            ))}
            <button
                onClick={times}
                className="btn btn-blue"
            >
              ×
            </button>

            {[4,5,6].map((num) => (
                <button
                    key={num}
                    type="button"
                    onClick={() => handleNumberClick(num)}
                    className="btn btn-dark"
                >
                  {num}
                </button>
            ))}
            <button
                onClick={minus}
                className="btn btn-blue"
            >
              −
            </button>

            {[1,2,3].map((num) => (
                <button
                    key={num}
                    type="button"
                    onClick={() => handleNumberClick(num)}
                    className="btn btn-dark"
                >
                  {num}
                </button>
            ))}
            <button
                onClick={plus}
                className="btn btn-blue"
            >
              +
            </button>

            {/* Bottom Row */}
            <button
                type="button"
                onClick={() => handleNumberClick('0')}
                className="btn btn-dark btn-zero"
            >
              0
            </button>
            <button
                type="button"
                onClick={addDecimal}
                className="btn btn-dark"
            >
              .
            </button>
            <button
                onClick={resetResult}
                className="btn btn-blue"
            >
              =
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;