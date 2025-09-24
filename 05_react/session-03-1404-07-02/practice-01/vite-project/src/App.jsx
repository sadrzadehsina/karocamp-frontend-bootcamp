import "./App.css";

function App() {
  // check whether user is authenticated or not
  // yes => const user = { name: 'John Doe', email: 'john@doe.com' };
  // no => null | false

  const user = { name: "John Doe", email: "john@doe.com" };

  return (
    <div>
      <h1>App</h1>
      <Dashboard user={user} />
    </div>
  );
}

function Dashboard({ user }) {
  return (
    <div>
      <UserSection user={user} />
    </div>
  );
}

function UserSection({ user }) {
  return (
    <div>
      <ProfileCard user={user} />
      <SettingsPanel user={user} />
    </div>
  );
}

function ProfileCard({ user }) {
  return <h1>profile card: {user.name}</h1>;
}

function SettingsPanel({ user }) {
  return <h1>settings panel: {user.email}</h1>;
}

export default App;
