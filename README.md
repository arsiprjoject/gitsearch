# gitsearch

1. Display the first 10 results from Github repository search API with the term "Android" using the "mat-card" component
    - place the following in a "mat-card-header" component
      - the title of the card should be the name of the repository
      - subtitle should be respository's owner's login
    - the content should contain the description of the repository
2. Refactor your code to display the top 10 most "watched" respositories
    - Add the profile image of the owner in the title of each card
      - Use the "mat-card-avatar" directive
3. Refactor the code to initiate a search with each keystroke, but limiting the event to a debounce time of 300ms

Notes: 
* Tip, use RxJS for all the little nuances
* Use Github public so we can download and run the above exercise
* Share with Gavin/Kasyap
* We will review the final solution
