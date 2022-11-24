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


window.onload = ()=>{ //once window loaded
    
    for(let i = 0; i < allBox.length; i++){ //add onclick attribute in all available section's spans
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    players.setAttribute("class", "players active player"); //adding three class names in player element
   


   //  selectXBtn.onclick = () =>{

   //      selectBox.classList.add("hide"); //hide the select box on playerX button clicked
   //      playBoard.classList.add("show"); //show the playboard section on playerX button clicked
   //  }
   //  selectOBtn.onclick = () =>{
   //      selectBox.classList.add("hide"); //hide the select box on playerO button clicked
   //      playBoard.classList.add("show"); //show the playboard section on playerO button clicked
   //      //players.setAttribute("class", "players active player"); //adding three class names in player element
   //  }

}

let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon
let playerSign = "X"; // suppose player will be x



function clickedBox(element){
    if(players.classList.contains("player")){ //if players element has containts .player
       
        element.innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked element
        players.classList.remove("active");
        players.classList.remove("player");
        players.classList.remove("active");
        playerSign = "O"; // if player will be o then we'll change the sign
        element.setAttribute("id", playerSign); // adding player's id for both x & o
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element
        players.classList.add("player");
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }
    
    selectWinner(); // calling the winner function
    
   playerSign = "X";
   
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

        
       

        setTimeout(()=>{ //we'll delay to show result box
           playBoard.classList.remove("show");
           resultBox.classList.add("show");
           
        }, 700) // 700 ms delay
        
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }else{
        //if match has drawn
        // first we'll check all id...if all span has id and no one won the game then we'll draw the game
        
        if(getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != ""){
            

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

