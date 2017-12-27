
//SETUP EXPRESS AND MONGO
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongojs = require("mongojs");

//START DATABASE
var databaseUrl = "musicdb"; // "username:password@example.com/mydb"
var collections = ["songs"]
var db = require("mongojs").connect(databaseUrl, collections);

//START SERVER
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//DEFINE ROUTES

app.get('/favorites', function(req,res){
  res.send(songs)
})

app.use('/', express.static('public'));

//INTERACT WITH DEEZER

var songs;
db.songs.find( function(err, data) {
  if(err) {
      console.log("There was an error executing the database query.");
      response.end();
      return;
  } else {
    songs = data;
  }
})

  // post /favorites
  // send session id and song id
  // saves song to the favorites list

  // delete /favorites
  // send session id and song id
  // deletes song from the favorites list

  // get /favorites
  // send session id as a parameter
  // return list with all favorites

  // get /recommendations
  // get list of 10 random songs





































//index
// app.get('/api/logged_in', function(req,res){
//   console.log("loggin in" + user_logged_in.toString())
//   res.send({ logged_in: user_logged_in })
// })

// app.get('/api/survey-data', function(req,res){
//   res.send(all_surveys)
// })

// var user_logged_in = false

// app.post('/user/login', function (req, res) {
//   console.log(req)
//   var uEmail = req.body.email
//   var uPassword = req.body.password
//   db.surveyusers.find( {email: uEmail, password: uPassword}, function(err, records) {
//     if(err) { console.log("There was an error executing the database query."); }
//     else {
//       console.log(records)
//       if (records.length > 0) { console.log("here"); user_logged_in = true }
//     }
//   })
//   console.log("logged_in = " + user_logged_in.toString())
//   res.status(200).send('Got a POST request');
// })

// app.get('/user/logout', function (req,res) {
//   user_logged_in = false
//   res.status(200).send('logged out');
// })

// var users, answers;
// var i, survey;
// var all_surveys = []

// db.answers.find( function(err, records) {
//   if(err) {
//       console.log("There was an error executing the database query.");
//       response.end();
//       return;
//   } else {
//     answers = records
//   }
// })

// db.surveyusers.find( function(err, records) {
//   if(err) {
//       console.log("There was an error executing the database query.");
//       response.end();
//       return;
//   } else {
//     users = records
//     console.log(users)
//     for (i=0; i < users.length; i++) {
//       for (survey in users[i].surveys) {
//         all_surveys.push(users[i].surveys[survey])
//       }
//     }
//     console.log(all_surveys)
//   }
// })