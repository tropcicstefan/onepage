var square = document.querySelectorAll(".square");
var colors = generateRandomColors(6);
var pickedColor = chooseColor();

var picked = document.querySelector("#picked");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.querySelector("#newGame");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var hardBool = true;
picked.textContent = pickedColor;

for(var i = 0; i < square.length; i++){
	square[i].style.backgroundColor = colors[i];

	square[i].addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor) {
			message.textContent ="winner";
			newGame.textContent = "Play Again";
			changeColors(pickedColor);
		}
		else {
			message.textContent ="try again";
			this.style.backgroundColor = "#232323";
		}
	});

}

function easy(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = chooseColor();
	h1.style.backgroundColor = "steelblue";
	picked.textContent = pickedColor;
	message.textContent = "";
	newGame.textContent = "New Colors";
	for(var i = 0; i < 3; i++){
		square[i].style.backgroundColor = colors[i];}
	for (var i = 3; i < 6; i++) {
		square[i].style.display = "none";}
	hardBool = false;
}

function hard(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = chooseColor();
	h1.style.backgroundColor = "steelblue";
	picked.textContent = pickedColor;
	message.textContent = "";
	newGame.textContent = "New Colors";
	for (var i = 3; i < 6; i++) {
		square[i].style.display = "block";}
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = colors[i];}
	hardBool = true;
}

easyButton.addEventListener("click", easy)

hardButton.addEventListener("click", hard)

newGame.addEventListener("click", function(){
	if (hardBool) hard();
	else easy();
})

function changeColors(color){
	var help = 0;
	if (hardBool) help = 6;
	else help = 3;
	for (var j = help - 1; j >= 0; j--) {
				square[j].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function chooseColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors (num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push("rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")");
	}
	return arr;
}