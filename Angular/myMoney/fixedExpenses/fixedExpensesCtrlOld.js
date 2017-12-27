app.controller('FixedExpensesCtrl', function(Expense, $http){

	var self = this;
	self.newExpense = {}
	//changing as an attempt to pass the test
	self.expenses = [];

	// Expense.all().then(function(res){
	// 	self.exp = res.data;
	// 	console.log("here in the call", res)
	// })

	self.add = function(){
		Expense.add(self.newExpense);
		self.newExpense = {};
	}

	self.destroy = Expense.destroy
	self.update = Expense.update

	self.sayHello = function(){
		return "Hello there!";
	}

	self.test = Expense.test

	//console.log('in controller', this.expenses)

})
