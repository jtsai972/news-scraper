# news-scraper
A news scraper project to learn to use cheerio with mongodb


<!--
# news-scraper
A news scraper project to learn to use cheerio with mongodb
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">News Scraper</h3>

  <p align="center">
    scraping bits off the web
    <br />
    <a href="https://github.com/jtsai972/news-scraper"><strong>Explore the docs »</strong></a>
    ·
    <a href="https://mysterious-brook-64994.herokuapp.com/"><strong>Demo on Heroku »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jtsai972/news-scraper/issues">Report Bug</a>
    ·
    <a href="https://github.com/jtsai972/news-scraper/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  <!-- * [Screenshot Thumbnails](#screenshot-thumbnails) -->
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

Using a web scraper to do something, probably (just getting a readme up here honestly)

<!-- LIRI is a Node.js app that lacks a front-end currently. It's an experiment in pulling from APIs using Node.js and hiding keys as well as a way to dip my toes into Node.js

LIRI is like iPhone's SIRI. 

However, while SIRI is a _**Speech**_ Interpretation and Recognition Interface, LIRI is a _**Language**_ Interpretation and Recognition Interface. 

LIRI will be a command line Node.js app that takes in parameters and gives you back data. 

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. -->

### Built With
 * [Node.js](https://nodejs.org/en/)
 * [Node Framework - Express](http://expressjs.com/)
 * [Node Package - Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
 * [Node Package - Axios](https://www.npmjs.com/package/axios)
 * [Node Package - Cheerio](https://www.npmjs.com/package/cheerio)
 * [Node - Mongoose](https://mongoosejs.com/)
 <!-- * [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
 * [Node Package - Inquirer](https://www.npmjs.com/package/inquirer)
 * [Node Package - Moment](https://www.npmjs.com/package/moment)
 * [Node Package - API - Spotify API](https://www.npmjs.com/package/node-spotify-api)
 * [API - OMDB](http://www.omdbapi.com) 
 * [API - Bands In Town](http://www.artists.bandsintown.com/bandsintown-api) -->
 * [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)
 
 
 [Back to Table of Contents](#table-of-contents)
 

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to create your own `.env` file with your own API keys in order to test this project. I won't be retrieving keys from firebase this time.

### Installation
 
1. Clone the repo
```sh
git clone https:://github.com/jtsai972/news-scraper.git
```
2. Install NPM packages
```sh
npm install
```

[Back to Table of Contents](#table-of-contents)


<!-- USAGE EXAMPLES -->
## Usage

<!-- There are two ways to use it, in one way, you can type out the legacy commands to run different parts of the app, or you can simply run the file and answer prompts. The legacy command system and the updated inquirer system both do the same things, the only difference is in how it lets you input your commands.

Run this in the terminal using `node run.js` and LIRI will bring up an inquirer prompt.

If you want to use the legacy commands you can simply run `node run.js <legacy command> <search term>`

You can find some example images in the [images folder](https://github.com/jtsai972/news-scraper/tree/master/assets/images) `assets>images`

### Legacy Commands

App Command | Short Description
------------|-------------------
`concert-this`      | searches Bands in Town API for an artist's events
`spotify-this-song` | searches Spotify for info about a band or artist
`movie-this`        | Searches for info about the movie you entered
`do-what-it-says`   | runs the text in random.txt

[Back to Table of Contents](#table-of-contents)

#### concert-this

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")
  
#### spotify-this-song

This will show the following information about the song in your terminal/bash window

  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from
  
If no song is provided then your program will default to "The Sign" by Ace of Base.

#### movie-this

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
  
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

#### do-what-it-says

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
  * Edit the text in random.txt to test out the feature for movie-this and concert-this.

[Back to Table of Contents](#table-of-contents) -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

[Back to Table of Contents](#table-of-contents)

<!-- ### Screenshot Thumbnails

<div align="center">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-default-spotify-movie.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-default-what-it-says-concert.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-default-what-it-says-movie.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-default-what-it-says-spotify.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-concert-this.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-movie-this.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-spotify-this.PNG">
  <img width="25%" src="https://raw.githubusercontent.com/jtsai972/news-scraper/master/assets/images/LIRI-bot-log.PNG">

</div>

[Back to Table of Contents](#table-of-contents) -->

<!-- CONTACT -->
## Contact

### Jasmine 
[Github Portfolio](https://jtsai972.github.io/Github-Portfolio/) | [Website - Jtsai972.space](jtsai972.space) | [Email Me](jtsai972@gmail.com)

Project Link: [https://github.com/jtsai972/news-scraper](https://github.com/jtsai972/news-scraper)

[Back to Table of Contents](#table-of-contents)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Trilogy - Tech Bootcamp](https://www.trilogyed.com/)
* [SMU Tech Bootcamp](https://techbootcamps.smu.edu/)
* [Othneil Drew - ReadMe Template](https://github.com/othneildrew/)
* [Instructor - Dane Edwards](https://github.com/daneedw)
* [TA - Cody Clark](https://codyevanclark.com/)
* [TA - Daniel Reynolds](https://github.com/kirplink)
* [TA - Shawn Holcomb](https://github.com/shawnholcomb)

[Back to Table of Contents](#table-of-contents)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jtsai972/news-scraper.svg?style=flat-square
[contributors-url]: https://github.com/jtsai972/news-scraper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jtsai972/news-scraper.svg?style=flat-square
[forks-url]: https://github.com/jtsai972/news-scraper/network/members
[stars-shield]: https://img.shields.io/github/stars/jtsai972/news-scraper.svg?style=flat-square
[stars-url]: https://github.com/jtsai972/news-scraper/stargazers
[issues-shield]: https://img.shields.io/github/issues/jtsai972/news-scraper.svg?style=flat-square
[issues-url]: https://github.com/jtsai972/news-scraper/issues
