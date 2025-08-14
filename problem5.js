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

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 
console.log(resultReport(100));
console.log(resultReport([]));
