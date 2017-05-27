// This is for making an array for my additional Script.
// You would have to run this on the page with the list of the words on memrise.com

// The is for collum a
var someArray = $('.things .thing .col_a.text .text').toArray();
var memriseArray = [];
for (var i = 0; i < $(".col_a").size(); i++) {
	memriseArray.push(someArray[i].innerText);
}
// This is for collum b
var someArray = $('.things .thing .col_btext .text').toArray();
var memriseArray = [];
for (var i = 0; i < $(".col_b").size(); i++) {
	memriseArray.push(someArray[i].innerText);
}
