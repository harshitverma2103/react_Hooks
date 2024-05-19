import React, { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState('Black');

  const changeColor = () => {
     if (color === 'Black') {
          setColor('Blue');
     } else {
          setColor('Red');
     }
  };

  return (
    <div>
      <h1>My favorite color is {color}</h1>
      <button onClick={changeColor}>Change to Blue</button>
      <button onClick={changeColor}>Change to Red</button>
    </div>
  );
};

export default UseState;
