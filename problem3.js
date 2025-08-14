function bestTeam(team1, team2) {
    if (typeof team1 !== "object" || typeof team2 !== "object") {
        return "Invalid";
    }
    
    const result1 = team1.foul + team1.cardY + team1.cardR;
    const result2 = team2.foul + team2.cardY + team2.cardR;

    if (result1 < result2) {
        return team1.name;
    } else if (result2 < result1) {
        return team2.name;
    } else {
        return "Tie";
    }
}

console.log(bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 }, { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
console.log(bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 }, { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }));
