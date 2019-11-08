//Setting up express
const express = require("express");

//Scraper 
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

var router = express.Router();


// A GET route for scraping the echoJS website
router.get("/scrape", function(req, res) {
  let url = "https://www.usatoday.com";
  // First, we grab the body of the html with axios
  axios.get(url).then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    // Now, we grab every h2 within an article tag, and do the following:
    $(".gnt_m_tl_c").each(function(i, element) {
      // Add the text and href of every link, and save them as properties of the result object
      var result = {
        title: $(this).attr("aria-label"),
        link: url + $(this).parent().attr("href"),
        summary: $(this).attr("data-c-br")
      };

      console.log(result);

      // Create a new Article using the `result` object built from scraping
      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });
    });

    // Send a message to the client
    res.send("Scrape Complete");
  });
});

module.exports = router;