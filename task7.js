let str = prompt("Enter a sentence:");

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}

console.log(words.join(" "));