(function(){

var express = require('express');
var app = module.exports = express();

var ExpenseModel = require('./expenseModel')
var Expense =  new ExpenseModel()

app.get('/api/expenses', function(req,res){
	Expense.all().then(function(data){
		res.status(200).send(data)
	})
})

app.post('/api/expenses', function(req, res){
	Expense.add(req.body)
	res.status(200).send('Expense has been added')
})

app.delete('/api/expenses', function(req, res){
	Expense.destroy(req.query)
	res.status(200).send('Expense has been destroyed')
})

app.put('/api/expenses', function(req, res){
	Expense.update(req.body)
	res.status(200).send('Expense has been updated')
})

}());