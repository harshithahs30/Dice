var randomNumber1 = Math.floor(Math.random() * 6)+1;
var diceImage = "dice"+randomNumber1+".png";
var dicepath = "images/"+diceImage;
var path =document.querySelectorAll("img")[0];
path.setAttribute("src",dicepath);


var randomNumber2 = Math.floor(Math.random() * 6)+1;
var diceImage2 = "images/dice"+randomNumber2+".png";
var path2 = document.querySelectorAll("img")[1];
path2.setAttribute("src",diceImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }