var sqNO = 6;
var square = document.querySelectorAll(".square");
var head = document.getElementById("top");
var instr = document.getElementById("instr");
var playAgainn = document.getElementById("playAgainn");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var color = generateRandomColors(sqNO);
var mode = document.getElementsByClassName("mode");
var pickedColor = pickColor();
var displayColor = document.getElementById("displayColor");
	displayColor.textContent = pickedColor;
	displayColor.style.textTransform = "uppercase";

for (i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				Win();	
				head.style.backgroundColor= pickedColor;
				instr.textContent = "Correct";
				playAgainn.textContent = "play again!!";
			} else if(clickedColor !== pickedColor){
				this.style.backgroundColor = "#232323";
				instr.textContent = "Try Again";
			}
		})
}
function Win() {
		if (color.length === 3) {
			for (i=0; i < 3; i++){
				square[i].style.backgroundColor = pickedColor;
			}
		} else if (color.length === 6) {
			for (i=0; i < 6; i++){
				square[i].style.backgroundColor = pickedColor;
			}
		}
	}
function pickColor(){
	var random = Math.floor(Math.random()* color.length);
	return color[random];
}

function generateRandomColors(num){
	var arr = [];
	for (i = 0; i < num ; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(num){
	color = generateRandomColors(num);
	
	pickedColor = pickColor();
	instr.textContent = "";
	head.style.backgroundColor= "steelblue";
	displayColor.textContent = pickedColor;
	playAgainn.textContent = "New Colors";
	for (i=0; i < square.length; i++){
		square[i].style.display = "block";
		square[i].style.backgroundColor = color[i];
	}
	for (i= sqNO; i < square.length; i++){
		square[i].style.display = "none";

	}
}

playAgainn.addEventListener("click", function(){
	/*color = generateRandomColors(sqNO);
	pickedColor = pickColor();
	instr.textContent = "";
	head.style.backgroundColor= "rgb(20,100,180)";
	displayColor.textContent = pickedColor;
	playAgainn.textContent = "New Colors";
	for (i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
	}*/
	reset(sqNO);
	
})

for(i=0; i < mode.length ; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent == "HARD") {
			sqNO =6;
		} else if (this.textContent=="EASY") {
			sqNO = 3;
		}
		reset(sqNO);
		//how many squares

	})
}

/*
easy.addEventListener("click", function(){
	sqNO = 3;
	color = generateRandomColors(sqNO);
	pickedColor = pickColor();
	instr.textContent = "";
	head.style.backgroundColor= "rgb(20,100,180)";
	displayColor.textContent = pickedColor;
	for (i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
	}
	for (i=3; i < square.length; i++){
		square[i].style.backgroundColor = "#232323";
	}
	easy.classList.add("selected");
	hard.classList.remove("selected");
})

hard.addEventListener("click", function(){
	sqNO = 6;
	color = generateRandomColors(sqNO);
	pickedColor = pickColor();
	instr.textContent = "";
	head.style.backgroundColor= "rgb(20,100,180)";
	displayColor.textContent = pickedColor;
	for (i=0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
	}
	
	hard.classList.add("selected");
	easy.classList.remove("selected");
})
*/

