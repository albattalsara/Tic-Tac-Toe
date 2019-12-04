
 
//----------TIC-TOC-TOE-----------X|O---------------
   
    let counter=0; 

     let player1 = 0; //"player1"; // Player one is X
     let player2= 0;  //"player2";  // player two is O
        
     
     $('#X').text(player1);
        $('#O').text(player2);

    // alert('Welcome to the Game')
    
    swal("Welcome to Game! lets Start!");



    function startGame(event){
        { 
            // event is the action by the user that we need to access the object as a whole class/
            
                if (counter%2==0) // adding either X or O
        
              {
                $(event.target).text("X");
                counter += 1;
              }
        
              else {
             $(event.target).text("O");
                counter +=1;
              }
        
        CheckWinner(); // call the function based on the user click on the index.
        
        }
    }
    $('.grid-item').one("click", startGame ); 


// Check Winner by checking on the martix if the row is identical X..then X is Winner
// otherwise if the row/col is identical  of O then O is Winner.


  function CheckWinner() 
{
    if ( $('.grid-item').eq(0).text() === $('.grid-item').eq(1).text() && $('.grid-item').eq(1).text() === $('.grid-item').eq(2).text() &&  $('.grid-item').eq(2).text() != "") // first row is identical , Not equal to ""(empty)null
        {
            if ($('.grid-item').eq(0).text() === "X"){
                player1 += 1;
              
                
            } else { 
                player2 += 1;
                
            }
            //update the score of players
            $('#X').text(player1);
            $('#O').text(player2);

            // console.log(`First Player:  ${player1} second Player: ${player2} `);

            //set time out is a method to set timer to show the X/O
            setTimeout ( function(){ 
                alert($( $('.grid-item').eq(0) ).text() + " is the winner! ");
            
            set();
                
         
        
        } , 500 )

        }

     else if ( $('#3').text()=== $('#4').text()  && $('#4').text() === $('#5').text()  &&  $('#5').text()) // the second row!!

     {
          if ( $('.grid-item').eq(3).text() === "X") {
              player1 += 1;

          }else { player2 +=1;
        }
        $('#X').text(player1); // Update the score of Players.
        $('#O').text(player2);


         setTimeout( function(){
            alert($( '#3' ).text() + " is the winner! ");
            set();

         }, 500 )
        
    }

     else if ( $('#6').text() === $('#7').text() && $('#7').text() === $('#8').text() &&  $('#8').text() != "") // 3rd row is identical , Not equal to ""(empty)null
    {
        if ($('.grid-item').eq(6).text() === "X"){
            player1 += 1;
          
            
        } else { 
            player2 += 1;
            
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);

        setTimeout( function(){
            alert($('#6').text() + " is the winner! ");
            set();

        }, 500)
       
    }

    else if ( $('#0').text() === $('#3').text() && $('#3').text() === $('#6').text() &&  $('#6').text() != "") // first column is identical , Not equal to ""(empty)null
    {

        if ($('.grid-item').eq(0).text() === "X"){
            player1 += 1;
          
            
        } else { 
            player2 += 1;
            
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);
        setTimeout(function(){
            alert($('#0').text() + " is the winner! ");
        set();

        } ,600)
        
    }


    else if ( $('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() &&  $('#7').text() != "") //2nd column is identical , Not equal to ""(empty)null
    {

        if ($('.grid-item').eq(1).text() === "X"){ // to add the score if the player X is win
            player1 += 1;
          
            
        } else { 
            player2 += 1; // to increment the score value of player O 
            
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);
        setTimeout ( function(){
            alert($('#1').text() + " is the winner! ");
            set();

        } ,500)
    
    }

    else if ( $('#2').text () === $('#5').text() && $('#5').text() === $('#8').text()  && $('#8').text()  ) // 3rd column is identical

      { 
        $('.grid-item').off() // to stop switch between the input value. timer to be excuted
        if ($('.grid-item').eq(2).text() === "X"){
            player1 += 1;
          
            
        } else { 
            player2 += 1;
       
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);
    
       setTimeout ( function(){
        alert( $('#2').text() + " is the winner! ");
        set();
       },600)
    }

    else if ( $('.grid-item').eq(0).text() === $('.grid-item').eq(4).text() && $('.grid-item').eq(4).text() === $('.grid-item').eq(8).text() && $('.grid-item').eq(8).text()!="") // check the diagonal is win!
    { 
        $('.grid-item').off()
        if ($('.grid-item').eq(0).text() === "X"){
            player1 += 1;
          
            
        } else { 
            player2 += 1;
            
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);

       setTimeout( function(){
        alert( $('#0').text() + " is the winner!!" );
        set();
       },600)
    }
    else if ( $('.grid-item').eq(2).text() === $('.grid-item').eq(4).text() && $('.grid-item').eq(4).text() === $('.grid-item').eq(6).text() && $('.grid-item').eq(6).text()!="") // check the diagonal is win!
    {
        $('.grid-item').off()
        if ($('.grid-item').eq(2).text() === "X"){
            player1 += 1;
          
            
        } else { 
            player2 += 1;
            
        }
        //update the score of players
        $('#X').text(player1);
        $('#O').text(player2);

        setTimeout( function(){
            alert ( $('#2').text() + " is the Winner!!!");
            set();
            
        }, 600)
      
    }

    else if (counter === 9 ) // if player x and player O does not win when they reach  all the 9 possibilities.
     { 
        alert( 'Game is Over!');
        // $('.win').html("<h3> Game is Over .. You Lost</h3>")
        // setTimeout(function(){
        //  $('.win').html('') 
        // },500)
        set();
}

      
} 


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
}