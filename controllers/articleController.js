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
      .populate("notes")
      .then(function (result) {
        let hbsObj = {
          title: result.title,
          articles: [result],
          comments: result.notes
        }
        console.log(`Get Method: ${result}`);
        res.render("article", hbsObj)
      })
  });

  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function (req, res) {
    // console.log(req.body);
    var comment = {
      username: req.body.username,
      body: req.body.body
    };
    // let comments = [db.Article.note];
    // comments.push(comment);

    // console.log(comments);

    db.Note.create(comment)
    .then(function(dbNote) {
      return db.Article.findOneAndUpdate({ _id: req.body.article }, {$push: {notes: dbNote._id}}, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
      // res.render("article", {articles: dbArticle} );
      
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  });

}

/*
 // Create a new note and pass the req.body to the entry
  db.Note.create(req.body)
    .then(function(dbNote) {
      // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
*/