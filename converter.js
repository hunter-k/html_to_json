//parse HTML string into js object with states capitals
function converter (str) {
	var output = [];
	//convert string to array
	var strArr = str.split("");
	// temporary object variable
	var newObj = {};
	//loop through array
	for (var i = 0; i < strArr.length; i++) {
		//test for the word 'capital'
		if (strArr[i]  === "c" && strArr[i + 1]  === "a" && strArr[i + 2]  === "p" && strArr[i + 3]  === "i" && strArr[i + 4]  === "t" && strArr[i + 5]  === "a" && strArr[i + 6]  === "l") {
			var newWord = "";
			//loop through where the city name is expected to be and store it as newWord
			for (var y = i + 9; ;y++) {
				if (strArr[y] === "<" || strArr[y] === "\n") {break;}
				newWord += strArr[y];
			}
			//trim white space
			newWord.trim();
			//add it to the temporary object
			newObj.capital = newWord;
		}
		//test for the word 'state'
		if (strArr[i]  === "s" && strArr[i + 1]  === "t" && strArr[i + 2]  === "a" && strArr[i + 3]  === "t" && strArr[i + 4]  === "e") {
			var newWord = "";
			//loop through where the state name is expected to be and store it as newWord
			for (var y = i + 7; ;y++) {
				if (strArr[y] === "<" || strArr[y] === "\n") {break;}
				newWord += strArr[y];
			}
			//trim white space
			newWord.trim();
			//corner case for bug where white space was not being fully trimmed
			if(newWord.charAt(newWord.length - 1) === " ") {
				newWord = newWord.substring(0, newWord.length - 2);
			}
			//store in temporary object
			newObj.state = newWord;
			//push to output array
			output.push(newObj);
			//reset temporary object
			newObj = {};
		}
	}
	//create output object with the output array as capitals
	outputObj = {capitals: output};
	//calculate the total number of capitals
	outputObj.summary = {numberOfCapitals: output.length};
	return outputObj;
}

//export for server.js
module.exports.converterFunc = converter;