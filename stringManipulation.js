function modifyString(inputString) {
    // Define a set of vowels for efficient lookup both lowercase and uppercase
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    return inputString
        .split('')
        .map(char => {
            // Toggle case
            const toggledCase = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

            // Remove vowels
            return vowels.has(char) ? '' : toggledCase;
        })
        .join('');
}

const inputString = "Hello, World!";
const outputString = modifyString(inputString);
console.log("Input:", inputString);
console.log("Output:", outputString);