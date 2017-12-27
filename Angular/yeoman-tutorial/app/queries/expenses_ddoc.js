var ddoc = {
	_id: '_design/expenses', 
	views:{}
	//lists: {}, - not used yet
	//shows: {} - not used yet
};

ddoc.views = {
	all: {
		map: function(doc) {
			emit(null,doc)
		}
	},
	byName: {
		map: function(doc) {
			emit(doc.name, doc)
		}
	},
	priceSum: {
		map: function(doc) {
			if (doc.price) emit(doc.id, Number(doc.price))
		},
		reduce: function(keys, values, rereduce) {
		  return sum(values) * 999;
		}
	}
}

module.exports = ddoc;