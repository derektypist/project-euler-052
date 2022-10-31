# Project Euler 052 - Permuted Multiples

It can be seen that the number 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer x, such that multiplied by integers {2,3,...,n}, contain the same digits.

Information at [Project Euler 052](https://projecteuler.net/problem=52)

## UX

**Getting Started**

Enter a whole number between 2 and 6 and select the Submit Button.  Unless you have made an invalid input, you will see the number entered (n) as well as the smallest positive integer multiplied by {2,3,...,n} containing the same digits.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of the following:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 6
- Including leading zeros such as 02
- Entering a number, but it is not an integer

As a user, I expect the function `permutedMultiples(2)` to return a number.

As a user, I expect the function `permutedMultiples(2)` to return 125874.

As a user, I expect the function `permutedMultiples(6)` to return 142857.

User Stories on function `permutedMultiples(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 052](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-52-permuted-multiples)

**Information Architecture**

The function `permutedMultiples(n)` returns a number, where n is a number between 2 and 6.

**Features**

Allows the user to enter a number, as well as getting the smallest positive integer multiplied by integers {2, 3, ..., number entered}, containing the same digits.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.


