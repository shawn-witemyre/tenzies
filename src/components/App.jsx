import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      let newDie = {
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid(),
      };
      newDice.push(newDie);
    }
    return newDice;
  }

  function rollDice() {
    setDice(generateAllNewDice());
  }

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
