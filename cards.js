// If they click delete, then the whole card is removed.


let inputBox = document.getElementById('userInput');
let createButton = document.getElementById('create-button');
let outputDiv = document.getElementById('output');

createButton.addEventListener("click", function() {
	processInput();
})

function processInput() {
	getUserInputText();
	printUserTextToDOM();
	clearInputBox();
}

inputBox.addEventListener('keyup', function() {
	if (event.key === 'Enter') {
		processInput();
	}
})


function getUserInputText () {
	userInputText = inputBox.value;
	console.log("userInputText", userInputText);
}

function printUserTextToDOM() {
  var newCard = document.createElement('div')
  newCard.setAttribute("class", "card")
  newCard.innerHTML = `
	  <h3>${userInputText}</h3>
	  <button class="delete">delete card</button>
	  `;
  outputDiv.appendChild(newCard);
  addDeleteFunctionality(newCard);
}

function clearInputBox () {
	inputBox.value='';
}

function addDeleteFunctionality(card) {
	deleteButton = card.querySelector('button');
	console.log("delete button?", deleteButton);
		deleteButton.addEventListener("click", function() {
			deleteContainingCard(event);
	})
}

function deleteContainingCard(event) {
	let cardForDeletion = event.target.parentNode;
	console.log("card for deletion>", cardForDeletion);
	cardForDeletion.parentNode.removeChild(cardForDeletion);
}
// let myArray = ["Hello", "Howdy", "What up", "Hey"];
// let phraseDOM = document.getElementById('greeting');

// myArray.forEach( function(greeting) {
// 	let phraseString = `<div id="phrase-${index + 1}"><h3>${greeting}, world!</h3></div>`;
// 	let phraseDiv = document.createElement("div");
// 	phraseDiv = setAttribute("id", `phrase-${index + 1} --wrapper`);
// 	phraseDiv.innerHTML = phraseString;
// 	phraseDOM.appendChild(phraseDiv);
// 	document.getElementById(`phrase-${index + 1}`).addEventListener("click", function() {
// 		event.target.classList.add("blue");
// 	})
// });

//the problem occurs when you want to attach an event listener to each thing in the loop
//you can use an id with the "phrase-${index+1}
//but the event listener only gets added to the last one


//gotta use the wordier and less fragile method
//create an element on the fly, then attach that element with append child