var http = require('http');
var fs = require('fs');


var trilhas = {
	// proponenteConvenios: "http://api.convenios.gov.br/siconv/v1/consulta/convenios?id_pessoa_responsavel_como_proponente=",
 //  concedenteConvenios: "http://api.convenios.gov.br/siconv/v1/consulta/convenios?id_pessoa_responsavel_pelo_concedente=",
  cadastramentoProposta: "http://api.convenios.gov.br/siconv/v1/consulta/propostas?id_pessoa_responsavel_pelo_cadastramento=",
  envioProposta: "http://api.convenios.gov.br/siconv/v1/consulta/propostas?id_pessoa_responsavel_pelo_envio=",
  concedenteProposta: "http://api.convenios.gov.br/siconv/v1/consulta/propostas?id_pessoa_responsavel_pelo_concedente="
}

fs.readFile('results.json', function(err,data){
	var responsaveis = JSON.parse(data);
	responsaveis.forEach(function(responsavel){
		for (trilha in trilhas) {
			retrieveData(responsavel, trilhas[trilha])
		};
	});
	//setTimeout(function(){ console.log(responsaveis.slice(1,50)) },10000)
});	


function retrieveData(responsavel, path, attr){
	req = http.get(path + responsavel.id	, function(res){
		var data = "";
		res.on('readable', function(){
			while ((chunk=res.read()) !== null){
				data+=chunk;
			}
		});
		res.on('end', function(){
			if (data) {
				console.log('Found something')
				console.log(data);
				//responsavel.propConvenios = JSON.parse(data);
			}
		})
	})
	.on('error', function(e){
		console.log(e);
	})
	.setTimeout(500,function(){
		this.socket.destroy();
	})
}


