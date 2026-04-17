function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
// numPointsScored(playerName): takes a player’s name and returns their points scored.
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (playerName in players) {
            return players[playerName].points;
        }
    }
        return "Player not found";

}
console.log(numPointsScored("Ben Gordon")); 
// Output: 33
function shoeSize(playerName) {
    const game=gameObject();
    for (const team in game){
        const players=game[team].players;
        if (playerName in players){
            return players[playerName].shoe;
        }   
    };
    return "Player not found";
}
console.log(shoeSize("Mason Plumlee")); 
// Output: 19
function teamColors(teamName) {
    const game=gameObject();
    for (const team in game){
        if (game[team].teamName === teamName){
            return game[team].colors;
        }
    };
    return "Team not found";
}
console.log(teamColors("Brooklyn Nets")); 
// Output: ["Black", "White"]

function teamNames() {
    const game=gameObject();
    const names=[];
    for (const team in game){
        names.push(game[team].teamName);
    };
    return names;
}
console.log(teamNames()); 
// Output: ["Brooklyn Nets", "Charlotte Hornets"]
function playerNumbers(teamName) {
    const game=gameObject();
    for (const team in game){
        if (game[team].teamName === teamName){
            const players=game[team].players;
            const numbers=[];
            for (const player in players){
                numbers.push(players[player].number);
            };
            return numbers;
        }
    };
    return "Team not found";
}
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    const game=gameObject();
    for (const team in game){
        const players=game[team].players;
        if (playerName in players){
            return players[playerName];
        }   
    };
    return "Player not found";
}
console.log(playerStats("Brendan Hayword"));
function bigShoeRebounds() {
    const game=gameObject();
    let biggestShoe=0;
    let rebounds=0;
    for (const team in game){
        const players=game[team].players;
        for (const player in players){
            if (players[player].shoe > biggestShoe){
                biggestShoe=players[player].shoe;
                rebounds=players[player].rebounds;
            }
        };
    };
    return rebounds;
}
console.log(bigShoeRebounds());

function mostPointsScored() {   
    const game=gameObject();
    let mostPoints=0;
    let playerName="";
    for (const team in game){
        const players=game[team].players;
        for (const player in players){
            if (players[player].points > mostPoints){
                mostPoints=players[player].points;
                playerName=player;
            }
        };
    };
    return playerName;
}
console.log(mostPointsScored());
function winningTeam() {
    const game=gameObject();
    let homePoints=0;
    let awayPoints=0;
    for (const team in game){
        const players=game[team].players;
        for (const player in players){
            if (team === "home"){
                homePoints += players[player].points;
            } else {
                awayPoints += players[player].points;
            }
        };
    };
    if (homePoints > awayPoints){
        return game.home.teamName;
    } else if (awayPoints > homePoints){
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}
console.log(winningTeam());

function playerWithLongestName() {
    const game=gameObject();
    let longestName="";
    for (const team in game){
        const players=game[team].players;
        for (const player in players){
            if (player.length > longestName.length){
                longestName=player;
            }
        };
    };
    return longestName;
}
console.log(playerWithLongestName());
function doesLongNameStealATon() {
    const game=gameObject();
    let longestName="";
    let steals=0;
    for (const team in game){
        const players=game[team].players;
        for (const player in players){
            if (player.length > longestName.length){
                longestName=player;
                steals=players[player].steals;
            }
        };
    };
    return true;
}
console.log(doesLongNameStealATon());