/*
[1] What is the input to the program?
[2] What is the output of the program?
[3] What is the input to each recursive call?
[4] What is the output of each recursive call?
*/

//——1——Counting—Sheep————————————————————————————————————————————————————————

function countSheep(num) {
    // base
    if(num === 0){
      console.log('All sheep jumped over the fence');
    } else {
    // recursive
    console.log(`${num}: Another sheep jumps over the fence`);
    countSheep(num-1);
    }
  }
  
  countSheep(3)

  //——2——Power—Calculator———————————————————————————————————————————————————————

function powerCalc(base, exp){
    // if base or exp are less than zero ...
    if(base < 0 || exp < 0 ){
        // ... return an error message
        return `exponent should be >= 0`
    // if exp is 0 ...    
    } else if (exp == 0){
        // ... the result is 1
      return 1;
    // otherwise  
    } else {
        // return the base times the function with the base and one less exp
        return base * powerCalc(base, exp-1);
    }
  }

  // 10 * f(10, 2-1)
  // 10 * f(10, ...)

  powerCalc(10,2); //

  //——3——Reverse—String———————————————————————————————————————————————————————

function revStr(string){
    // validate a string
    if(typeof(string) !== 'string'){
        return 'Must be a string';
    // if the string is only one character just return it
    } else if(string.length < 2){
        return string;
    }
        // otherwise, return the function by taking off one character at a time, until it gets to the last character, then it return all the charaters in reverse order.
        return revStr(string.slice(1)) + string[0];
}

// 'crimson'
// f('rimson') + c
// f('imson') + r + c
// f('mson') + i + r + c
// f('son') + m + i + r + c

revStr('crimson')

//—nth—Triangular—Number—————————————————————

// 1st is 1
// 2nd is (1+2) = 3
// 3rd is (1+2+3) = 6
// 5th is (1+2+3+4+5) = 15
// return n * (n + 1) / 2
// 5 * (5 + 1) / 2
// 5 * 6 / 2
// 30 / 2
// 15

function triangle(n) {
  if (n < 2) return n;
  return n + triangle(n-1)
}

triangle(5) 