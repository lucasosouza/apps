'use strict';

/**
 * @ngdoc function
 * @name hmmmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hmmmApp
 */
angular.module('hmmmApp')
  .controller('MainCtrl', function ($db) {

  	var self = this;
  	var model = 'recipes';

  	function refresh(){
  		$db.all('recipes', self)
  	}; refresh();

  	self.newIngredient = "";
  	self.addIngredient = function() {
      console.log(self.newRecipe.ingredients)
      console.log(self.newRecipe.ingredients.includes(self.newIngredient))
  		if (!self.newRecipe.ingredients.includes(self.newIngredient)) {
        self.newRecipe.ingredients.push(self.newIngredient);
        self.newIngredient = "";
      } else if (self.newIngredient === "") {
        self.ingredientErrorMessage = "You can't add an empty ingredient"
      } else {
        self.ingredientErrorMessage = "You already have that ingredient"
      }
  	}

    self.resetIngErrorMessage = function(){
      self.ingredientErrorMessage = false;
    }


  	self.newStep = "";
  	self.addStep = function() {
  		self.newRecipe.steps.push(self.newStep);
  		self.newStep = "";
  		console.log(self.newRecipe)
  	}

  	self.newRecipe = { ingredients: [], steps: []};
  	self.add = function() {
  		$db.add(model, self.newRecipe, refresh)
  	}

  });
