$(document).ready(function(){
    // this is the foundation of jQuery typical js that use jquery has this structure
    // all the code that will be put here will be executed once the HTML has been loaded/ready
    //$('')// < -- jQuery selector it is equivalent to saying document.getElementById() and the likes
    $('#endbutton').css("display","none");// it uses css syntax
    $('#resetbutton').css("display", "none");
    // css function takes two arguments first is the name of the style, second is the value
}); //ok
var click = 1;
var start_bool = false;
var player1_win = false;
var player_one;
var player_two;
var player_one_score = 0;
var player_two_score = 0;
//console.log(document.getElementById(1));
//console.log(document.getElementsByClassName("even"));
//console.log(document.getElementsByClassName("even")[1]);
//console.log(document.getElementsByTagName("div"));
var winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],
                    [2,5,8],[3,6,9],[1,5,9],[3,5,7]];
//winConditions[0][0] === 1;
//winConditions[1][2] === 6; 
function start() {
    start_bool = true;
    alert("Welcome to Tic Tac Toe!");
    player_one = prompt("Enter the first player's name:");
    player_two = prompt("Enter the second player's name:");
    document.getElementById("player").innerHTML = player_one + "'s turn";
    document.getElementById("player1").innerHTML = player_one + "- " + player_one_score;
    document.getElementById("player2").innerHTML = player_two + "- " + player_two_score;
    $('#navbarbottom').fadeOut(500);
    $('#startbutton').fadeOut(300);
    $('#resetbutton').fadeIn(300);
    $('#endbutton').fadeIn(300);
} //biglang lumabas lol
function move(id) {
    if (start_bool) {
        var cell = document.getElementById(id);
    if (cell.innerHTML === "X" || cell.innerHTML === "O" )
    {
        alert("You cannot click this box.");
    }
    else 
    {
        if (click % 2 != 0) {
            cell.innerHTML = "X";
            document.getElementById("player").innerHTML = player_two + "'s turn";
        } else {
            cell.innerHTML = "O";
            document.getElementById("player").innerHTML = player_one + "'s turn";
        }
        click++;
        
        if (win() === true)
        {
            if (player1_win === true)
            {
                alert("Good job, " + player_one + "!");
                player_one_score += 10;
                document.getElementById("player1").innerHTML = player_one + "-" + player_one_score;
            } else {
                 alert("Good job, " + player_two + "!");
                 player_two_score += 10;
                 document.getElementById("player2").innerHTML = player_two + "-" + player_two_score;
            }
            document.getElementById("player").innerHTML = player_one + "'s turn";
            reset();
        }
        if (click > 9) {
            alert("Nice try.");
            reset();
        }
    }
}
function win(){
    for (var i = 0; i < winConditions.length; i++) {
        if (document.getElementById(winConditions[i][0]).innerHTML.includes("X") &&
            document.getElementById(winConditions[i][1]).innerHTML.includes("X") &&
            document.getElementById(winConditions[i][2]).innerHTML.includes("X")) {
            player1_win = true;
            return true;
        } else if (document.getElementById(winConditions[i][0]).innerHTML.includes("O") &&
                   document.getElementById(winConditions[i][1]).innerHTML.includes("O") &&
                   document.getElementById(winConditions[i][2]).innerHTML.includes("O")){
            player1_win = false;
            return true;
        }
    }
    return false;
    }
}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
    document.getElementById("player").innerHTML = player_one + "'s turn";
    click = 1;
}

function end() {
    var confirm_message = confirm("Are you sure?");
    if (confirm_message === true) {
        if (player_one_score > player_two_score)
        {
            alert("Congratulations, " + player_one + "!");
        } 
        else if (player_one_score === player_two_score) 
        {
            alert("It's a tie!");
        } else 
        {
            alert("Congratulations, " + player_two + "!");
        }
        reset();
        start_bool = false;
        document.getElementById("player").innerHTML = "";
        document.getElementById("player1").innerHTML = "";
        document.getElementById("player2").innerHTML = "";
        $('#navbarbottom').fadeIn(500);
        $('#startbutton').fadeIn(300);
        $('#resetbutton').fadeOut(300);
        $('#endbutton').fadeOut(300);
        player_one_score = 0;
        player_two_score = 0;
    }
}

document.getElementById("startbutton").addEventListener("click",start);
document.getElementById("resetbutton").addEventListener("click",reset);
document.getElementById("endbutton").addEventListener("click",end);