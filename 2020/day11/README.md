# Description
Noel has a large pile of cards. Half of them are red, the other half are black. Noel splits the cards into two piles: pile A and pile B.
Two thirds of the cards in pile A are red. Noel then moves 108 red cards from pile A to pile B. After this move, two thirds of the cards in pile B are red.
How many cards did Noel start with?

# Workings
Treat it as 4 piles

```
A Red: AR
A Black: AK

B Red: BR
B Vlack: BK

TOTAL = AR + AK + BR + BK

We know that the number of red cards = the number black cards
AR + BR = AK + BK

We know that AK is half of AR, (AR is two thirds of the pile, AK is one third of the pile)
=> AK = (0.5)AR

We also know that if we add 108 red cards to BR, BK will be half of BR
=> BK = 0.5(BR + 108) = 0.5(BR) + 54

TOTAL = AR + (0.5)AR + BR + (0.5)BR + 54
TOTAL = 1.5AR + 1.5BR + 54

As half the cards are red, and half are black

TOTAL = 2(AR + BR)

2(AR + BR) = 1.5(AR + BR) + 54
=> 2AR + 2BR = 1.5AR + 1.5BR + 54
=> 0.5AR + 0.5BR = 54
=> AR + BR = 108
=> Total = 216
```

## Check the Solution

&nbsp;|A Red|A Black|B Red|B Black
--|--|--|--|--|
Before|108|54|0|54
After|0|54|108|54
