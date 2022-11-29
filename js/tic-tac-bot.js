//selecting all required elements

const selectBox = document.querySelector(".select-box"),
//selectXBtn = selectBox.querySelector(".playerX"),
//selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players"),
resultBox = document.querySelector(".result-box"),
wonText = document.querySelector(".won-text"),
replayBtn = document.querySelector(".btn");
let runBot = true;

window.onload = ()=>{ //once window loaded
    let randomNumber = Math.floor(Math.random() * 10);
    
    for(let i = 0; i < allBox.length; i++){ //add onclick attribute in all available section's spans
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    players.setAttribute("class", "players active player"); //adding three class names in player element
   

    if(randomNumber > 2){
        bot(runBot);
    }

   

}

let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon
let playerSign = "Bot"; // suppose player will be x



function clickedBox(element){
    if(players.classList.contains("player")){ //if players element has containts .player
       
        element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked element
        players.classList.remove("active");
        playerSign = "O"; // if player will be o then we'll change the sign
        element.setAttribute("id", playerSign); // adding player's id for both x & o
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }
    selectWinner(); // calling the winner function
    playBoard.style.pointerEvents = "none"; //once user select then user can't select any other box until bot select
    element.style.pointerEvents = "none"; //once user select any box then that box can't be selected again

    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); //generating random time delay so bot will delay randomly to select box
    setTimeout(()=>{
        bot(runBot); // calling box function
    }, randomDelayTime); //passing random delay time
    
    
}

// bot click funtion

