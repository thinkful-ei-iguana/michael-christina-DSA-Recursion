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
let path = [];


const testMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//Iterative function
const maze = function(array, position=0,row, col, direction='S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= array[0].length || row >= array.length) {
    return;
  }

  path[position] = direction;
  position++;

  //Base Case
  if (array[row][col] === 'e') {
    PrintPath(path, 1, position -1);
    return;
  }
  if (array[row][col] === ' ') {
    array[row][col] = 'X';

    maze(array, position, row, col -1, 'L', path);
    maze(array, position, row-1, col, 'U', path);
    maze(array, position, row, col+1, 'R', path);
    maze(array, position, row+1, col, 'D', path);
  }
  position--;
};

const PrintPath = function(path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
};

// maze(testMaze,0,0,0,'S',[]);





// 9 Find ALL the ways out of the maze
const allMaze = function(array, position=0, row=0, col=0, direction='S', path=[]){
  if(col < 0 || row < 0) {
    return;
  }
  if(col >= array[0].length || row >= array.length) {
    return;
  }

  path[position] = direction;
  position++;

  if(array[row][col] === 'e') {
    PrintPath(path, 1, position -1);
    return;
  }
  
  if(array[row][col] === ' ') {
    array[row][col] = 'X';
    allMaze(array, position, row, col - 1, 'L', path);
    allMaze(array, position, row - 1, col, 'U', path);
    allMaze(array, position, row, col + 1, 'R', path);
    allMaze(array, position, row + 1, col, 'D', path);
    array[row][col] = ' ';
  }
  position--;
};

allMaze(testMaze,0,0,0,'S',[]);

// 10 Anagrams
//length of word factorial is number of solutions.
const anagrams = function(pre, word){
  //Base Case
  if(word.length <=1) {
    return console.log(`The anagram is ${pre}${word}`);
  } else {
    for(let i=0; i<word.length; i++) {
      let letter = word.substring(i, i+1);
      let prevLet = word.substring(0,i);
      let postLet = word.substring(i+1);
      anagrams(pre+letter, prevLet+postLet);
    }
  }
};

function printAnagrams(word){
  anagrams(' ', word);
}

printAnagrams('word');


// 11 Organization Chart
let orgData = {
  'Zuckerberg': {		
    'Schroepfer': {
      'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
      },
      'Zhao': {
        'Richie':{},
        'Sofia':{},
        'Jen':{}
      },
      'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
      },
      'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
      }
    },
    'Schrage': {
      'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
      },
      'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
      },
      'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
      }
    },
    'Sandberg': {
      'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
      },
      'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
      },
      'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
      },
      'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
      }
    }}};

const organization = function(obj, depth = 0){
  // pre-order BFT
  let tab = ' '.repeat(depth * 4);
  Object.keys(obj).forEach(key => {
    console.log(tab + key);
    organization(obj[key], depth + 1);
  });
};

organization(orgData);

// 12 Binary Representation
const binary = function(n){
  let binNum;
  //Base case
  if(n <= 0)
    return '';
  binNum = Math.floor(n % 2);
  return binary(Math.floor(n/2)) + binNum;
};

console.log('Binary: ', binary(7));
