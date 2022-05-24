
const decimal = 111;

// 321 =  3*100 + 2*10 + 1*1;

const binary = 0b111;

/* 
100101 = 1*32 0*16 0*8 1*4 0*2 1*1
100101 = 1*100000 0*10000 0*1000 1*100 0*10 1*1
100101 = 1*1048576 0*65536 0*4096 1*256 0*16 1*1
 */
const hex = 0x111;

console.log(`decimal 111 = ${decimal}`);
console.log(`binary 111 = ${binary}`);
console.log(`hex 111 = ${hex}`);

// method toString imp number to numsystem 16, 8...

const decimal2 = 123;

console.log(decimal2.toString(16));
/* 
10 = a
11 = b
12 = c
13 = d
14 = e
15 = f 
*/
