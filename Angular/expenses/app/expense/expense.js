'use strict';

angular.module('expensesApp')
  .controller('FixedCtrl', ['ExpenseService', function(Expense) {
  	console.log('loaded fixed ctrl')
    var self = this;    
    self.monthlySum = 0;
    self.update = function(){
    	Expense.all().success(function(data){
    		self.expenses = data.rows;
		  	console.log('loaded expenses')
        self.monthlySum = self.expenses.reduce(function(prev, curr){
          if (isFinite(prev)) {
            return prev + curr.value.price
          } else {
            return prev.value.price + curr.value.price            
          }
        }) //ugly error handling, needs improvement
  		})
  	}

    self.message = false

  	self.update();

    self.showDetails = true;

  	self.newExpense = {};
  	
  	self.add = function(){
      console.log('on add')
      if (self.onEdit) {
        console.log('expense to be updated', self.newExpense)
        Expense.update(self.newExpense._id, self.newExpense).success(function(){
          self.update();
          self.message = "Expense modified";
        })
      } else {
        Expense.add(self.newExpense).success(function(data){
          self.update();
    		});
      }
  		self.newExpense = {};
      self.expenseForm.$setPristine();
  	}

    self.clearForm = function(){
      console.log('on clear')
      self.newExpense = {};
      self.onEdit = false;
      self.expenseForm.$setPristine();
    }

    self.remove = function(index) {
      var expense = self.expenses[index].value
      console.log('this is the expense to be removed', expense)
      Expense.remove(expense._id, expense._rev).success(function(data){
          self.update();
          self.message = "Expense deleted";
      })
    }

    self.edit = function(index){
      var expense = self.expenses[index].value
      this.newExpense = expense;
      self.expenseForm.$setDirty();
      self.onEdit = true;
    }

    self.toggleShowDetails = function(){
      self.showDetails = !self.showDetails
      console.log('details', self.showDetails);
    }

  }]);
