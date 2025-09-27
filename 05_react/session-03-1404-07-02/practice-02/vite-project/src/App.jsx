import { useState } from "react";

// Number, String, Boolean => Primitive Value
// Array, Object => Reference Value

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({});

  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [phone, setPhone] = useState();
  // const [address, setAddress] = useState();

  // user => { name, email, phone, address }

  function inc() {
    setCount(prev => ++prev);
  }

  function updateUser() {
    setUser({
      name: "John",
      email: "john@doe.com"
    })
  }

  return (
    <div>
      <h1>App</h1>
      <button onClick={inc}>increment</button>
      <button onClick={updateUser}>Update User</button>
      <p>&nbsp;</p>
      <h2>{count}</h2>

      <hr />
      <div>
        <p>name: {user.name}</p>
        <p>email: {user.email}</p>
        {/* <p>phone: {phone}</p> */}
        {/* <p>address: {address}</p> */}
      </div>
    </div>
  );
}

export default App;
