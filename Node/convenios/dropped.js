var options = {
	hostname:'http://api.convenios.gov.br/siconv/v1/consulta/',
	port: 80,
	path: '/pessoas_responsaveis',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
}
	console.log(responsaveis.length);
	// console.log(
	// 	groupBy(responsaveis, 'nome')
	// 		.filter(function(elem){ 
	// 			return elem[1] > 1;
	// 		})
	// );



	// var filteredData = responsaveis.filter(function(responsavel){
	// 	return responsavel.nome === "GLACELIA MARIA DECANDIO CORDEIRO";
	// });


// function groupBy(array, key) {
// 	return array
// 		.map(function(elem){
// 			var obj = {};			
// 			obj[elem[key]] = 1
// 			return obj
// 		})
// 		.reduce(function(total, elem, index, array){
// 			return total + elem[key]
// 		})
// }


//simpler version
function groupBy(array, key){
	var result={};
	array.forEach(function(elem){
		if (result[elem[key]]) result[elem[key]] += 1;
		else result[elem[key]] = 1;
	});
	var resultArr = [];
	for (obj  in result) resultArr.push([obj, result[obj]])
	return resultArr;
}


// function query(url){
// 	req = http.get(url, function(res){
// 		var data = "";
// 		res
// 		.on('readable', function(){
// 			while(chunk = res.read() !== null ) {
// 				data += chunk;
// 			}			
// 		})
// 		.on('end', function(){
// 			data = JSON.parse(data);
// 		})

// 	})

//}


var http = require('http');
var fs = require('fs');

function query(path, totalRegistros, first, dataset){
	if (first) {
		console.log('here')
		results = [];
		retrieved = {};
		written = false;
		dataset = dataset;
	}
	req = http.get(path, function(res){
		var data = "";
		res.on('readable', function(){
			while ((chunk=res.read()) !== null){
				data+=chunk;
			}
		});
		res.on('end', function(){
			retrieved[path] = true;
			console.log(path)
			data = JSON.parse(data);
			console.log('dataset is:' + dataset);
			console.log('s:' + written);
			results = results.concat(data[dataset]);
			if (first) {
				totalRegistros = 1000 //data.metadados.total_registros;
				numberOfBatches = (totalRegistros / 500);
				for (var i=1; i<= numberOfBatches; i++) {
					retrieved[path + '?offset=' + (500*i)] = false;
					query(path + '?offset=' + (500*i), totalRegistros);
				}
			}
			console.log('result is :' + results.length);
			if (results.length >= totalRegistros) {
				written = true;
				fs.writeFile((dataset + '.json'), JSON.stringify(results));
			}
		});
	})
	.on('error', function(e) {
		console.log('Shit happened');
		console.log(e);
		query(path,totalRegistros);
	})
	.setTimeout(5000, function(){
    this.socket.destroy();
  });
}

module.exports = query;

// var responsaveis_path = 'http://api.convenios.gov.br/siconv/v1/consulta/pessoas_responsaveis.json'
// query(responsaveis_path, 0, true);


//forget reddis... I will make my own file storage system for now, why not?

//gotta add the name of the dataset to the beggining of the list
results.unshift(dataset);
//now I push to redis array
client.rpush(results, function(err, reply){
	console.log(err);
	console.log(reply);
});

