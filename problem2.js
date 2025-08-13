function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }

    return str.replace(/\s/g, "").toUpperCase();
}

console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter(["hack", "me"]));