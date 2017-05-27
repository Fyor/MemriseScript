//Make Memrise Array
var someArray = $('.things .thing .col_a.text .text').toArray();
var memriseArray = [];
for (var i = 0; i < $(".col_a").size(); i++) {
	memriseArray.push(someArray[i].innerText);
}
