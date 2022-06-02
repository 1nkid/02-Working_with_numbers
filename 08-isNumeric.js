
const input = ' \n \t \r   ';

console.log(+input);

if (input.trim() && isFinite(input)) { //input !=='' && !isNaN
  console.log('ok');
} else {
  console.log('error');
}