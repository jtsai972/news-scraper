const db = require("./../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Article.find({})
      .then(function(article) {
        let hbsObj = {title: "Home", articles: article}
        res.render("index", hbsObj)
      })
  })
}