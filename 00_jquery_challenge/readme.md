# Welcome to the Bank of GA!

## Use jQuery and JavaScript to complete the following user stories.

This challenge doesn't require a backend YET as we aren't going to persist any data.

## First Feature Set

As a saver, 
    when I enter an amount, select deposit, and click go
    then I should see a new entry listing the Amount, Action and Date
    and my balance should go up.

As a spender,
    when I enter an amount, select withdrawl, and click go
    then I should see a new entry listing the Amount, Action and Date
    and my balance should go down.

As a spender with limited funds,
    when I enter an amount greater than my current balance, select withdrawl, and click go
    then I shouldn't be allowed to take out cash, a new entry listing shouldn't appear
    and my balance shouldn't go down.

## Bonus

Persist the bank history to a backend using Ajax.
