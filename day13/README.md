# Description
There are 6 ways to split the sequence of the numbers 1 to 5 into three shorter sequences:

* 1 and 2 and 3, 4, 5
* 1 and 2, 3 and 4, 5
* 1 and 2, 3, 4 and 5
* 1, 2 and 3 and 4, 5
* 1, 2 and 3, 4 and 5
* 1, 2, 3 and 4 and 5

Today's number if the number of ways to split the sequence of the numbers 1 to 10 into five shorter sequences.

# Workings
Each group must contain at least one number.

There are 5 choices for group 1:

Group Ranges:
G1: 1 to (10 - 4)
G2: 2 to (10 - 3)
G3: 3 to (10 - 2)
G4: 4 to (10 - 1)
G5: 5 to (10)

1
1, 2
1, 2, 3
1, 2, 3, 4
1, 2, 3, 4, 5
1, 2, 3, 4, 5, 6

2
2, 3
2, 3, 4
2, 3, 4, 5
2, 3, 4, 5, 6
2, 3, 4, 5, 6, 7
