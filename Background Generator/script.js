var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = //this line set this bkg
	"linear-gradient(to right, " //set it as a gradient
	+ color1.value //gives the first value
	+ ", "
	+ color2.value //gives the second value
	+ ", " 
	+ color3.value //gives the third value
	+ ")";

	css.textContent = body.style.background + ";"; // display the bkg info
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

addEventListener("load", setGradient); //run the function on page load