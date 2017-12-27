var ddoc = {
	_id: '_design/recipes', 
	views:{}
	//lists: {}, - not used yet
	//shows: {} - not used yet
};

ddoc.views = {
	all: {
		map: function(doc) {
			emit(null,doc)
		}
	}
}

module.exports = ddoc;