var fs = require('fs');
var http = require('http');

function getConvenioStakeholders() {

	var responsaveisConvenios = {};
	fs.readFile('detalhesConvenios.json', function(err,data){
		var convenios = JSON.parse(data);
		convenios.forEach(function(convenio){
			responsaveisConvenios[convenio["id"]] = {
				id: convenio["id"],
				valorRepasse: convenio["valor_repasse"],
				concedente: convenio["pessoa_responsavel_como_concedente"]["PessoaResponsavel"]["id"]
			}
			queryFor(convenio["proponente"]["Proponente"]["id"], convenio["id"])
		});
	});	

	function queryFor(proponente, convenio) {
		query('http://api.convenios.gov.br/siconv/id/proponente/' + proponente + '.json', convenio) 
	}

	function query(path, convenio){
		req = http.get(path, function(res){
			console.log('calling query')
			var data = "";
			res.on('readable', function(){
				console.log('reading');
				while ((chunk=res.read()) !== null){
					data+=chunk;
					console.log('a chunk of data', chunk);
				}
			});
			res.on('end', function(){
				console.log(path);
				//console.log(responsaveisConvenios[convenio]);
				console.log('data:', JSON.parse(data));
//				responsaveisConvenios[convenio].proponente = JSON.parse(data)["proponentes"]["pessoa_responsavel"]["PessoaResponsavel"]["id"];
				//precisa eliminar a duplicidade na hora de escrever os arquivos
				fs.writeFile('responsaveisConvenios.json', JSON.stringify(responsaveisConvenios));
			});
			// res.on('error', function(e) {
			// 	console.log('Shit happened');
			// 	console.log(e);
			// 	req.end();
			// });
		})
	}

}

getConvenioStakeholders();

module.exports = getConvenioStakeholders;