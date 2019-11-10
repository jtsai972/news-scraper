const db = require("./../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Article.find({}).then(function(result) {
      // console.log(result);
      let hbsObj = {
        title: "Home",
        articles: result
      };
      res.render("index", hbsObj);
    });
  });
};
