var http = require('http');
var fs = require('fs');


function query(path, totalRegistros, first, collection){
	if (first) {
		results = [];
		written = false;
		if (collection) dataset = collection;
	}
	req = http.get(path, function(res){
		var data = "";
		res.on('readable', function(){
			while ((chunk=res.read()) !== null){
				data+=chunk;
			}
		});
		res.on('end', function(){
			console.log(path)
			data = JSON.parse(data);
			results = results.concat(data[dataset]);
			if (first) {
				totalRegistros = 300//data.metadados.total_registros;
				numberOfBatches = (totalRegistros / 500);
				for (var i=1; i<= numberOfBatches; i++) {
					query(path + '?offset=' + (500*i), totalRegistros);
				}
			}
			console.log('result is :' + results.length);
			if (results.length >= totalRegistros) {
				written = true;
				//then I save it to the file, like nothing changed
				fs.writeFile((dataset + '.json'), JSON.stringify(results));
				//let's compare the results
			}
		});
	})
	.on('error', function(e) {
		console.log('Shit happened');
		console.log(e);
		query(path,totalRegistros);
		req.end();
	})
	.setTimeout(5000, function(){
    this.socket.destroy();
  });
}

module.exports = query;

// var responsaveis_path = 'http://api.convenios.gov.br/siconv/v1/consulta/pessoas_responsaveis.json'
// query(responsaveis_path, 0, true);



