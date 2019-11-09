// Require all models
const db = require("./../models");

module.exports = function (app) {

  // Route for getting all Articles from the db
  app.get("/articles", function (req, res) {
    // TODO: Finish the route so it grabs all of the articles
  });

  // Route for grabbing a specific Article by id, populate it with it's note
  app.get("/articles/:id", function (req, res) {

    db.Article.findById(req.params.id)
      // .populate(Note)
      .then(function (result) {
        let hbsObj = {
          title: result.title,
          articles: [result]
        }
        res.render("article", hbsObj)
      })
  });

  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function (req, res) {
    // TODO
    // ====
    // save the new note that gets posted to the Notes collection
    // then find an article from the req.params.id
    // and update it's "note" property with the _id of the new note
  });

}