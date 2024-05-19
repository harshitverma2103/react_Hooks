import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  } , []);
  return (
    <div>
      <h2>I have renderd {count} times!</h2>
    </div>
  );
}

export default UseEffect;
