function replaceWord() {
    const sentence = document.getElementById("sentence").value;
    const target = document.getElementById("target").value;
    const replacement = document.getElementById("replacement").value;
    
    const result = sentence.replace(target, replacement);
    document.getElementById("replaceResult").textContent = result;
}


function countChars() {
    const text = document.getElementById("charInput").value.trim();
    document.getElementById("charResult").textContent = text.length;

}
