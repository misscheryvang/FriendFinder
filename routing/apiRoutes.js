// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on user's input
var friendData = require("../app/data/friends");

// ROUTING
module.exports = function (app) {

  // API GET Request handles a users "visiting" a page
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests handles a user submiting a form and thus submits data to the server.
  // The server saves the data to the answers array
  app.post("/api/friends", function (req, res) {
    
    friendData.push(req.body);

    var currentUser = friendData[friendData.length - 1];
    var matchedFriend = currentUser;

    for (var k = 0; k < friendData.length - 1; k++) {
      
      var diffScore = 0;
      var matchedNum = 50;

      for (var i = 0; i < friendData[k].scores.length; i++) {
        diffScore += Math.abs(parseInt(friendData[k].scores[i]) - parseInt(currentUser.scores[i]));
      };

      if (diffScore <= matchedNum) {
        matchedNum = diffScore;
        matchedFriend = friendData[k];
      };
    };

    // Returns the matched user
    res.json(matchedFriend);
  });
};
