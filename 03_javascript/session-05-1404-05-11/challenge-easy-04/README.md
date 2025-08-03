# 🎯 Challenge Easy 04: Movie Collection (Stage 5 - Arrays)

## 📝 Description
Create a movie collection manager using arrays to organize and search through movie titles.

## 🎯 Objectives
- Practice array manipulation with strings
- Use array methods like `.shift()`, `.unshift()`, `.indexOf()`
- Work with array searching and reorganization

## 📋 Requirements
1. Create an array called `movies` with these titles: ["Inception", "The Matrix", "Interstellar", "Avatar"]
2. Remove the first movie using `.shift()` and store it in a variable
3. Add "The Dark Knight" at the beginning using `.unshift()`
4. Add "Titanic" at the end using `.push()`
5. Find the position of "Interstellar" using `.indexOf()`
6. Check if "Avatar" is in the collection using `.includes()`
7. Display the removed movie, current collection, and collection size

## 💡 Example Output
```
Initial movies: ["Inception", "The Matrix", "Interstellar", "Avatar"]
Removed movie: "Inception"
After adding "The Dark Knight" at beginning: ["The Dark Knight", "The Matrix", "Interstellar", "Avatar"]
After adding "Titanic" at end: ["The Dark Knight", "The Matrix", "Interstellar", "Avatar", "Titanic"]
Position of "Interstellar": 2
Is "Avatar" in collection? true
Final collection size: 5
```

## 🚀 Bonus
- Create a favorites array with the first 2 movies using `.slice()`
- Try sorting the movies alphabetically
- Add a duplicate movie and find all its occurrences

## ✅ Expected Topics Used
- Array creation with string values
- `.shift()` and `.unshift()` methods
- `.push()` method
- `.indexOf()` method
- `.includes()` method
- Array length property
