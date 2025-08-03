// Challenge Medium 02: Playlist Manager
// Create an advanced music playlist management system

// 1. Create three playlists
const rockPlaylist = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
const popPlaylist = ["Shape of You", "Blinding Lights", "Watermelon Sugar"];
const jazzPlaylist = ["Take Five", "So What", "Blue in Green"];

// Create additional arrays
const favorites = [];
const recentlyPlayed = [];

console.log('Initial Playlists:');
console.log('Rock:', rockPlaylist);
console.log('Pop:', popPlaylist);
console.log('Jazz:', jazzPlaylist);

// 3. Add 2 songs from rock playlist to favorites
favorites.push(rockPlaylist[0]); // First song
favorites.push(rockPlaylist[1]); // Second song
console.log('\nAfter adding to favorites:', favorites);

// 4. Play songs: Move first song from each playlist to recentlyPlayed
recentlyPlayed.push(rockPlaylist.shift());
recentlyPlayed.push(popPlaylist.shift());
recentlyPlayed.push(jazzPlaylist.shift());

console.log('\nAfter playing first songs:');
console.log('Recently Played:', recentlyPlayed);
console.log('Rock:', rockPlaylist);
console.log('Pop:', popPlaylist);
console.log('Jazz:', jazzPlaylist);

// 5. Create Mixed playlist (1 song from each remaining playlist)
const mixedPlaylist = [];
if (rockPlaylist.length > 0) mixedPlaylist.push(rockPlaylist[0]);
if (popPlaylist.length > 0) mixedPlaylist.push(popPlaylist[0]);
if (jazzPlaylist.length > 0) mixedPlaylist.push(jazzPlaylist[0]);
console.log('\nMixed Playlist:', mixedPlaylist);

// 6. Remove "Blinding Lights" from pop playlist
const blindingLightsIndex = popPlaylist.indexOf("Blinding Lights");
if (blindingLightsIndex !== -1) {
  popPlaylist.splice(blindingLightsIndex, 1);
}
console.log('\nAfter removing "Blinding Lights" from Pop:', popPlaylist);

// 7. Shuffle operation: Move last song of rock playlist to beginning
if (rockPlaylist.length > 0) {
  const lastSong = rockPlaylist.pop();
  rockPlaylist.unshift(lastSong);
}
console.log('\nAfter shuffle (rock):', rockPlaylist);

// 8. Search for "Take Five"
function findSong(songTitle) {
  const playlists = {
    'Rock': rockPlaylist,
    'Pop': popPlaylist,
    'Jazz': jazzPlaylist,
    'Recently Played': recentlyPlayed,
    'Favorites': favorites,
    'Mixed': mixedPlaylist
  };
  
  for (let [playlistName, playlist] of Object.entries(playlists)) {
    const index = playlist.indexOf(songTitle);
    if (index !== -1) {
      return { playlist: playlistName, index: index };
    }
  }
  return { playlist: 'Not found', index: -1 };
}

const takeiveLocation = findSong("Take Five");
console.log(`\nSearch "Take Five": Found in ${takeiveLocation.playlist} at index ${takeiveLocation.index}`);

// 9. Create master playlist with all unique songs
const allSongs = [...rockPlaylist, ...popPlaylist, ...jazzPlaylist, ...recentlyPlayed, ...favorites, ...mixedPlaylist];
const masterPlaylist = [...new Set(allSongs)]; // Remove duplicates
console.log('\nMaster Playlist:', masterPlaylist);

// 10. Generate analytics
const playlistSizes = {
  'Rock': rockPlaylist.length,
  'Pop': popPlaylist.length,
  'Jazz': jazzPlaylist.length,
  'Recently Played': recentlyPlayed.length,
  'Favorites': favorites.length,
  'Mixed': mixedPlaylist.length
};

let largestPlaylist = '';
let maxSize = 0;
for (let [name, size] of Object.entries(playlistSizes)) {
  if (size > maxSize) {
    maxSize = size;
    largestPlaylist = name;
  }
}

const blueInGreenLocation = findSong("Blue in Green");
const activePlaylists = Object.values(playlistSizes).filter(size => size > 0);
const averageSize = activePlaylists.length > 0 ? 
  (activePlaylists.reduce((sum, size) => sum + size, 0) / activePlaylists.length).toFixed(1) : 0;

console.log('\nAnalytics:');
console.log(`- Largest playlist: ${largestPlaylist} (${maxSize} songs)`);
console.log(`- Total unique songs: ${masterPlaylist.length}`);
console.log(`- "Blue in Green" found in: ${blueInGreenLocation.playlist}`);
console.log(`- Average songs per active playlist: ${averageSize}`);

// Bonus: Shuffle function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Example: const shuffledMaster = shuffleArray(masterPlaylist);
// console.log('Shuffled master playlist:', shuffledMaster);
