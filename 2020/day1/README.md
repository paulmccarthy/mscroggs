# Description
It is possible to write 325 different numbers using the digits 1, 2, 3, 4, and 5 at most once each (and using no other digits). How many of these numbers are odd?

# Workings
Instead of trying to count all the odd numbers, count the even numbers and subtract from the total.

For even numbers, we have two choices: 2 or 4. The total count is the sum of all 1-digit, 2-digit, 3-digit, 4-digit, and 5-digit numbers that end in 2 or 4.

Count of possible even numbers:
Length|Possible numbers|Total
--|--|--
1-digit| 2 | 2
2-digit| 4 * 2 | 8
3-digit| 4 * 3 * 2 | 24
4-digit| 4 * 3 * 2 * 2 | 48
5-Digit| 4 * 3 * 2 * 1 * 2 | 48

Total Positive Numbers = 130\
Total Negative Numbers = 325 - 130 = 195
