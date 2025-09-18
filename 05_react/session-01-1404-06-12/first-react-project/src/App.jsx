import { Greeting } from "./components/Greeting";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <h1>React Project</h1>
      <Greeting message="Hi There!" />
      <hr />
      <Counter />
    </>
  );
}

export default App;
