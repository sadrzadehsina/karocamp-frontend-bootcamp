// Challenge Easy 04: Movie Collection
// Create a movie collection manager using arrays

// 1. Create an array with movie titles
const movies = ["Inception", "The Matrix", "Interstellar", "Avatar"];
console.log('Initial movies:', movies);

// 2. Remove the first movie using .shift()
const removedMovie = movies.shift();
console.log('Removed movie:', `"${removedMovie}"`);
console.log('After removing first movie:', movies);

// 3. Add "The Dark Knight" at the beginning
movies.unshift("The Dark Knight");
console.log('After adding "The Dark Knight" at beginning:', movies);

// 4. Add "Titanic" at the end
movies.push("Titanic");
console.log('After adding "Titanic" at end:', movies);

// 5. Find the position of "Interstellar"
const interstellarIndex = movies.indexOf("Interstellar");
console.log('Position of "Interstellar":', interstellarIndex);

// 6. Check if "Avatar" is in the collection
const hasAvatar = movies.includes("Avatar");
console.log('Is "Avatar" in collection?', hasAvatar);

// 7. Display final results
console.log('Final collection size:', movies.length);
console.log('Final movie collection:', movies);

// Bonus: Create favorites array
// const favorites = movies.slice(0, 2);
// console.log('First 2 movies (favorites):', favorites);

// Bonus: Sort movies alphabetically
// const sortedMovies = [...movies].sort();
// console.log('Movies sorted alphabetically:', sortedMovies);
