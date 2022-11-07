//selecting all required elements

// const selectBox = document.querySelector(".select-box"),
// selectXBtn = selectBox.querySelector(".playerX"),
// selectOBtn = selectBox.querySelector(".playerO"),
const playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players"),
resultBox = document.querySelector(".result-box"),
wonText = document.querySelector(".won-text"),
replayBtn = document.querySelector(".btn");


window.onload = ()=>{ //once window loaded
    
    playBoard.classList.add("show");
    for(let i = 0; i < allBox.length; i++){ //add onclick attribute in all available section's spans
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
    
    players.setAttribute("class", "players active player"); //adding three class names in player element
    // selectXBtn.onclick = () =>{
    //     selectBox.classList.add("hide"); //hide the select box on playerX button clicked
    //     playBoard.classList.add("show"); //show the playboard section on playerX button clicked
    // }
    // selectOBtn.onclick = () =>{
    //     selectBox.classList.add("hide"); //hide the select box on playerO button clicked
    //     playBoard.classList.add("show"); //show the playboard section on playerO button clicked
    //     players.setAttribute("class", "players active player"); //adding three class names in player element
    // }

}

let playerXIcon = "fas fa-times"; //class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; //class name of fontawesome circle icon
let playerSign = "X"; // suppose player will be x
let runBot = true;


function clickedBox(element){
    if(players.classList.contains("active")){ //if players element has containts .player
       
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
    // playBoard.style.pointerEvents = "none"; //once user select then user can't select any other box until bot select
    element.style.pointerEvents = "none"; //once user select any box then that box can't be selected again

    // let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); //generating random time delay so bot will delay randomly to select box
    // setTimeout(()=>{
    //     bot(runBot); // calling box function
    // }, randomDelayTime); //passing random delay time
    
    playerSign = "X"; // passing the x value 
}

// bot click funtion

/*function bot(runBot){
   if(runBot){ //if runbot is true then run the following codes
     //first change the playerSign...so if user has X value in id then bot will have o
     playerSign = "O";

     let array = []; //creating empty array...we'll store unselected box index in this array
 
     for(let i = 0; i < allBox.length; i++){
         if(allBox[i].childElementCount == 0){ //if span has no child element
             array.push(i); //inserting unclicked or unselected boxes inside array means that span has no children
             // console.log(i + " " + "has no children");
         }
     }
     
     let randomBox = array[Math.floor(Math.random() * array.length)] //getting random index from array so bot will select random unselected box
     if(array.length > 0){
         if(players.classList.contains("player")){ //if players element has containts .player
             allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`; //adding cross icon tag inside user clicked element
             players.classList.add("active");
             
             //if user is o then the box id value will be x
            playerSign = "X";
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
     playerSign = "X"; // passing the x value
   }
}*/


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
   console.log(playerSign)
    if(checkId(1,2,3, playerSign) || checkId(4,5,6, playerSign) || checkId(7,8,9, playerSign) || checkId(6,7,8, playerSign) || checkId(1,4,7, playerSign) || checkId(2,5,8, playerSign) || checkId(3,6,9, playerSign) || checkId(1,5,9, playerSign) || checkId(3,5,7, playerSign)){

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
