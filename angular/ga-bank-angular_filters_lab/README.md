# Welcome to the Bank of GA!

## Use Angular to complete the following user stories.

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

As a customer with several entries of deposits and withdrawls,
    when I click on Action, Amount, or Date
    then the table should resort based on the header I clicked on
    and then data should be sorted from lowest to highest.

As a customer with several entries of deposits and withdrawls who has sorted by a header,
    when I click on that header again,
    then the table should resort in the opposite direction,
    so that the data should be sorted from highest to lowest.
