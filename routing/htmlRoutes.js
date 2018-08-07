var path = require("path");

module.exports = function(app) {
  
  // HTML GET Requests handles a users "visiting" a page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/home.html"));
  });
};