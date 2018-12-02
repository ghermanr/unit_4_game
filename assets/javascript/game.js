//set variables for game
var winCount = 0;
var lossCount = 0;
var userScore = 0;

//get random crystal numbers
var orangeNumber = Math.floor(Math.random() * 11 + 1);
var greenNumber = Math.floor(Math.random() * 11 + 1);
var blueNumber = Math.floor(Math.random() * 11 + 1);
var redNumber = Math.floor(Math.random() * 11 + 1); 

//get random computer number
var randomNumber = Math.floor(Math.random() * 101 + 19);


// generate random number
$('#randomNumber').text(randomNumber);

//on user click on the orange marble, add random marble number to the user's score and update html; continue
$('#orange').on('click', function(){
	userScore += orangeNumber;
	$('#score').html(userScore);
	gamePlay();
});

//on user click on the green marble, add random marble number to the user's score and update html; continue
$('#green').on('click', function(){
	userScore += greenNumber;
	$('#score').text(userScore);
	gamePlay();
});

//on user click on the blue marble, add random marble number to the user's score and update html; continue
$('#blue').on('click', function(){
	userScore += blueNumber;
	$('#score').text(userScore);
	gamePlay();
});

//on user click on the red marble, add random marble number to the user's score and update html; continue
$('#red').on('click', function(){
	userScore += redNumber;
	$('#score').text(userScore);
	gamePlay();
});

//working game function

function gamePlay(){

	//if total user score is equal to the random computer number	
		if(userScore === randomNumber){
			// increase wins and update html file
			winCount++;
			$('#wins').text(winCount);
			randomNumber = Math.floor(Math.random() * 101 + 19);
			$('#randomNumber').text(randomNumber);
			userScore = 0;
			$('#score').text(userScore);
			reset();
			
	//if total user score is greater than the random computer number
		} else if(userScore > randomNumber){
			lossCount++;
			$('#losses').html(lossCount);
			randomNumber = Math.floor(Math.random() * 101 + 19);
			$('#randomNumber').text(randomNumber);
			userScore = 0;
			$('#score').text(userScore);
			reset();
		}
	}
//reset crystal numbers for next round
function reset(){
	orangeNumber = Math.floor(Math.random() * 11 + 1);
	greenNumber = Math.floor(Math.random() * 11 + 1);
	blueNumber = Math.floor(Math.random() * 11 + 1);
	redNumber = Math.floor(Math.random() * 11 + 1);
}
