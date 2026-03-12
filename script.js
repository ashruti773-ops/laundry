function findMax(arr){
let max = arr[0];

for(let i=1;i<arr.length;i++){
if(arr[i] > max){
max = arr[i];
}
}

return max;
}


function findSum(arr){
let sum = 0;

for(let i=0;i<arr.length;i++){
sum += arr[i];
}

return sum;
}


function countOdd(arr){
let count = 0;

for(let i=0;i<arr.length;i++){
if(arr[i] % 2 !== 0){
count++;
}
}

return count;
}


function runProgram(){

let numbers = [12, 5, 8, 21, 16, 7];

let max = findMax(numbers);
let sum = findSum(numbers);
let oddCount = countOdd(numbers);

let output = "";

output += "Array: " + numbers + "\n";
output += "Maximum number: " + max + "\n";
output += "Sum of elements: " + sum + "\n";
output += "Count of odd numbers: " + oddCount;

console.log(output);

document.getElementById("output").textContent = output;

}