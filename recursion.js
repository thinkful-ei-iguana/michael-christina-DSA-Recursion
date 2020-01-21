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
  let splitAt = string.indexOf(splitter);
  //Base Case
  if(splitAt === -1){
    return [string];
  }
  return [string.slice(0,splitAt), ...stringSplitter(string.substr(splitAt+1), splitter)];
};

console.log('String Splitter: ', stringSplitter('02/20/2020', '/'));

// 6 Fibonacci
const fibonacci = function(n, seed=0){
  //Base Case
  seed = seed || {};
  if (seed[n]){
    return seed[n];
  }
  if(n <= 2){
    return 1;
  }
  seed[n] = fibonacci(n-1, seed) + fibonacci(n-2, seed);
  return seed[n];
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
let mazePath = '';

const validPath = function(array, x, y, maxX, maxY){
  if (x < 0 || x > maxX-1 || y < 0 || y > maxY-1) {
    return false;
  } else if (array[y][x] === '*') {
    return false;
  } else return true;
};

const up = function(y){
  y = y-1;
  return y;
};
const down = function(y){
  y = y+1;
  return y;
};
const right = function(x){
  x = x+1;
  return x;
};
const left = function(x){
  x = x-1;
  return x;
};

const testMaze = [
  [' ', ' ', '*', '*', ' '],
  [' ', '*', '*', '*', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', 'e']
];

//Iterative function
const maze = function(array, x=0, y=0){
  let maxX = array[0].length;
  let maxY = array.length;
  console.log(array);
  //Base Case
  
  //test directions - all valid directions
  if (array[y][x] === 'e'){
    return '';
  } 
  
  if(validPath(array, right(x), y, maxX, maxY) === true){
    x = right(x);
    mazePath = 'R';
    array[y][x-1] = '*';
    return mazePath + maze(array,x,y);
  } else if (validPath(array, x, down(y), maxX, maxY) === true) {
    y = down(y);
    mazePath = 'D';
    array[y-1][x] = '*';
    return mazePath + maze(array,x,y);
  } else if (validPath(array, left(x), y, maxX, maxY) === true) {
    x = left(x);
    mazePath = 'L';
    array[y][x+1] = '*';
    return mazePath + maze(array,x,y);
  } else if (validPath(array, x, up(y), maxX, maxY) === true) {
    y = up(y);
    mazePath = 'U';
    array[y+1][x] = '*';    
    return mazePath + maze(array,x,y);
  } 
};

console.log('Maze: ', maze(testMaze));





// 9 Find ALL the ways out of the maze
const allMaze = function(array){

};

// 10 Anagrams
//length of word factorial is number of solutions.
const anagrams = function(word){

};

// 11 Organization Chart
const organization = function(){

};

// 12 Binary Representation
const binary = function(n){
  let binNum;
  //Base case
  if(n <= 0)
    return '';
  binNum = n % 2;
  return binary(Math.floor(n/2)) + binNum;
};

console.log('Binary: ', binary(7));
