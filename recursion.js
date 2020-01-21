// 1 Counting Sheep
const countSheep = function(n){
  //Base case
  if (n === 0){
    console.log('All sheep have jumped over the fence');
    return ;
  }
  console.log(`${n}: Another sheep jumps over the fence`);
  return countSheep(n-1);
};

countSheep(5); 

// 2 Power Calculator
const powerCalculator = function(base, power) {
  //Base case
  if (power < 0){
    return 'exponent should be >= 0';
  } else if(power < 1) {
    return 1;
  }
  return base*powerCalculator(base, power-1);
};

console.log('Power Calculator: ', powerCalculator(10, 3)); 

// 3 Reverse String
const reverseString = function(string){
  //Base Case
  if(string === ''){
    return '';
  }
  return reverseString(string.substr(1)) + string.charAt(0);
};

console.log('Reverse String: ', reverseString('testString')); 

// 4 nth Triangular Number
const nthTriangle = function(n) {
  //Base Case
  if(n === 0){
    return 0;
  }
  return n + nthTriangle(n-1);
};

console.log('Nth Triangle: ', nthTriangle(3)); 

// 5 String Splitter
const stringSplitter = function(string, splitter) {
  //Base Case
  // if(string === ''){
  //   return '';
  // }
  // let splitAt; 
  // if(string.indexOf(splitter) > string.length){
  //   return splitAt = string.length;
  // } else splitAt = string.indexOf(splitter);
  // return [string.slice(0,splitAt-1), ...stringSplitter(string.substr(splitAt+1), splitter)];
};

console.log('String Splitter: ', stringSplitter('02/20/2020', '/'));

// 6 Fibonacci
const fibonacci = function(n, seed=0){
  //Base Case
  if (seed[n]){
    return seed[n];
  }
  if(n <= 2){
    return 1;
  }
  return seed[n] = fibonacci(n-1, seed) + fibonacci(n-2, seed);
};
console.log('Fibonacci: ', fibonacci(35));

// 7 Factorial
const factorial = function(n){
  //Base Case
  if(n === 1){
    return 1;
  }
  return n * factorial(n-1);
};

console.log('Factorial: ', factorial(4));

// 8 Find a way out of the maze

// 9 Find ALL the ways out of the maze

// 10 Anagrams

// 11 Organization Chart

// 12 Binary Representation

