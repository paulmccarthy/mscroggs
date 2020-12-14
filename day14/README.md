# Description
The numbers 33, 404 and 311 contain duplicate digits. The numbers 120, 15 and 312 do not.
How many numbers between 10 and 999 (inclusive) contain no duplicate digits?

# Workings
## Brute Force
This is a brute force solution with a difference, instead of checking each digit of each number, we can use a Set.

A Set will only store unique values, so if there are any repeats, then the size of the set will differ from the number of digits in the number.

## "Maths" approach
First digit can't be zero.

Calculate for the 2 digit numbers:

1st digit: 9 choices [1 - 9]\
2nd digit: 9 choices [0 - 9] - [choice of first digit]\
Total: 81

Calculate for 3 digit number:

1st digit: 9 choices [1 - 9]\
2nd digit: 9 choices [0 - 9] - [choice of first digit]\
3rd digit: 8 choices [0 - 9] - [choice of first digit] - [choice of second digit]\
Total: 648

Total: 729
