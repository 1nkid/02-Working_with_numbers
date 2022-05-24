
let x1 = 42;

let x2 = 0b101010; // 0b prefix 2 system
let x3 = 0o52; // 0o prefix 8 system
let x4 = 0x2A; // 0x prefix 16 system
let x5 = 0x2a;

console.log(x1, x2, x3, x3, x5);

let y1 = 42.000;
let y2 = 42.;

let y3 = 0.42e2; // 0.42 * (10 ** 2)
let y4 = .42e2; 

let y5 = 42000e-3; // 42000 / (10 ** 3)

console.log(y1, y2, y3, y4, y5);