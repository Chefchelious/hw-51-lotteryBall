import React, {useState} from 'react';
import Ball from "./RandomBall/RandomBall";
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const changeNumber = () => {
    const numbers: number[] = [];

    while (numbers.length < 5) {
      const randomNumber: number = Math.floor(Math.random() * 32) + 5;

      if(!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    numbers.sort((a: number, b: number) => a - b);
    setNumbers(numbers);
  };
  return (
      <div className="App">
        <div className="container">
          {numbers.map((number:number, index: number) => (<Ball key={index} number={number} />))}
        </div>

        <div>
          <button onClick={changeNumber}>Click</button>
        </div>
      </div>
  );
};

export default App;
