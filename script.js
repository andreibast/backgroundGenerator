var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //.color1 like in CSS
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradientBodyTag"); //you must select the body tag, because that is where you change the color

function bodyBackground(){
	//this is css. this syntax you have to memorize it
	body.style.background = "linear-gradient(to right, "  + color1.value + ", "  + color2.value + ")";

	css.textContent = body.style.background + ";"; //this is how we can see the visual custom text of each color

}


//"input" is to read what you custom color you choose. Its anm event listener function
color1.addEventListener("input", bodyBackground);
color2.addEventListener("input", bodyBackground);

//OPTIONAL- does the same thing as the above two lines:
	//Go on the input types in HTML, and add this to both: oninput ="bodyBackground()"
	//be careful when you use this method because the input tag can contain ONLY ONE oninput function!


