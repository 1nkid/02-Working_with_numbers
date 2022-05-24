
const x = 10 / 0;
const y = -10 / 0;
const z = Infinity;

console.log(x, y, z);
console.log(1e1000); // 10 ** 1000
console.log(Number.MAX_VALUE);
console.log(isFinite(z));
