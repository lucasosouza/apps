var fs = require('fs');
var http = require('http');

function getConvenioDetails() = {

	var detalhesConvenios = [];
	fs.readFile('convenios.json', function(err,data){
		var convenios = JSON.parse(data);
		convenios.forEach(function(convenio){
			queryFor(convenio["id"])
		});
	});	

	function queryFor(convenio) {
		query('http://api.convenios.gov.br/siconv/dados/convenio/' + convenio + '.json') 
	}

	function query(path){
		req = http.get(path, function(res){
			var data = "";
			res.on('readable', function(){
				while ((chunk=res.read()) !== null){
					data+=chunk;
				}
			});
			res.on('end', function(){
				detalhesConvenios.push(JSON.parse(data).convenios[0]);
				fs.writeFile('detalhesConvenios.json', JSON.stringify(detalhesConvenios));
			});
		})
		.on('error', function(e) {
			console.log('Shit happened');
			console.log(e);
			req.end();
		})
	}

}

module.exports = getConvenioDetails;