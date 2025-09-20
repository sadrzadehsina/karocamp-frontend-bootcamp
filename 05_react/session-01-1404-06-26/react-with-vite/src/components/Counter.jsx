import { useState } from "react";

export function Counter() {

  const [a, b, c, d] = [1, 2, 3, 4]

  const [count, setCount] = useState(0)

  const total = 100;
  // state[0] => stateful value
  // state[1] => state updater

  function increment() {
    setCount(total);

    count = count + 1
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button style={{ margin: "0 4px 0 4px" }} onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button style={{ margin: "0 4px 0 4px" }} onClick={increment}>
        +
      </button>
    </div>
  );
}
