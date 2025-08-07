const originalNames = ["alice", "bob", "charlie", "diana"];

const formalNames = originalNames.map((name) => {
  return "Mr./Ms. " + name.toUpperCase();
})

console.log(formalNames);