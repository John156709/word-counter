function countWords() {
    const text = document.getElementById("inputText").value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(function(word) {
        return word.length > 0; // Empty words are not counted
    }).length;
    document.getElementById("word-count").innerText = "Word Count: " + wordCount;
}
