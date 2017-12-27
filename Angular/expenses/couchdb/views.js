var ddoc = {
  _id: '_design/expenses', views: {}, lists: {}, shows: {}
};

// _design/expenses/_view/byName
ddoc.views.listAll = {
  map: function (doc) {
  	if (doc.name, doc.price) {
	    emit(doc.name, doc);
  	}
  }
};

module.exports = ddoc;



curl -X POST http://127.0.0.1:5984/invoices -H "Content-Type: application/json" -d '{"_id":"_design/invoices","views": {"byName": {"map": "function (doc) {emit(doc.name, doc.price);}"}}}'