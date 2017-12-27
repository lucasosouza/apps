'use strict';

angular.module('expensesApp')
  .controller('RevenueCtrl', ['RevenueService', function(Revenue) {
  	console.log('loaded revenue ctrl')
    var self = this;    
    self.monthlySum = 0;
    self.update = function(){
    	Revenue.all().success(function(data){
    		self.incomes = data.rows;
		  	console.log('loaded incomes')
        self.monthlySum = self.incomes.reduce(function(prev, curr){
          if (isFinite(prev)) {
            return prev + curr.value.amount
          } else {
            return prev.value.amount + curr.value.amount            
          }
        }) //ugly error handling, needs improvement
  		})
  	}

    self.message = false

  	self.update();

    self.showDetails = true;

  	self.newIncome = {};
  	
  	self.add = function(){
      console.log('on add')
      if (self.onEdit) {
        console.log('income to be updated', self.newIncome)
        Revenue.update(self.newIncome._id, self.newIncome).success(function(){
          self.update();
          self.message = "Revenue modified";
        })
      } else {
        Revenue.add(self.newIncome).success(function(data){
        	console.log('added', data)
          self.update();
    		});
      }
  		self.newIncome = {};
      self.incomeForm.$setPristine();
  	}

    self.clearForm = function(){
      console.log('on clear')
      self.newIncome = {};
      self.onEdit = false;
      self.incomeForm.$setPristine();
    }

    self.remove = function(index) {
      var income = self.incomes[index].value
      console.log('this is the income to be removed', income)
      Revenue.remove(income._id, income._rev).success(function(data){
          self.update();
          self.message = "Revenue deleted";
      })
    }

    self.edit = function(index){
      var income = self.incomes[index].value
      this.newIncome = income;
      self.incomeForm.$setDirty();
      self.onEdit = true;
    }

    self.toggleShowDetails = function(){
      self.showDetails = !self.showDetails
      console.log('details', self.showDetails);
    }

  }]);
