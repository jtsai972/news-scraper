const db = require("./../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Article.find({})
      .then(function(article) {
        let hbsObj = {articles: article}
        res.render("index", hbsObj)
      })
  })
}