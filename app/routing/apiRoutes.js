// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    var newFriend = req.body;
    var currentMatch;
    var currentDiff;
    var bestDiff;

    for (var i = 0; i < friendsData.length; i++) {
      currentDiff = 0;
      for (var j = 0; j < 10; j++) {
        currentDiff = currentDiff + Math.abs((parseInt(newFriend.scores[j]) - friendsData[i].scores[j]));
      }
      if (i === 0) { //our first compare, noone to check against
        currentMatch = 0;
        bestDiff = currentDiff;
      } else {
        if (currentDiff < bestDiff) {
          currentMatch = i;
          bestDiff = currentDiff;
        }
      }
    }

    //display best match
    console.log("best match is: " + friendsData[currentMatch].name); 
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
};