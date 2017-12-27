app.controller('FixedExpensesCtrl', function(Expense){

	console.log('in controller');
	var self = this;
	self.newExpense = new Expense();	
	self.add = function(){
		console.log('calling add', self.newExpense)
		self.newExpense.$save
	}
	self.expenses = Expense.retrieve();

})
