/* 
	Business Logic
*/
const JSON_DATA_URL = 'https://api.myjson.com/bins/1773un';

(function sayHello() {
	// console.log("Hello WebDam World !");
})()

function renderPage() {
	console.log("Initializing page render..");

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", setupPage);
	oReq.open("GET", JSON_DATA_URL);
	oReq.send();
}

function setupPage() {
	console.log("Received JSON DATA..");
	var cardData = JSON.parse(this.responseText);
	window.jsonData = cardData;

	cardData.forEach(function (cardInfo, index) {

		var templeteNode = document.querySelector('#card-template')
		var clone = templeteNode.content.firstElementChild;

		var tDiv = clone.cloneNode(true);

		tDiv.firstElementChild.setAttribute('src', ('./images/' + cardInfo.image_name));
		tDiv.firstElementChild.setAttribute('alt', toCamelCase(cardInfo.title));
		tDiv.querySelector('b').innerHTML = toCamelCase(cardInfo.title);
		tDiv.querySelector('p').innerHTML = cardInfo.description;

		var cardGrid = document.querySelector("#card-content-items");
		cardGrid.appendChild(tDiv);
	}, this);

}

function toCamelCase(str) {
	str = str.split(' ');
	var normalizedTitle = [];
	str.forEach((word) => {
		normalizedTitle.push(word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
	})
	return normalizedTitle.join(' ');
}

function arrangeByTitle() {
	var chartData = window.jsonData;
	console.log('Rearranging by name !')
	return true;
}




window.onload = function (e) {
	console.log("Welcome ! Here we go :)");
	renderPage();
}