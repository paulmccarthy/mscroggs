# Description
Today's number is the smallest multiple of 24 whose digits add up to 24.

# Workings
All answers are 3 digits, and so the lower bound will be the smallest multiple of 24 that's 3 digits longs: 24 * 5 = 120.\
The upper bound will be the largest multiple of 24 that is < 1000.

# Approach
Iterate through all the multiples of 24 between 120 and 1000, sum the digits, and check if it's less than the current min.

The optimised approach would be to loop downwards from the upper bound, and just return the last found, but that means calculating the upper bound first, but I'm lazy, and in this case won't really be any different.
