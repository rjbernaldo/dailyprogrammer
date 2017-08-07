// Description

// A prime number is any integer greater than 1 which can only be evenly divided by 1 or itself. For this challenge, you will output two numbers: the nearest prime below the input, and the nearest prime above it.

// Input Description

// The input will be a number on each line, called n.

// Output Description

// The format of the output will be:

// p1 < n < p2

// where p1 is the smaller prime, p2 is the larger prime and n is the input.

// If n already is a prime, the output will be:

// n is prime.

// Challenge Input

// 270 541 993 649 
// Challenge Output

// 269 < 270 < 271 541 is prime. 991 < 993 < 997 647 < 649 < 653 
// Bonus

// Write the program to work for numbers with big gaps to the nearest primes. This requires a clever solution and cannot be efficiently bruteforced.

// 2010741 1425172824437700148 
// Credit

// This challenge was suggested by user /u/tulanir, many thanks! If you have an idea for a challenge please share it on /r/dailyprogrammer_ideas and there's a good chance we'll use it.

console.log(270, findNearestPrime(270));
console.log(541, findNearestPrime(541));
console.log(993, findNearestPrime(993));
console.log(649, findNearestPrime(649));

function findNearestPrime(n) {
  if (isPrime(n)) return `${n} is prime`;

  const smaller = findSmallerPrime(n);
  const larger = findLargerPrime(n);
  return `${smaller} < ${n} < ${larger}`;
}

function findLargerPrime(n) {
  const limit = n * n;

  for (let i = n; n < limit; i++) {
    if (isPrime(i)) return i;
  }

  return null;
}

function findSmallerPrime(n) {
  for (let i = n; n > 0; i--) {
    if (isPrime(i)) return i;
  }

  return null;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
