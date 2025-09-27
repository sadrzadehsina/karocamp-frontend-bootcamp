// import { useState } from "react";
// import { createContext, useContext } from "react";
import "./App.css";

// const ThemeContext = createContext("light");

function App() {
  // const [theme, setTheme] = useState("light");

  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    <div>
      <h1>React With Tailwind</h1>
      <Button>Click Me!</Button>
      <p>&nbsp;</p>
      <Message>This is an error message</Message>
    </div>
    // </ThemeContext.Provider>
  );
}

function Button({ children }) {
  // const { setTheme } = useContext(ThemeContext);

  const updateTheme = () => {
    // setTheme((previousValue) => {
    //   return previousValue === "light" ? "dark" : "light";
    // });

    // const theme = document.body.classList.contains("light") ? "light" : "dark";

    document.body.classList.toggle("dark");
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-700"
      onClick={updateTheme}
    >
      {children}
    </button>
  );
}

function Message({ children }) {
  return (
    <h1 className="text-white bg-red-700 dark:text-black dark:bg-blue-100">
      {children}
    </h1>
  );
}

export default App;
