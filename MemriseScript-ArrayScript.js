// This is for making an array for my additional Script.
// You would have to run this on the page with the list of the words on memrise.com

// The is for collum a
var someArray = $('.things .thing .col_a.text .text').toArray();
var memriseArrayA = [];
for (var i = 0; i < $(".col_a").length; i++) {
	memriseArrayA.push(someArray[i].innerText);
}
// This is for collum b
var someArray = $('.things .thing .col_b.text .text').toArray();
var memriseArrayB = [];
for (var i = 0; i < $(".col_b").length; i++) {
	memriseArrayB.push(someArray[i].innerText);
}
