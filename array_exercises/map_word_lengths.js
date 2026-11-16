function mapLengths(words) {
    const wordLengths = [];
    for (let i = 0; i < words.length; i++) {
        wordLengths[i] = words[i].length
    }
    return wordLengths;
}
console.log(mapLengths(["apple", "cat", "Four"]));
