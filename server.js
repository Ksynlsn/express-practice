var express = require('express');
var app = express();

//If you visit http://localhost:8080/ in a web browser, you can observe the Index page:

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// Serve static files from the "public" directory
app.use(express.static("public"));

// index page
app.get('/', function(req, res) {
  var cats = [
    { name: 'Moose', coat: 'Black', age: 3},
    { name: 'Tux', coat: 'Grey Tuxedo', age: 6},
    { name: 'Ashes', coat: 'Grey', age: 12},
    { name: 'Tammy', coat: 'Bengal', age: 14}
  ];
  var tagline = "Meet The Kittens";

  res.render('pages/index', {
    cats: cats,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// team page
app.get('/team', function(req, res) {
  res.render('pages/team');
});

// contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on port 8080');