# OH NO!

![:image](http://media.tumblr.com/tumblr_lkcdbhvjCH1qeg89k.png)

***Hogwarts has lost all its magic and now NOTHING WORKS!***

Professor Sprout has some experience in web development, and has attempted to set up a Rails app to help Hogwarts administrators keep track of their students while the investigation is underway. While she means well, she's fairly error-prone (probably should have stuck to Herbology) and the application is not functional.

As members of Dumbledore's Army, it's up to YOU to correct all the errors so that this app runs properly.

> Reparo!

## Setup

- Start by creating a database with `rake db:create`. 
- Run your migrations with `rake db:migrate` and run `rake db:seed`.
    - *Beware!* Your seed file may be hiding a dark secret...

Then run `rails s` and correct all the errors as you go along.

When you can *Create, Read, Update* and *Delete* all the houses and students, you'll know things are working properly and the forces of evil have been defeated by technology.

**Read your errors!**

Rails may not be magic, but it does have some of the most informative error messages out there - follow the error to the solution. Work together to research what you don't understand!

**Keep an eye out for these curses:**

- **Misspelliarmus**
- **Pluralzatio**
- **Capitaliza Rongo**
- **Variable Scopus**
- **Variable Undefinitus**
- **And more!**

## Bonus

Add functionality so students can enroll at Hogwarts from the index page (with a link to create a new student). You should implement a sorting hat method so that when a new student is created they are randomly assigned to one of Hogwarts' four houses. (Where do you think this logic should go?)
