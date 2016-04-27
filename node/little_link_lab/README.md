# Little Link Lab

Your goal is to create a Single Page Application similar to [bitly.com](http://bitly.com). Instead of consuming a third party API using AJAX, we'll be consuming our own API that we make!

## Step 1 - Try out Bitly

We'll be making a simplified bitly, but if you haven't used it, try it out. We won't create a login, so we will just store all the links that we shorten and display them. Notice that when you enter a url into the search bar, it shows up on the page without refreshing it. When you click the shortened link it also tracks the number of times the link was visited. Bitly also allows you to edit the links that you created.

## Step 2 - Create your API

It's hard to build your frontend without having some data, so let's build out our API first. Read through the starter code to see what is there and what you might need.

+ Build out a model for the links that you will store
+ Create the RESTful routes you need
+ When someone visits your little link, track the visits

## Step 3 - Build your SPA

Now that you have your API (and tested it?), let's create the frontend using jQuery and Bootstrap. Using AJAX makes calls to your newly created API.

+ Get all the links you've shortened and display it on the page
+ Create an input field to put a url that will be shortened
+ If the url was created successfully, add it to your list and display the shortened url
+ Display the number of times the url has been visited
+ Have an edit button and display a form to update the link properties
