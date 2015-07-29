function fizzbuzz(n) {
  //Write your answer here
  //BEGIN_CHALLENGE
  if (n % 15 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return n;
  }
  //END_CHALLENGE
}

//DONT_EDIT_FROM_HERE
module.exports = {
  fizzbuzz: fizzbuzz
};