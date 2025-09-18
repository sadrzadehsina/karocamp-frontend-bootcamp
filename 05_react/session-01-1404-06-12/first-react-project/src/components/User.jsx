export function User({ name, email = "default@example.com" }) {
  return <div>
    <span>{name}</span>
    <span> - </span>
    <span>{email}</span>
  </div>
}