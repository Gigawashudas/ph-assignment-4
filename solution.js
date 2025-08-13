


// problem-1
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    let fine = fare + (fare * 0.20) + 30;

    return fine;
}

// problem-2
function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    return str.replace(/\s/g, "").toUpperCase();
}

// problem-3
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

// problem-4
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// problem-5
function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }
    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let total = 0, passCount = 0, failCount = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    const avg = Math.round(total / marks.length);

    return { finalScore: avg, pass: passCount, fail: failCount };
}