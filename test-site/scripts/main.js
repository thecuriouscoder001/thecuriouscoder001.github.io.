//This code changes the image onclick.

const myImage = document.querySelector("img");
myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/firefox-1.jpg") {
		myImage.setAttribute("src", "images/firefox-2.jpg");
	}
	else{
		myImage.setAttribute("src", "images/firefox-1.jpg");
	}
};

//This prompts user to enter data and then stores and display's it later.

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName){
		setUserName();
	}else{
		localStorage.setItem("name", myName);
		myHeading.textContent = `Firefox is so cool, ${myName}`;

		}
	}
	// body...
if (!localStorage.getItem("name")) {
	setUserName();
}
else{
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Firefox is so cool, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};