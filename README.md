<!-- Tic-Toc-Toe -->

<!--Introduction-->
# Tic Tac Toe  <name of the project >
The Game is between two players ; player x and Player O.
when the users enter the Game they will play againest each other.
The chance of the winner between X and O and what are possibilities to win.
the score of each player will be incremented based on the winnin to each players


---

<!--00 ## h2 #### h6 -->

<!-- unoreder list list-->

* JS
# JQuery
- Front End
    * HTML
    * CSS



    <!-- o rder list list -->
    1.  ONE
    2. TWO
    3. THREE

    <!-- links -->
    # Reference:

    [sweet alert](https://sweetalert.js.org)

    [Animation](https://daneden.github.io/animate.css/)

    ---

### Reset function
```js 

// Re-set Button .. or Re-set function to clear 

 function set() { // 
    
    alert("Start a new game!!");
    
    counter=0;
    $(".grid-item").html("");// Empty X|O Grid 
    $(".grid-item").off(); // Besed on the click remove all event based on the click to avoid double click.
    $('.grid-item').one("click", startGame );   
} 
function NewGame(){ // once the player click on the new Game will start a new Game from the beginning
    player1 =0;
    player2 =0; 

    $('#X').text(player1);
    $('#O').text(player2);
    set();

## Challenges 
 1. My challenges are how to build and start the games.

2. the challenge that I have solved was when the player click on the same tile it was fliping from X to O based on each click. so I used .one() methods and it works
  
## Technologies:

  [Visual Studio Code] (https://code.visualstudio.com).

---
###  Unsolved Problems:
 To  apply AI within the game to let the Computer play against the player. 
 let AI agent play the game againest the user.

---
###  planning and development: 
 

1.  phase1: Create a grid of 3*3 
2.  phase 2: Validate each tile by the clcik and checking if its working.
    phase 3: adding X and/or O.
    phase 4: MSG to WIn Win Logic by applying the alignment condition.
    when the horizontal,diagonal matches
 2.    determine the player who won player X or Player O 
 3. Adding the score to each player when he/she Won.
       
 4.  adding functions such as  Start new Game(),Check winner(),reset(),newGame().
    

---
# User Stories:
// the phases.




