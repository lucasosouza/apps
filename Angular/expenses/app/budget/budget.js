'use strict';

angular.module('expensesApp')
  .controller('BudgetCtrl', ['ExpenseService', 'RevenueService', 'InvoiceService', '$timeout', function(Expense, Revenue, Invoice, $timeout) {


  	
  	


  	console.log('loaded fixed ctrl')
    var self = this;

    console.log(Expense.total())    
    Expense.total().then(function(data){
    	self.fixedExpenses = data;
    })	
    Revenue.total().then(function(data){
    	self.totalIncome = data;
    })	
    Invoice.total().then(function(data){
    	self.variableExpenses = data;
    })	

    $timeout(function(){
    	self.remaining = self.totalIncome - self.fixedExpenses - self.variableExpenses
    },50)

  }]);
