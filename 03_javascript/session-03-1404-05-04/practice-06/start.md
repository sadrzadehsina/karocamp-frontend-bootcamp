<!-- markdownlint-disable -->

# Practice 06: Interactive Game Tournament System

## 🎯 Learning Objectives

By completing this exercise, you will learn:

- Building complex interactive game logic with control flow
- Implementing tournament brackets using nested loops
- Creating game state management with conditional logic
- Using `switch` statements for game mode selection
- Advanced loop control with `break` and `continue`
- Simulating user interactions and game progression
- Managing complex data structures with control flow

## 📋 Exercise Description

Create an interactive tournament system that runs multiple games, tracks scores, manages player rankings, and determines tournament winners. This advanced exercise combines all control flow concepts to build a complete gaming experience with multiple game modes and tournament progression.

## 🔧 Requirements

### Basic Requirements:
1. Implement multiple mini-games with different rules
2. Create a tournament bracket system with elimination rounds
3. Use loops to simulate game rounds and player turns
4. Implement complex scoring and ranking systems
5. Use conditional logic for game rules and victory conditions
6. Handle player actions and game state transitions

### Advanced Requirements:
1. Create different tournament formats (single elimination, round-robin)
2. Implement power-ups and special game mechanics
3. Add difficulty scaling and adaptive gameplay
4. Create detailed game statistics and analytics
5. Handle tie-breaking scenarios and playoff rounds
6. Generate tournament reports and champion celebrations

## 💻 Example Code Structure

