//testing functions in controller
angular.module('myMoneyMocks', [])
	.factory('expenses', function(Expense){
		return Expense.all()
	});

describe('Controller:FixedExpensesCtrl', function(){

	beforeEach(module('myMoney'));
	beforeEach(module('myMoneyMocks'));

	var ctrl, resolveExpenses;

	beforeEach(inject(function($controller, $httpBackend) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/api/expenses')
			.respond(200, [
			{ _id: '021930aksjda', value: 40 },
			{ _id: '021asd3q3wda', value: 50 },
			{ _id: '0219303asf34', value: 60 }
			]);
		ctrl = $controller('FixedExpensesCtrl');
	}));

	it('says hello', function(){
		expect(ctrl.sayHello()).toEqual("Hello there!");
	});

	it('is able to access expenses Service', function(){
		expect(ctrl.test()).toEqual("hello from service");
	});

	// it('loads expenses from server on resolve', function(){
	// 	expect(ctrl.expenses.length).toEqual(0);
	// 	mockBackend.flush();
	// 	expect(ctrl.expenses.length).toEqual(3);
	// })

	it('is able to load expense from server on controller', function(){
		console.log('controller', ctrl)
		expect(ctrl.exp).toBeDefined();
		mockBackend.flush();
		expect(ctrl.exp.length).toEqual(3);
		mockBackend.verifyNoOutstandingExpectation();
		mockBackend.verifyNoOutstandingRequest();
	})

});

// setting up mock for resolving expenses
// beforeEach(module(function($provide) {
// 	resolveExpenses = [];
// 	$provide.value('expenses', resolveExpenses)
// }));
