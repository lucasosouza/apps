var fs = require('fs');
var http = require('http');
var query = require('./retrieve.js');

var todosConveniosUrl = 'http://api.convenios.gov.br/siconv/v1/consulta/convenios.json'
//procurando pelo id do convenio, e busca a url abaixo

var convenioUrl = 'http://api.convenios.gov.br/siconv/dados/convenio/2054589.html'

/* start modifications to the code

//concedente, pega direto a pessoa responsavel como concedente
pessoa_responsavel_como_concedente: {
	PessoaResponsavel: {
		href: "http://api.convenios.gov.br/siconv/id/pessoa_responsavel/778F199429E645012DEF6F88382A1CD7EE093F14",
		id: "778F199429E645012DEF6F88382A1CD7EE093F14"
	}
}
//salva id do convenente_pessoa_responsavel

//proponente, tem que trabalhar. abre proponente, pega o id
proponente: {
	Proponente: {
		href: "http://api.convenios.gov.br/siconv/id/proponente/23066632000153",
		id: 23066632000153
	}
}
//salva como id do proponente

//abre o link abaixo
var propostaUrl = 'http://api.convenios.gov.br/siconv/dados/proponente/23066632000153.json'

//e acha o id da pessoa responsavel pelo proponente
pessoa_responsavel: {
	PessoaResponsavel: {
	href: "http://api.convenios.gov.br/siconv/id/pessoa_responsavel/1B46C8A59DB50312FC04DFFAC52F1E4034E07657",
	id: "1B46C8A59DB50312FC04DFFAC52F1E4034E07657"
	}
},
//salva como id do proponente_pessoa_responsavel

//salva todos os ids de convenente_pessoa_responsavel
//salva todos os ids de proponente_pessoa_responsavel
//busca por coincidencias

//vou precisar de Redis, MongoDB, ou outra base, não rola de ficar salvando em arquivo, muito arcaico

end modifications to the code */

query(todosConveniosUrl, 0, true, 'convenios');

