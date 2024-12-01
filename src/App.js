import { useState } from "react";
import "./styles.css";

export default function App() {
  const [a, setA] = useState(0);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <button onClick={() => setA(a + 1)}>INC</button>
      <p>{a}</p>
      <button disabled={a <= 0} onClick={() => setA(a - 1)}>
        DEC
      </button>
    </div>
  );
}
