# Description
18 can be written as the sum of 3 consecutive (strictly) positive integers: 5 + 6 + 7.

18 can also be written as the sum of 4 consecutive (strictly) positive integers: 3 + 4 + 5 + 6.

18 is in fact the smallest number that can be written as the sum of both 3 and 4 consecutive (strictly) positive integers.

Today's number is the smallest number that can be written as the sum of both 12 and 13 consecutive (strictly) positive integers.

# Workings
This will be another brute force solution. Before we try to work out the solution, we'll try and reduce the amount of work we need to do.

What we know:
* The answer is 3 digits long, so we need to check all numbers between 100 and 999
* The largest number in the sum must be > n / 2, otherwise `(n / 2) + (n / 2) + 1 > n`
* The sum of the first n natural numbers is n(n + 1) / 2
* The sum of consecutive numbers from n_i to n_j, where i > 1 is `(n_j(n_j + 1) / 2) - (n_i - 1(n_i) / 2)`

```
Example:

Sum of 4, 5, 6.

n_i = 4
n_j = 6

(6(7) / 2) - (3(4) / 2)
= 21 - 6
= 15
= 4 + 5 + 6
```
# Approach
For each number, `n`, between 100 and 999, calulate `n / 2`. Starting at `n / 2` check if there are any 13 number sequences that sum to `n`. Store these as possible solutions. For each of the possible solutions, check if there are 12 number sequences that sum to `n`. The solution is the lowest value found.
