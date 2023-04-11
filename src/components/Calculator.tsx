import { useState } from 'react'

function Calculator() {
  const [results, setResults] = useState<string[]>([]); 
  const [inputValue, setInputValue] = useState('');

  
  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        const result = eval(inputValue).toString();
        setResults([...results, `${inputValue} = ${result}`]); 
        setInputValue(result);
      } catch (error) {
        setInputValue('Error');
      }
    } else if (value === 'C') {
      setInputValue('');
      setResults([]);
    } else {
      setInputValue(prevInputValue => prevInputValue + value);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div id='card' className="calculator card">
      <div className="calculator-history">
        {results.map((res, index) => (
          <div key={index} className="card">
            <div id='calc' className="calculator-screen z-depth-1">{res}</div>
          </div>
        ))}
      </div>
        <div className="calculator-screen z-depth-1"></div>
        <div className="calculator-input">
          <input id='inpt' type="text" value={inputValue} onChange={handleInputChange} />
        </div>
       <div className="calculator-keys">
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('7')}>7</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('8')}>8</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('9')}>9</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="calculator-keys">
          <button id='btn' className="operator btn btn-info" onClick={() => handleClick('4')}>4</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('5')}>5</button>
          <button id='btn'   className="operator btn btn-info" onClick={() => handleClick('6')}>6</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="calculator-keys">
          <button id='btn' className="operator btn btn-info" onClick={() => handleClick('1')}>1</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('2')}>2</button>
          <button id='btn' className="operator btn btn-info" onClick={() => handleClick('3')}>3</button>
          <button id='btn' className="operator btn btn-info" onClick={() => handleClick('+')}>+</button>
        </div>
        
        <div className="calculator-keys">
        <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('0')}>0</button>
        <button id='btn' className="operator btn btn-info" onClick={() => handleClick('.')}>.</button>
          <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('C')}>C</button>
        <button id='btn'  className="operator btn btn-info" onClick={() => handleClick('/')}>÷</button>
        </div>
        <div className="calculator-keys">
        <button id='btnn'  className="operator btn btn-info" onClick={() => handleClick('=')}>=</button>
        </div>
        
      </div>
      
    </>
  );
}

export default Calculator;
