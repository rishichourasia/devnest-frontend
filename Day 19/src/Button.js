import { useState } from "react";

function Button() {
  const [state, setState] = useState(0);

  function updateCounter() {
    setState(state + 1);
  }

  return (
    <button className=="button" onClick={updateCounter}>
      {state}
    </button>
  );
}

export default Button;
