import "./App.css";

// useState, useContext => hook

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function App() {
  // check whether user is authenticated or not
  // yes => const user = { name: 'John Doe', email: 'john@doe.com' };
  // no => null | false

  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@doe.com",
  });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <div>
        <h1>App With Context Api</h1>
        {user && <h2>User is logged in</h2>}
        {!user && <h2>User is not logged in</h2>}
        <Dashboard />
      </div>
    </AppContext.Provider>
  );
}

function Dashboard() {
  const { user } = useContext(AppContext)
  return (
    <div>
      { user && <UserSection />}
    </div>
  );
}

function UserSection() {
  return (
    <div>
      <ProfileCard />
      <SettingsPanel />
    </div>
  );
}

function ProfileCard() {
  const { user, setUser } = useContext(AppContext);

  function logout() {
    // do something
    setUser(null);
  }

  return (
    <div>
      <h1>profile card: {user.name}</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}

function SettingsPanel() {
  const { user } = useContext(AppContext);
  return <h1>settings panel: {user.email}</h1>;
}

export default App;
