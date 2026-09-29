let str = prompt("Enter a string:");

let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
}

if (str.toLowerCase() == rev.toLowerCase()) {
    console.log("true");
} else {
    console.log("false");
}