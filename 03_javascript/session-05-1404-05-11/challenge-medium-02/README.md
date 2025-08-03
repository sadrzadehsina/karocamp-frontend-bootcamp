# 🎯 Challenge Medium 02: Playlist Manager (Stage 5 - Arrays)

## 📝 Description
Create an advanced music playlist management system that handles multiple playlists, song operations, and playlist analytics. This challenge simulates a music streaming service's playlist functionality.

## 🎯 Objectives
- Work with nested array operations
- Implement complex array manipulation workflows
- Practice array analysis and statistics
- Master multiple array method combinations

## 📋 Requirements
1. Create three playlists as arrays:
   - `rockPlaylist`: ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
   - `popPlaylist`: ["Shape of You", "Blinding Lights", "Watermelon Sugar"]
   - `jazzPlaylist`: ["Take Five", "So What", "Blue in Green"]

2. Create an empty `favorites` array and a `recentlyPlayed` array

**Implement these operations:**
3. Add 2 songs from rock playlist to favorites using array methods
4. Play songs: Move the first song from each playlist to `recentlyPlayed`
5. Create a new "Mixed" playlist by taking 1 song from each remaining playlist
6. Remove a specific song from pop playlist: "Blinding Lights"
7. Shuffle operation: Move the last song of rock playlist to the beginning
8. Search functionality: Find which playlist contains "Take Five"
9. Create a master playlist combining all unique songs from all playlists
10. Generate analytics: most songs in a playlist, total songs, playlist with "Blue in Green"

## 💡 Example Output
```
Initial Playlists:
Rock: ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]
Pop: ["Shape of You", "Blinding Lights", "Watermelon Sugar"]
Jazz: ["Take Five", "So What", "Blue in Green"]

After adding to favorites: ["Bohemian Rhapsody", "Stairway to Heaven"]

After playing first songs:
Recently Played: ["Bohemian Rhapsody", "Shape of You", "Take Five"]
Rock: ["Stairway to Heaven", "Hotel California"]
Pop: ["Blinding Lights", "Watermelon Sugar"]
Jazz: ["So What", "Blue in Green"]

Mixed Playlist: ["Stairway to Heaven", "Blinding Lights", "So What"]

After removing "Blinding Lights" from Pop: ["Watermelon Sugar"]

After shuffle (rock): ["Hotel California", "Stairway to Heaven"]

Search "Take Five": Found in Recently Played at index 2

Master Playlist: ["Hotel California", "Stairway to Heaven", "Watermelon Sugar", "Blue in Green", "Shape of You", "Take Five"]

Analytics:
- Largest playlist: Recently Played (3 songs)
- Total unique songs: 6
- "Blue in Green" found in: Jazz playlist
- Average songs per active playlist: 1.7
```

## 🚀 Bonus
- Implement a song rating system using parallel arrays
- Create a "shuffle all" function that randomizes song order
- Add duplicate detection across all playlists
- Implement playlist merging with conflict resolution

## ✅ Expected Topics Used
- Multiple array creation and management
- Advanced `.push()`, `.pop()`, `.shift()`, `.unshift()` operations
- Complex `.splice()` operations for removal and insertion
- `.includes()` and `.indexOf()` for cross-playlist searching
- `.forEach()` for iteration and analysis
- Array combination and deduplication
- Multi-array state management and synchronization
