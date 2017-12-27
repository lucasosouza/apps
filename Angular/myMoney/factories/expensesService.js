app.factory('Expense', function($http, $resource){
	return $resource('https://my-money.firebaseio.com/expenses/:id.json', null, { 'retrieve': {method:'GET' } } )
});