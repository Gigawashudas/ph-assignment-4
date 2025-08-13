function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }

    let fine = fare + (fare * 0.20) + 30;

    return fine;
}

console.log(totalFine(200))
console.log(totalFine(-200))
console.log(totalFine("200"))
console.log(totalFine(552))