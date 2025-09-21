import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [shouldShowMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    // if (shouldShowMessage === true) {
    //   setShowMessage(false);
    // } else {
    //   setShowMessage(true);
    // }

    // shouldShowMessage = true;

    setShowMessage(!shouldShowMessage);
  };

  const calculateCharacterCounts = (value) => {
    console.log(value.length);
    // value => character counts
    setCount(value.length);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Input onChange={(value) => calculateCharacterCounts(value)} />
        <CharacterCounts count={count} />
        <CharacterCountMessage count={count} />
      </div>
      <p></p>
      {/* <span>{count}</span> */}
      <Button shouldShowMessage={shouldShowMessage} onToggle={toggleMessage} />
      {shouldShowMessage && <Message />}
    </div>
  );
}

function Input({ onChange }) {
  return <input onChange={e => onChange(e.target.value)} className="border p-2" />;
}

function CharacterCounts({ count }) {
  return <span className="text-2xl">{count}</span>
}

function CharacterCountMessage({ count }) {

  if (count < 20) return null;

  return  <span>too long</span>; 
}

function Button(props) {
  return (
    <button onClick={props.onToggle}>
      {props.shouldShowMessage ? "Hide Message" : "Show Message"}
    </button>
  );
}

function Message() {
  return <p>This is a sample message</p>;
}

export default App;
