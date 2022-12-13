import React, { useState } from "react";
import AnimalShow from './AnimalShow';
import './styles.css';

function getRandomAnimal() {
  const animals = ['bird', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    const newAnimal = getRandomAnimal();
    setAnimals([...animals, newAnimal]);
  }

  const renderAnimals = animals.map((animal, index) => (
      <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button type="button" onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{animals && renderAnimals}</div>
    </div>
  )

}
export default App;
