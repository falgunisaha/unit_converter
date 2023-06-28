import React, { useState } from 'react';
import "../Components/Converter.css"
function UnitConverter() {
  const [inputValue, setInputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('kilogram');
  const [outputUnit, setOutputUnit] = useState('pound');
  const [outputValue, setOutputValue] = useState('');

  const convertUnits = () => {
    const input = parseFloat(inputValue);
    let output;

    if (isNaN(input)) {
      setOutputValue('');
      return;
    }

    if (inputUnit === outputUnit) {
      output = input;
    } else if (inputUnit === 'kilogram' && outputUnit === 'pound') {
      output = input * 2.20462;
    } else if (inputUnit === 'kilogram' && outputUnit === 'ounce') {
      output = input * 35.274;
    } else if (inputUnit === 'kilogram' && outputUnit === 'gram') {
        output = input * 1000;
    } else if (inputUnit === 'pound' && outputUnit === 'kilogram') {
      output = input * 0.453592;
    } else if (inputUnit === 'pound' && outputUnit === 'ounce') {
      output = input * 16;
    } else if (inputUnit === 'pound' && outputUnit === 'gram') {
        output = input * 453.592;
    } else if (inputUnit === 'ounce' && outputUnit === 'kilogram') {
      output = input * 0.0283495;
    } else if (inputUnit === 'ounce' && outputUnit === 'pound') {
      output = input * 0.0625;
    } else if (inputUnit === 'ounce' && outputUnit === 'gram') {
        output = input * 28.35;
    } else if (inputUnit === 'gram' && outputUnit === 'kilogram') {
        output = input/1000;
    } else if (inputUnit === 'gram' && outputUnit === 'pound') {
        output = (input * 2.20462)/1000;
    } else if (inputUnit === 'gram' && outputUnit === 'ounce') {
        output = (input * 35.274)/1000;
    }

    setOutputValue(output.toFixed(2));
  };

  return (
    <div>
      <p className="back GreatVibes p-3 mb-2 bg-info text-dark bg-opacity-75">Unit Converter</p>
      <p className="glance">Mass</p>
      <div className="arrangeInput">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
          className='Cormorant'
        />
        {/* </div>
        <div> */}
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
          className="Cormorant"
        >
          <option value="kilogram">Kilogram (kg)</option>
          <option value="gram">Gram (g)</option>
          <option value="pound">Pound (lb)</option>
          <option value="ounce">Ounce (oz)</option>
        </select>
        <p>=</p>
        <input className="Cormorant" type="text" value={outputValue} readOnly />
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
          className="Cormorant"
        >
          <option value="kilogram">Kilogram (kg)</option>
          <option value="gram">Gram (g)</option>
          <option value="pound">Pound (lb)</option>
          <option value="ounce">Ounce (oz)</option>
        </select>
        </div>
        
        <div className="arrangeButton">
        
        <button onClick={convertUnits} type="button" className="btn btn-outline-info Cormorant">Convert</button>
        </div>
                    <div class="credits">
                      <a>
                        Created with ❤️ by
                        <span> Falguni Saha</span>
                      </a>
                    </div>
      </div>
    
  );
}

export default UnitConverter;