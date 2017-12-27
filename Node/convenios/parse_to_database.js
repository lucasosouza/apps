var http = require('http');
var fs = require('fs');
var redis = require('redis');
var client = redis.createClient();
//By default, redis.createClient() will use 127.0.0.1 and 6379

client
.on('connect', function(){

	fs.readFile()



})



// fs.readFile('results.json', function(err,data){
// 	var responsaveis = JSON.parse(data);
// 	responsaveis.forEach(function(responsavel){
// 		for (trilha in trilhas) {
// 			retrieveData(responsavel, trilhas[trilha])
// 		};
// 	});
// });	




