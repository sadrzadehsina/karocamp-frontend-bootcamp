# Practice 02: useEffect with Dependencies

## Goal
Learn how to use the dependency array in `useEffect` to control when effects run.

## Instructions

1. Create a component with two pieces of state: `count` and `name`.
2. Use `useEffect` to log the value of `count` every time it changes.
3. Add another effect to log the value of `name` every time it changes.
4. Add buttons to update both `count` and `name`.

---

**Questions:**

- What happens if you leave the dependency array empty?
- What happens if you omit the dependency array?
- How can you run effects only when specific state changes?
