var botScore=0,
	playerScore=0;
var playersChoice= "";
var botsChoice= "";
/*keep event listener's together*/
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsRock(){
	 botsWeapon=getRandomWeapon();
	 botsChoice="Bot played "+ botsWeapon;
	 playersWeapon= "rock";
	 playersChoice="player played " + playersWeapon;
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsScissors(){
	botsWeapon=getRandomWeapon();
	botsChoice="Bot played "+ botsWeapon;
	playersWeapon="scissors";
	playersChoice= "Player played " + playersWeapon;
	checkWhoWon(botsWeapon,"scissors")
}

function playerThrowsPaper(){
	botsWeapon=getRandomWeapon();
	botsChoice="Bot played "+ botsWeapon;
	playersWeapon="paper";
	playersChoice= "Player played "+ playersWeapon;
	checkWhoWon(botsWeapon,"paper")
}

function playerThrowsLizard(){
	botsWeapon=getRandomWeapon();
	botsChoice="Bot played "+ botsWeapon;
	playersWeapon="lizard";
	playersChoice= "Player played "+ playersWeapon;
	checkWhoWon(botsWeapon,"lizard")
}

function playerThrowsSpock(){
	botsWeapon=getRandomWeapon();
	botsChoice="Bot played "+ botsWeapon;
	playersWeapon="spock";
	playersChoice= "Player played "+ playersWeapon;
	checkWhoWon(botsWeapon,"spock")
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="spock";
	if(randomNumber<.20){

		botsWeapon="rock";
	}
	else if(randomNumber<.40){
		botsWeapon="scissors";
	}
	else if(randomNumber<.60){
		botsWeapon="paper";
	}
	else if(randomNumber<.80){
		botsWeapon="lizard";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
		displaycomputerWeapon(botsChoice);

	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")||
		(botsWeapon=="lizard" && playersWeapon=="paper")||
		(botsWeapon=="scissors" && playersWeapon=="lizard")||
		(botsWeapon=="rock" && playersWeapon=="lizard")||
		(botsWeapon=="spock" && playersWeapon=="scissors")||
		(botsWeapon=="paper" && playersWeapon=="spock")||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="lizard" && playersWeapon=="spock")
	){
		increaseBotScore();
}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
	displaycomputerWeapon(botsChoice);
	displaymyWeapon(playersChoice);
}
function increasePlayerScore(){
 playerScore+=1;
 document.getElementById("humanScore").innerHTML=playerScore;
 displayCompleteMessage("Good job, you won!");
 displaycomputerWeapon(botsChoice);
 displaymyWeapon(playersChoice);
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displaymyWeapon(msg){
	document.getElementById("myWeapon").innerHTML=msg;
}

function displaycomputerWeapon(msg){
	document.getElementById("computerWeapon").innerHTML=msg;
}
