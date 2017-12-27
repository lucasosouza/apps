app.factory('Expense', function($http){

	var expenses_api = '/api/expenses'

	return {
		all: function(){
			return $http.get(expenses_api)
		},
		add: function(obj){
			return $http.post(expenses_api, obj);
		},
		destroy: function(query) {
			console.log(query)
			return $http.delete(expenses_api, { params: query })
		},
		update: function(obj) {
			delete obj.$$hashKey
			console.log('in update', obj)
			return $http.put(expenses_api, obj)
		},
		test: function() {
			return "hello from service"
		}
	}


})