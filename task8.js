let input = prompt("Enter numbers separated by spaces:");
let target = Number(prompt("Enter target sum:"));

let nums = input.split(" ").map(Number);

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log("Indices:", i, j);
        }
    }
}