```javascript
// Tournament configuration and player data
const players = [
    { name: "Alex Thunder", id: "P001", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Maya Lightning", id: "P002", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Sam Blaze", id: "P003", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Jordan Storm", id: "P004", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Casey Fire", id: "P005", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Riley Spark", id: "P006", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Avery Bolt", id: "P007", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "Quinn Flash", id: "P008", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 }
];

const games = ["Number Duel", "Pattern Match", "Speed Math", "Memory Challenge", "Logic Puzzle"];
let tournamentRound = 1;
let activePlayers = [...players]; // Copy of players for tournament

console.log("🏆 WELCOME TO THE ULTIMATE GAME TOURNAMENT!");
console.log("=" .repeat(55));
console.log(`🎮 Tournament Features: ${games.length} Games | ${players.length} Players`);
console.log(`🎯 Tournament Format: Single Elimination with Multiple Game Modes`);

// Step 1: Tournament mode selection
console.log("\\n🎲 SELECT TOURNAMENT MODE:");
console.log("-".repeat(30));

let tournamentMode = 2; // Simulated selection (1=Quick, 2=Standard, 3=Championship)

switch(tournamentMode) {
    case 1:
        console.log("⚡ QUICK TOURNAMENT selected!");
        console.log("   - Best of 3 games per match");
        console.log("   - Single elimination");
        console.log("   - 15 minutes estimated");
        var gamesPerMatch = 3;
        var enablePowerUps = false;
        break;
        
    case 2:
        console.log("🎯 STANDARD TOURNAMENT selected!");
        console.log("   - Best of 5 games per match");
        console.log("   - Single elimination with playoff");
        console.log("   - Power-ups enabled");
        console.log("   - 30 minutes estimated");
        var gamesPerMatch = 5;
        var enablePowerUps = true;
        break;
        
    case 3:
        console.log("👑 CHAMPIONSHIP TOURNAMENT selected!");
        console.log("   - Best of 7 games per match");
        console.log("   - Double elimination");
        console.log("   - All features enabled");
        console.log("   - 60 minutes estimated");
        var gamesPerMatch = 7;
        var enablePowerUps = true;
        var doubleElimination = true;
        break;
        
    default:
        console.log("⚠️  Invalid mode! Defaulting to Standard Tournament");
        var gamesPerMatch = 5;
        var enablePowerUps = true;
        break;
}

// Step 2: Tournament bracket generation
console.log("\\n\\n🏗️  GENERATING TOURNAMENT BRACKET:");
console.log("-".repeat(40));

// Shuffle players for random bracket
for (let i = activePlayers.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [activePlayers[i], activePlayers[randomIndex]] = [activePlayers[randomIndex], activePlayers[i]];
}

console.log("🎲 Players shuffled for fair bracket generation");
console.log("📋 Initial bracket:");

for (let i = 0; i < activePlayers.length; i += 2) {
    if (i + 1 < activePlayers.length) {
        console.log(`   Match ${(i/2) + 1}: ${activePlayers[i].name} vs ${activePlayers[i + 1].name}`);
    }
}

// Step 3: Tournament rounds with elimination
while (activePlayers.length > 1) {
    console.log(`\\n\\n🏆 TOURNAMENT ROUND ${tournamentRound}:`);
    console.log("=" .repeat(35));
    console.log(`👥 Players remaining: ${activePlayers.length}`);
    console.log(`🎮 Matches to play: ${Math.floor(activePlayers.length / 2)}`);
    
    let winners = [];
    let matchNumber = 1;
    
    // Process matches in pairs (single elimination)
    for (let i = 0; i < activePlayers.length; i += 2) {
        // Skip if odd number of players (bye round)
        if (i + 1 >= activePlayers.length) {
            console.log(`\\n🎫 BYE ROUND: ${activePlayers[i].name} advances automatically!`);
            winners.push(activePlayers[i]);
            continue;
        }
        
        const player1 = activePlayers[i];
        const player2 = activePlayers[i + 1];
        
        console.log(`\\n⚔️  MATCH ${matchNumber}: ${player1.name} vs ${player2.name}`);
        console.log("-".repeat(40));
        
        let player1Wins = 0;
        let player2Wins = 0;
        const winsNeeded = Math.ceil(gamesPerMatch / 2);
        
        // Play games until someone reaches wins needed
        let gameCount = 0;
        while (player1Wins < winsNeeded && player2Wins < winsNeeded && gameCount < gamesPerMatch) {
            gameCount++;
            
            // Select random game for this round
            const currentGame = games[Math.floor(Math.random() * games.length)];
            console.log(`\\n  🎲 Game ${gameCount}: ${currentGame}`);
            
            // Simulate game based on type
            let gameResult = simulateGame(currentGame, player1, player2, enablePowerUps);
            
            if (gameResult.winner === player1) {
                player1Wins++;
                console.log(`    🏆 ${player1.name} wins! Score: ${gameResult.score}`);
                if (gameResult.powerUpUsed) {
                    console.log(`    ⚡ Power-up used: ${gameResult.powerUpUsed}`);
                }
            } else {
                player2Wins++;
                console.log(`    🏆 ${player2.name} wins! Score: ${gameResult.score}`);
                if (gameResult.powerUpUsed) {
                    console.log(`    ⚡ Power-up used: ${gameResult.powerUpUsed}`);
                }
            }
            
            console.log(`    📊 Series: ${player1.name} ${player1Wins} - ${player2Wins} ${player2.name}`);
            
            // Check for early victory
            if (player1Wins === winsNeeded || player2Wins === winsNeeded) {
                console.log(`    🎯 Match decided! Moving to next match...`);
                break;
            }
        }
        
        // Determine match winner
        const matchWinner = player1Wins > player2Wins ? player1 : player2;
        const matchLoser = player1Wins > player2Wins ? player2 : player1;
        
        // Update statistics
        matchWinner.wins++;
        matchWinner.gamesPlayed += gameCount;
        matchLoser.losses++;
        matchLoser.gamesPlayed += gameCount;
        
        console.log(`\\n  🎊 MATCH WINNER: ${matchWinner.name}!`);
        console.log(`     Final Series: ${player1Wins} - ${player2Wins}`);
        console.log(`     Games played: ${gameCount}`);
        
        winners.push(matchWinner);
        matchNumber++;
    }
    
    // Update active players for next round
    activePlayers = winners;
    tournamentRound++;
    
    // Show round summary
    console.log(`\\n📈 ROUND ${tournamentRound - 1} SUMMARY:`);
    console.log(`   🏆 Advancing to next round: ${winners.length} players`);
    
    if (winners.length > 1) {
        console.log("   👥 Remaining players:");
        for (let i = 0; i < winners.length; i++) {
            console.log(`      ${i + 1}. ${winners[i].name} (${winners[i].wins}W-${winners[i].losses}L)`);
        }
    }
    
    // Pause between rounds (simulated)
    if (activePlayers.length > 1) {
        console.log("\\n⏳ Preparing for next round...");
    }
}

// Step 4: Crown the champion
console.log("\\n\\n🎆 TOURNAMENT CHAMPION CROWNED!");
console.log("=" .repeat(40));

const champion = activePlayers[0];
console.log(`👑 CHAMPION: ${champion.name}!`);
console.log(`🏆 Tournament Record: ${champion.wins} Wins - ${champion.losses} Losses`);
console.log(`🎮 Total Games Played: ${champion.gamesPlayed}`);

// Calculate win percentage
const winPercentage = champion.gamesPlayed > 0 ? 
    ((champion.wins / (champion.wins + champion.losses)) * 100).toFixed(1) : 0;
console.log(`📊 Win Percentage: ${winPercentage}%`);

// Step 5: Final tournament statistics
console.log("\\n\\n📈 FINAL TOURNAMENT STATISTICS:");
console.log("-".repeat(45));

// Sort all players by performance
players.sort((a, b) => {
    // Sort by wins first, then by win percentage
    if (b.wins !== a.wins) return b.wins - a.wins;
    
    const aWinRate = a.wins + a.losses > 0 ? a.wins / (a.wins + a.losses) : 0;
    const bWinRate = b.wins + b.losses > 0 ? b.wins / (b.wins + b.losses) : 0;
    return bWinRate - aWinRate;
});

console.log("🏅 FINAL LEADERBOARD:");
for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const totalGames = player.wins + player.losses;
    const winRate = totalGames > 0 ? ((player.wins / totalGames) * 100).toFixed(1) : 0;
    
    let trophy = "";
    switch(i) {
        case 0:
            trophy = "🥇";
            break;
        case 1:
            trophy = "🥈";
            break;
        case 2:
            trophy = "🥉";
            break;
        default:
            trophy = `${i + 1}.`;
            break;
    }
    
    console.log(`${trophy} ${player.name}: ${player.wins}W-${player.losses}L (${winRate}% win rate)`);
    
    // Show special achievements
    if (player.wins > 0 && player.losses === 0) {
        console.log(`    🔥 PERFECT RECORD!`);
    } else if (player.wins >= 3) {
        console.log(`    ⭐ TOURNAMENT VETERAN`);
    }
}

// Tournament completion statistics
console.log("\\n📊 TOURNAMENT OVERVIEW:");
const totalMatches = Math.log2(players.length);
const totalGamesPlayed = players.reduce((sum, player) => sum + player.gamesPlayed, 0);

console.log(`   🎯 Tournament Format: ${gamesPerMatch} games per match`);
console.log(`   🏆 Total Rounds: ${tournamentRound - 1}`);
console.log(`   ⚔️  Total Matches: ${Math.floor(totalMatches * players.length / 2)}`);
console.log(`   🎮 Total Games: ${totalGamesPlayed}`);
console.log(`   ⚡ Power-ups Enabled: ${enablePowerUps ? 'Yes' : 'No'}`);

console.log("\\n🎊 THANK YOU FOR PLAYING!");
console.log("=" .repeat(30));

// Game simulation function
function simulateGame(gameType, player1, player2, powerUpsEnabled) {
    let winner, score, powerUpUsed = null;
    
    // Base skill simulation (randomized with slight player variance)
    const player1Skill = 0.4 + Math.random() * 0.2; // 40-60% base skill
    const player2Skill = 0.4 + Math.random() * 0.2; // 40-60% base skill
    
    // Power-up chance (10% if enabled)
    const powerUpChance = powerUpsEnabled && Math.random() < 0.1;
    let skillModifier = 0;
    
    if (powerUpChance) {
        const powerUps = ["Double Points", "Time Freeze", "Lucky Strike", "Focus Boost", "Second Chance"];
        powerUpUsed = powerUps[Math.floor(Math.random() * powerUps.length)];
        skillModifier = 0.15; // 15% boost
    }
    
    // Game-specific simulation
    switch(gameType) {
        case "Number Duel":
            // Math-based game simulation
            const mathResult1 = (player1Skill + (Math.random() * 0.3)) + skillModifier;
            const mathResult2 = (player2Skill + (Math.random() * 0.3));
            
            winner = mathResult1 > mathResult2 ? player1 : player2;
            score = `${Math.floor(mathResult1 * 100)} - ${Math.floor(mathResult2 * 100)}`;
            break;
            
        case "Pattern Match":
            // Pattern recognition simulation
            const patternResult1 = (player1Skill + (Math.random() * 0.4)) + skillModifier;
            const patternResult2 = (player2Skill + (Math.random() * 0.4));
            
            winner = patternResult1 > patternResult2 ? player1 : player2;
            score = `${Math.floor(patternResult1 * 10)}/10 - ${Math.floor(patternResult2 * 10)}/10`;
            break;
            
        case "Speed Math":
            // Speed-based game simulation
            const speedResult1 = (player1Skill + (Math.random() * 0.25)) + skillModifier;
            const speedResult2 = (player2Skill + (Math.random() * 0.25));
            
            winner = speedResult1 > speedResult2 ? player1 : player2;
            const time1 = (2 - speedResult1).toFixed(1);
            const time2 = (2 - speedResult2).toFixed(1);
            score = `${time1}s - ${time2}s`;
            break;
            
        case "Memory Challenge":
            // Memory-based game simulation
            const memoryResult1 = (player1Skill + (Math.random() * 0.35)) + skillModifier;
            const memoryResult2 = (player2Skill + (Math.random() * 0.35));
            
            winner = memoryResult1 > memoryResult2 ? player1 : player2;
            score = `${Math.floor(memoryResult1 * 15)} - ${Math.floor(memoryResult2 * 15)}`;
            break;
            
        case "Logic Puzzle":
            // Logic-based game simulation
            const logicResult1 = (player1Skill + (Math.random() * 0.3)) + skillModifier;
            const logicResult2 = (player2Skill + (Math.random() * 0.3));
            
            winner = logicResult1 > logicResult2 ? player1 : player2;
            score = `${Math.floor(logicResult1 * 20)} - ${Math.floor(logicResult2 * 20)}`;
            break;
            
        default:
            // Default random game
            winner = Math.random() > 0.5 ? player1 : player2;
            score = "Random outcome";
            break;
    }
    
    return { winner, score, powerUpUsed };
}
```

