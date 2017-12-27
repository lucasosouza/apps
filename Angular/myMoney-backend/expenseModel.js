(function(){

//Require dependencies and setup mongodb
var q = require('q');
var mongojs = require("mongojs");
var ObjectId = mongojs.ObjectId;
var databaseUrl = "mymoneydb";
var collections = ["expenses", "items", "incomes", "budgets", "mortgages"]
var db = mongojs.connect(databaseUrl, collections)

//models and mongodb interaction
module.exports = function Expense() {
	this.all = function(){
		var deferred = q.defer();
		db.expenses.find(function(err, data){
			deferred.resolve(data)
		})
		return deferred.promise 
	},
	this.add = function(obj){
		return db.expenses.insert(obj);
	},
	this.destroy = function(query) {
		if (query["_id"])
			query["_id"] = new ObjectId(query["_id"])
		return db.expenses.remove(query)
	},
	this.update = function(obj) {
		var id_to_update = { _id: new ObjectId(obj["_id"]) }
		delete obj["_id"] 
		return db.expenses.update(id_to_update, obj)
	},
	this.find = function(query) {
		return db.expenses.find(query);
	},
	this.destroy_all = function() {
		return db.expenses.drop();
	}			
}

}());

