'use strict';

/**
 * @ngdoc service
 * @name prelloApp.db
 * @description
 * # db
 * Service in the prelloApp.
 */
angular.module('hmmmApp')  
	.service('$db', function ($http) {

  	var self = this;

	  self.root = 'http://127.0.0.1:5984/_utils/';
  	self.logSuccess = true;
  	self.logError = true;

  	self.query = function(model, scope, query, parameter, variable_name, array) {
  		return $http.get(self.root + model + '/_design/' + model + '/_view/' + query + (parameter ? '?key="' + parameter + '"': "") )
  			.error(function(err) {
  				if (self.logError) console.log('Could not query ' + model + '.' + query + (parameter ? ' filtered by ' + parameter : "") );
  				if (self.logError) console.log(err);
  			})
  			.success(function(data){
  				if (self.logSuccess) console.log('Data loaded for ' + model + '.' + query + (parameter ? ' filtered by ' + parameter : "") );
  				if (self.logSuccess) console.log(data);
  				if (!parameter) scope[model + (query === "all" ? "" : '_' + query) ] = data.rows;
  				if (parameter) 
  					(data.rows.length > 1 || array) ? scope[variable_name] = data.rows : scope[variable_name] = data.rows[0]
  			})  		
  	}

  	self.all = function(model, scope) {
  		return self.query(model, scope, 'all')
  	}  	

  	self.add = function(model, obj, cb) {
  		return $http.post(self.root + model, obj)
  			.error(function(err) {
  				if (self.logError) console.log('Could not post data for ' + model + '; ' + err + '. Object not saved: ' + obj)
  			})
  			.success(function(data){
  				if (self.logSuccess) console.log('Posted @' + model + ':');
  				if (self.logSuccess) console.log(data);
  				if (cb) cb();
  				return data;
  			})
  	}

  	self.remove = function(model, obj, cb) {
  		return $http.delete(self.root + model + '/' + obj.id, {params:{rev: obj.value._rev}})
  			.error(function(err) {
  				if (self.logError) { 
  					console.log('Could not delete data for ' + model + '; ' + err)
  					console.log(obj)
  				}
  			})
  			.success(function(data){
  				if (self.logSuccess) {
  					console.log('Removed from' + model + ':');
  					console.log(data);
  				}  				
  				if (cb) cb();
  				return data;
  			})  			
  	}

  	self.update = function(model, obj, cb) {
  		return $http.put(self.root + model + '/' + obj.id, obj.value)
	      .error(function(err){
  				if (self.logError) console.log('Could not update data for ' + model + '; ' + err + '. Object not updated: ' + obj)
	      })
  			.success(function(data){
  				if (self.logSuccess) console.log('Updated @' + model + ':');
  				if (self.logSuccess) console.log(data);
  				if (cb) cb();
  				return data;
  			})	        		
  	}


  })