## 🚀 Bonus Challenges

If you finish early, try these enhancements:

1. **Double Elimination**: Implement a losers bracket where eliminated players get a second chance
2. **Team Tournament**: Create team-based competitions with multiple players per team
3. **Skill Rating System**: Implement an ELO-style rating system that tracks long-term player performance
4. **Custom Game Creator**: Allow creation of new mini-games with custom rules
5. **Tournament Replay**: Save and replay tournament matches with detailed statistics
6. **Spectator Mode**: Add commentary and play-by-play descriptions for matches
7. **Seasonal Championships**: Create multi-tournament seasons with overall rankings
8. **Achievement System**: Add unlockable achievements and titles for players

## ✅ Success Criteria

Your tournament system should:

- [ ] Successfully run a complete tournament from start to finish
- [ ] Use multiple types of loops for different tournament mechanics
- [ ] Implement complex conditional logic for game rules and scoring
- [ ] Use `switch` statements effectively for mode selection and game logic
- [ ] Properly use `break` and `continue` for flow control
- [ ] Handle edge cases like bye rounds and tie-breaking
- [ ] Generate comprehensive statistics and leaderboards
- [ ] Simulate realistic game outcomes with varied mechanics
- [ ] Provide engaging tournament progression and commentary
- [ ] Crown a deserving champion based on tournament performance

## 🎓 Key Learning Outcomes

After completing this exercise, you will have:

- Mastered complex control flow in interactive gaming scenarios
- Experience with tournament bracket logic and elimination systems
- Understanding of game state management and progression tracking
- Skills in simulating realistic competitions and outcomes
- Knowledge of statistical analysis and ranking systems
- Confidence in building engaging interactive applications

---

**Time Estimate:** 60-75 minutes  
**Difficulty:** Advanced  
**Focus:** Interactive systems, complex control flow, game logic
