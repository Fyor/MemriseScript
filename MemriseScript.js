//Begin van Script
function aFunction() {
var x = $(".qquestion").text().trim();

var arrayQuestion = ["achternaam", "nationaliteit", "school", "e-mail", "jaar", "huisdier", "telefoonnummer", "talen", "eerdere", "paspoort", "werken", "huisdier", "nederlands", "datum", "hobby", "woonplaats", "duane", "leraar/docent", "geboortedag", "adres", "Nederland", "Spanje", "Tien", "school", "Engels", "familie", "koffer / baggage", "voetbal", "heeft bezocht", "heb gegeten", "makelaar", "de rekening", "als voorgerecht", "het dagmenu", "als hoofdgerecht", "de patat", "vegetarisch", "de kip", "de vis", "als nagerecht", "de korting", "het vlees", "drankjes", "de frisdrank", "soep van de dag", "de kaart, het menu", "pudding", "brood met boter", "het bestek", "thee", "gemengde salade", "sinaasappelsap", "de lepel", "het mes", "de vork", "de spijkerbroek", "de jurk", "sportief", "de sneakers", "duur", "de bril", "goedkoop", "blauw", "rood", "groen", "roze", "oranje", "lila", "zwart", "de rok", "het shirt", "het overhemd", "de kleding", "bruin", "wit", "aangekleed", "de laarzen", "kosten", "euro", "de maat", "groot", "klein", "het kledingstuk", "het merk", "violet", "grijs", "geel", "de stijl", "de prijs", "de paskamer", "de korting", "de zonnebril", "de horloge", "de oorbellen", "de accessoires", "de kettingen", "de trui", "de rugzak", "saai", "groentes", "druif", "peren", "sinaasappel", "appel", "banaan", "de markt", "de fruitstukken", "prijs", "de kraam", "hoeveel", "contant", "werken", "de aardbei", "de wortel", "wisselgeld", "kijken", "de bankpas", "betalen", "in de buurt", "de aanbieding", "de winkel", "aan de rechterkant", "aan de linkerkant", "vers", "het eten", "500 gram", "een tas", "een pakket", "sla", "verrot", "de tomaat", "plein", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag", "s ́avonds/s ́middags", "s ́ochtends", "de ochtend", "de middag", "avond/nacht", "om 1 uur", "om 2 uur", "om half 3", "het weekend", "de bus", "bioscoop", "het station", "reserveren", "tegenover", "naast", "aan de linkerkant", "aan de rechterkant", "op straat", "afspreken", "tot morgen", "tot dan", "het strand", "wachtplaats", "voor", "bij het kruispunt", "de bibliotheek", "het feest", "dun", "dik", "lang", "kort", "alergie", "het bonnetje", "gezond", "code voor internet", "de broer", "de zus", "de moeder", "de vader", "de vakantie", "blond", "(met) wie", "vakantie", "jaar", "meegaan", "mensen", "bioscoop", "eten", "shoppen/winkelen", "komen", "morgen", "schoenmaat", "accessoires", "het shirt", "apretada", "de broek", "achterin", "strak", "allergisch", "melk", "vlees", "vis", "de kok", "natuurlijk", "champignonsoep", "de specials", "lekker", "aardbeien", "het spijt me / sorry", "het tasje", "de kraam", "de peper", "de paprika", "'s avonds", "'s middags"];

var arrayAnswer = ["apellido", "nacionalidad", "colegio", "correo electrónico", "año(s)", "mascota", "número de teléfono", "idiomas", "anteriores", "pasaporte", "trabajar", "mascota", "holandés/-esa", "fecha", "afición", "habitación", "aduana", "profesora", "nacimiento", "dirección", "Holanda", "España", "diez", "instituto", "inglés", "familia", "maleta", "fútbol", "visitado", "comida", "inmobiliaro", "la cuenta", "de primero", "el menú del día", "de segundo", "las patatas fritas", "vegetariano/-a", "el pollo", "el pescado", "de postre", "el descuento", "la carne", "bebidas", "el refresco", "la sopa del día", "la carta", "flan", "pan con mantequilla", "los cubiertos", "té", "ensalada mixta", "zumo de naranja", "la cuhara", "el cuchillo", "el tenedor", "los vaqueros", "el vestido", "deportivo", "las zapatillas", "caro/ -a", "las gafas", "barato/ -a", "azul", "rojo", "verde", "rosa", "naranja", "lila", "negro", "la falda", "la camiseta", "la camisa", "la ropa", "marrón", "blanco", "vestida", "las botas", "cuesta / cuestan", "euros", "la talla", "grande", "pequeño", "la prenda", "la marca", "violeta", "gris", "amarillo", "el estilo", "el precio", "el probador", "el descuento", "las gafas de sol", "el reloj", "los pendientes", "los complementos", "los collares", "el jersey", "la mochila", "aburrido", "verduras", "uva", "peras", "naranja", "manzana", "banana", "el mercado", "las frutas", "precio", "el establo", "¿cuánto/a?", "en efectivo", "trabajar", "la fresa", "la zanahoria", "cambio", "mirar", "la tarjeta de débito", "pagar", "cerca de", "la oferta", "la tienda", "a la derecha", "a la izquierda", "fresco", "la comida", "medio kilo", "una bolsa", "un paquete", "lechuga", "podrido/-a", "el tomate", "plaza", "lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo", "por la tarde", "por la mañana", "la mañana", "la tarde", "la noche", "a la una", "a los dos", "a los dos y mediá", "el fin de semana", "el autobus", "cine", "la estación", "reservar", "enfrente de", "al lado", "a la izquierda", "a la derecha", "en la calle", "quedar", "hasta mañana", "hasta entonces", "la playa", "sala de espera", "enfrente", "en el cruce", "la biblioteca", "el partido", "delgado", "gordo", "alto", "corto", "alergia", "el recibo", "sano", "el código para internet", "el hermano", "la hermana", "la madre", "el padre", "los vacaciones", "rubio/-a", "(con) quién", "vacaciones", "año", "acompañar", "gente", "cine", "cenar", "ir de compras", "venir", "mañana", "número de zapato", "complementos", "la camiseta", "strak", "los pantalones", "al fondo", "estrecho/-a", "alérgico", "leche", "carne", "pescado", "el cocinero", "por supuesto", "sopa de hongos", "los especiales", "rico/-a", "fresas", "lo siento", "la bolsa", "el puesto", "la pimienta", "el pimiento", "de la noche", "de la tarde"];

function getArrayNumber(word) {
	var c = arrayQuestion.indexOf(word);
	return c;
}

function memScript() {
	var number = getArrayNumber(x);
	var q = arrayAnswer[number];
	return q;
}
var question = memScript();

var list_length = $(".choices").children().size();
for (var i = 0; i < list_length; i++) {
	if (question == $('li[data-choice-id=' + i + '] .val').text()) {
		$('li[data-choice-id=' + i + '] .val').click();
		console.log("Multiple Choises");
	}
}

if (list_length == 0 && $(".roundy.shiny-box").length) {
	$(".roundy").val(question);
	//console.log("Het is invullen")
	$(".next-button").click();
}

//Click the right answer
if (list_length == 0 && $(".word-box").length == 2) {
	for (var i=0; i < 4; i++) {
		if ($('div[data-index=' + i + ']') != undefined) {
	 		$('div[data-index=' + i + ']').click();
	 		console.log("Clicked Nr:" + i);
			//$(".next-button").click();
		}
	}
}
console.log("Succesful");
$(".next-button").click();
}
var interval = setInterval(aFunction, 500);
//Eind van Script Multiple Choice
