function converter (str) {
	var output = [];
	var strArr = str.split("");
	var newObj = {};
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i]  === "c" && strArr[i + 1]  === "a" && strArr[i + 2]  === "p" && strArr[i + 3]  === "i" && strArr[i + 4]  === "t" && strArr[i + 5]  === "a" && strArr[i + 6]  === "l") {
			var newWord = "";
			for (var y = i + 9; ;y++) {
				if (strArr[y] === "<" || strArr[y] === "\n") {break;}
				newWord += strArr[y];
			}
			newWord.trim();
			newObj.capital = newWord;
		}
		if (strArr[i]  === "s" && strArr[i + 1]  === "t" && strArr[i + 2]  === "a" && strArr[i + 3]  === "t" && strArr[i + 4]  === "e") {
			var newWord = "";
			for (var y = i + 7; ;y++) {
				console.log(strArr[y]);
				if (strArr[y] === "<" || strArr[y] === "\n") {break;}
				newWord += strArr[y];
			}
			newWord.trim();
			newObj.state = newWord;
			output.push(newObj);
			newObj = {};
		}
	}
	outputObj = {capitals: output};
	outputObj.summary = {numberOfCapitals: output.length};
	return outputObj;
}


module.exports.converterFunc = converter;