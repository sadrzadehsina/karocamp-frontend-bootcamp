import { User } from "./User";

const users = [
  { name: "John", email: "john@doe.com" },
  { name: "Jane" },
  { name: "Rose" },
];

export function Greeting({ message }) {
  return (
    <div>
      <h2>{message}</h2>
      {
        users.map(user => <User {...user} />)
      }
    </div>
  );
}
