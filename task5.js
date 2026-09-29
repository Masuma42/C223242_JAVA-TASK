let n = Number(prompt("Enter array size:"));
let arr = prompt("Enter numbers:").split(" ").map(Number);

let result = [];

for (let i = 0; i < n; i++) {
    if (!result.includes(arr[i])) {
        result.push(arr[i]);
    }
}

console.log(result.join(" "));