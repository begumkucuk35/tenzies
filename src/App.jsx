import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import Confetti from 'react-confetti'

function App() {
  const [dieValue, setDieValue] = useState(generateAllNewDice());
  const gameWon =
    dieValue.every((die) => die.isHeld) &&
    dieValue.every((die) => die.value === dieValue[0].value);

  function generateAllNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = { value: Math.ceil(Math.random() * 6), isHeld: false };
      newDice.push(randomNumber);
    }
    return newDice;
  }
  function rollTheDice() {
    setDieValue((prevState) =>
      prevState.map((die) =>
        !die.isHeld ? { ...die, value: Math.ceil(Math.random() * 6) } : die
      )
    );
  }
  function hold(id) {
    setDieValue((prevState) =>
      prevState.map((die, index) =>
        index === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }
  return (
    <main>
      {gameWon && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {dieValue.map((dieObj, index) => (
          <Die
            hold={() => hold(index)}
            isHeld={dieObj.isHeld}
            number={dieObj.value}
            key={index}
          />
        ))}
      </div>
      <button className="roll-dice-btn" onClick={rollTheDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
