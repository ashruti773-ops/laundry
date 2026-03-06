function calculateCI() {

let P = document.getElementById("principal").value;
let R = document.getElementById("rate").value;
let T = document.getElementById("time").value;
let N = document.getElementById("n").value;

P = Number(P);
R = Number(R);
T = Number(T);
N = Number(N);

let amount = P * Math.pow((1 + (R / (100 * N))), (N * T));
let compoundInterest = amount - P;

console.log("Compound Interest:", compoundInterest);

document.getElementById("result").innerText =
"Compound Interest = " + compoundInterest.toFixed(2);

}