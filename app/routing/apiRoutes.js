var express = require("express");
var app = module.exports = express();
var friends = require("../data/friends.js");


app.get("/api/friends", function(req, res) {
	res.json(friends)
});


app.post("/api/friends", function(req, res) {

var newfriend = req.body;
console.log(newfriend);
console.log(newfriend.scores[0]);
var answers = [];
var mostCompatible = {name: "", score: 50, photo: ""};

for (var i = 0; i <= 9; i++) {
	answers.push(newfriend.scores[i]);
}

for (var i = 0; i < friends.length; i++) {
	var totalDiff = 0;
	var diff = 0;
console.log("these is the answers", answers);
console.log("these are the friends score",friends[i].scores);
	for(var j = 0; j < answers.length; j++){
		diff = Math.abs(answers[j] - friends[i].scores[j]);
		console.log("this is the diff, smallone tho", diff);
		totalDiff += diff;
	}

		console.log("this is the total dif ", totalDiff);
		if (totalDiff < mostCompatible.score) {
			mostCompatible.name = friends[i].name;
			mostCompatible.score = totalDiff;
			mostCompatible.photo = friends[i].photo;
		}
}

console.log(mostCompatible);
friends.push(newfriend);
res.send(mostCompatible);

});