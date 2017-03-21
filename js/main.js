var baseUrl = "http://api.wordnik.com/v4/words.json/";
var apiKey = "8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";

var nouns;

function drag(e) {
	e.dataTransfer.setData("Text", this.id);
}

function drop(e) {
	var words;
	words=e.dataTransfer.getData("Text");
	this.appendChild(document.getElementById(words));
	e.preventDefault();
}

function cancelEvent(e){ 
	e.preventDefault();
}




function getNouns() {
	var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=50&maxDictionaryCount=100&minLength=0&maxLength=8&sortBy=alpha&sortOrder=asc&limit=70&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
	var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					nouns = JSON.parse (data);
					// console.log ("nouns:" + data);
					}) 
				.error (function (status) { 
					console.log ("getNouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
}

function theNouns(){
	// console.log(nouns);
	for(i=0; i<nouns.length;i++){

		//each word goes in it's own span, gets unique id, class name of word.
		var newElement=document.createElement('span');
		newElement.id=nouns[i].id; newElement.className="word";
		newElement.innerHTML=nouns[i].word;
		document.getElementById('nouns').appendChild(newElement);

		//drag and drop for nouns
		newElement.setAttribute("draggable","true");
		newElement.addEventListener("dragstart", drag);

		console.log(nouns[i].word);
	}
}



function getVerbs() {
	var url = "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=50&maxDictionaryCount=100&minLength=0&maxLength=8&sortBy=alpha&sortOrder=asc&limit=70&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
		var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					JSON.parse (data);
					// console.log ("verbs:" + data);
					}) 
				.error (function (status) { 
					console.log ("getVerbs: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}

function getAdverbs() {
var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adverb&minCorpusCount=10000&maxCorpusCount=1000000&minLength=0&maxLength=8&sortBy=alpha&sortOrder=asc&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
		var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					JSON.parse (data);
					// console.log ("adverbs:" + data);
					}) 
				.error (function (status) { 
					console.log ("getAdverbs: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}
function getPronouns() {
	var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=pronoun&minCorpusCount=10000&maxCorpusCount=1000000&minLength=0&sortBy=alpha&sortOrder=asc&limit=40&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
			var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					JSON.parse (data);
					// console.log ("pronouns:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
				}

function getPrepositions() {
			var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=preposition&minCorpusCount=200000&maxCorpusCount=1000000&minDictionaryCount=1&minLength=0&sortBy=alpha&sortOrder=asc&limit=30&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
				var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					JSON.parse (data);
					// console.log ("prepositions:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});

}

function getConjunctions() {
	var url="http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=conjunction&minCorpusCount=500000&minLength=0&sortBy=alpha&sortOrder=asc&limit=50&api_key=8c5e16a77ad41ee83c00a04a8760c80ce83ae19ce509db930";
					var jxhr = $.ajax ({ 
					url: url,
					dataType: "text" , 
					timeout: 30000 
					}) 
				.success (function (data, status) { 
					JSON.parse (data);
					// console.log ("conjunctions:" + data);
					}) 
				.error (function (status) { 
					console.log ("getPronouns: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
					});
}



//loop through array and create an html element for each item
// for(var i<0; i<)