function bot(runBot){
    let playerId = playerSign;

   if(runBot){ //if runbot is true then run the following codes
     //first change the playerSign...so if user has X value in id then bot will have o
     playerSign = "O";
    let botId = "Bot";
    let randomBox;
    // declering nesseary arrays 
     let array = [0, 2, 6, 8];
     let array2 = [];
     let array3 = [];
     let one = allBox[0].getAttribute("id") == playerId;
     let two = allBox[1].getAttribute("id") == playerId;
     let three = allBox[2].getAttribute("id") == playerId;
     let four = allBox[3].getAttribute("id") == playerId;
     let five = allBox[4].getAttribute("id") == playerId;
     let six = allBox[5].getAttribute("id") == playerId;
     let seven = allBox[6].getAttribute("id") == playerId;
     let eight = allBox[7].getAttribute("id") == playerId;
     let nine = allBox[8].getAttribute("id") == playerId;

     // array for bot
     let botTone = allBox[0].getAttribute("id") == botId;
     let botTtwo = allBox[1].getAttribute("id") == botId;
     let botTthree = allBox[2].getAttribute("id") == botId;
     let botTfour = allBox[3].getAttribute("id") == botId;
     let botTfive = allBox[4].getAttribute("id") == botId;
     let botTsix = allBox[5].getAttribute("id") == botId;
     let botTseven = allBox[6].getAttribute("id") == botId;
     let botTeight = allBox[7].getAttribute("id") == botId;
     let botTnine = allBox[8].getAttribute("id") == botId;

 

     for(let i = 0; i < allBox.length; i++){
        
        if(allBox[i].childElementCount == 0){ //if span has no child element
            array3.push(i); //inserting unclicked or unselected boxes inside array means that span has no children
            // console.log(i + " " + "has no children");
        }
    }

     for(let i of array){
        
        if(allBox[i].childElementCount == 0){ //if span has no child element
            array2.push(i); //inserting unclicked or unselected boxes inside array means that span has no children
            // console.log(i + " " + "has no children");
        }
    }
// making condition for bot selection
    // case [1,2,3]
    if((botTone && botTtwo) && allBox[2].childElementCount == 0){
      randomBox = 2;
      }
      else if((botTtwo && botTthree) && allBox[0].childElementCount == 0){
         randomBox = 0;
      }
      else if((botTone && botTthree) && allBox[1].childElementCount == 0){
         randomBox = 1;
      }
      // case [2,5,8]
      else if((botTtwo && botTfive) && allBox[7].childElementCount == 0){
         randomBox = 7;
      }
      else if((botTfive && botTeight) && allBox[1].childElementCount == 0){
         randomBox = 1;
      }
      else if((botTtwo && botTeight) && allBox[4].childElementCount == 0){
         randomBox = 4;
      }// case [3,6,9]
      else if((botTthree && botTsix) && allBox[8].childElementCount == 0){
         randomBox = 8;
      }
      else if((botTsix && botTnine) && allBox[2].childElementCount == 0){
         randomBox = 2;
      }
      else if((botTthree && botTnine) && allBox[5].childElementCount == 0){
         randomBox = 5;
      }
         
     // case [4,5,6]
     else if((botTfour && botTfive) && allBox[5].childElementCount == 0){
        randomBox = 5;
     }
     else if((botTfive && botTsix) && allBox[3].childElementCount == 0){
        randomBox = 3;
     }
     else if((botTfour && botTsix) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }// case [7,8,9]
     else if((botTseven && botTeight) && allBox[8].childElementCount == 0){
        randomBox = 8;
     }
     else if((botTeight && botTnine) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((botTseven && botTnine) && allBox[7].childElementCount == 0){
        randomBox = 7;
     }// case [1,4,7]
     else if((botTone && botTfour) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((botTfour && botTseven) && allBox[0].childElementCount == 0){
        randomBox = 0;
     }
     else if((botTone && botTseven) && allBox[3].childElementCount == 0){
        randomBox = 3;
     }
     
     // case [1,5,9]
     else if((botTone && botTfive) && allBox[8].childElementCount == 0){
        randomBox = 8;
     }
     else if((botTfive && botTnine) && allBox[0].childElementCount == 0){
        randomBox = 0;
     }
     else if((botTone && botTnine) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }// case [3,5,7]
     else if((botTthree && botTfive) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((botTfive && botTseven) && allBox[2].childElementCount == 0){
        randomBox = 2;
     }
     else if((botTthree && botTseven) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }
     
     else{
      // checking for real player
     // case [1,2,3]
     if((one && two) && allBox[2].childElementCount == 0){
      randomBox = 2;
      }
      else if((two && three) && allBox[0].childElementCount == 0){
         randomBox = 0;
      }
      else if((one && three) && allBox[1].childElementCount == 0){
         randomBox = 1;
      }
      // case [2,5,8]
      else if((two && five) && allBox[7].childElementCount == 0){
         randomBox = 7;
      }
      else if((five && eight) && allBox[1].childElementCount == 0){
         randomBox = 1;
      }
      else if((two && eight) && allBox[4].childElementCount == 0){
         randomBox = 4;
      }// case [3,6,9]
      else if((three && six) && allBox[8].childElementCount == 0){
         randomBox = 8;
      }
      else if((six && nine) && allBox[2].childElementCount == 0){
         randomBox = 2;
      }
      else if((three && nine) && allBox[5].childElementCount == 0){
         randomBox = 5;
      }
         
     // case [4,5,6]
     else if((four && five) && allBox[5].childElementCount == 0){
        randomBox = 5;
     }
     else if((five && six) && allBox[3].childElementCount == 0){
        randomBox = 3;
     }
     else if((four && six) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }// case [7,8,9]
     else if((seven && eight) && allBox[8].childElementCount == 0){
        randomBox = 8;
     }
     else if((eight && nine) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((seven && nine) && allBox[7].childElementCount == 0){
        randomBox = 7;
     }// case [1,4,7]
     else if((one && four) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((four && seven) && allBox[0].childElementCount == 0){
        randomBox = 0;
     }
     else if((one && seven) && allBox[3].childElementCount == 0){
        randomBox = 3;
     }
     
     // case [1,5,9]
     else if((one && five) && allBox[8].childElementCount == 0){
        randomBox = 8;
     }
     else if((five && nine) && allBox[0].childElementCount == 0){
        randomBox = 0;
     }
     else if((one && nine) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }// case [3,5,7]
     else if((three && five) && allBox[6].childElementCount == 0){
        randomBox = 6;
     }
     else if((five && seven) && allBox[2].childElementCount == 0){
        randomBox = 2;
     }
     else if((three && seven) && allBox[4].childElementCount == 0){
        randomBox = 4;
     }
     else{
      console.log("else");
      array2.length == 0? randomBox = array3[Math.floor(Math.random() * array3.length)] : randomBox = array2[Math.floor(Math.random() * array2.length)] //getting random index from array so bot will select random unselected box
     }
        
        
    }

     
     if(array.length > 0){
         if(players.classList.contains("player")){ //if players element has containts .player
             allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element
             players.classList.add("active");
             
             //if user is o then the box id value will be x
            playerSign = "Bot";
             allBox[randomBox].setAttribute("id", playerSign);
         }else{
             allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked element
             players.classList.remove("active");
            
             allBox[randomBox].setAttribute("id", playerSign);
         }
         selectWinner(); // calling the winner function
     }
 
     allBox[randomBox].style.pointerEvents = "none"; //once bot select any box then user can't select or click on that box
     playBoard.style.pointerEvents = "auto";
     playerSign = "Bot"; // passing the x value
     
   }
}


//let work on select the winner

function getId(classname){
    return document.querySelector(".box" + classname).id; //returning id name
}


function checkId(val1, val2, val3, sign){
   
    if(getId(val1) == sign && getId(val2) == sign && getId(val3) == sign){
        return true;
    }
}


function selectWinner(){ //if one combination of them mathched then select the winner;
    
    if(checkId(1,2,3, playerSign) || checkId(4,5,6, playerSign) || checkId(7,8,9, playerSign) || checkId(1,4,7, playerSign) || checkId(2,5,8, playerSign) || checkId(3,6,9, playerSign) || checkId(1,5,9, playerSign) || checkId(3,5,7, playerSign)){

        //once match won by somone then stop the bot

        runBot = false;
        bot(runBot);

        setTimeout(()=>{ //we'll delay to show result box
           playBoard.classList.remove("show");
           resultBox.classList.add("show");
           
        }, 700) // 700 ms delay
        
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }else{
        //if match has drawn
        // first we'll check all id...if all span has id and no one won the game then we'll draw the game
        
        if(getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != ""){
            runBot = false;
            bot(runBot);

            setTimeout(()=>{ //we'll delay to show result box
                playBoard.classList.remove("show");
                resultBox.classList.add("show");
            
            }, 700) // 700 ms delay
            
            wonText.textContent = "Match has been drawn (:-";
        }
    }
}

replayBtn.onclick =  () =>{
    window.location.reload(); // reload the current page
}

